<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { PageData } from './$types';
	import Testimonial from '../../Testimonial.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>LOR by {data.name}</title>
</svelte:head>

<Testimonial
	name={data.name}
	description={data.description}
	imageSrc={data.image_url}
	slug={data.slug}
	company={data.company}
	companyLogoUrl={data.company_logo_url}
	email={data.email}>
	{data.quote}
</Testimonial>

<Separator class="my-5" />
<section class="whitespace-break-spaces">
	{data.content}
</section>
