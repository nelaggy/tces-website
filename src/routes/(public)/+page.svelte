<script>
	import PriButton from "$lib/components/ui/PriButton.svelte";
	import SecButton from "$lib/components/ui/SecButton.svelte";

</script>
<section class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-3xl sm:text-5xl">
          Welcome to the
          <strong class="text-sky-900 sm:block"> Trinity College Engineering Society </strong>
        </h1>
  
        <p class="mt-4 sm:text-xl/relaxed">
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