import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {nanoid} from "nanoid";
import axios from "axios";
import '../mock/index'

export const useUserStore = defineStore('user', () => {
    const userList = ref([{id: 1, name: 'jack', age: 20}])

    const add_user = (user) => {
        user.id = nanoid()
        userList.value.push(user)
    }

    const addUserByServer = async () => {
        const res = await axios.get('/user')
        add_user(res.data)
    }

    return {
        userList,
        add_user,
        addUserByServer,
    }
})
