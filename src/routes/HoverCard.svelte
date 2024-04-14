<script lang='ts'>
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { scale } from 'svelte/transition';

	type Props = {
		text: string;
		githubAccount: string;
		imageUrl: string;
		githubLinkPrefix?: string;
		kind?: 'avatar' | 'default';
		placement?: 'top' | 'bottom' | 'left' | 'right';
	};

	const {
		text,
		githubAccount,
		imageUrl,
		githubLinkPrefix = '',
		kind = 'default',
		placement = 'bottom'
	}: Props = $props();

	const githubBaseUrl = 'https://github.com';
	const githubUserUrl = githubAccount.startsWith('https')
		? githubAccount
		: `${githubBaseUrl}/${githubLinkPrefix}/${githubAccount}`;
	// replace the beginning until the last slash with an empty string
	const content = githubAccount.replace(/.*\//, '');
</script>

<HoverCard.Root closeDelay={150} openDelay={150}>
	<HoverCard.Trigger
		class='rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black'
		href={githubUserUrl}
		rel='noreferrer noopener'
		target='_blank'>
		{#if kind === 'default'}
			<span
				class='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-thin'>
				<slot />
			</span>
		{:else if kind === 'avatar'}
			<Avatar.Root>
				<Avatar.Image src={imageUrl} alt={`${githubAccount} logo`} />
				<Avatar.Fallback>FB</Avatar.Fallback>
			</Avatar.Root>
		{/if}
	</HoverCard.Trigger>
	<HoverCard.Content class='w-80' side={placement} sideOffset={10} transition={scale}
					   transitionConfig={{ duration: 250 }}>
		<div class='flex space-x-4'>
			<img
				alt={`${githubAccount} logo`}
				class='inline-block h-14 rounded-xl'
				src={imageUrl} />
			<div class='space-y-1'>
				<h4 class='text-lg font-semibold'>@{content}</h4>
				<p class='text-sm text-balance'>{text}</p>
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
