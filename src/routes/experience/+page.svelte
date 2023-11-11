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

	type Job = {
		title: string;
		company: string;
		detail: string;
		start: Date;
		end: Date;
	};
	const jobs: Job[] = [
		{
			title: 'Software Engineer Intern',
			company: 'DataCamp',
			detail: 'Part of the Enterprise Integration team, creating seamless experiences all around integrations with LMS and LXP systems through SAML/SSO etc. As part of a cross-functional project, I helped port tutorials coming from a CMS from a Next app to a React app.',
			start: new Date(2023, 6),
			end: new Date(2023, 8)
		},
		{
			title: 'Software Engineer Intern',
			company: 'DataCamp',
			detail: 'Part of the Content Platform team, enabling multiple technologies on the DataCamp learning platform for Instructors to create courses for such as Python, R, Docker, Julia, etc., creating new exercise types to enable more engaging content as well as maintaining the custom editor for all of DataCamp\'s courses.',
			start: new Date(2022, 7),
			end: new Date(2022, 9)
		},
		{
			title: 'Sales Associate',
			company: 'Conrad Electronic Group',
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
	<Timeline position='alternate' style='padding: 0'>
		{#each jobs as job}
			<TimelineItem>
				<TimelineOppositeContent style='margin: 8px 0' slot='opposite-content'>
					<p class='text-muted-foreground mb-4'>{job.company}</p>
					<p class='text-muted-foreground'>{format(job.start, 'MMM yyyy')}
						- {format(job.end, 'MMM yyyy')}</p>
					<p class='text-muted-foreground'>{formatDuration(intervalToDuration({
						start: job.start,
						end: job.end
					}))}</p>
				</TimelineOppositeContent>
				<TimelineSeparator style='margin: 0 16px'>
					<TimelineDot style='background-color: yellow' />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style='margin: 8px 0'>
					<h3 class='font-bold text-xl mb-4'>{job.title}</h3>
					<p class='mb-12'>{job.detail}</p>
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</section>
