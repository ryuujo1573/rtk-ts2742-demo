import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

interface Note {
  id: string
  title: string
  date: number
  content: string
}

interface NoteInit extends Partial<Note> {
  title: string
}

const noteAdapter = createEntityAdapter<Note>()

export const nikkiSlice = createSlice({
  name: "nikki",
  initialState: noteAdapter.getInitialState(),
  reducers(creators) {
    return {
      addNote: creators.preparedReducer((init: NoteInit) => {
        return {
          payload: {
            id: crypto.randomUUID(),
            date: Date.now(),
            content: "",
            ...init,
          },
        }
      }, noteAdapter.addOne),
      removeNote: creators.reducer(noteAdapter.removeOne),
    }
  },
})

export const nikki = nikkiSlice.actions
export const nikkiReducer = nikkiSlice.reducer
