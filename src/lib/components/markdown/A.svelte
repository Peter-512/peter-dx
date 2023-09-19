<script lang="ts">
	export let href: string;
	export let text: string;
	export let title: string | undefined = undefined;

	const parser = new DOMParser();
	const parsedHref = parser.parseFromString(href, 'text/html').body.innerText;
</script>

<a {title} href={parsedHref}>{@html text}</a>
