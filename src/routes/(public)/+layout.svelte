
<script>
	let { children } = $props();
</script>

<nav class="absolute">
    <a href="/">Home</a>
    <a href="/events">Events</a>
    <a href="/blog">Blog</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</nav>
{@render children()}