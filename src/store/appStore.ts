import { create } from 'zustand'

interface LabProgress {
  completed: boolean
  score: number
  lastAccessed: Date | null
}

interface AppState {
  labsProgress: Record<string, LabProgress>
  currentTheme: number
  setLabProgress: (labId: string, progress: Partial<LabProgress>) => void
  setCurrentTheme: (theme: number) => void
}

export const useAppStore = create<AppState>((set) => ({
  labsProgress: {},
  currentTheme: 1,
  
  setLabProgress: (labId, progress) =>
    set((state) => ({
      labsProgress: {
        ...state.labsProgress,
        [labId]: {
          ...state.labsProgress[labId],
          ...progress,
          lastAccessed: new Date(),
        },
      },
    })),
    
  setCurrentTheme: (theme) => set({ currentTheme: theme }),
}))
