<script lang='ts'>
	export let href: string;
	export let text: string;
	export let title: string | undefined = undefined;

	const parser = new DOMParser();
	const parsedHref = parser.parseFromString(href, 'text/html').body.innerText;
</script>

<a class='text-gray-400 underline hover:underline-offset-4' href={parsedHref} {title}
>{@html text}</a>
