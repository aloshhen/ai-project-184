import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ArrowUp } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Scroll animation hook
  const useScrollAnimation = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    return { ref, isInView }
  }

  const hero = useScrollAnimation()
  const about = useScrollAnimation()
  const portfolio = useScrollAnimation()
  const contact = useScrollAnimation()

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-[10px] border-b border-black/5' : 'bg-white/95 backdrop-blur-[10px] border-b border-black/5'
      }`}>
        <nav className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="w-[200px] h-[60px] flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-black tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer">
              BALANCE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#work" className="relative text-base font-medium text-black py-2 group">
              Work
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative text-base font-medium text-black py-2 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-base font-medium text-black py-2 group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex flex-col gap-3 items-end">
            <div>
              <div className="text-sm italic text-[#666666] mb-1">(Inquiries)</div>
              <a href="mailto:john@jt-studio.com" className="text-[15px] text-black hover:text-[#666666] transition-colors duration-300">
                john@jt-studio.com
              </a>
            </div>
            <div>
              <div className="text-sm italic text-[#666666] mb-1">(Phone)</div>
              <a href="tel:+491234567890" className="text-[15px] text-black underline decoration-transparent hover:decoration-black transition-all duration-300">
                +491234 56789
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-8 h-6 flex flex-col justify-between z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-full h-[2px] bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
            <span className={`w-full h-[2px] bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-[2px] bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-white/98 backdrop-blur-[20px] z-[999] flex flex-col items-center justify-center gap-8"
          >
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-black hover:text-[#666666] transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-black hover:text-[#666666] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-black hover:text-[#666666] transition-colors"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section ref={hero.ref} className="pt-40 md:pt-[160px] pb-16 md:pb-24 px-5 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center min-h-[calc(100vh-80px)]">
            {/* Text Block */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hero.isInView ? 1 : 0, y: hero.isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0 }}
                className="text-xl font-medium text-[#666666] tracking-wider uppercase mb-4"
              >
                John Taylor
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: hero.isInView ? 1 : 0, y: hero.isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl xl:text-[96px] font-bold leading-[1.05] tracking-tightest text-black"
              >
                Digital Designer
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hero.isInView ? 1 : 0, y: hero.isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-[540px] mt-6"
              >
                I help designers and agencies elevate their branding with creative development support. From concept to execution, I bring ideas to life with precision and passion.
              </motion.p>
            </div>

            {/* Image Block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: hero.isInView ? 1 : 0, x: hero.isInView ? 0 : 40 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full aspect-[3/4] md:aspect-[3/4] overflow-hidden rounded-lg group"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="John Taylor"
                className="w-full h-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" ref={about.ref} className="py-20 md:py-32 px-5 md:px-12 bg-[#F9F9F9]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
            {/* Image - 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: about.isInView ? 1 : 0, x: about.isInView ? 0 : -40 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="md:col-span-5 w-full aspect-[3/4] overflow-hidden rounded-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80"
                alt="Flowers"
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </motion.div>

            {/* Text - 7 columns */}
            <div className="md:col-span-7 flex flex-col gap-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: about.isInView ? 1 : 0, y: about.isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="text-xl md:text-2xl text-black leading-relaxed"
              >
                I help brands craft meaningful stories through thoughtful design and strategic thinking. With over a decade of experience, I transform visions into visual excellence.
              </motion.p>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: about.isInView ? 1 : 0, y: about.isInView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-black mb-3">From A to Z</h3>
                  <p className="text-base text-[#333333] leading-relaxed">
                    I handle every aspect of the design process, from initial concepts and wireframes to final delivery and implementation. Your project is in expert hands from start to finish.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: about.isInView ? 1 : 0, y: about.isInView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <h3 className="text-xl font-semibold text-black mb-3">Solo or Team</h3>
                  <p className="text-base text-[#333333] leading-relaxed">
                    Whether working independently or collaborating with your team, I adapt seamlessly to your workflow. Flexible, reliable, and always focused on delivering exceptional results.
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: about.isInView ? 1 : 0, y: about.isInView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-base font-medium rounded overflow-hidden mt-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                >
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-white/10 transition-all duration-300 group-hover:left-[100%]"></span>
                  More about me
                  <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="work" ref={portfolio.ref} className="py-20 md:py-32 px-5 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#666666] uppercase tracking-widest">SELECTED WORK</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: portfolio.isInView ? 1 : 0, y: portfolio.isInView ? 0 : 40 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="group cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Apex Architects"
                  className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 bg-white">
                <h2 className="relative text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-black">
                  <span className="relative z-[2]">Apex Architects</span>
                  <span className="absolute left-0 top-0 z-[1] opacity-5 translate-x-0.5 translate-y-0.5">Apex Architects</span>
                </h2>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: portfolio.isInView ? 1 : 0, y: portfolio.isInView ? 0 : 40 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="group cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
                  alt="Dionysos Resorts"
                  className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 bg-white">
                <h2 className="relative text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-black">
                  <span className="relative z-[2]">Dionysos Resorts</span>
                  <span className="absolute left-0 top-0 z-[1] opacity-5 translate-x-0.5 translate-y-0.5">Dionysos Resorts</span>
                </h2>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: portfolio.isInView ? 1 : 0, y: portfolio.isInView ? 0 : 40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
                <img
                  src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80"
                  alt="Argus Eyewear"
                  className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 bg-white">
                <h2 className="relative text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-black">
                  <span className="relative z-[2]">Argus Eyewear</span>
                  <span className="absolute left-0 top-0 z-[1] opacity-5 translate-x-0.5 translate-y-0.5">Argus Eyewear</span>
                </h2>
              </div>
            </motion.div>
          </div>

          {/* All Work Link */}
          <div className="text-center mt-16">
            <a href="#work" className="group relative inline-flex items-center gap-3 text-lg font-medium text-black py-3">
              All work <span className="text-[#666666] font-normal">(6)</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-black transition-all duration-400 group-hover:w-[calc(100%-32px)]"></span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section id="contact" ref={contact.ref} className="py-16 md:py-24 px-5 md:px-12 bg-[#F9F9F9]">
        <div className="max-w-[1440px] mx-auto min-h-[500px] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 w-full">
            {/* Text - 7 columns */}
            <div className="md:col-span-7 flex flex-col gap-8 relative z-[2]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: contact.isInView ? 1 : 0, y: contact.isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="text-sm italic text-[#666666] mb-4"
              >
                (Contact)
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: contact.isInView ? 1 : 0, y: contact.isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-black max-w-[700px]"
              >
                Global presence, global recognition &mdash; Contact me to take your next step.
              </motion.h2>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: contact.isInView ? 1 : 0, y: contact.isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative inline-flex items-center gap-3 px-9 py-[18px] bg-black text-white text-lg font-medium rounded overflow-hidden mt-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-fit"
              >
                <span className="absolute top-0 left-[-100%] w-full h-full bg-white/10 transition-all duration-300 group-hover:left-[100%]"></span>
                Contact me
                <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

            {/* Image - 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: contact.isInView ? 1 : 0, x: contact.isInView ? 0 : 40, scale: contact.isInView ? 1 : 0.95 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="md:col-span-5 w-full aspect-[3/4] overflow-hidden rounded-lg relative z-[1]"
            >
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&q=80"
                alt="Contact"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 md:py-16 px-5 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="text-sm italic text-[#999999] mb-2">(Inquiries)</div>
                <a href="mailto:john@jt-studio.com" className="text-base text-white hover:text-[#CCCCCC] transition-colors duration-300">
                  john@jt-studio.com
                </a>
              </div>
              <div>
                <div className="text-sm italic text-[#999999] mb-2">(Phone)</div>
                <a href="tel:+491234567890" className="text-base text-white underline decoration-white/30 hover:decoration-white transition-all duration-300">
                  +491234 56789
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-4">
              <a href="#work" className="text-base text-white hover:text-[#CCCCCC] hover:translate-x-1 transition-all duration-300">
                Work
              </a>
              <a href="#about" className="text-base text-white hover:text-[#CCCCCC] hover:translate-x-1 transition-all duration-300">
                About
              </a>
              <a href="#contact" className="text-base text-white hover:text-[#CCCCCC] hover:translate-x-1 transition-all duration-300">
                Contact
              </a>
            </div>

            {/* Empty column for spacing */}
            <div></div>

            {/* Legal */}
            <div className="flex flex-col gap-4 lg:items-end">
              <a href="#imprint" className="text-base text-white hover:text-[#CCCCCC] transition-colors duration-300">
                Imprint
              </a>
              <a href="#privacy" className="text-base text-white hover:text-[#CCCCCC] transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-[#999999] hover:text-white transition-colors duration-300"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
              Back to top
            </button>
            <a href="#" className="text-sm text-[#666666] underline decoration-transparent hover:text-[#999999] hover:decoration-[#999999] transition-all duration-300">
              You can buy this website
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App