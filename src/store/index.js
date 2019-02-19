import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        count: 1,
        currentMonth : "",
        currentYear : "",
    },
    mutations: {
        increment (state) {
            state.count++
        },
        setCurrentMonth : function(state, value) {
            state.currentMonth = value;
        },
        setCurrentYear : function(state, value) {
            state.currentYear = value;
        },
    }
});
