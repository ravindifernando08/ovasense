
import { ExternalLink, BookOpen, FileText, Globe } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'

const references = [
  {
    type: 'International Guideline',
    title: 'International Evidence-Based Guideline for PMOS Assessment and Management',
    description:
      'The international guideline, originally published in 2023 under the PCOS name and updated with PMOS terminology in May 2026.',
    organisation: 'Monash University',
    year: '2023 / 2026 update',
    url: 'https://www.monash.edu/medicine/mchri/pcos/guideline',
    icon: Globe,
  },
  {
    type: 'Scientific Publication',
    title: 'Polyendocrine metabolic ovarian syndrome: The new name for PCOS',
    description:
      'The international consensus process behind the updated PMOS terminology.',
    organisation: 'The Lancet',
    year: '2026',
    url: 'https://doi.org/10.1016/S0140-6736(26)00717-8',
    icon: BookOpen,
  },
  {
    type: 'Clinical Research',
    title: 'Recommendations From the 2023 International Evidence-Based Guideline',
    description:
      'A peer-reviewed summary of the international recommendations for assessment and management.',
    organisation: 'Journal of Clinical Endocrinology & Metabolism',
    year: '2023',
    url: 'https://doi.org/10.1210/clinem/dgad463',
    icon: FileText,
  },
  {
    type: 'Updated Guideline Document',
    title: '2026 PMOS Terminology Update',
    description:
      'An official guideline terminology update explaining the transition from PCOS to PMOS.',
    organisation: 'Monash University',
    year: '2026',
    url: 'https://www.monash.edu/__data/assets/pdf_file/0009/4360095/Updated-PMOS-Guideline-12-June26.pdf',
    icon: FileText,
  },
]

export default function Resources() {
  return (
    <section id="resources" className="section-padding bg-white">
      <div className="section-container">

        <SectionHeading
          eyebrow="Explore further"
          title="Knowledge Backed by Research."
          description="Explore scientific publications and international clinical resources to learn more about PMOS and its assessment."
        />

        <div className="grid md:grid-cols-2 gap-6">

          {references.map((reference, index) => {
            const Icon = reference.icon

            return (
              <article
                key={reference.title}
                className="p-7 md:p-8 rounded-[30px] bg-ivory border border-plum/5 hover:border-rose/50 transition"
              >

                <div className="flex justify-between items-center mb-7">
                  <div className="w-12 h-12 rounded-xl bg-blush flex items-center justify-center">
                    <Icon className="text-plum" size={23} />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-plum font-bold">
                    {reference.type}
                  </span>
                </div>

                <h3 className="font-heading text-2xl leading-snug mb-4">
                  {reference.title}
                </h3>

                <p className="text-sm text-charcoal/60 leading-7 mb-6">
                  {reference.description}
                </p>

                <div className="flex justify-between items-center gap-4 border-t border-plum/10 pt-5">
                  <div>
                    <p className="text-xs font-bold">
                      {reference.organisation}
                    </p>

                    <p className="text-xs text-charcoal/50 mt-1">
                      {reference.year}
                    </p>
                  </div>

                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${reference.title} from ${reference.organisation} (opens in a new tab)`}
                    className="flex items-center gap-2 text-plum text-xs font-bold hover:underline"
                  >
                    Read source <ExternalLink size={14} />
                  </a>
                </div>

              </article>
            )
          })}

        </div>

        <div className="mt-12 bg-blush/50 rounded-3xl p-7 md:p-9">
          <div className="flex items-start gap-4">
            <BookOpen className="text-plum shrink-0" size={25} />

            <div>
              <h3 className="font-bold mb-3">
                About our references
              </h3>

              <p className="text-sm text-charcoal/65 leading-7">
                Educational information on this website is
                based on the referenced scientific and clinical
                publications. Older publications may use the
                former PCOS terminology.
              </p>

              <p className="text-xs text-charcoal/55 mt-4 leading-6">
                Content reference check: 1 November 2026.
                Independent clinical review has not yet been
                established. This date does not represent
                clinical approval or medical endorsement.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
