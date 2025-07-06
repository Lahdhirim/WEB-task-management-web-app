export const DUMMY_TASKS = [
  // Product Owner - u1
  {
    id: 't1',
    userId: 'u1',
    title: 'Define AI use case and goals',
    summary: 'Specify what the model should do and expected business value.',
    dueDate: new Date('2025-07-03')
  },
  {
    id: 't2',
    userId: 'u1',
    title: 'Write user stories for AI features',
    summary: 'Break down product requirements into Agile user stories.',
    dueDate: new Date('2025-07-04')
  },

  // Project Manager / Scrum Master - u2
  {
    id: 't3',
    userId: 'u2',
    title: 'Plan project timeline',
    summary: 'Organize sprints and delivery milestones for each phase.',
    dueDate: new Date('2025-07-03')
  },
  {
    id: 't4',
    userId: 'u2',
    title: 'Conduct sprint planning & retrospectives',
    summary: 'Facilitate team meetings and coordinate progress tracking.',
    dueDate: new Date('2025-07-05')
  },

  // Data Scientist - u3
  {
    id: 't5',
    userId: 'u3',
    title: 'Explore & preprocess dataset',
    summary: 'Clean data, handle missing values, perform EDA and visualization.',
    dueDate: new Date('2025-07-06')
  },
  {
    id: 't6',
    userId: 'u3',
    title: 'Train baseline ML model',
    summary: 'Test different models (Random Forest, XGBoost) for initial metrics.',
    dueDate: new Date('2025-07-08')
  },
  {
    id: 't7',
    userId: 'u3',
    title: 'Tune hyperparameters',
    summary: 'Use GridSearchCV or Optuna to find best parameters.',
    dueDate: new Date('2025-07-10')
  },

  // MLOps / ML Engineer - u4
  {
    id: 't8',
    userId: 'u4',
    title: 'Deploy model with FastAPI',
    summary: 'Wrap model into REST API with testable endpoints.',
    dueDate: new Date('2025-07-11')
  },
  {
    id: 't9',
    userId: 'u4',
    title: 'Set up model CI/CD pipeline',
    summary: 'Automate deployment with GitHub Actions and Docker.',
    dueDate: new Date('2025-07-12')
  },
  {
    id: 't10',
    userId: 'u4',
    title: 'Create model monitoring system',
    summary: 'Track prediction drift, latency, and accuracy over time.',
    dueDate: new Date('2025-07-13')
  },

  // Data Engineer - u5
  {
    id: 't11',
    userId: 'u5',
    title: 'Build data ingestion pipeline',
    summary: 'Stream raw data from source to S3/BigQuery using Airflow.',
    dueDate: new Date('2025-07-04')
  },
  {
    id: 't12',
    userId: 'u5',
    title: 'Validate and clean incoming data',
    summary: 'Use Great Expectations or Pandera for schema validation.',
    dueDate: new Date('2025-07-06')
  },

  // DevOps / Backend Engineer - u6
  {
    id: 't13',
    userId: 'u6',
    title: 'Create Docker containers for services',
    summary: 'Containerize API and model service for consistent deployment.',
    dueDate: new Date('2025-07-05')
  },
  {
    id: 't14',
    userId: 'u6',
    title: 'Deploy infrastructure on cloud',
    summary: 'Use Terraform to provision AWS EC2 and S3 resources.',
    dueDate: new Date('2025-07-07')
  }
];