import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})



// git init
// git add --all
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/tsengyayu/DB-project.git
// git push -u origin main