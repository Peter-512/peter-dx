<script lang="ts">
	import { createTable, Subscribe, Render } from 'svelte-headless-table';
	import {
		addSortBy,
		addPagination,
		addTableFilter,
		addSelectedRows,
		addHiddenColumns
	} from 'svelte-headless-table/plugins';
	import { readable } from 'svelte/store';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { CaretSort, ChevronDown } from 'radix-icons-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { cn } from '$lib/utils';
	import { Input } from '$lib/components/ui/input';
	import type { Skill } from '$lib/types/types';

	export let skills: Skill[];

	const table = createTable(readable(skills), {
		sort: addSortBy({
			initialSortKeys: [{ id: 'level', order: 'desc' }]
		}),
		page: addPagination({ initialPageSize: 15 }),
		filter: addTableFilter({
			fn: ({ filterValue, value }) =>
				value.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
		}),
		select: addSelectedRows(),
		hide: addHiddenColumns()
	});

	const columns = table.createColumns([
		table.column({
			header: 'Skill',
			accessor: 'name'
		}),
		table.column({
			header: 'Level',
			accessor: 'level',

			plugins: {
				sort: {
					compareFn: (left, right) => {
						const order = ['beginner', 'intermediate', 'advanced'];
						return order.indexOf(left) - order.indexOf(right);
					}
				}
			}
		}),
		table.column({
			header: 'Type',
			accessor: 'type',
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			header: 'Sub Type',
			accessor: 'sub_type',
			cell: ({ value }) => value ?? 'N/A',
			plugins: {
				sort: {
					disable: true
				},

				filter: {
					exclude: true
				}
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, flatColumns, pluginStates, rows } =
		table.createViewModel(columns);

	const { sortKeys } = pluginStates.sort;

	const { hiddenColumnIds } = pluginStates.hide;
	const ids = flatColumns.map((c) => c.id);
	let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

	$: $hiddenColumnIds = Object.entries(hideForId)
		.filter(([, hide]) => !hide)
		.map(([id]) => id);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	const { filterValue } = pluginStates.filter;

	type HideableCol = Exclude<keyof Skill, 'name' | 'id'>;
	const hideableCols: HideableCol[] = ['level', 'type', 'sub_type'];
</script>

<div class="w-full">
	<div class="mb-4 flex items-center gap-4">
		<Input
			class="max-w-sm"
			placeholder="Filter skills or level..."
			type="text"
			bind:value={$filterValue} />

		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button variant="outline" class="ml-auto" builders={[builder]}>
					Columns <ChevronDown class="ml-2 h-4 w-4" />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each flatColumns as col}
					{#if hideableCols.includes(col.id)}
						<DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
							{col.header}
						</DropdownMenu.CheckboxItem>
					{/if}
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>

	<div class="rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe
									attrs={cell.attrs()}
									let:attrs
									props={cell.props()}
									let:props>
									<Table.Head {...attrs}>
										{#if cell.id === 'level' || cell.id === 'name'}
											<Button variant="ghost" on:click={props.sort.toggle}>
												<Render of={cell.render()} />
												<CaretSort
													class={cn(
														$sortKeys[0]?.id === cell.id &&
															'text-foreground',
														'ml-2 h-4 w-4'
													)} />
											</Button>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>

			<Table.Body {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row {...rowAttrs}>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell {...attrs}>
										{#if cell.id === 'sub_type' && cell.value === null}
											<div class="capitalize text-gray-500">
												<Render of={cell.render()} />
											</div>
										{:else}
											<div class="capitalize">
												<Render of={cell.render()} />
											</div>
										{/if}
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>

	<div class="flex items-center justify-end space-x-2 py-4">
		<div class="flex-1 text-sm text-muted-foreground">
			{$rows.length} row(s) found
		</div>
		<Button
			variant="outline"
			size="sm"
			on:click={() => ($pageIndex = $pageIndex - 1)}
			disabled={!$hasPreviousPage}>Previous</Button>
		<Button
			variant="outline"
			size="sm"
			disabled={!$hasNextPage}
			on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button>
	</div>
</div>
