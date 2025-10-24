<script lang="ts">

    let { member }: { member: { photo: string, name: string; title: string; email: string } } = $props();
    let { photo, name, title, email } = member;
</script>

<div
	class="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
>
	<div class="mb-4 overflow-hidden rounded-md">
		<img src={photo} alt={name} class="w-full aspect-[3/4] object-cover" />
	</div>

    <h3 class="line-clamp-1 text-lg font-medium text-gray-900">
        {title}
    </h3>

	<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
		{name}
	</p>



		

	<a href={"mailto:" + email} class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-800">
		{email}
	</a>
</div>
