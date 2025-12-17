import { GraduationCap, Code, Briefcase, Award, MapPin, Mail } from 'lucide-react'

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
    'HTML/CSS', 'TailwindCSS', 'Git', 'REST APIs', 'GraphQL', 'SQL',
    'Calculus', 'Linear Algebra', 'Differential Equations', 'Quantum Mechanics',
    'Statistical Physics', 'Computational Physics', 'MATLAB', 'Mathematica'
  ]

  const experiences = [
    {
      title: 'Triple Major Student',
      organization: 'University Name',
      period: '2022 - Present',
      description: 'Pursuing Bachelor\'s degrees in Computer Science, Mathematics, and Physics with focus on computational science and interdisciplinary research.'
    },
    {
      title: 'Research Assistant - Computational Physics',
      organization: 'Physics Department',
      period: '2023 - Present',
      description: 'Developing numerical simulations and mathematical models for complex physical systems using Python and advanced computational methods.'
    },
    {
      title: 'Full-Stack Developer Intern',
      organization: 'Tech Company',
      period: 'Summer 2024',
      description: 'Developed and maintained web applications using React, Node.js, and modern cloud technologies.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, skills, and experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Info */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Personal Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Education</p>
                    <p className="text-gray-900 dark:text-white">B.S. Computer Science, Mathematics, & Physics</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white">City, State</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white">contact@example.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Bio
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate computer science student with a strong foundation in full-stack web development. 
                  I love building innovative solutions and exploring new technologies. When I'm not coding, 
                  you can find me contributing to open-source projects, learning about emerging tech trends, 
                  or working on personal projects that challenge my skills.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-600 dark:border-blue-400 pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Achievements & Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Academic Excellence
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Dean's List multiple semesters, GPA 3.8+
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Open Source
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Active contributor to various GitHub projects
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Internships
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Software development experience at tech companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
