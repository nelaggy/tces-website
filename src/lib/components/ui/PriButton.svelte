<script lang="ts">
	import type { Snippet } from "svelte";

    let { children, href, newTab, onclick } : { children: Snippet, href?: string, newTab?: boolean, onclick?: () => void } = $props();
</script>

{#if href}
<a
    class="block w-full rounded bg-sky-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-900 focus:outline-none focus:ring active:bg-sky-700 sm:w-auto"
    {href}
    target={newTab ? "_blank" : undefined}
>
    {@render children()}
</a>
{:else}
<button
    class="block w-full rounded bg-sky-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-900 focus:outline-none focus:ring active:bg-sky-700 sm:w-auto"
    onclick={onclick}
>
    {@render children()}
</button>
{/if}