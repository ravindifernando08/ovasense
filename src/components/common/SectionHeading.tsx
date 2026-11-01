
interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl mb-14 ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="text-plum text-xs font-extrabold tracking-[0.25em] uppercase mb-4">
        {eyebrow}
      </p>

      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-charcoal">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-charcoal/65 text-base md:text-lg leading-8">
          {description}
        </p>
      )}
    </div>
  )
}
