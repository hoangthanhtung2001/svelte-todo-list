<script lang="ts">
  import { lists } from "../../context/context";
  import type { ListTodo, ITodo } from "../../types/todo";
  function generationRamdomId(): string {
    return Math.random().toString(16).slice(2);
  }
  export let list: ListTodo;
  let itemName = "";
  let itemNumber = "";
  $: isValidText = itemName === null || itemName.match(/^ *$/) !== null;

  function addTask(title: string, quantity: number): void {
    if (!itemName || !itemName.trim() || Number(itemNumber) <= 0) {
      alert("Count must be more than 0 and title not emty");
      return;
    }
    const newData: ITodo = {
      id: generationRamdomId(),
      title,
      quantity,
      isCompleted: false,
    };

    $lists = $lists.map((todo) =>
      list.id === todo.id
        ? {
            ...todo,
            task: [...todo.task, newData],
          }
        : todo
    );
    itemName = "";
    itemNumber = "";
  }
</script>

<div class="py-2 flex">
  <input
    type="text"
    bind:value={itemName}
    placeholder="Enter next task"
    class="text-white bg-secondary-background rounded-md w-[75%] py-2 px-2 outline-none font-thin text-lg"
  />
  <input
    type="number"
    bind:value={itemNumber}
    placeholder="Enter task count"
    class="text-white bg-neutral-800 rounded-md w-[75%] py-2 px-2 outline-none font-thin text-lg"
  />
  <button
    class={`
      text-slate-300 bg-primary rounded-md pb-2 pt-2.5 w-[25%] ml-2
      ${
        isValidText
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-secondary active:bg-alt "
      }		
      `}
    on:click={() => addTask(itemName, Number(itemNumber))}>Add</button
  >
</div>
