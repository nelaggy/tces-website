
<script>
	let { children } = $props();
    let open = $state(false);
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
            <!-- Logo/Brand -->
            <div class="flex-shrink-0">
                <a href="/" class="text-xl font-bold text-gray-900 hover:text-sky-900 transition-colors duration-200">
                    TCES
                </a>
            </div>
            
            <!-- Navigation Links -->
            <div class="hidden md:block">
                <div class="ml-10 flex items-center space-x-8">
                    <a href="/" 
                       class="text-gray-700 hover:text-sky-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                        Home
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-900 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="/events" 
                       class="text-gray-700 hover:text-sky-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                        Events
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-900 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="/blog" 
                       class="text-gray-700 hover:text-sky-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                        Blog
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-900 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="/about" 
                       class="text-gray-700 hover:text-sky-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                        About
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-900 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="/contact" 
                       class="text-gray-700 hover:text-sky-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                        Contact
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-900 group-hover:w-full transition-all duration-300"></span>
                    </a>
                </div>
            </div>
            
            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button type="button" 
                        class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-2"
                        aria-label="Toggle menu"
                        onclick={() => open = !open}
                        >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- Mobile Navigation Menu (hidden by default) -->
        {#if open}
            <div class="md:hidden border-t border-gray-100 bg-white">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="/" 
                    class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
                        Home
                    </a>
                    <!-- <a href="/events" 
                    class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
                        Events
                    </a>
                    <a href="/blog" 
                    class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
                        Blog
                    </a> -->
                    <a href="/about" 
                    class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
                        About
                    </a>
                    <a href="/contact" 
                    class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
                        Contact
                    </a>
                </div>
            </div>
        {/if}
    </nav>
</header>

<main class="mt-16">
    {@render children()}
</main>