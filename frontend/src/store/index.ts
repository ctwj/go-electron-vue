// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// modules
import { profile } from './profile'
import { test } from './test'

import { RootState, AllState } from './types'


// 定义 injection key
export const key: InjectionKey<Store<AllState>> = Symbol()

export function useStore<T = AllState> () {
    return baseUseStore<T>(key)
}

export const store = createStore<RootState>({
    state: {
        version: '0.1'
    },
    getters: {
        version(state) {
            return state.version;
        }
    },
    modules: {
        test,
        profile,
    }
})