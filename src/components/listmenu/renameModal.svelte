<script lang="ts">
  import Modal from "./modal.svelte";
  import { createEventDispatcher, getContext } from "svelte";
  import { lists } from "../../context/context";
  type showRenameModalType = boolean;
  type listNameType = string;
  type listIdType = string;
  export let listName: listNameType;
  export let showRenameModal: showRenameModalType;
  export let listId: listIdType;

  const dispatch = createEventDispatcher();
  function hideModal(): void {
    dispatch("hideModal");
  }
  function editTodo(id: string, newTodo: string): void {
    let currentTodo = $lists.findIndex((todo) => todo.id === id);
    $lists[currentTodo].name = newTodo;
    hideModal();
  }
</script>

<!-- svelte-ignore missing-declaration -->
<Modal show={showRenameModal} hideModal={() => hideModal()}>
  <div class="flex flex-col space-y-5">
    <div class="text-center text-2xl">Rename</div>
    <input
      type="text"
      bind:value={listName}
      class=" py-2 px-2 outline-none rounded-md bg-secondary-background border-2 border-background"
      autofocus
    />
    <div class="flex flex-row justify-between">
      <button
        class="px-3 py-2 rounded-md bg-green-500 hover:bg-green-600 active:bg-green-700 text-slate-900"
        on:click={() => editTodo(listId, listName)}>Submit</button
      >
      <button
        class="px-3 py-2 rounded-md bg-primary hover:bg-secondary active:bg-alt text-slate-400"
        on:click={hideModal}>Cancel</button
      >
    </div>
  </div>
</Modal>
