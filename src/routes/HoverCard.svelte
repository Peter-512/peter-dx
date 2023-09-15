<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as Avatar from '$lib/components/ui/avatar';

	export let text: string;
	export let githubAccount: string;
	export let imageUrl: string;
	export let githubLinkPrefix = '';
	export let kind: 'avatar' | 'default' = 'default';
	export let placement:
		| 'top'
		| 'top-start'
		| 'top-end'
		| 'right'
		| 'right-start'
		| 'right-end'
		| 'bottom'
		| 'bottom-start'
		| 'bottom-end'
		| 'left'
		| 'left-start'
		| 'left-end' = 'bottom';

	const githubBaseUrl = 'https://github.com';
	const githubUserUrl = githubAccount.startsWith('https')
		? githubAccount
		: `${githubBaseUrl}/${githubLinkPrefix}/${githubAccount}`;
	// replace the beginning until the last slash with an empty string
	const content = githubAccount.replace(/.*\//, '');
</script>

<HoverCard.Root positioning={{ placement }} openDelay={150} closeDelay={150}>
	<HoverCard.Trigger
		href={githubUserUrl}
		target="_blank"
		rel="noreferrer noopener"
		class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black">
		{#if kind === 'default'}
			<span
				class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-thin">
				<slot />
			</span>
		{:else if kind === 'avatar'}
			<Avatar.Root>
				<Avatar.Image src={imageUrl} alt={`${githubAccount} logo`} />
				<Avatar.Fallback>FB</Avatar.Fallback>
			</Avatar.Root>
		{/if}
	</HoverCard.Trigger>
	<HoverCard.Content class="w-80">
		<div class="flex space-x-4">
			<img
				class="inline-block h-14 rounded-xl"
				src={imageUrl}
				alt={`${githubAccount} logo`} />
			<div class="space-y-1">
				<h4 class="text-lg font-semibold">@{content}</h4>
				<p class="text-sm">{text}</p>
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>

<style>
	div div p {
		text-wrap: balance;
	}
</style>
