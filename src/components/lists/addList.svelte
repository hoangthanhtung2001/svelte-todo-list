<script lang="ts">
  import MdAdd from "svelte-icons/md/MdAdd.svelte";
  type AddTodo = (name: string) => void;
  export let addTodoList: AddTodo;
  let listname = "";
  $: isValidText = listname === null || listname.match(/^ *$/);
</script>

<div class="flex">
  <input
    type="text"
    bind:value={listname}
    placeholder="Enter list name"
    class="bg-secondary-background text-xl 
	text-slate-400 font-thin rounded-bl-md 
	pl-2 pb-3 pt-2 outline-none w-11/12 mr-2"
  />
  <button disabled={isValidText} on:click={() => addTodoList(listname)}
    ><div
      class={` bg-primary rounded-full w-11
		${
      isValidText
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-secondary active:bg-alt"
    }
		`}
    >
      <MdAdd />
    </div></button
  >
</div>
