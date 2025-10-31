import { useEffect, useState } from 'react'

type StateCreator<T> = (
  set: (partial: Partial<T> | ((state: T) => Partial<T>), replace?: boolean) => void,
  get: () => T,
  api: StoreApi<T>,
) => T

type Listener<T> = (state: T) => void

type StoreApi<T> = {
  setState: (partial: Partial<T> | ((state: T) => Partial<T>), replace?: boolean) => void
  getState: () => T
  subscribe: (listener: Listener<T>) => () => void
}

type UseStore<T> = (<U>(selector: (state: T) => U, equality?: (a: U, b: U) => boolean) => U) & StoreApi<T>

export const create = <T,>(initializer: StateCreator<T>): UseStore<T> => {
  let state = {} as T
  const listeners = new Set<Listener<T>>()

  const getState = () => state

  const setState: StoreApi<T>['setState'] = (partial, replace) => {
    const nextState = typeof partial === 'function' ? (partial as (state: T) => Partial<T>)(state) : partial
    if (nextState === undefined) {
      return
    }
    const updated = replace ? (nextState as T) : { ...state, ...nextState }
    if (Object.is(updated, state)) {
      return
    }
    state = updated
    listeners.forEach((listener) => listener(state))
  }

  const subscribe: StoreApi<T>['subscribe'] = (listener) => {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }

  const api: StoreApi<T> = { setState, getState, subscribe }
  state = initializer(setState, getState, api)

  const useStore = (<U,>(selector: (state: T) => U, equality: (a: U, b: U) => boolean = Object.is) => {
    const [selected, setSelected] = useState(() => selector(state))

    useEffect(() => {
      return subscribe((nextState) => {
        const nextSlice = selector(nextState)
        setSelected((prev) => (equality(prev, nextSlice) ? prev : nextSlice))
      })
    }, [selector, equality])

    return selected
  }) as UseStore<T>

  Object.assign(useStore, api)

  return useStore
}
