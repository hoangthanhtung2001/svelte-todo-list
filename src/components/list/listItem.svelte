<script lang="ts">
  import GoTrashcan from "svelte-icons/go/GoTrashcan.svelte";
  import FaGripLines from "svelte-icons/fa/FaGripLines.svelte";
  import { lists } from "../../context/context";
  import type { ITodo } from "../../types/todo";
  import TiPlusOutline from "svelte-icons/ti/TiPlusOutline.svelte";
  export let item: ITodo;
  function removeTask(taskID: string): void {
    lists.update((lists) => {
      return lists.map((list) => ({
        ...list,
        task: list.task.filter((task) => task.id !== taskID),
      }));
    });
  }

  function editQuantity(id: string, quantityNum: number): void {
    lists.update((lists) =>
      lists.map((list) => ({
        ...list,
        task: list.task.map((item) => ({
          ...item,
          quantity: id === item.id ? quantityNum + 1 : item.quantity,
        })),
      }))
    );
  }

  function subtraction(id: string, quantity: number): void {
    if (quantity <= 1) {
      return;
    }
    lists.update((lists) =>
      lists.map((list) => ({
        ...list,
        task: list.task.map((item) => ({
          ...item,
          quantity: id === item.id ? quantity - 1 : item.quantity,
        })),
      }))
    );
  }

  function resetQuantity(id: string, quantity: number): void {
    if (quantity === 1) {
      return;
    }
    lists.update((lists) =>
      lists.map((list) => ({
        ...list,
        task: list.task.map((item) => ({
          ...item,
          quantity: id === item.id ? quantity / quantity : item.quantity,
        })),
      }))
    );
  }
    function changeCheckedState(id: string, isChecked: boolean): void {
    lists.update((lists) =>
      lists.map((list) => ({
        ...list,
        task: list.task.map((item) => ({
          ...item,
          isCompleted: id === item.id ? !isChecked : item.isCompleted,
        })),
      }))
    );
  }
</script>

<div
  class={`flex flex-row my-2 px-2 py-2 bg-secondary-background rounded-md`}
  draggable="true"
>
  <div class="flex w-full cursor-pointer items-center">
    <div class="w-3 text-slate-400 mr-2">
      <FaGripLines />
    </div>
    <input type="checkbox" checked={item.isCompleted} class="w-4"  on:click={() => changeCheckedState(item.id, item.isCompleted)} />

    <div
      class={`text-white text-lg font-thin ml-2 dash 
      ${item.isCompleted ? "line-through" : ""} `}
    >
      {item.title}
    </div>
  </div>

  <span class="text-white font-bold mr-6">{item.quantity}</span>
  <button
    class="w-8 bg-blue-500 rounded hover:opacity-40 mr-2"
    on:click={() => editQuantity(item.id, item.quantity)}
    ><TiPlusOutline /></button
  >
  <button
    class="w-8 bg-green-400 rounded hover:opacity-40 mr-2"
    on:click={() => subtraction(item.id, item.quantity)}>-</button
  >
  <button
    class="w-8 bg-teal-400 rounded hover:opacity-40 mr-2"
    on:click={() => resetQuantity(item.id, item.quantity)}>1</button
  >
  <button
    on:focus={null}
    on:blur={null}
    class="w-4 text-gray-500"
    on:click={() => removeTask(item.id)}><GoTrashcan /></button
  >
</div>
