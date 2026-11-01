
import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import { faqData } from '../data/faqData'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-ivory">
      <div className="section-container">

        <SectionHeading
          eyebrow="Questions & answers"
          title="A Little More Clarity."
          description="Have questions about PMOS or the OvaSense research project? Here are some helpful answers."
          centered
        />

        <div className="max-w-4xl mx-auto">

          {faqData.map((item, index) => {
            const isOpen = activeIndex === index

            return (
              <div
                key={item.question}
                className="border-b border-plum/15"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full py-7 flex justify-between items-center gap-6 text-left focus-visible:outline-2 focus-visible:outline-plum"
                >
                  <span className="flex gap-4 items-center">
                    <HelpCircle size={19} className="text-plum shrink-0" />

                    <span className="font-bold text-sm md:text-base">
                      {item.question}
                    </span>
                  </span>

                  <span className="w-8 h-8 rounded-full bg-blush flex items-center justify-center text-plum shrink-0">
                    {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="pb-7 pl-9 pr-12"
                  >
                    <p className="text-sm text-charcoal/65 leading-8">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
