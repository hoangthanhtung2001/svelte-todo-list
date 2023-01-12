<script lang="ts">
  import type { ListTodo, FiltersType } from "../types/todo";
  import { lists } from "../context/context";
  import AddItem from "./list/addItem.svelte";
  import List from "./list/list.svelte";
  import AddList from "./lists/addList.svelte";
  import ListSelector from "./lists/listSelector.svelte";

  $: Quantity = $lists.map((a) =>
    a.task.reduce((sum, { quantity }) => sum + Number(quantity), 0)
  );
  let selectedFilter: FiltersType = $lists[0]?.id;
  $: todoAmount = $lists.length;
  $: sumQuantity = Quantity.reduce((a, b) => a + b, 0);
  $: filteredTodos = filterListItem($lists, selectedFilter);
  $: leftListTitle = $lists.map((a) => a.name);
  $: rightListTitle = $lists.map((a) => a.task.map((b) => b.title));
  let index = "";

  function setFilter(newFilter: FiltersType): void {
    selectedFilter = newFilter;
  }
  function filter(id: string): void {
    index = id;
    setFilter(id);
  }
  function generationRamdomId(): string {
    return Math.random().toString(16).slice(2);
  }
  function addTodoList(name: string): void {
    const newData: ListTodo = {
      id: generationRamdomId(),
      name,
      task: [],
    };
    $lists = [...$lists, newData];
  }

  function filterListItem($lists: ListTodo[], id: FiltersType): ListTodo[] {
    return $lists.filter((list) => list.id === id);
  }
</script>

<div class="flex flex-col items-center">
  <div class="text-slate-200 text-5xl font-thin my-10">
    Todo List combie Multiple Counter (with Svelte+Typescript+Tailwindcss +Vite)
    Author:HOANG THANH TUNG (ホアン　タイン　トゥン)
  </div>

  <div
    class="flex flex-col sm:flex-row xl:w-7/12 lg:w-9/12 md:w-10/12 sm:w-11/12 px-5 sm:px-0 w-full m-auto space-y-10 sm:space-y-0"
  >
    <div class=" sm:mr-5 sm:ml-2 sm:mt-2 flex flex-col sm:w-3/12">
      <div class="truncate">
        <ListSelector {index} {filter} />
      </div>
      <AddList {addTodoList} />
    </div>
    <div class="sm:w-9/12">
      {#each filteredTodos as list (list.id)}
        <div class="w-full flex flex-col">
          <List {list} />
          <AddItem {list} />
        </div>
      {/each}
      <div class="flex flex-col">
        <span class="text-blue-400">LeftListTitle:{leftListTitle}</span>
        <span class="text-red-600">RightListTitle:{rightListTitle}</span>
        <span class="text-green-500">RightListSumOfCount:{todoAmount}</span>
        <span class="text-red-600">LeftListSumOfCount:{sumQuantity}</span>
      </div>
    </div>
  </div>
</div>
