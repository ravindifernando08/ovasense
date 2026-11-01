
import { ClipboardList, MessageCircle, HeartHandshake } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'

const topics = [
  'Changes in menstrual cycles',
  'Symptoms that concern you',
  'Questions about hormonal health',
  'Questions about the assessment process',
]

export default function ProfessionalAdvice() {
  return (
    <section
      id="professional-advice"
      className="section-padding bg-ivory"
    >
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <SectionHeading
            eyebrow="Your wellbeing matters"
            title="Your Concerns Deserve to Be Heard."
            description="If you notice changes in your menstrual cycles, experience hormonal symptoms or have questions about your health, consider discussing them with a qualified healthcare professional."
          />

          <div className="flex items-start gap-4 mt-8">
            <div className="w-12 h-12 rounded-xl bg-blush flex items-center justify-center shrink-0">
              <HeartHandshake className="text-plum" />
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Every concern is worth discussing.
              </h3>

              <p className="text-sm text-charcoal/60 leading-7">
                You do not need to have every answer before
                seeking advice. Sharing what you have noticed
                can help make a healthcare conversation more
                informative.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[35px] p-8 md:p-10 soft-shadow">

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#EAE6F2] flex items-center justify-center">
              <ClipboardList className="text-plum" size={26} />
            </div>

            <div>
              <h3 className="font-heading text-2xl">
                Preparing for a conversation
              </h3>

              <p className="text-xs text-charcoal/50 mt-1">
                Topics you may wish to discuss
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {topics.map((topic, index) => (
              <div key={topic} className="flex gap-4 items-center">
                <span className="w-8 h-8 rounded-full bg-blush text-plum flex items-center justify-center text-xs font-bold shrink-0">
                  {index + 1}
                </span>

                <p className="text-sm text-charcoal/75">
                  {topic}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 pt-7 border-t border-plum/10">
            <div className="flex gap-3 items-start">
              <MessageCircle className="text-plum shrink-0" size={20} />

              <p className="text-xs text-charcoal/55 leading-6">
                This list is intended to help prepare for
                conversations. It is not a medical assessment
                or a substitute for professional guidance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
