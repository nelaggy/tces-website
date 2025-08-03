<script lang="ts">
	let {
		title,
		preview,
		href,
		location,
		date,
		time
	}: {
		title: string;
		preview: string;
		href: string;
		location: string;
		date: string;
		time: string;
	} = $props();
</script>

<article
	class="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
>
	<a {href}>
		<h3 class="line-clamp-1 text-lg font-medium text-gray-900">
			{title}
		</h3>
	</a>

	<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
		{preview}
	</p>

	<div class="mt-3 space-y-2">
		<!-- Date/Time with clock icon -->
		<div class="flex items-center gap-2 text-sm text-gray-600">
			<svg
				class="size-4 text-gray-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<span>{date}, {time}</span>
		</div>

		<!-- Location with pin icon -->
		<div class="flex items-center gap-2 text-sm text-gray-600">
			<svg
				class="size-4 text-gray-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				></path>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				></path>
			</svg>
			<span>{location}</span>
		</div>
	</div>

	<a {href} class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-800">
		Find out more

		<span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
			&rarr;
		</span>
	</a>
</article>
