import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Mathematics from '@/components/sections/Mathematics'
import Physics from '@/components/sections/Physics'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Mathematics />
        <Physics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
