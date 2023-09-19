<script lang="ts">
	import { EnvelopeClosed } from 'radix-icons-svelte';

	export let href: string;
</script>

<EnvelopeClosed class="mr-2 inline-block h-6 w-6" />
<a {href}><slot /></a>
