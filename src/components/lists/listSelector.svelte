<script lang="ts">
  import ListMenu from "../listmenu/listsMenu.svelte";
  import type { simpleType } from "../../types/todo";
  import { lists } from "../../context/context";
  let showMenu = false;
  let showRenameModal = false;
  let showDeleteModal = false;
  function toggleShowMenu(): void {
    showMenu = !showMenu;
  }
  type FilterType = (id: string) => void;
  export let filter: FilterType;
  export let index: string;
</script>

<div class="bg-secondary-background rounded-md flex flex-col ">
  {#each $lists as list, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class={`hover:bg-primary 
		
		cursor-pointer flex flex-row 
		justify-between px-1 text-slate-300 
		text-xl border-b-4 border-background
		py-2 items-center font-thin  w-full
		`}
      on:click={() => filter(list.id)}
      class:selected={index === list.id}
    >
      <div class="truncate">
        {list.name}
      </div>
      <!-- <ListMenu listName={lists[i].name} listId={list.id} /> -->
      <ListMenu listName={$lists[i].name} listId={list.id} />
      <!---LISTMENU-->
    </div>
  {/each}
</div>

<style>
  .selected {
    --tw-bg-opacity: 1;
    background-color: rgb(33 34 101 / var(--tw-bg-opacity));
  }
</style>
