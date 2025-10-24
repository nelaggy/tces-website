<script lang="ts">
	import type { Snippet } from "svelte";

    let { children, href, onclick } : { children: Snippet, href?: string, onclick?: () => void } = $props();
</script>

{#if href}
<a
    class="block w-full rounded bg-sky-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-900 focus:outline-none focus:ring active:bg-sky-700 sm:w-auto"
    href={href}
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