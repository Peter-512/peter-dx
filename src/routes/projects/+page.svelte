<script lang='ts'>
	import Projects from './Projects.svelte';
	import ProjectSkeleton from './ProjectSkeleton.svelte';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class='m-auto flex max-w-3xl flex-col gap-3'>
	<h1 class='mb-4 text-2xl'>projects i worked on 🛠</h1>
	<svelte:boundary>
		{#snippet pending()}
			{#each { length: 8 } as _}
				<ProjectSkeleton />
			{/each}
		{/snippet}
		<Projects />
	</svelte:boundary>
</div>
