import { defineStore } from 'pinia'

export const useRoadmapStore = defineStore('roadmap', {
  state: () => ({
    steps: [
      {
        id: 1,
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
      {
        id: 2,
        title: 'Strategic Thinking and Planning',
        description: 'The ability to align team activities with broader organizational goals and anticipate future challenges and opportunities.',
        completed: false,
        links: [
          { type: 'Learn', title: 'Scenario-Based Learning', href: 'https://www.amazon.com/McKinsey-Mind-Understanding-Implementing-Problem-Solving/dp/0071374299' },
          { type: 'Learn', title: 'Guest Lectures from Industry Leaders', href: '' },
          { type: 'Practice', title: 'Strategic Planning Simulations', href: '' },
          { type: 'Practice', title: 'Case Studies with Open-Ended Questions', href: 'https://store.hbr.org/case-studies/' },
          { type: 'Community', title: 'Strategic Challenge Competitions', href: 'https://www.kaggle.com/' },
          { type: 'Community', title: 'Mentorship with Experienced EMs / Strategists', href: '' },
        ]
      },
      {
        id: 3,
        title: 'Leadership and Team Management',
        description: 'The ability to inspire, motivate, and guide a team towards achieving common goals.',
        completed: false,
        links: [
          { type: 'Learn', title: 'Leadership principles', href: '' },
          { type: 'Learn', title: 'Team dynamics', href: '' },
          { type: 'Learn', title: 'Conflict resolution techniques', href: '' },
          { type: 'Practice', title: 'First-time people management', href: '' },
          { type: 'Practice', title: 'First-time leadership', href: '' },
          { type: 'Community', title: 'Join Leadership Forums', href: '' },
        ]
      },
      {
        id: 4,
        title: 'Project Management',
        description: 'The ability to plan, execute, and oversee projects to ensure they are completed on time, within budget, and to the required quality standards.',
        completed: false,
        links: [
          { type: 'Learn', title: 'Project management methodologies (e.g., Agile, Scrum, PMP)', href: '' },
          { type: 'Learn', title: 'Risk management', href: '' },
          { type: 'Learn', title: 'Resource allocation', href: '' },
          { type: 'Practice', title: 'Creating project plans', href: '' },
          { type: 'Practice', title: 'Setting timelines', href: '' },
          { type: 'Community', title: 'Join Project Management Forums', href: '' },
        ]
      },
      {
        id: 5,
        title: 'Maintaining Technical Proficiency',
        description: 'Maintaining a strong understanding of the technical aspects of software development to make informed decisions and provide effective guidance to the team.',
        completed: false,
        links: [
          { type: 'Learn', title: 'Advanced programming concepts', href: '' },
          { type: 'Learn', title: 'Software architecture principles', href: '' },
          { type: 'Learn', title: 'Emerging technology trends', href: '' },
          { type: 'Practice', title: 'Troubleshooting and resolving complex technical issues', href: '' },
          { type: 'Practice', title: 'Understanding architecture and design patterns', href: '' },
          { type: 'Community', title: 'Join Technical Forums', href: '' },
        ]
      },
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
