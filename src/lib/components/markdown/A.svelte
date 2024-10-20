<script lang='ts'>
	interface Props {
		href: string;
		text: string;
		title?: string | undefined;
	}

	let { href, text, title = undefined }: Props = $props();

	const parser = new DOMParser();
	const parsedHref = parser.parseFromString(href, 'text/html').body.innerText;
</script>

<a class='text-gray-400 underline hover:underline-offset-4' href={parsedHref} {title}
>{@html text}</a>
