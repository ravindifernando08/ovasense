
import { ArrowRight, CheckCircle2, Stethoscope, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'

const criteria = [
  {
    number: '01',
    title: 'Ovulatory Dysfunction',
    description: 'Irregular menstrual cycles or evidence of irregular or absent ovulation.',
  },
  {
    number: '02',
    title: 'Hyperandrogenism',
    description: 'Clinical signs or biochemical evidence of elevated androgen activity.',
  },
  {
    number: '03',
    title: 'Polycystic Ovarian Morphology',
    description: 'PCOM identified through appropriate assessment in eligible adults.',
  },
]

export default function Diagnosis() {
  return (
    <section id="diagnosis" className="section-padding bg-ivory">
      <div className="section-container">

        <SectionHeading
          eyebrow="Understanding clinical assessment"
          title="Why Diagnosis Is Not Always Simple."
          description="Understanding PMOS diagnosis requires more than looking at one symptom or one test. Clinical assessment considers different features and other possible explanations."
        />

        <div className="bg-white rounded-[35px] p-7 md:p-12 soft-shadow">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-12">
            <div>
              <span className="text-xs text-plum font-bold tracking-widest uppercase">
                Adult diagnostic framework
              </span>

              <h3 className="font-heading text-3xl mt-3">
                Three key diagnostic features
              </h3>
            </div>

            <div className="bg-blush px-5 py-3 rounded-full text-plum text-xs font-bold">
              2023 International Guideline
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {criteria.map((item, index) => (
              <div key={item.number} className="relative bg-ivory rounded-3xl p-7">
                <span className="text-4xl font-heading text-rose">
                  {item.number}
                </span>

                <h4 className="font-bold text-lg mt-6 mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-charcoal/65 leading-7">
                  {item.description}
                </p>

                {index < 2 && (
                  <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full items-center justify-center shadow">
                    <ArrowRight size={17} className="text-plum" />
                  </div>
                )}
              </div>
            ))}

          </div>

          <div className="mt-10 bg-[#EAE6F2]/60 p-7 rounded-3xl">
            <h4 className="font-heading text-2xl text-plum mb-4">
              Understanding the 2-of-3 approach
            </h4>

            <p className="text-sm text-charcoal/70 leading-7">
              For adults, diagnosis generally requires two of these
              three features after other possible causes have been
              excluded. This is a clinical framework, not a checklist
              for visitors to use to diagnose themselves.
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-7 mt-10">

          <div className="bg-white rounded-3xl p-8">
            <div className="w-12 h-12 rounded-xl bg-blush flex items-center justify-center mb-5">
              <Stethoscope className="text-plum" />
            </div>

            <h3 className="font-heading text-2xl mb-4">
              Is ultrasound always necessary?
            </h3>

            <p className="text-sm text-charcoal/65 leading-7">
              No. In adults who already have irregular cycles
              and hyperandrogenism, ultrasound is not required
              to establish the diagnosis. AMH may be used as
              an alternative to assess PCOM in suitable adults,
              following the guideline.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <div className="w-12 h-12 rounded-xl bg-[#E6EEE8] flex items-center justify-center mb-5">
              <ShieldCheck className="text-[#52735D]" />
            </div>

            <h3 className="font-heading text-2xl mb-4">
              What about adolescents?
            </h3>

            <p className="text-sm text-charcoal/65 leading-7">
              Adolescent recommendations differ. Both
              ovulatory dysfunction and hyperandrogenism
              are required for diagnosis. Ultrasound and
              AMH are not recommended for diagnosing
              adolescents because of limited specificity.
            </p>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-charcoal/60 mb-5">
            Personal health concerns deserve professional attention.
          </p>

          <a
            href="#professional-advice"
            className="inline-flex items-center gap-2 bg-plum text-white px-7 py-4 rounded-full text-sm font-bold hover:bg-[#604257] transition"
          >
            Discuss Your Concerns With a Healthcare Professional
            <ArrowRight size={17} />
          </a>
        </div>

      </div>
    </section>
  )
}
