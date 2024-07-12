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
        completed: false
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
        completed: false
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
