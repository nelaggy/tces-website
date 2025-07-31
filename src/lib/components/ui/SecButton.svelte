<script lang="ts">
	import type { Snippet } from "svelte";

    let { children, href } : { children: Snippet, href: string } = $props();
</script>

<a
    class="block w-full rounded px-12 py-3 bg-gray-100 hover:bg-gray-200 text-sm font-medium text-sky-800 shadow hover:text-sky-900 focus:outline-none focus:ring active:text-sky-700 sm:w-auto"
    href={href}
>
    {@render children()}
</a>