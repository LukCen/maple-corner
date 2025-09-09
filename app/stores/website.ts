import { defineStore } from "pinia";

export const useAsideStore = defineStore('asideStore', () => {
  let isActive = ref(false)

  /**
   * Change the value between true/false
   */
  function toggle() {
    isActive.value === false ? isActive.value = true : isActive.value = false
    console.log(isActive.value)
  }

  return { isActive, toggle }
})
