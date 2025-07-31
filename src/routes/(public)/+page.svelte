<script>
	import PriButton from '$lib/components/ui/PriButton.svelte';
	import SecButton from '$lib/components/ui/SecButton.svelte';
</script>

<section class="bg-[url(img/great_court_bg.jpg)] bg-cover bg-center -mt-16">
	<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
		<div class="mx-auto max-w-xl text-center">
			<div class="text-xl text-gray-200 sm:text-4xl">
				Welcome to the
				<h1 class="font-serif text-gray-100 sm:block text-5xl sm:text-5xl pt-4"> Trinity College Engineering Society </h1>
      </div>

			<p class="mt-4 sm:text-xl/relaxed text-gray-300">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
				numquam ea!
			</p>

			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<PriButton href="/">Get Started</PriButton>
				<SecButton href="/about">Learn More</SecButton>
			</div>
		</div>
	</div>
</section>
