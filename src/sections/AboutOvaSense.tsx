
import {
  Database,
  BrainCircuit,
  ShieldCheck,
  ScanSearch,
  ArrowUpRight,
  GitBranch,
} from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import { motion } from 'framer-motion'

const researchAreas = [
  {
    number: '01',
    icon: Database,
    title: 'Data & Feature Auditing',
    description:
      'Investigating where model inputs originate, when they become available and whether any features may have contributed to creating the original diagnostic label.',
    tags: ['Data quality', 'Feature provenance', 'Target leakage'],
    color: 'bg-blush',
  },
  {
    number: '02',
    icon: BrainCircuit,
    title: 'Explainable Machine Learning',
    description:
      'Comparing Explainable Boosting Machine (EBM), Logistic Regression and XGBoost under a controlled evaluation process.',
    tags: ['EBM', 'Logistic Regression', 'XGBoost'],
    color: 'bg-[#EAE6F2]',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Guideline-Based Rule Engine',
    description:
      'Investigating how guideline-informed rules handle missing, contradictory, unclear and out-of-scope information, including situations where a score should be withheld.',
    tags: ['Clinical rules', 'Uncertainty', 'Safe refusal'],
    color: 'bg-[#E6EEE8]',
  },
  {
    number: '04',
    icon: ScanSearch,
    title: 'Separate Ultrasound Research',
    description:
      'Comparing YOLOv8 and RT-DETR for detecting and counting candidate follicles visible in individual ultrasound frames.',
    tags: ['YOLOv8', 'RT-DETR', 'Image analysis'],
    color: 'bg-[#F4EBE4]',
  },
]

export default function AboutOvaSense() {
  return (
    <section id="about" className="section-padding bg-[#302B35] text-white overflow-hidden relative">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-plum/30 blur-[120px]" />

      <div className="section-container relative z-10">

        <div className="max-w-3xl mb-16">
          <p className="text-[#D9A0AE] text-xs tracking-[0.25em] font-bold uppercase mb-5">
            Introducing the research
          </p>

          <h2 className="font-heading text-4xl md:text-6xl leading-tight">
            Making Screening Research More
            <span className="text-[#D9A0AE] italic"> Understandable,</span>
            <span className="text-[#D9A0AE] italic"> Transparent </span>
            and Reliable.
          </h2>

          <p className="text-white/65 leading-8 mt-7 text-base md:text-lg">
            OvaSense is a final-year research project exploring
            how machine learning, explainability and clinical
            guideline rules can be brought together to support
            more careful PMOS screening research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {researchAreas.map((area, index) => {
            const Icon = area.icon

            return (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.06] border border-white/10 rounded-[30px] p-8 hover:bg-white/[0.1] transition"
              >

                <div className="flex justify-between items-center mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${area.color} flex items-center justify-center`}>
                    <Icon className="text-plum" size={26} />
                  </div>

                  <span className="text-[#D9A0AE] text-sm font-bold">
                    {area.number}
                  </span>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl mb-4">
                  {area.title}
                </h3>

                <p className="text-white/60 text-sm leading-7 mb-7">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {area.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-2 rounded-full bg-white/10 text-white/70 text-[10px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </motion.article>
            )
          })}

        </div>

        {/* Separate research pathways */}
        <div className="mt-14 border border-white/10 rounded-[30px] p-8 md:p-10">

          <div className="flex items-center gap-3 mb-8">
            <GitBranch className="text-[#D9A0AE]" size={24} />

            <h3 className="font-heading text-2xl md:text-3xl">
              Two Separate Research Pathways
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-white/10 rounded-2xl p-7">
              <span className="text-[#D9A0AE] text-xs font-bold tracking-widest">
                STUDY A
              </span>

              <h4 className="font-bold text-xl mt-3 mb-3">
                Tabular Research
              </h4>

              <p className="text-sm text-white/60 leading-7">
                Feature auditing, machine learning comparison,
                guideline-based rules and model explainability.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-7">
              <span className="text-[#B9B0D2] text-xs font-bold tracking-widest">
                STUDY B
              </span>

              <h4 className="font-bold text-xl mt-3 mb-3">
                Ultrasound Research
              </h4>

              <p className="text-sm text-white/60 leading-7">
                A separate image-analysis experiment exploring
                candidate follicle detection using YOLOv8 and RT-DETR.
              </p>
            </div>

          </div>

          <p className="text-xs text-white/50 mt-6 leading-6">
            These studies are evaluated separately. Ultrasound
            detections are not combined with tabular model outputs
            to generate a unified diagnostic score.
          </p>

        </div>

        {/* Research importance */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="font-heading text-3xl md:text-4xl mb-6">
              Why Does This Research Matter?
            </h3>

            <p className="text-white/60 leading-8 text-sm">
              Machine learning in healthcare requires more
              than a predictive output. It also requires
              transparency, careful evaluation and an
              understanding of its limitations.
            </p>
          </div>

          <div className="space-y-4">
            {[
              'Checking data quality and identifying potential target leakage.',
              'Evaluating models using fair and controlled comparisons.',
              'Making model explanations easier to understand.',
              'Recognising uncertainty and knowing when a result should be withheld.',
            ].map(item => (
              <div key={item} className="flex gap-3 items-start">
                <ShieldCheck className="text-[#D9A0AE] shrink-0" size={19} />
                <p className="text-sm text-white/70 leading-6">{item}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-16 bg-[#75536B]/30 border border-[#D9A0AE]/30 rounded-2xl p-7">
          <div className="flex gap-4 items-start">
            <ShieldCheck className="text-[#D9A0AE] shrink-0" size={24} />

            <div>
              <h4 className="font-bold mb-2">
                Research limitation
              </h4>

              <p className="text-sm text-white/65 leading-7">
                OvaSense is a research prototype. It is not a
                clinically validated diagnostic tool and does
                not provide diagnosis or treatment advice.
                No validated screening performance is currently
                being claimed.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
