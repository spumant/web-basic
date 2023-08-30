import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    const sum = ref(0)
    const add = () => {
        sum.value++
    }

    return {count, doubleCount, increment, sum, add}
})
