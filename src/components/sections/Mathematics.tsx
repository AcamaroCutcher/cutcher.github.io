'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Calculator, Braces, Sigma, Pi, Upload, BookOpen, Lightbulb, Download } from 'lucide-react'
import 'katex/dist/katex.min.css'

export default function Mathematics() {
  const [markdownContent, setMarkdownContent] = useState(String.raw`# Mathematics Portfolio

## Calculus
The fundamental theorem of calculus states:

$$\int_a^b f'(x)\,dx = f(b) - f(a)$$

### Example: Derivative of $e^x$
$$\frac{d}{dx}e^x = e^x$$

## Linear Algebra
The determinant of a 2x2 matrix:
$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

## Differential Equations
The solution to $y'' + y = 0$ is:
$$y(x) = C_1\cos(x) + C_2\sin(x)$$

## Complex Analysis
Euler's formula:
$$e^{i\theta} = \cos(\theta) + i\sin(\theta)$$

This connects the five fundamental constants: $0, 1, \pi, e, i$`)

  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('portfolio')

  const mathTopics = [
    {
      title: 'Calculus',
      icon: <Braces className="h-6 w-6" />,
      description: 'Derivatives, integrals, and limits',
      equations: [
        String.raw`$\frac{d}{dx}\sin(x) = \cos(x)$`,
        String.raw`$\int x^n dx = \frac{x^{n+1}}{n+1} + C$`,
        String.raw`$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$`
      ]
    },
    {
      title: 'Linear Algebra',
      icon: <Sigma className="h-6 w-6" />,
      description: 'Matrices, vectors, and transformations',
      equations: [
        String.raw`$A\vec{x} = \lambda\vec{x}$`,
        String.raw`$\text{tr}(A) = \sum_{i=1}^n a_{ii}$`,
        String.raw`$\|\vec{v}\| = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2}$`
      ]
    },
    {
      title: 'Probability & Statistics',
      icon: <Pi className="h-6 w-6" />,
      description: 'Probability distributions and statistical analysis',
      equations: [
        String.raw`$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$`,
        String.raw`$\mu = \frac{1}{n}\sum_{i=1}^n x_i$`,
        String.raw`$\sigma^2 = \frac{1}{n}\sum_{i=1}^n (x_i - \mu)^2$`
      ]
    }
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setMarkdownContent(content)
        setIsEditing(true)
      }
      reader.readAsText(file)
    }
  }

  const downloadMarkdown = () => {
    const blob = new Blob([markdownContent], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'math-portfolio.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="mathematics" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mathematics & <span className="text-blue-600 dark:text-blue-400">LaTeX</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring mathematical concepts through elegant equations and interactive visualizations
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'portfolio'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="h-4 w-4 inline mr-2" />
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'editor'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Calculator className="h-4 w-4 inline mr-2" />
              LaTeX Editor
            </button>
          </div>
        </div>

        {activeTab === 'portfolio' ? (
          <div className="space-y-8">
            {/* Math Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mathTopics.map((topic, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                      {topic.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {topic.description}
                  </p>
                  <div className="space-y-2">
                    {topic.equations.map((eq, eqIndex) => (
                      <div key={eqIndex} className="p-2 bg-gray-50 dark:bg-gray-700 rounded text-center">
                        <span className="text-sm">{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Equations */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                <Lightbulb className="h-6 w-6 inline mr-2 text-yellow-500" />
                Featured Mathematical Concepts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Euler's Identity
                  </h4>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center mb-3">
                    <span className="text-xl">{String.raw`$$e^{i\pi} + 1 = 0$$`}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Often called the most beautiful equation in mathematics, connecting five fundamental constants.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Gaussian Integral
                  </h4>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center mb-3">
                    <span className="text-xl">{String.raw`$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$`}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Fundamental in probability theory and statistics, forming the basis of the normal distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Editor Controls */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
                    <Upload className="h-4 w-4" />
                    <span>Upload .md</span>
                    <input
                      type="file"
                      accept=".md,.txt"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  <button
                    onClick={downloadMarkdown}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isEditing
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  {isEditing ? 'Preview Mode' : 'Edit Mode'}
                </button>
              </div>
            </div>

            {/* Editor and Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Markdown Editor */}
              {isEditing && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      LaTeX Markdown Editor
                    </h3>
                  </div>
                  <div className="p-6">
                    <textarea
                      value={markdownContent}
                      onChange={(e) => setMarkdownContent(e.target.value)}
                      className="w-full h-96 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Write your LaTeX equations here..."
                    />
                  </div>
                </div>
              )}

              {/* Preview */}
              <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg ${!isEditing ? 'lg:col-span-2' : ''}`}>
                <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Preview
                  </h3>
                </div>
                <div className="p-6 prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      code({ node, className, children, ...props }: any) {
                        const match = /language-(\\w+)/.exec(className || '')
                        return match ? (
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {String(children).replace(/\\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        )
                      }
                    }}
                  >
                    {markdownContent}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
