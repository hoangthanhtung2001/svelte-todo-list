<script lang="ts">
  import ListItem from "../list/listItem.svelte";
  import type { ListTodo } from "../../types/todo";
  import { flip } from "svelte/animate";
  export let list: ListTodo;
  const idList = list.id;
</script>

<div
  on:dragover|preventDefault={() => {
    return false;
  }}
>
  {#each list.task as item (item.id)}
    <div animate:flip>
      <ListItem {item} id={idList} />
    </div>
  {/each}
</div>
