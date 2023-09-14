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


INSERT INTO projects (id, name, link, start_date, description)
VALUES 
  (1, 'Qwixx', 'https://github.com/Peter-512/Qwixx', '2022-02-11', 'A two-player dice game built in Java using JavaFX including statistics about the games that were played.'),
  (2, 'Qwixx website', 'https://github.com/Peter-512/Qwixx-website', '2022-05-06', 'The website for the Qwixx project.'),
  (3, 'Arduino projects', 'https://github.com/Peter-512/Arduino-projects', '2022-04-23', 'A few Ardunio projects using an Arduino shield and only using plain C, without the help of external libraries.'),
  (4, 'YouthCouncil', 'https://github.com/Peter-512/youthcouncil', '2023-02-06', 'A web application built in Java Spring. It is a multi-tenant CMS for youthcouncils in Belgian municipalities to organize themselves, ideas of members and communicate events like announcements or the status of action points.'),
  (5, 'Connect 4', 'https://github.com/Peter-512/Connect4', '2021-11-19', 'A Connect 4 console application game built in Java. Features a leaderboard, a simple AI and a save/load system.'),
  (6, 'Eirene', 'https://github.com/Peter-512/Eirene', '2022-09-19', 'A web application built in Java Spring'),
  (7, 'Sveltetower','https://github.com/Peter-512/sveltetower-gcloud', '2023-05-16', 'A sveltekit application deployed to Google Cloud Platform using Compute Instances and linked to a cloud postgres database via a private cloud network.'),
  (8, 'KdGG', 'https://github.com/Peter-512/kdgg', '2022-09-25', 'A web application built in Java Spring where users can join and chat on multiple channel. Depending on their role, they can manage channels.'),
  (9, 'Portfolio', 'https://github.com/Peter-512/peter-dx', '2023-09-06', 'This portfolio website. Built in Sveltekit and deployed to Vercel. Uses supabase as a database and checkly for uptime monitoring and E2E tests.');

INSERT INTO team_members (id, name)
VALUES 
  (1, 'Seifeldin Sabry'),
  (2, 'Elina Van der Taelen'),
  (3, 'Filip Nowak'),
  (4, 'Thomas Ellmenreich'),
  (5, 'Brandon Vu'),
  (6, 'Nova Dockx'),
  (7, 'Nova Ayhan'),
  (8, 'Paul Mocanu');

INSERT INTO project_team_members (project_id, team_member_id)
VALUES
  (1, 5),
  (1, 6),
  (1, 7),
  (2, 5),
  (2, 6),
  (2, 7),
  (4, 4),
  (4, 8),
  (5, 1),
  (6, 1),
  (6, 2),
  (6, 3),
  (7, 2),
  (7, 3);