<script lang="ts">
	import * as image from '$lib/images/index';
	const images: Array<{ src: string; alt: string }> = Object.values(image);
	// split images into 4 groups
	const imageGroups: { src: string; alt: string }[][] = images.reduce(
		(acc, curr, i) => {
			// @ts-ignore
			acc[i % 4].push(curr);
			return acc;
		},
		[[], [], [], []]
	);
</script>

<svelte:head>
	<title>Peter Buschenreiter</title>
</svelte:head>

<main class="mt-16 flex justify-center">
	<div class="mx-5 flex max-w-lg flex-1 flex-col gap-3">
		<h1 class="text-2xl">hi, i'm peter 👋</h1>
		<p class="text-gray-400">
			I am a highly motivated and energetic person, always eager to learn new skills. After my
			first internships in the field, I am excited to expand on my experience.
		</p>

		<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
			{#each imageGroups as images}
				<div class="grid gap-4">
					{#each images as image}
						<div class="overflow-hidden rounded-lg">
							<img
								class="h-full w-full object-cover transition-all duration-300 ease-in-out hover:scale-110"
								src={image.src}
								alt={image.alt} />
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</main>
