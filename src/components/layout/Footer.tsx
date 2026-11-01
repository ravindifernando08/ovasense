
import { Flower2, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#302B35] text-white pt-20 pb-8 px-6 md:px-12">

      <div className="max-w-[1400px] mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <Flower2 size={25} className="text-[#D9A0AE]" />
              </div>

              <span className="font-heading text-3xl">
                OvaSense
              </span>
            </div>

            <p className="text-white/60 leading-8 max-w-md text-sm">
              An educational platform dedicated to improving
              awareness of Polyendocrine Metabolic Ovarian
              Syndrome and exploring responsible screening research.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-[#D9A0AE]">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/65">
              <a href="#understanding" className="hover:text-white">Understanding PMOS</a>
              <a href="#symptoms" className="hover:text-white">Signs & Symptoms</a>
              <a href="#diagnosis" className="hover:text-white">Diagnosis</a>
              <a href="#myths" className="hover:text-white">Myths & Facts</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-[#D9A0AE]">
              Discover
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/65">
              <a href="#about" className="hover:text-white">About OvaSense</a>
              <a href="#research" className="hover:text-white">Research Journey</a>
              <a href="#resources" className="hover:text-white">References</a>
              <a href="#faq" className="hover:text-white">FAQs</a>
            </div>
          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
          <p className="text-sm text-white/80 leading-7">
            <strong className="text-white">Medical disclaimer:</strong>{' '}
            This website is intended for educational and awareness
            purposes only. It does not replace professional medical
            advice, diagnosis or treatment. Always consult a qualified
            healthcare professional regarding personal health concerns.
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-5 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} OvaSense. PMOS Awareness & Research.
          </p>

          <a href="#home" className="flex items-center gap-2 hover:text-white">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </footer>
  )
}
