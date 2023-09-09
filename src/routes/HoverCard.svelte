<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';

	export let text: string;
	export let githubAccount: string;
	export let imageUrl: string;
	export let githubLinkPrefix = '';

	const githubBaseUrl = 'https://github.com';
	const githubUserUrl = `${githubBaseUrl}/${githubLinkPrefix}/${githubAccount}`;
</script>

<HoverCard.Root openDelay={150} closeDelay={150}>
	<HoverCard.Trigger
		href={githubUserUrl}
		target="_blank"
		rel="noreferrer noopener"
		class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black">
		<span class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-thin">
			<slot />
		</span>
	</HoverCard.Trigger>
	<HoverCard.Content class="w-80">
		<div class="flex space-x-4">
			<img
				class="inline-block h-14 rounded-xl"
				src={imageUrl}
				alt={`${githubAccount} logo`} />
			<div class="space-y-1">
				<h4 class="text-lg font-semibold">@{githubAccount}</h4>
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
