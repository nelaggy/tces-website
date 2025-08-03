<script>
	import PriButton from '$lib/components/ui/PriButton.svelte';
</script>

<svelte:head>
	<title>Contact - Trinity College Engineering Society</title>
	<meta name="description" content="Get in touch with the Trinity College Engineering Society. Send us a message or connect with us on social media." />
</svelte:head>

<section class="bg-gray-50 min-h-screen pt-20 pb-12">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">Contact Us</h1>
			<p class="mt-4 text-xl text-gray-600">
				Get in touch with the Trinity College Engineering Society. We'd love to hear from you!
			</p>
		</div>

		<div class="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
			<form class="space-y-6">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div>
						<label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							required
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
							placeholder="Coy"
						>
					</div>
					<div>
						<label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							required
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
							placeholder="Zhu"
						>
					</div>
				</div>

				<div>
					<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
						placeholder="ckz20@cam.ac.uk"
					>
				</div>

				<div>
					<label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						required
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
						placeholder="How can we help you?"
					>
				</div>

				<div>
					<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows="6"
						required
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors resize-none"
						placeholder="Tell us more about your inquiry..."
					></textarea>
				</div>

				<div class="text-center">
					<PriButton href="#">Send Message</PriButton>
				</div>
			</form>
		</div>

		<!-- Social Media Icons -->
		<div class="mt-12 text-center">
			<h2 class="text-2xl font-semibold text-gray-900 mb-6">Connect With Us</h2>
			<div class="flex justify-center space-x-8">
				<!-- Facebook Icon -->
				<a
					href="https://www.facebook.com/TrinityCollegeEngineeringSociety"
					class="group flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
					aria-label="Follow us on Facebook"
				>
					<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
					</svg>
				</a>

				<!-- Instagram Icon -->
				<a
					href="https://www.instagram.com/trinityengineeringsoc/"
					class="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full hover:from-purple-700 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
					aria-label="Follow us on Instagram"
				>
					<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fill-rule="evenodd" d="M12.017 0C8.396 0 7.989.013 7.041.072 6.095.131 5.43.333 4.862.63c-.579.3-1.07.7-1.559 1.188-.49.49-.888.98-1.188 1.559-.297.568-.499 1.233-.558 2.178C1.497 6.985 1.485 7.392 1.485 12.017c0 3.621.012 4.028.071 4.976.059.945.261 1.61.558 2.178.3.579.7 1.07 1.188 1.559.49.49.98.888 1.559 1.188.568.297 1.233.499 2.178.558.948.059 1.355.071 4.976.071 3.621 0 4.028-.012 4.976-.071.945-.059 1.61-.261 2.178-.558.579-.3 1.07-.7 1.559-1.188.49-.49.888-.98 1.188-1.559.297-.568.499-1.233.558-2.178.059-.948.071-1.355.071-4.976 0-3.621-.012-4.028-.071-4.976-.059-.945-.261-1.61-.558-2.178-.3-.579-.7-1.07-1.188-1.559-.49-.49-.98-.888-1.559-1.188-.568-.297-1.233-.499-2.178-.558C16.045.013 15.638 0 12.017 0zm0 2.16c3.556 0 3.98.013 5.39.071.852.039 1.313.181 1.62.301.408.158.7.347.999.646.3.3.488.591.646.999.12.307.262.768.301 1.62.058 1.41.071 1.834.071 5.39 0 3.556-.013 3.98-.071 5.39-.039.852-.181 1.313-.301 1.62-.158.408-.347.7-.646.999-.3.3-.591.488-.999.646-.307.12-.768.262-1.62.301-1.41.058-1.834.071-5.39.071-3.556 0-3.98-.013-5.39-.071-.852-.039-1.313-.181-1.62-.301-.408-.158-.7-.347-.999-.646-.3-.3-.488-.591-.646-.999-.12-.307-.262-.768-.301-1.62-.058-1.41-.071-1.834-.071-5.39 0-3.556.013-3.98.071-5.39.039-.852.181-1.313.301-1.62.158-.408.347-.7.646-.999.3-.3.591-.488.999-.646.307-.12.768-.262 1.62-.301 1.41-.058 1.834-.071 5.39-.071z" clip-rule="evenodd" />
						<path fill-rule="evenodd" d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zm0 10.18a4.001 4.001 0 1 1 0-8.003 4.001 4.001 0 0 1 0 8.003z" clip-rule="evenodd" />
						<circle cx="18.406" cy="5.594" r="1.44" />
					</svg>
				</a>

				<!-- Email Icon -->
				<a
					href="mailto:trinityengineeringsoc@gmail.com"
					class="group flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
					aria-label="Send us an email"
				>
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
					</svg>
				</a>
			</div>
			<p class="mt-4 text-gray-600">
				Follow us on social media for quick updates and news, or drop us an email with any questions or suggestions.
			</p>
		</div>
	</div>
</section>
