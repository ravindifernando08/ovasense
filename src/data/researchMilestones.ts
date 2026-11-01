
export interface ResearchMilestone {
  number: string
  title: string
  description: string
  status: string
}

export const researchMilestones: ResearchMilestone[] = [
  {
    number: '01',
    title: 'Literature and Evidence Review',
    description:
      'Reviewing existing scientific literature, international clinical guidelines and research related to PMOS.',
    status: 'Under review',
  },
  {
    number: '02',
    title: 'Clinical Dataset Investigation',
    description:
      'Investigating candidate datasets, their suitability, feature availability and limitations.',
    status: 'In progress',
  },
  {
    number: '03',
    title: 'Feature and Label Auditing',
    description:
      'Examining feature provenance, label generation and potential sources of target leakage.',
    status: 'Planned',
  },
  {
    number: '04',
    title: 'Guideline Rule Design',
    description:
      'Designing an exclusion-first, guideline-informed rule engine with appropriate handling of uncertainty.',
    status: 'Planned',
  },
  {
    number: '05',
    title: 'Model Development and Comparison',
    description:
      'Preparing controlled experiments comparing EBM, Logistic Regression and XGBoost.',
    status: 'Planned',
  },
  {
    number: '06',
    title: 'Explanation and Uncertainty Evaluation',
    description:
      'Investigating model explanations, calibration, uncertainty and conditions where a result should be withheld.',
    status: 'Planned',
  },
  {
    number: '07',
    title: 'Separate Ultrasound Experiment',
    description:
      'Exploring YOLOv8 and RT-DETR for candidate follicle detection in individual ultrasound frames.',
    status: 'Planned',
  },
  {
    number: '08',
    title: 'System Evaluation',
    description:
      'Evaluating the research prototype, documenting limitations and assessing the overall research objectives.',
    status: 'Planned',
  },
]
