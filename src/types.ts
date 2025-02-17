import { DeepReadonly, DeepPartial } from "utility-types";

export interface IListener<T> {
    oldState: Partial<T>;
    run: (newState: any) => void;
}

export interface IStore<S, A> {
    state: DeepReadonly<S>;
    setState: (newState: DeepPartial<S>) => void;
    actions: A;
}

export interface IStoreInternal<S, A> extends IStore<S, A> {
    listeners: Array<IListener<S>>;
    inBatch: boolean;
}

export type StoreActions<S, A> = {
    [P in keyof A]: A[P] extends (...p: infer U) => infer R
    ? (store: IStore<S, A>, ...p: U) => R
    : A[P] extends object
    ? StoreActions<S, A[P]>
    : never;
};

export type MethodsMap<A> = {
    [P in keyof A]: A[P] extends object
    ? MethodsMap<A[P]>
    : (...payload: any) => void
};

export type UseStoreReturn<S, A> = (() => [undefined, A]) &
    (<NS>(stateFunc: (state: S) => NS) => [NS, A]) &
    (<NA>(stateFunc: undefined, actionsFunc: (actions: A) => NA) => [undefined, NA]) &
    (<NS, NA>(stateFunc: (state: S) => NS, actionsFunc: (actions: A) => NA) => [NS, NA]);
