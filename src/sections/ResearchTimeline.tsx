
import { FlaskConical, CircleDot } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import { researchMilestones } from '../data/researchMilestones'

export default function ResearchTimeline() {
  return (
    <section id="research" className="section-padding bg-white">
      <div className="section-container">

        <SectionHeading
          eyebrow="Behind the research"
          title="The OvaSense Research Journey."
          description="A structured overview of the research activities and planned evaluation stages."
        />

        <div className="grid lg:grid-cols-2 gap-16">

          <div className="bg-ivory rounded-[35px] p-8 md:p-10">
            <div className="w-14 h-14 bg-blush rounded-2xl flex items-center justify-center mb-7">
              <FlaskConical className="text-plum" size={26} />
            </div>

            <h3 className="font-heading text-3xl mb-5">
              Research built on careful evaluation.
            </h3>

            <p className="text-sm text-charcoal/60 leading-8">
              OvaSense follows a research-oriented process
              that prioritises data understanding, controlled
              experimentation, explainability and transparent
              reporting of limitations.
            </p>

            <div className="mt-9 p-5 bg-white rounded-2xl">
              <p className="text-xs text-plum font-bold uppercase tracking-widest mb-2">
                Current research note
              </p>

              <p className="text-sm text-charcoal/65 leading-7">
                The clinical dataset remains under investigation.
                No validated screening performance or clinical
                validation is being claimed.
              </p>
            </div>
          </div>

          <div className="relative pl-5">
            <div className="absolute left-[31px] top-4 bottom-4 w-px bg-plum/20" />

            <div className="space-y-8">
              {researchMilestones.map(item => (
                <div key={item.number} className="relative flex gap-6">

                  <div className="relative z-10 w-6 h-6 rounded-full bg-white border-2 border-plum flex items-center justify-center shrink-0 mt-1">
                    <CircleDot size={11} className="text-plum" />
                  </div>

                  <div className="pb-2">
                    <span className="text-[10px] text-plum font-bold tracking-widest">
                      STAGE {item.number}
                    </span>

                    <h4 className="font-bold mt-2">
                      {item.title}
                    </h4>

                    <p className="text-sm text-charcoal/60 leading-6 mt-2">
                      {item.description}
                    </p>

                    <span className="inline-block mt-3 bg-blush text-plum rounded-full px-3 py-1 text-[10px] font-bold">
                      {item.status}
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
