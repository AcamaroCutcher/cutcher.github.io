import { Github, Download, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-lg">
            <img
              src="/profile.jpg"
              alt="Acamaro Cutcher"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Acamaro Cutcher</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Computer Science Student & Full-Stack Developer
        </p>
        
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Passionate about building innovative web applications and exploring cutting-edge technologies. 
          Specializing in React, Next.js, TypeScript, and modern web development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <Github className="h-5 w-5 mr-2" />
            View My Projects
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </a>
        </div>
        
        <div className="animate-bounce">
          <a
            href="#projects"
            className="inline-flex items-center justify-center p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
