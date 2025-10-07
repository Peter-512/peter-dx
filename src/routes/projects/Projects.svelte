<script lang='ts'>
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import HoverCard from '../HoverCard.svelte';
	import { format } from 'date-fns';
	import { GithubLogo } from 'radix-icons-svelte';
	import { Button } from '$lib/components/ui/button';
	import { getProjects } from './projects.remote';

	const projects = await getProjects();
</script>

{#each projects as { link, name, start_date, description, team_members, skills } (name)}
	<Card.Root>
		<Card.Header>
			<div class='flex justify-between'>
				<Card.Title class='flex gap-2'>
					<Button variant='link' class='px-0' href={link}>
						<GithubLogo size={24} tabindex='-1' />
					</Button>
					<span class='self-center'>{name}</span>
				</Card.Title>
				<Card.Description>
					{format(new Date(start_date), 'MMMM, do yyyy')}
				</Card.Description>
			</div>
		</Card.Header>
		<Card.Content>
			<div class='flex'>
				{description}
				<div class='ms-auto flex flex-shrink flex-col space-y-[-5px] ps-4'>
					{#each team_members as team_member}
						<HoverCard
							placement='left'
							githubAccount={team_member.github_link}
							imageUrl={team_member.image_url}
							text={team_member.name}
							kind='avatar' />
					{/each}
				</div>
			</div>
		</Card.Content>
		<Card.Footer>
			<div class='flex flex-wrap gap-2'>
				{#each skills as { color, name: skillName } (skillName)}
					<Badge
						class='bg-{color}-200 hover:bg-{color}-200/80 text-{color}-800'>
						{skillName}
					</Badge>
				{/each}
			</div>
		</Card.Footer>
	</Card.Root>
{/each}
