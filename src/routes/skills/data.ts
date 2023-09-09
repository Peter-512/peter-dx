type Skill = {
	name: string;
	level: 'beginner' | 'intermediate' | 'advanced';
} & (
	| {
			type: 'language' | 'framework' | 'library' | 'other';
	  }
	| {
			type: 'tool';
			subType:
				| 'database'
				| 'deployment'
				| 'testing'
				| 'observability'
				| 'version control'
				| 'other';
	  }
);

export const skills: Skill[] = [
	{
		name: 'HTML5',
		level: 'advanced',
		type: 'language'
	},
	{
		name: 'CSS3',
		level: 'intermediate',
		type: 'language'
	},
	{
		name: 'JavaScript',
		level: 'intermediate',
		type: 'language'
	},
	{
		name: 'TypeScript',
		level: 'intermediate',
		type: 'language'
	},
	{
		name: 'React',
		level: 'intermediate',
		type: 'library'
	},
	{
		name: 'Svelte',
		level: 'advanced',
		type: 'framework'
	},
	{
		name: 'GraphQL',
		level: 'beginner',
		type: 'tool',
		subType: 'database'
	},
	{
		name: 'Heap',
		level: 'beginner',
		type: 'tool',
		subType: 'observability'
	},
	{
		name: 'Git',
		level: 'intermediate',
		type: 'tool',
		subType: 'version control'
	},
	{
		name: 'GitHub',
		level: 'intermediate',
		type: 'tool',
		subType: 'version control'
	},
	{
		name: 'NestJS',
		level: 'beginner',
		type: 'framework'
	},
	{
		name: 'Split.io',
		level: 'beginner',
		type: 'tool',
		subType: 'other'
	},
	{
		name: 'Bull',
		level: 'beginner',
		type: 'tool',
		subType: 'other'
	},
	{
		name: 'Java',
		level: 'advanced',
		type: 'language'
	},
	{
		name: 'Spring',
		level: 'intermediate',
		type: 'framework'
	},
	{
		name: 'Hibernate',
		level: 'intermediate',
		type: 'framework'
	},
	{
		name: 'Python',
		level: 'intermediate',
		type: 'language'
	},
	{
		name: 'C',
		level: 'beginner',
		type: 'language'
	},
	{
		name: 'bash',
		level: 'intermediate',
		type: 'language'
	},
	{
		name: 'PostgreSQL',
		level: 'intermediate',
		type: 'language'
	},
	{
		name: 'Cypher (Neo4j)',
		level: 'beginner',
		type: 'language'
	},
	{
		name: 'Microsoft SQL Server',
		level: 'intermediate',
		type: 'language'
	},
	{
		name: 'Vue',
		level: 'beginner',
		type: 'framework'
	},
	{
		name: 'Talend Open Studio',
		level: 'beginner',
		type: 'tool',
		subType: 'database'
	},
	{
		name: 'Docker',
		level: 'intermediate',
		type: 'tool',
		subType: 'deployment'
	},
	{
		name: 'Scrum',
		level: 'intermediate',
		type: 'other'
	},
	{
		name: 'Figma',
		level: 'intermediate',
		type: 'tool',
		subType: 'other'
	},
	{
		name: 'Gitlab',
		level: 'advanced',
		type: 'tool',
		subType: 'version control'
	},
	{
		name: 'CircleCI',
		level: 'intermediate',
		type: 'tool',
		subType: 'deployment'
	},
	{
		name: 'Sentry',
		level: 'beginner',
		type: 'tool',
		subType: 'observability'
	},
	{
		name: 'Google Cloud Platform',
		level: 'intermediate',
		type: 'tool',
		subType: 'deployment'
	},
	{
		name: 'Vercel',
		level: 'intermediate',
		type: 'tool',
		subType: 'deployment'
	},
	{
		name: 'Subabase',
		level: 'intermediate',
		type: 'tool',
		subType: 'database'
	},
	{
		name: 'Jest',
		level: 'intermediate',
		type: 'tool',
		subType: 'testing'
	},
	{
		name: 'Cypress',
		level: 'beginner',
		type: 'tool',
		subType: 'testing'
	},
	{
		name: 'JUnit',
		level: 'intermediate',
		type: 'tool',
		subType: 'testing'
	}
];
