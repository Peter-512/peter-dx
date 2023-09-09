INSERT INTO testimonials (slug, name, content, email, received_at, company, company_logo_url, image_url, description, quote ) 
VALUES (
'tim-sangster', 
'Tim Sangster', 
'Dear Sir/Madam

I am writing to recommend Peter Buschenreiter. He worked with us at DataCamp as a software engineer intern during the summer of 2022 and reported to me, his engineering manager.

During his time in my team Peter was able to deliver results consistently, he started by working on small front-end components and by the end of his 9 weeks internship he was able to work on any task planned for the team. Ranging from complex bugs in an API to multi-step modals with complex state.

I’ve always put a premium on self reliance and Peter showed excellent grit in researching issues himself before asking for help from the team. He kept refining this balance of researching versus asking for help throughout his internship which showed his effort to integrate with the team and be productive at the same time.

While we have a completely flexible work from home policy, Peter made the effort multiple times a week to travel to the office, more than an hour each way for him, showing his commitment to getting the most out of his internship and getting to know his team.
I greatly enjoyed working with Peter and would not hesitate to hire him in any capacity in the future.

Feel free to contact me at tim@sangster.be 
Thank you

Tim Sangster 
Engineering Manager', 
'tim@sangster.be', 
'2022-09-02', 
'DataCamp', 
'https://ikbdmyijzonnuyehurhr.supabase.co/storage/v1/object/public/images/datacamp-logo.webp?t=2023-09-07T16%3A28%3A28.501Z', 
'https://github.com/timsangster.png', 
'Associate Engineering Manager at DataCamp during my first internship in 2022', 
'I''ve always put a premium on self reliance and Peter showed excellent grit in researching issues himself before asking for help from the team.');


insert into
  skills (
    name,
    level,
    type,
    sub_type
  )
values
  ('HTML5', 'advanced', 'language', null),
  ('CSS3', 'intermediate', 'language', null),
  ('JavaScript', 'intermediate', 'language', null),
  ('TypeScript', 'intermediate', 'language', null),
  ('React', 'intermediate', 'library', null),
  ('Svelte', 'advanced', 'framework', null),
  ('GraphQL', 'beginner', 'tool', 'database'),
  ('Heap', 'beginner', 'tool', 'observability'),
  ('Git', 'intermediate', 'tool', 'version control'),
  (
    'GitHub',
    'intermediate',
    'tool',
    'version control'
  ),
  ('NestJS', 'beginner', 'framework', null),
  ('Split.io', 'beginner', 'tool', 'other'),
  ('Bull', 'beginner', 'tool', 'other'),
  ('Java', 'advanced', 'language', null),
  ('Spring', 'intermediate', 'framework', null),
  ('Hibernate', 'intermediate', 'framework', null),
  ('Python', 'intermediate', 'language', null),
  ('C', 'beginner', 'language', null),
  ('Bash', 'intermediate', 'language', null),
  ('PostgreSQL', 'intermediate', 'language', null),
  ('Cypher (Neo4j)', 'beginner', 'language', null),
  (
    'Microsoft SQL Server',
    'intermediate',
    'language',
    null
  ),
  ('Vue', 'beginner', 'framework', null),
  (
    'Talend Open Studio',
    'beginner',
    'tool',
    'database'
  ),
  ('Docker', 'intermediate', 'tool', 'deployment'),
  ('Scrum', 'intermediate', 'other', null),
  ('Figma', 'intermediate', 'tool', 'other'),
  ('Gitlab', 'advanced', 'tool', 'version control'),
  ('CircleCI', 'intermediate', 'tool', 'deployment'),
  ('Sentry', 'beginner', 'tool', 'observability'),
  (
    'Google Cloud Platform',
    'intermediate',
    'tool',
    'deployment'
  ),
  ('Vercel', 'intermediate', 'tool', 'deployment'),
  ('Subabase', 'intermediate', 'tool', 'database'),
  ('Jest', 'intermediate', 'tool', 'testing'),
  ('Cypress', 'beginner', 'tool', 'testing'),
  ('JUnit', 'intermediate', 'tool', 'testing');