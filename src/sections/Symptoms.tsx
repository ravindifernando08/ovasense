
import {
  CalendarDays,
  Activity,
  HeartPulse,
  CircleHelp,
  Sparkles,
  Info,
} from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'

const symptoms = [
  {
    icon: CalendarDays,
    title: 'Irregular Periods',
    description: 'Menstrual cycles may be irregular or less frequent.',
  },
  {
    icon: Sparkles,
    title: 'Excess Hair Growth',
    description: 'Increased facial or body hair may be associated with elevated androgen activity.',
  },
  {
    icon: Activity,
    title: 'Elevated Androgens',
    description: 'Higher androgen levels may be identified through clinical or biochemical assessment.',
  },
  {
    icon: HeartPulse,
    title: 'Ovulatory Difficulties',
    description: 'Ovulation may occur irregularly or not occur in some cycles.',
  },
  {
    icon: CircleHelp,
    title: 'Metabolic Concerns',
    description: 'Some individuals experience associated metabolic health considerations.',
  },
  {
    icon: Sparkles,
    title: 'Skin Changes',
    description: 'Acne and other skin changes may be associated with the condition.',
  },
]

export default function Symptoms() {
  return (
    <section id="symptoms" className="section-padding bg-white">
      <div className="section-container">

        <SectionHeading
          eyebrow="Awareness starts here"
          title="Recognising the Signs."
          description="PMOS can present in different ways. Learning about its common features can help people understand when they may want to discuss their concerns with a healthcare professional."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {symptoms.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-ivory border border-plum/5 hover:border-rose/50 transition duration-300"
              >
                <div className="flex justify-between items-center mb-7">
                  <div className="w-12 h-12 bg-blush rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-plum" />
                  </div>

                  <span className="text-xs font-bold text-plum/50">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading text-2xl mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-charcoal/60">
                  {item.description}
                </p>
              </div>
            )
          })}

        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-5 bg-[#F3E4E8]/60 p-7 md:p-9 rounded-3xl">
          <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center">
            <Info size={23} className="text-plum" />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              An important reminder
            </h3>

            <p className="text-sm text-charcoal/70 leading-7">
              Experiencing one or more of these signs does not
              automatically mean you have PMOS. Acne and weight
              changes can be associated with the condition but
              are not independent diagnostic criteria. A proper
              medical assessment is important.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
