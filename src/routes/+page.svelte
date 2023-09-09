<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as i from '$lib/images/index';
	import HoverCard from './HoverCard.svelte';
	import Testimonial from './Testimonial.svelte';
	import { datacampLogo } from '$lib/logos';

	const images: Array<{ src: string; alt: string }> = Object.values(i);
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

	<div class="my-5 grid grid-cols-2 gap-4 md:grid-cols-4">
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

	<p class="leading-relaxed text-gray-300">
		I spent the beginning of my career working in sales, where I learned how to communicate and
		put myself in the shoes of my customers.
		<br />
		In 2021, I decided to switch careers and started a bachelor in Applied Computer Science at Karel
		de Grote University College in Antwerp. During that time, I also managed to get two summer internships
		at <HoverCard
			githubAccount="datacamp"
			imageUrl={datacampLogo}
			text="build data and AI skills">
			DataCamp</HoverCard> as a Software Engineer.
		<br />
		In my free time, I like to climb and play video games.
	</p>

	<Separator decorative class="my-5" />

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
