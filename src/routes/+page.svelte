<script lang="ts">
	import * as image from '$lib/images/index';
	import Testimonial from './Testimonial.svelte';
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

<div class=" flex flex-col gap-3">
	<h1 class="text-2xl">hi, i'm peter 👋</h1>
	<p class="text-gray-400">
		I am a highly motivated and energetic person, always eager to learn new skills. After my
		first internships in the field, I am excited to expand on my experience.
	</p>

	<div class="my-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
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

	<Testimonial
		placement="left"
		name="Tim Sangster"
		slug="tim-sangster"
		description="Associate Engineering Manager at DataCamp during my first internship in 2022"
		imageSrc="https://github.com/timsangster.png">
		I've always put a premium on self reliance and Peter showed excellent grit in researching
		issues himself before asking for help from the team.
	</Testimonial>
</div>
