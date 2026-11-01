
import { motion } from 'framer-motion'
import { Heart, Microscope, Activity } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'

const features = [
  {
    icon: Heart,
    title: 'Hormonal',
    description: 'Involves changes in endocrine function and androgen activity.',
    color: 'bg-blush text-plum',
  },
  {
    icon: Activity,
    title: 'Metabolic',
    description: 'Includes important considerations related to metabolic health.',
    color: 'bg-[#E6EEE8] text-[#52735D]',
  },
  {
    icon: Microscope,
    title: 'Ovarian',
    description: 'Can involve changes in ovulation and ovarian function.',
    color: 'bg-[#EAE6F2] text-[#685B83]',
  },
]

export default function Introduction() {
  return (
    <section id="understanding" className="section-padding bg-white">
      <div className="section-container">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <SectionHeading
              eyebrow="Getting to know PMOS"
              title="What is PMOS?"
              description="Polyendocrine Metabolic Ovarian Syndrome (PMOS), formerly known as Polycystic Ovary Syndrome (PCOS), is a complex condition involving interconnected hormonal, metabolic and ovarian features."
            />

            <p className="text-charcoal/65 leading-8 mb-6">
              The name PCOS often created the impression that the
              condition was simply about having cysts on the ovaries.
              However, its effects and underlying features extend
              beyond ovarian appearance.
            </p>

            <p className="text-charcoal/65 leading-8">
              The updated name PMOS better communicates the broader
              endocrine and metabolic aspects of the condition.
              PCOS remains widely used in older research publications
              and datasets.
            </p>

            <div className="mt-10 p-6 bg-blush/60 border-l-4 border-plum rounded-r-2xl">
              <p className="font-heading text-xl text-plum leading-8">
                "PMOS is a complex hormonal and metabolic condition.
                It is not defined by one symptom or one test."
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-ivory rounded-[40px] p-8 md:p-12">

              <div className="mb-10">
                <span className="text-xs font-bold tracking-widest text-plum uppercase">
                  Understanding the condition
                </span>

                <h3 className="font-heading text-3xl mt-3">
                  More than one system.
                </h3>
              </div>

              <div className="space-y-5">
                {features.map((feature, index) => {
                  const Icon = feature.icon

                  return (
                    <div
                      key={feature.title}
                      className="flex items-center gap-5 bg-white p-5 rounded-2xl soft-shadow"
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.color}`}>
                        <Icon size={25} />
                      </div>

                      <div>
                        <h4 className="font-bold text-charcoal">
                          {feature.title}
                        </h4>

                        <p className="text-sm text-charcoal/60 leading-6 mt-1">
                          {feature.description}
                        </p>
                      </div>

                      <span className="ml-auto text-xs text-plum/50">
                        0{index + 1}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="absolute -top-6 -right-4 w-20 h-20 bg-lavender/40 rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
