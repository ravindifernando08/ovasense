
import { CalendarDays, Dna, HeartPulse } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import { motion } from 'framer-motion'

const areas = [
  {
    icon: CalendarDays,
    number: '01',
    title: 'Menstrual & Ovulatory Health',
    description: 'PMOS can affect the normal process of ovulation and menstrual cycles.',
    points: [
      'Irregular menstrual cycles',
      'Ovulatory dysfunction',
      'Changes in reproductive health',
    ],
    bg: 'bg-blush',
  },
  {
    icon: Dna,
    number: '02',
    title: 'Hormonal Health',
    description: 'Hormonal changes can influence several aspects of physical health.',
    points: [
      'Clinical or biochemical hyperandrogenism',
      'Excess facial or body hair',
      'Changes in androgen levels',
    ],
    bg: 'bg-[#EAE6F2]',
  },
  {
    icon: HeartPulse,
    number: '03',
    title: 'Metabolic & Overall Wellbeing',
    description: 'The condition also has broader metabolic and psychological considerations.',
    points: [
      'Metabolic health considerations',
      'Emotional wellbeing',
      'Individual differences in experience',
    ],
    bg: 'bg-[#E6EEE8]',
  },
]

export default function BodyImpact() {
  return (
    <section className="section-padding bg-ivory">
      <div className="section-container">

        <SectionHeading
          eyebrow="Understanding the bigger picture"
          title="More Than Just One Symptom."
          description="PMOS can involve several interconnected areas of health. Understanding these areas helps explain why individual experiences can look very different."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {areas.map((area, index) => {
            const Icon = area.icon

            return (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-8 rounded-[30px] border border-plum/5 hover:-translate-y-2 transition duration-300 soft-shadow"
              >
                <div className={`${area.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                  <Icon size={29} className="text-plum" />
                </div>

                <span className="text-xs text-plum font-bold tracking-widest">
                  {area.number}
                </span>

                <h3 className="font-heading text-2xl mt-3 mb-4">
                  {area.title}
                </h3>

                <p className="text-sm text-charcoal/60 leading-7 mb-6">
                  {area.description}
                </p>

                <ul className="space-y-3">
                  {area.points.map(point => (
                    <li key={point} className="flex gap-3 text-sm text-charcoal/75">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-rose shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}

        </div>

        <p className="text-center text-sm text-charcoal/55 mt-10">
          Every person's experience is different. Not everyone experiences all these features.
        </p>

      </div>
    </section>
  )
}
