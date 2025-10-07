<div class='w-full'>
	<div class='mx-auto max-w-5xl'>
		<div class='h-52 rounded-xl border border-neutral-800 p-5 shadow-2xl'>
			<div class='animate-pulse h-full'>
				<!-- Header row: left brand + title, right date -->
				<div class='flex items-center justify-between gap-4'>
					<div class='flex items-center gap-4'>
						<div class='h-8 w-8 rounded-full bg-neutral-800'></div>
						<div class='h-5 w-[180px] sm:w-[220px] rounded bg-neutral-800'></div>
					</div>
					<div class='h-5 w-28 rounded-full bg-neutral-800'></div>
				</div>

				<!-- Body: description + chips on the left, avatar on the right -->
				<div class='mt-4 flex h-[calc(100%-2.25rem)] items-center gap-6'>
					<!-- Left content -->
					<div class='flex-1'>
						<div class='space-y-2'>
							<div class='h-4 w-full rounded bg-neutral-800'></div>
							<div class='h-4 w-[92%] rounded bg-neutral-800'></div>
							<div class='h-4 w-[85%] rounded bg-neutral-800'></div>
						</div>

						<div class='mt-4 flex flex-wrap items-center gap-3'>
							{#each { length: 5 } as _, i}
								<div class='h-5 w-16 rounded-md bg-neutral-800'></div>
							{/each}
						</div>
					</div>

					<!-- Avatar on the right, aligned with description block -->
					<div class='flex items-center justify-center'>
						<div class='h-14 w-14 rounded-full bg-neutral-800'></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>