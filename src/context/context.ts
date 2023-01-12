import {writable} from "svelte/store"
import type {ListTodo} from "../types/todo"
import type { Writable } from 'svelte/store'
 function useStorage<Value>(
    key: string,
    initialValue: Value
  ): Writable<Value> {
    let serialize = JSON.stringify
    let deserialize = JSON.parse
  
    let storedValue: Value = deserialize(localStorage.getItem(key))
  
    let store = writable(storedValue ? storedValue : initialValue)
    store.subscribe((value) => localStorage.setItem(key, serialize(value)))
  
    return store
  }


export const  lists = useStorage<ListTodo[]>("todos", [
    {
      id: "12123123",
      name: "Name 1",
      task: [
        {
          id: "1212weqwe",
          title: "Ddebug",
          quantity: 3,
          isCompleted: false,
        },
      ],
    },
    {
      id: "sdasd213",
      name: "Name 2",
      task: [
        {
          id: "1312weqwe",
          title: "Fix",
          quantity: 2,
          isCompleted: false,
        },
      ],
    },
  ]);

