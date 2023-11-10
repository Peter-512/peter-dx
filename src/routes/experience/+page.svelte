<script lang='ts'>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
	import { format, formatDuration, intervalToDuration } from 'date-fns';

	type Option = {
		title: string;
		institution: string;
		detail?: string;
		start: Date;
		end: Date;
	};
	const options: Option[] = [
		{
			title: 'Software Engineer Intern',
			institution: 'DataCamp',
			detail: 'Part of the Enterprise Integration team, creating seamless experiences all around integrations with LMS and LXP systems through SAML/SSO etc. As part of a cross-functional project, I helped port tutorials coming from a CMS from a Next app to a React app.',
			start: new Date(2023, 6),
			end: new Date(2023, 8)
		},
		{
			title: 'Software Engineer Intern',
			institution: 'DataCamp',
			detail: 'Part of the Content Platform team, enabling multiple technologies on the DataCamp learning platform for Instructors to create courses for such as Python, R, Docker, Julia, etc., creating new exercise types to enable more engaging content as well as maintaining the custom editor for all of DataCamp\'s courses.',
			start: new Date(2022, 7),
			end: new Date(2022, 9)
		},
		{
			title: 'Sales Associate',
			institution: 'Conrad Electronic Group',
			detail: 'Participated in the Conrad Global Talent Program, a 1-year program for high-potential employees. I was part of the team that researched and created Figma mockups for a new B2B MyAccount platform.',
			start: new Date(2015, 10),
			end: new Date(2021, 6)
		}
	];
</script>
<section class='m-auto max-w-6xl'>
	<div class='max-w-3xl m-auto'>
		<h1 class='text-2xl mb-4'>places i worked at 💼</h1>
	</div>
	<Timeline position='alternate'>
		{#each options as option}
			<TimelineItem>
				<TimelineOppositeContent slot='opposite-content'>
					<p class='text-muted-foreground'>{format(option.start, 'MMM yyyy')}
						- {format(option.end, 'MMM yyyy')}</p>
					<section class='flex flex-col flex-1 h-full justify-between pt-5 pb-[4.5rem]'>
						<p class='text-muted-foreground'>{formatDuration(intervalToDuration({
							start: option.start,
							end: option.end
						}))}</p>
						<p class='text-muted-foreground'>{option.institution}</p>
					</section>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot style='background-color: yellow' />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<h3 class='font-bold text-xl mb-4'>{option.title}</h3>
					<p class='mb-12'>{option.detail}</p>
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</section>
