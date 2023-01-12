<script lang="ts">
  import Modal from "./modal.svelte";
  import { createEventDispatcher } from "svelte";
  import { lists } from "../../context/context";
  type showDeleteModalType = boolean;
  type listNameType = string;
  type listIdType = string;
  export let listName: listNameType;
  export let showDeleteModal: showDeleteModalType;
  export let listId: listIdType;
  const dispatch = createEventDispatcher();
  function hideModal(): void {
    dispatch("hideModal");
  }
  function deleteTodoList(id: string): void {
    $lists = $lists.filter((todo) => todo.id !== id);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<Modal show={showDeleteModal} hideModal={() => hideModal()}>
  <div class="flex flex-col">
    <div class="text-center text-2xl mb-7 truncate">Delete?{listName}</div>
    <div class="flex flex-row justify-between">
      <button
        class="px-3 py-2 rounded-md bg-primary hover:bg-secondary active:bg-alt text-slate-400"
        on:click={hideModal}>Cancel</button
      >
      <button
        class="px-3 py-2 rounded-md bg-red-400 hover:bg-red-500 active:bg-red-900 text-slate-900"
        on:click={() => deleteTodoList(listId)}
      >
        Delete</button
      >
    </div>
  </div>
</Modal>
