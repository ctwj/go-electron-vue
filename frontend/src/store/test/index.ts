import { TestState } from "./types";
import { RootState } from "../types";
import { Module  } from "vuex";

import { GetterTree } from 'vuex';


// const getters: GetterTree<TestState, RootState> = {
//     count(state): number {
//         const { count } = state;
//         return count;
//     },
// }

export const test: Module<TestState, RootState> = {
    namespaced: true,
    state: {
        name: 'test-module',
        count: 0
    },
    mutations: {
        ADD_COUNT(state) {
            window.console.log('ADD_COUNT', state);
            state.count += 1;
        },
    },
    getters: {
        count(state): number {
            return state.count;
        }
    },
    actions: {

    }
}
