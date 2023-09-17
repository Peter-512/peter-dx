<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';

	export let src: string;
	export let alt: string;
</script>

<Dialog.Root>
	<Dialog.Trigger class="focus:outline-gray-200">
		<div class="overflow-hidden rounded-lg">
			<img
				class="h-full w-full cursor-pointer object-cover transition-all duration-300 ease-in-out hover:scale-110"
				{src}
				{alt} />
		</div>
	</Dialog.Trigger>
	<Dialog.Content>
		<img class="h-full w-full object-cover" {src} {alt} />
		<Dialog.Footer>
			<p>
				{alt}
			</p>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
