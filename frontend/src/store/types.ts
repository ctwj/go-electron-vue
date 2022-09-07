import { TestState } from './test/types'
import { ProfileState } from './profile/types'


export interface RootState {
    version: string;
}

export interface AllState extends RootState {
    test: TestState,
    profile: ProfileState,
}