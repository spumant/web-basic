import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    const sum = ref(0)
    const add = (n) => {
        sum.value += n
    }
    const sub = (n) => {
        sum.value -= n
    }
    const addOdd = (n) => {
        if (sum.value % 2) {
            sum.value += n
        }
    }

    const addWait = (n) => {
        setTimeout(() => {
            sum.value += n
        }, 1000)
    }

    const cSum = computed(() => {
        return sum.value * 10
    })

    return {count, doubleCount, increment, sum, add, sub, addOdd, addWait, cSum}
})
