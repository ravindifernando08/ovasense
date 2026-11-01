
import { useState } from 'react'
import { ChevronDown, XCircle, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'

const myths = [
  {
    myth: 'PMOS simply means having ovarian cysts.',
    fact: 'PMOS involves broader endocrine, metabolic and ovarian features. The updated name better represents the complexity of the condition.',
  },
  {
    myth: 'Every woman with PMOS experiences the same symptoms.',
    fact: 'Individual experiences can vary. Some people experience certain features while others may experience different combinations.',
  },
  {
    myth: 'One symptom is enough to confirm PMOS.',
    fact: 'Diagnosis requires an appropriate clinical assessment, consideration of diagnostic criteria and exclusion of other possible causes.',
  },
  {
    myth: 'An ultrasound is always required.',
    fact: 'Ultrasound is not always necessary for adults. In certain circumstances, AMH may be used as an alternative way to assess PCOM.',
  },
  {
    myth: 'A questionnaire or AI prediction can confirm PMOS.',
    fact: 'Questionnaires and machine learning tools may support research or screening workflows, but they cannot independently establish a clinical diagnosis.',
  },
]

export default function MythsFacts() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="myths" className="section-padding bg-white">
      <div className="section-container">

        <SectionHeading
          eyebrow="Let's talk about the facts"
          title="Let's Clear Up Some Misconceptions."
          description="There is a lot of information about PMOS online. Let's separate common misconceptions from evidence-based explanations."
          centered
        />

        <div className="max-w-4xl mx-auto space-y-4">

          {myths.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.myth}
                className={`border rounded-3xl overflow-hidden transition-all ${
                  isOpen
                    ? 'border-plum/30 bg-ivory shadow-lg'
                    : 'border-plum/10 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-5 text-left p-6 md:p-8 focus-visible:outline-2 focus-visible:outline-plum"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-plum shrink-0">
                      <XCircle size={19} />
                    </span>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-plum font-bold">
                        Myth {index + 1}
                      </span>

                      <h3 className="font-bold text-base md:text-lg mt-1">
                        {item.myth}
                      </h3>
                    </div>
                  </div>

                  <ChevronDown
                    size={21}
                    className={`text-plum shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-8">
                    <div className="border-t border-plum/10 pt-6 flex gap-4">
                      <span className="w-10 h-10 rounded-full bg-[#E6EEE8] flex items-center justify-center text-[#52735D] shrink-0">
                        <CheckCircle2 size={20} />
                      </span>

                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#52735D] font-bold">
                          The fact
                        </span>

                        <p className="text-sm leading-7 text-charcoal/70 mt-2">
                          {item.fact}
                        </p>
                      </div>
                    </div>
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
