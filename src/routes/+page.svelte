<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as i from '$lib/images/index';
	import HoverCard from './HoverCard.svelte';
	import Testimonial from './Testimonial.svelte';
	import { datacampLogo } from '$lib/logos';
	import profile from '$lib/images/profile-pic.png';
	import ImageViewer from './ImageViewer.svelte';

	const images: Array<{ src: string; alt: string }> = Object.values(i);
	// split images into 4 groups
	const imageGroups = images.reduce<{ src: string; alt: string }[][]>(
		(acc, curr, i) => {
			acc[i % 4].push(curr);
			return acc;
		},
		[[], [], [], []]
	);
	export let data;
	const { testimonials } = data;
</script>

<svelte:head>
	<title>Peter Buschenreiter</title>
	<meta
		name="description"
		content="This is my personal portfolio featuring various projects I've worked on, some testimonials from former colleagues and my skills." />
	<meta property="og:image" content={profile} />
	<meta property="og:title" content="hi, i'm peter 👋" />
	<meta property="og:description" content="come check out my portfolio!" />
	<meta property="og:url" content="https://peter-dx.vercel.app/" />
	<meta property="twitter:card" content="summary" />
</svelte:head>

<div class="flex flex-col gap-3">
	<h1 class="text-2xl">hi, i'm peter 👋</h1>
	<p class="text-gray-400">
		I am a highly motivated and energetic person, always eager to learn new skills. After my
		first internships in the field, I am excited to expand on my experience.
	</p>

	<div class="my-5 grid grid-cols-2 gap-4 md:grid-cols-4">
		{#each imageGroups as images}
			<div class="grid gap-4">
				{#each images as image}
					<ImageViewer {...image} />
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

	<h1 class="text-center text-2xl">what others say about me 🤩</h1>

	<div class="flex flex-col gap-4">
		{#each testimonials as testimonial, index (index)}
			<Testimonial placement={index % 2 ? 'left' : 'right'} {...testimonial} />
		{/each}
	</div>
</div>
