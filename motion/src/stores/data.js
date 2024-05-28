import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const theme = ref(null)
  const userName = ref()
  const gender = ref(null)
  const order = ref()

  return { theme, userName, gender, order }
})
