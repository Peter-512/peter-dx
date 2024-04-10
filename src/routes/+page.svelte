<script lang='ts'>
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import HoverCard from './HoverCard.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import Testimonial from './Testimonial.svelte';
	import { datacampLogo } from '$lib/logos';
	import profile from '$lib/images/profile-pic.png';
	import Bouldering from '$lib/images/bouldering.jpg?enhanced';
	import Climbing1 from '$lib/images/climbing-1.jpg?enhanced';
	import Climbing2 from '$lib/images/climbing-2.jpg?enhanced';
	import Climbing3 from '$lib/images/climbing-3.jpg?enhanced';
	import Expo1 from '$lib/images/expo-1.jpg?enhanced';
	import Expo2 from '$lib/images/expo-2.jpg?enhanced';
	import Expo3 from '$lib/images/expo-3.jpg?enhanced';
	import Expo4 from '$lib/images/expo-4.jpg?enhanced';
	import Selfie from '$lib/images/selfie.jpg?enhanced';
	import Style from '$lib/images/style.jpeg?enhanced';
	import WeirdStare from '$lib/images/weird-stare.jpg?enhanced';
	import Hackathon from '$lib/images/hackathon.jpeg?enhanced';

	const imageGroups = [
		[
			{ src: Bouldering, alt: 'Bouldering with my sister at the boulderbar in Vienna' },
			{ src: Expo1, alt: 'Filip and I talking to a Cronos recruiter at Future Entrepreneurship 2022' },
			{ src: Selfie, alt: 'Selfie in Vienna on a nice summer day' }
		],
		[
			{ src: Climbing1, alt: 'Climbing outside in Vienna' },
			{ src: Expo2, alt: 'Filip and I solving a puzzle on his phone at Future Entrepreneurship 2022' },
			{ src: Style, alt: 'Philip and I trying out stylish coats' }
		],
		[
			{ src: Climbing2, alt: 'Checking out a climbing route while preparing for it' },
			{
				src: Expo3,
				alt: 'Seif, Filip and I listening to a live "silent" podcast at Future Entrepreneurship 2022'
			},
			{
				src: Hackathon,
				alt: 'Seif, Filip and I attending a hackathon sponsored by the European Commission about RAG using local LLMs on the Jean Zay supercomputer'
			}
		],
		[
			{ src: Climbing3, alt: 'Looking at the top of an outdoor climb' },
			{ src: Expo4, alt: 'Selfie of Seif, Filip and myself at Future Entrepreneurship 2022' },
			{ src: WeirdStare, alt: 'Surprisingly got photographed while strolling at the christmas market in Vienna' }
		]
	];

	export let data;
	const { testimonials } = data;
</script>

<svelte:head>
	<title>Peter Buschenreiter</title>
	<meta
		content="This is my personal portfolio featuring various projects I've worked on, some testimonials from former colleagues and my skills."
		name='description' />
	<meta content={profile} property='og:image' />
	<meta content="hi, i'm peter 👋" property='og:title' />
	<meta content='come check out my portfolio!' property='og:description' />
	<meta content='https://peter-dx.vercel.app/' property='og:url' />
	<meta content='summary' property='twitter:card' />
</svelte:head>

<div class='flex flex-col gap-3 max-w-3xl m-auto'>
	<h1 class='text-2xl'>hi, i'm peter 👋</h1>
	<p class='text-gray-400'>
		I am a highly motivated and energetic person, always eager to learn new skills. After my
		first internships in the field, I am excited to expand on my experience.
	</p>

	<div class='my-5 grid grid-cols-2 gap-4 md:grid-cols-4'>
		{#each imageGroups as images}
			<div class='grid gap-4'>
				{#each images as image}
					<Dialog.Root>
						<Dialog.Trigger class='focus:outline-gray-200'>
							<div class='h-full overflow-hidden rounded-lg'>
								<enhanced:img
									alt={image.alt}
									class='h-full w-full cursor-pointer object-cover transition-all duration-300 ease-in-out hover:scale-110'
									src={image.src} />
							</div>
						</Dialog.Trigger>
						<Dialog.Content>
							<enhanced:img alt={image.alt} class='h-full w-full object-cover rounded-md'
										  src={image.src} />
							<Dialog.Footer>
								<p>
									{image.alt}
								</p>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog.Root>
				{/each}
			</div>
		{/each}
	</div>

	<p class='leading-relaxed text-gray-300'>
		I spent the beginning of my career working in sales, where I learned how to communicate and
		put myself in the shoes of my customers.
		<br />
		In 2021, I decided to switch careers and started a bachelor in Applied Computer Science at Karel
		de Grote University College in Antwerp. During that time, I also managed to get two summer internships
		at
		<HoverCard
			githubAccount='datacamp'
			imageUrl={datacampLogo}
			text='build data and AI skills'>
			DataCamp
		</HoverCard>
		as a Software Engineer.
		<br />
		In my free time, I like to climb and play video games.
	</p>

	<Separator class='my-5' decorative />

	<h1 class='text-center text-2xl'>what others say about me 🤩</h1>

	<div class='flex flex-col gap-4'>
		{#each testimonials as testimonial, index (index)}
			<Testimonial placement={index % 2 ? 'left' : 'right'} {...testimonial} />
		{/each}
	</div>
</div>
