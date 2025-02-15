import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProfileSection from '../components/ProfileSection'
import SkillSection from '../components/SkillSection'
import BackgroundSection from '../components/BackgroundSection'
import ProjectsSection from '../components/ProjectsSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProfileSection />
      <SkillSection />
      <ProjectsSection />
      <BlogSection />
      <BackgroundSection />
      {/* <ContactSection /> */}
      <Footer />
    </main>
  )
}

