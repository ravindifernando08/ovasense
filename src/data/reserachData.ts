
export interface ResearchMilestone {
  number: string
  title: string
  description: string
  status: string
}

export const researchMilestones: ResearchMilestone[] = [
  {
    number: '01',
    title: 'Literature & Evidence Review',
    description: 'Reviewing scientific literature and relevant clinical guidelines.',
    status: 'Research foundation',
  },
  {
    number: '02',
    title: 'Clinical Dataset Investigation',
    description: 'Investigating available datasets, their limitations and suitability.',
    status: 'Under investigation',
  },
  {
    number: '03',
    title: 'Feature & Label Auditing',
    description: 'Examining feature provenance, label construction and potential leakage.',
    status: 'Research activity',
  },
  {
    number: '04',
    title: 'Guideline Rule Design',
    description: 'Designing a guideline-informed approach to handling clinical information.',
    status: 'Research activity',
  },
  {
    number: '05',
    title: 'Model Development & Comparison',
    description: 'Evaluating EBM, Logistic Regression and XGBoost.',
    status: 'Planned evaluation',
  },
  {
    number: '06',
    title: 'Explanation Evaluation',
    description: 'Exploring model interpretability and explanation reliability.',
    status: 'Planned evaluation',
  },
  {
    number: '07',
    title: 'Separate Ultrasound Experiment',
    description: 'Investigating YOLOv8 and RT-DETR for candidate follicle detection.',
    status: 'Separate study',
  },
  {
    number: '08',
    title: 'System Evaluation',
    description: 'Assessing the research prototype, limitations and overall behaviour.',
    status: 'Planned evaluation',
  },
]
