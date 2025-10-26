<script lang='ts'>
	import { Skeleton } from '$lib/components/ui/skeleton';
	import * as Card from '$lib/components/ui/card';
</script>

<div class='w-full'>
	<Card.Root>
		<Card.Header>
			<div class='flex justify-between'>
				<Card.Title class='flex gap-2 items-center'>
					<Skeleton class='h-8 w-8 rounded-full' />
					<Skeleton class='h-5 w-[180px] sm:w-[220px] rounded' />
				</Card.Title>
				<Card.Description as='div'>
					<Skeleton class='h-5 w-28 rounded-full' />
				</Card.Description>
			</div>
		</Card.Header>
		<Card.Content as='div'>
			<div class='flex'>
				<div class='flex flex-1 flex-col gap-2'>
					<Skeleton class='h-4 w-full rounded' />
					<Skeleton class='h-4 w-[92%] rounded' />
					<Skeleton class='h-4 w-[85%] rounded' />
				</div>
				<div class='ms-auto flex flex-shrink flex-col space-y-[-5px] ps-4'>
					{#each { length: 2 } as _, i}
						<Skeleton class='h-10 w-10 rounded-full' />
					{/each}
				</div>
			</div>
		</Card.Content>
		<Card.Footer>
			<div class='flex flex-wrap gap-2'>
				{#each { length: 5 } as _, i}
					<Skeleton class='h-5 w-16 rounded-md' />
				{/each}
			</div>
		</Card.Footer>
	</Card.Root>
</div>