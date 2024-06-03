import parse from "yargs"
import { hideBin } from "yargs/helpers"
import { UnknownAction, configureStore } from "@reduxjs/toolkit"
import { nikki, nikkiReducer } from "../common/src"

const input = parse(process.argv.slice(3))
const args = await input.argv
console.log(args._[0], { ...args })

const payload: Record<string, unknown> = { ...args }
delete payload.$0
delete payload._
console.log(payload)

const store = configureStore({
  reducer: {
    nikki: nikkiReducer,
  },
})

console.log(store.getState())

let action: UnknownAction = { type: "unknown" }
switch (args._[0]) {
  case nikki.addNote.type:
    action = nikki.addNote(payload as unknown as any)
}

store.dispatch(action)

console.log(store.getState())
