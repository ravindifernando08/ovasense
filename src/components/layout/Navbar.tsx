
import { useEffect, useState } from 'react'
import { Menu, X, Flower2, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Understanding PMOS', href: '#understanding' },
  { name: 'Symptoms', href: '#symptoms' },
  { name: 'Diagnosis', href: '#diagnosis' },
  { name: 'Myths & Facts', href: '#myths' },
  { name: 'About OvaSense', href: '#about' },
  { name: 'Resources', href: '#resources' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = navLinks
        .map(link => document.querySelector(link.href))
        .filter(Boolean)

      let current = '#home'

      sections.forEach(section => {
        if (
          section &&
          section.getBoundingClientRect().top <= 150
        ) {
          current = `#${section.id}`
        }
      })

      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-xl shadow-sm border-b border-plum/10'
          : 'bg-ivory/70 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-[1500px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        <a href="#home" onClick={closeMenu} className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center">
            <Flower2 size={23} className="text-plum" />
          </div>

          <span className="font-heading text-2xl text-plum">
            OvaSense
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              aria-current={active === link.href ? 'location' : undefined}
              className={`text-[11px] font-bold transition-colors ${
                active === link.href
                  ? 'text-plum'
                  : 'text-charcoal/65 hover:text-plum'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden xl:block">
          <a
            href="#understanding"
            className="bg-plum text-white rounded-full px-5 py-3 text-xs font-bold flex items-center gap-2 hover:bg-[#604257] transition"
          >
            Explore PMOS
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-plum p-2 rounded-lg focus-visible:outline-2 focus-visible:outline-plum"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="xl:hidden bg-ivory border-t border-plum/10 shadow-lg px-6 py-6"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href)
                  closeMenu()
                }}
                className="text-sm font-semibold text-charcoal hover:text-plum"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#understanding"
              onClick={closeMenu}
              className="bg-plum text-white text-center rounded-full py-3 font-bold text-sm"
            >
              Explore PMOS
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
