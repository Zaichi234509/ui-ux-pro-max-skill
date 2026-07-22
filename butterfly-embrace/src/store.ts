import { create } from 'zustand'

interface AppState {
  started: boolean
  setStarted: (started: boolean) => void
  loaded: boolean
  setLoaded: (loaded: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  started: false,
  setStarted: (started) => set({ started }),
  loaded: false,
  setLoaded: (loaded) => set({ loaded }),
}))
