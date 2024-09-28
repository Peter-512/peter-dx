<script>
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import HoverCard from '../HoverCard.svelte';
	import { format } from 'date-fns';
	import { GithubLogo } from 'radix-icons-svelte';
	import { Button } from '$lib/components/ui/button/index';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="m-auto flex max-w-3xl flex-col gap-3">
	<h1 class="mb-4 text-2xl">projects i worked on 🛠</h1>
	{#each data.projects as project}
		<Card.Root>
			<Card.Header>
				<div class="flex justify-between">
					<Card.Title class="flex gap-2">
						<Button variant="link" class="px-0" href={project.link}>
							<GithubLogo size={24} tabindex="-1" />
						</Button>
						<span class="self-center">{project.name}</span>
					</Card.Title>
					<Card.Description>
						{format(new Date(project.start_date), 'MMMM, do yyyy')}
					</Card.Description>
				</div>
			</Card.Header>
			<Card.Content>
				<div class="flex">
					{project.description}
					<div class="ms-auto flex flex-shrink flex-col space-y-[-5px] ps-4">
						{#each project.team_members as team_member}
							<HoverCard
								placement="left"
								githubAccount={team_member.github_link}
								imageUrl={team_member.image_url}
								text={team_member.name}
								kind="avatar" />
						{/each}
					</div>
				</div>
			</Card.Content>
			<Card.Footer>
				<div class="flex flex-wrap gap-2">
					{#each project.skills as skill}
						<Badge
							class="bg-{skill.color}-200 hover:bg-{skill.color}-200/80 text-{skill.color}-800">
							{skill.name}
						</Badge>
					{/each}
				</div>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
