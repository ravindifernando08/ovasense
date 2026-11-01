
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import Button from '../common/Button'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[850px] pt-32 pb-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Decorative backgrounds */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-lavender/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blush px-4 py-2 rounded-full mb-8">
            <Sparkles size={14} className="text-plum" />

            <span className="text-[10px] tracking-[0.2em] font-extrabold text-plum">
              WOMEN'S HEALTH · AWARENESS · RESEARCH
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-[76px] leading-[1.12] text-charcoal">
            Understanding
            <br />
            Your Body Starts
            <br />
            With <span className="gradient-text italic">Awareness.</span>
          </h1>

          <p className="mt-8 max-w-xl text-charcoal/65 text-base md:text-lg leading-8">
            PMOS is more than a condition associated with ovarian
            health. Discover the science, understand the signs and
            explore information that helps you make informed
            conversations about your health.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Button href="#understanding">
              Understand PMOS <ArrowRight size={17} />
            </Button>

            <Button href="#about" variant="secondary">
              Explore OvaSense
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-rose/60 border-2 border-ivory" />
              <div className="w-10 h-10 rounded-full bg-lavender border-2 border-ivory" />
              <div className="w-10 h-10 rounded-full bg-sage/70 border-2 border-ivory" />
            </div>

            <p className="text-xs text-charcoal/60 leading-5">
              Awareness begins with understanding.
              <br />
              Knowledge creates meaningful conversations.
            </p>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-[550px] mx-auto w-full"
        >
          <div className="absolute inset-0 bg-blush rounded-[48%_48%_20%_20%] rotate-6 scale-95" />

          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=85"
            alt="Portrait of a woman representing confidence and women's wellbeing"
            className="relative z-10 w-full h-[560px] object-cover object-center rounded-[48%_48%_20%_20%] shadow-2xl"
          />

          <div className="absolute -left-8 top-24 z-20 bg-white rounded-2xl p-5 shadow-xl max-w-[170px]">
            <p className="font-heading text-3xl text-plum">01</p>
            <p className="text-xs text-charcoal/60 mt-2 leading-5">
              Understand the condition beyond its name.
            </p>
          </div>

          <div className="absolute -right-5 bottom-20 z-20 bg-white rounded-2xl p-5 shadow-xl max-w-[175px]">
            <Sparkles className="text-plum mb-2" size={20} />

            <p className="text-sm font-bold text-charcoal">
              Knowledge is empowering.
            </p>
          </div>
        </motion.div>

      </div>

      <a
        href="#understanding"
        aria-label="Scroll to understanding PMOS"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-plum/60 hover:text-plum"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-bold">
          Discover more
        </span>
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
