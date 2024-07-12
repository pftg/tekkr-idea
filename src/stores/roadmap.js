import { defineStore } from 'pinia'

export const useRoadmapStore = defineStore('roadmap', {
  state: () => ({
    steps: [
      {
        id: 1,
        title: 'Introduction to Engineering Management',
        description: 'Learn the basics of engineering management...',
        guidance: [
          'Understand the role of an engineering manager',
          'Read introductory materials on engineering management'
        ],
        practice: [
          'Shadow an engineering manager for a week',
          'Attend a workshop or seminar on engineering management'
        ],
        completed: false,
        links: [
          { type: 'Learn', title: 'Engineering Management Overview', href: 'https://example.com/learn1' },
          { type: 'Practice', title: 'Shadow an Engineering Manager', href: '' },
          { type: 'Community', title: 'Join Engineering Manager Forums', href: 'https://example.com/community1' },
        ]
      },
      {
        id: 2,
        title: 'Leadership Skills',
        description: 'Develop your leadership skills...',
        guidance: [
          'Study different leadership styles',
          'Take a leadership course'
        ],
        practice: [
          'Lead a small project',
          'Mentor a junior engineer'
        ],
        completed: false,
        links: [
          { type: 'Learn', title: 'Leadership Courses', href: 'https://example.com/learn2' },
          { type: 'Practice', title: 'Lead a Small Project', href: '' },
          { type: 'Community', title: 'Join Leadership Forums', href: 'https://example.com/community2' },
        ]
      },
      {
        id: 3,
        title: 'Communication Skills',
        description: 'The ability to convey ideas clearly and effectively to various stakeholders, including team members, upper management, and cross-functional partners.',
        completed: false,
        links: [
          { type: 'Learn', title: 'Goodreads Top Books on Communication', href: 'https://www.goodreads.com/list/show/84868.Communication_Skills' },
          { type: 'Learn', title: 'Active Listening', href: 'https://www.mindtools.com/az4wxv7/active-listening' },
          { type: 'Learn', title: '9 Must-Read Books From Harvard to Make You a Stronger Communicator', href: 'https://www.forbes.com/sites/rachelwells/2024/02/05/5-leadership-books-to-improve-your-communication-skills-in-2024/' },
          { type: 'Practice', title: 'Interactive Online Simulations', href: '' },
          { type: 'Practice', title: 'Peer Feedback Exchange Sessions', href: '' },
          { type: 'Community', title: '“Ask the Expert” sessions', href: '' },
          { type: 'Community', title: 'Mock Interviews', href: '' },
        ]
      },
      // Add more steps as needed
    ]
  }),
  getters: {
    completedSteps(state) {
      return state.steps.filter(step => step.completed)
    },
    nextStep(state) {
      return state.steps.find(step => !step.completed)
    },
    getStepById: (state) => (id) => {
      return state.steps.find(step => step.id === id)
    }
  },
  actions: {
    toggleStepCompletion(id) {
      const step = this.steps.find(step => step.id === id)
      if (step) {
        step.completed = !step.completed
        this.saveProgress()
      }
    },
    saveProgress() {
      const progress = this.steps.map(step => ({ id: step.id, completed: step.completed }))
      localStorage.setItem('roadmapProgress', JSON.stringify(progress))
    },
    loadProgress() {
      const progress = JSON.parse(localStorage.getItem('roadmapProgress'))
      if (progress) {
        this.steps.forEach(step => {
          const savedStep = progress.find(p => p.id === step.id)
          if (savedStep) {
            step.completed = savedStep.completed
          }
        })
      }
    }
  }
})
