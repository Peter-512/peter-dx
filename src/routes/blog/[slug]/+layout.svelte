<script>
	let { children } = $props();
</script>

<link
	crossorigin="anonymous"
	href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.css"
	integrity="sha384-K1E1xaIzoWihlXfiT5fcmLNabsnrl+dqc0errnRwtMX14tKRA9cCYNDGnXiHEZMs"
	rel="stylesheet" />

<article
	class="prose prose-invert prose-quoteless m-auto lg:prose-xl prose-h1:mb-2 prose-figcaption:text-center prose-li:my-1 prose-table:m-auto prose-table:max-w-4 prose-table:text-sm">
	{@render children?.()}
</article>
