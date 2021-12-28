import { createStore } from 'vuex'
import journal from '../modules/daybook/store/journal'

const store = createStore({
    modules: {
        journal //Lo mismo que decir journal:journal
    }
    
})

export default store