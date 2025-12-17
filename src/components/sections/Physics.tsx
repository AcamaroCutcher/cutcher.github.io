'use client'

import { useState, useEffect, useRef } from 'react'
import { Zap, Atom, Waves, Magnet, Play, Pause, RotateCcw, BookOpen, Lightbulb } from 'lucide-react'

export default function Physics() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeSimulation, setActiveSimulation] = useState('pendulum')
  const [pendulumAngle, setPendulumAngle] = useState(45)
  const [waveAmplitude, setWaveAmplitude] = useState(50)
  const [waveFrequency, setWaveFrequency] = useState(2)
  const [particleVelocity, setParticleVelocity] = useState(5)
  const animationRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)

  const physicsTopics = [
    {
      title: 'Classical Mechanics',
      icon: <Atom className="h-6 w-6" />,
      description: 'Motion, forces, and energy',
      equations: [
        String.raw`$F = ma$`,
        String.raw`$E_k = \frac{1}{2}mv^2$`,
        String.raw`$p = mv$`
      ],
      color: 'blue'
    },
    {
      title: 'Electromagnetism',
      icon: <Zap className="h-6 w-6" />,
      description: 'Electric and magnetic fields',
      equations: [
        String.raw`$\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$`,
        String.raw`$\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})$`,
        String.raw`$V = IR$`
      ],
      color: 'yellow'
    },
    {
      title: 'Wave Mechanics',
      icon: <Waves className="h-6 w-6" />,
      description: 'Oscillations and wave phenomena',
      equations: [
        String.raw`$v = f\lambda$`,
        String.raw`$y(x,t) = A\sin(kx - \omega t)$`,
        String.raw`$E = hf$`
      ],
      color: 'green'
    },
    {
      title: 'Quantum Physics',
      icon: <Magnet className="h-6 w-6" />,
      description: 'Quantum mechanics and modern physics',
      equations: [
        String.raw`$\hat{H}\psi = i\hbar\frac{\partial\psi}{\partial t}$`,
        String.raw`$\Delta x \Delta p \geq \frac{\hbar}{2}$`,
        String.raw`$E = mc^2$`
      ],
      color: 'purple'
    }
  ]

  // Pendulum Simulation
  const PendulumSimulation = () => {
    const [angle, setAngle] = useState(pendulumAngle)
    const length = 150
    const gravity = 9.81

    useEffect(() => {
      if (isPlaying) {
        const animate = () => {
          timeRef.current += 0.05
          const newAngle = pendulumAngle * Math.cos(Math.sqrt(gravity / length) * timeRef.current)
          setAngle(newAngle)
          animationRef.current = requestAnimationFrame(animate)
        }
        animationRef.current = requestAnimationFrame(animate)
      } else {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }, [isPlaying, pendulumAngle, length, gravity])

    const reset = () => {
      timeRef.current = 0
      setAngle(pendulumAngle)
      setIsPlaying(false)
    }

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Simple Pendulum Simulation
        </h3>
        <div className="relative h-64 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
          <svg className="w-full h-full">
            {/* Pendulum support */}
            <line x1="50%" y1="20" x2="50%" y2="20" stroke="#374151" strokeWidth="4" />
            {/* Pendulum string */}
            <line
              x1="50%"
              y1="20"
              x2={`${50 + length * Math.sin((angle * Math.PI) / 180)}%`}
              y2={`${20 + length * Math.cos((angle * Math.PI) / 180)}%`}
              stroke="#6B7280"
              strokeWidth="2"
            />
            {/* Pendulum bob */}
            <circle
              cx={`${50 + length * Math.sin((angle * Math.PI) / 180)}%`}
              cy={`${20 + length * Math.cos((angle * Math.PI) / 180)}%`}
              r="12"
              fill="#3B82F6"
            />
          </svg>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Angle: {pendulumAngle}°
            </label>
            <input
              type="range"
              min="5"
              max="90"
              value={pendulumAngle}
              onChange={(e) => {
                setPendulumAngle(Number(e.target.value))
                reset()
              }}
              className="w-full"
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button
              onClick={reset}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Wave Simulation
  const WaveSimulation = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
      if (isPlaying) {
        const interval = setInterval(() => {
          setTime(t => t + 0.1)
        }, 50)
        return () => clearInterval(interval)
      }
    }, [isPlaying])

    const reset = () => {
      setTime(0)
      setIsPlaying(false)
    }

    const generateWavePoints = () => {
      const points = []
      for (let x = 0; x <= 100; x += 2) {
        const y = 50 + waveAmplitude * Math.sin((x / 10) * waveFrequency - time)
        points.push(`${x},${y}`)
      }
      return points.join(' ')
    }

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Wave Propagation Simulation
        </h3>
        <div className="relative h-64 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
          <svg className="w-full h-full">
            {/* Grid lines */}
            {[25, 50, 75].map(y => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#E5E7EB" strokeWidth="1" />
            ))}
            {/* Wave */}
            <polyline
              points={generateWavePoints()}
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amplitude: {waveAmplitude}
            </label>
            <input
              type="range"
              min="10"
              max="40"
              value={waveAmplitude}
              onChange={(e) => setWaveAmplitude(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Frequency: {waveFrequency}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={waveFrequency}
              onChange={(e) => setWaveFrequency(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button
              onClick={reset}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Particle Motion Simulation
  const ParticleSimulation = () => {
    const [particles, setParticles] = useState([
      { x: 10, y: 50, vx: particleVelocity, vy: 0 },
      { x: 20, y: 50, vx: particleVelocity * 0.8, vy: 2 },
      { x: 30, y: 50, vx: particleVelocity * 1.2, vy: -1 }
    ])

    useEffect(() => {
      if (isPlaying) {
        const interval = setInterval(() => {
          setParticles(prevParticles => 
            prevParticles.map(particle => ({
              ...particle,
              x: particle.x + particle.vx,
              y: particle.y + particle.vy,
              vy: particle.vy + 0.5 // gravity
            })).map(particle => ({
              ...particle,
              x: particle.x > 100 ? 0 : particle.x,
              y: particle.y > 90 ? 50 : particle.y < 10 ? 50 : particle.y,
              vy: particle.y >= 90 ? -Math.abs(particle.vy) * 0.8 : particle.vy
            }))
          )
        }, 50)
        return () => clearInterval(interval)
      }
    }, [isPlaying, particleVelocity])

    const reset = () => {
      setParticles([
        { x: 10, y: 50, vx: particleVelocity, vy: 0 },
        { x: 20, y: 50, vx: particleVelocity * 0.8, vy: 2 },
        { x: 30, y: 50, vx: particleVelocity * 1.2, vy: -1 }
      ])
      setIsPlaying(false)
    }

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Projectile Motion Simulation
        </h3>
        <div className="relative h-64 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
          <svg className="w-full h-full">
            {/* Ground */}
            <line x1="0" y1="90%" x2="100%" y2="90%" stroke="#6B7280" strokeWidth="2" />
            {/* Particles */}
            {particles.map((particle, index) => (
              <circle
                key={index}
                cx={`${particle.x}%`}
                cy={`${particle.y}%`}
                r="4"
                fill="#EF4444"
              />
            ))}
          </svg>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Velocity: {particleVelocity}
            </label>
            <input
              type="range"
              min="2"
              max="10"
              value={particleVelocity}
              onChange={(e) => {
                setParticleVelocity(Number(e.target.value))
                reset()
              }}
              className="w-full"
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button
              onClick={reset}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  const simulations = {
    pendulum: <PendulumSimulation />,
    wave: <WaveSimulation />,
    particle: <ParticleSimulation />
  }

  return (
    <section id="physics" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Physics & <span className="text-blue-600 dark:text-blue-400">Simulations</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interactive physics simulations and fundamental equations that govern our universe
          </p>
        </div>

        {/* Physics Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {physicsTopics.map((topic, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 bg-${topic.color}-100 dark:bg-${topic.color}-900 rounded-lg text-${topic.color}-600 dark:text-${topic.color}-400`}>
                  {topic.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {topic.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {topic.description}
              </p>
              <div className="space-y-1">
                {topic.equations.map((eq, eqIndex) => (
                  <div key={eqIndex} className="text-xs text-center p-2 bg-white dark:bg-gray-700 rounded">
                    {eq}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Simulations */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            <Lightbulb className="h-6 w-6 inline mr-2 text-yellow-500" />
            Interactive Physics Simulations
          </h3>
          
          {/* Simulation Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              {Object.keys(simulations).map((sim) => (
                <button
                  key={sim}
                  onClick={() => {
                    setActiveSimulation(sim)
                    setIsPlaying(false)
                  }}
                  className={`px-6 py-2 rounded-md font-medium capitalize transition-colors ${
                    activeSimulation === sim
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {sim === 'pendulum' ? 'Pendulum' : sim === 'wave' ? 'Wave' : 'Projectile'}
                </button>
              ))}
            </div>
          </div>

          {/* Active Simulation */}
          <div className="max-w-2xl mx-auto">
            {simulations[activeSimulation as keyof typeof simulations]}
          </div>
        </div>

        {/* Fundamental Physics Equations */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <BookOpen className="h-6 w-6 inline mr-2 text-blue-600 dark:text-blue-400" />
            Fundamental Physics Equations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Newton's Second Law</h4>
              <div className="text-lg mb-2">{String.raw`$$F = ma$$`}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Force equals mass times acceleration
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Einstein's Mass-Energy</h4>
              <div className="text-lg mb-2">{String.raw`$$E = mc^2$$`}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Energy and mass are equivalent
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Maxwell's Equations</h4>
              <div className="text-lg mb-2">{String.raw`$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$`}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Electromagnetic field relationships
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Schrödinger Equation</h4>
              <div className="text-lg mb-2">{String.raw`$$i\hbar\frac{\partial\psi}{\partial t} = \hat{H}\psi$$`}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Quantum mechanical wave function
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Ideal Gas Law</h4>
              <div className="text-lg mb-2">{String.raw`$$PV = nRT$$`}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Relationship between pressure, volume, and temperature
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Planck's Equation</h4>
              <div className="text-lg mb-2">{String.raw`$$E = hf$$`}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Energy of a photon is proportional to frequency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
