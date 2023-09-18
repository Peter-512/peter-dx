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
'I''ve always put a premium on self reliance and Peter showed excellent grit in researching issues himself before asking for help from the team.'),
(
  'chris-ramakers',
  'Chris Ramakers',
  'To Whom It May Concern,

I am writing to highly recommend Peter Buschenreiter for any software engineering position he might be seeking in the future. As an Engineering Manager at DataCamp, I had the pleasure of supervising Peter during his 2-month internship with our organization in 2023. In this short period, he has exceeded our expectations and showcased a commendable dedication and excellent skills in software engineering.

His tenure at DataCamp was characterized by a number of remarkable traits:

1. Autonomy: He displayed an outstanding balance between delivering product increments independently and understanding when to seek assistance.

2. Collaboration: His intense collaboration across different functions, especially with other roles and product teams, was instrumental in ensuring our projects'' success.

3. Adaptability: Peter has expressed a clear preference for frontend development. However, when presented with backend oriented tasks, he tackles them head-on. While he occasionally required support from colleagues on backend tasks, what stood out was his willingness to take on challenges even outside his primary domain of expertise or in unfamiliar technologies.

4. Professionalism: Peter was not only a technically sound engineer but also a genuinely pleasant individual to work alongside. His mature and professional approach made him a valuable asset to our team.

5. Effective Communication: His clarity in communication was evident, both in written and verbal forms. Moreover, his confidence and initiative in representing our team during departmental meetings, like presenting sprint reviews or announcing product launches, were notable.
It is rare to find interns with the level of dedication, skill, and professionalism that Peter brought to our team at DataCamp. I firmly believe he has a promising career ahead and will be an invaluable asset to any team or organization he chooses to join.
Please feel free to contact me directly if you have any further questions regarding Peter''s qualifications and achievements.

Sincerely,

Chris Ramakers
Engineering Manager, DataCamp',
'chris.ramakers@datacamp.com',
'2023-09-18',
'DataCamp',
'https://ikbdmyijzonnuyehurhr.supabase.co/storage/v1/object/public/images/datacamp-logo.webp?t=2023-09-07T16%3A28%3A28.501Z', 
'https://github.com/chrisramakers.png', 
'Engineering Manager at DataCamp during my second internship in 2023',
'It is rare to find interns with the level of dedication, skill, and professionalism that Peter brought to our team at DataCamp.'
);


insert into
  skills (
    id,
    name,
    level,
    type,
    sub_type,
    color
  )
values
(1, 'HTML5', 'advanced', 'language', null, 'red'),
(2, 'CSS3', 'intermediate', 'language', null, 'orange'),
(3, 'JavaScript', 'intermediate', 'language', null, 'yellow'),
(4, 'TypeScript', 'intermediate', 'language', null, 'blue'),
(5, 'React', 'intermediate', 'library', null, 'sky'),
(6, 'Svelte', 'advanced', 'framework', null, 'red'),
(7, 'GraphQL', 'beginner', 'tool', 'database', 'pink'),
(8, 'Heap', 'beginner', 'tool', 'observability', 'emerald'),
(9, 'Git', 'intermediate', 'tool', 'version control', 'orange'),
(10, 'GitHub', 'intermediate', 'tool', 'version control', 'stone'),
(11, 'NestJS', 'beginner', 'framework', null, 'rose'),
(12, 'Split.io', 'beginner', 'tool', 'other', 'cyan'),
(13, 'Bull', 'beginner', 'tool', 'other', 'indigo'),
(14, 'Java', 'advanced', 'language', null, 'sky'),
(15, 'Spring', 'intermediate', 'framework', null, 'green'),
(16, 'Hibernate', 'intermediate', 'framework', null, 'amber'),
(17, 'Python', 'intermediate', 'language', null, 'yellow'),
(18, 'C', 'beginner', 'language', null, 'indigo'),
(19, 'Bash', 'intermediate', 'language', null, 'zinc'),
(20, 'PostgreSQL', 'intermediate', 'language', null, 'gray'),
(21, 'Cypher (Neo4j)', 'beginner', 'language', null, 'blue'),
(22, 'Microsoft SQL Server', 'intermediate', 'language', null, 'red'),
(23, 'Vue', 'beginner', 'framework', null, 'emerald'),
(24, 'Talend Open Studio', 'beginner', 'tool', 'database', 'pink'),
(25, 'Docker', 'intermediate', 'tool', 'deployment', 'blue'),
(26, 'Scrum', 'intermediate', 'other', null, 'teal'),
(27, 'Figma', 'intermediate', 'tool', 'other', 'purple'),
(28, 'Gitlab', 'advanced', 'tool', 'version control', 'orange'),
(29, 'CircleCI', 'intermediate', 'tool', 'deployment', 'green'),
(30, 'Sentry', 'beginner', 'tool', 'observability', 'violet'),
(31, 'Google Cloud Platform', 'intermediate', 'tool', 'deployment', 'neutral'),
(32, 'Vercel', 'intermediate', 'tool', 'deployment', 'fuchsia'),
(33, 'Subabase', 'intermediate', 'tool', 'database', 'green'),
(34, 'Jest', 'intermediate', 'tool', 'testing', 'orange'),
(35, 'Cypress', 'beginner', 'tool', 'testing', 'teal'),
(36, 'JUnit', 'intermediate', 'tool', 'testing', 'red');


INSERT INTO projects (id, name, link, start_date, description)
VALUES 
  (1, 'Qwixx', 'https://github.com/Peter-512/Qwixx', '2022-02-11', 'A two-player dice game built in Java using JavaFX including statistics about the games that were played.'),
  (2, 'Qwixx website', 'https://github.com/Peter-512/Qwixx-website', '2022-05-06', 'The website for the Qwixx project.'),
  (3, 'Arduino projects', 'https://github.com/Peter-512/Arduino-projects', '2022-04-23', 'A few Ardunio projects using an Arduino shield and only using plain C, without the help of external libraries.'),
  (4, 'YouthCouncil', 'https://github.com/Peter-512/youthcouncil', '2023-02-06', 'A web application built in Java Spring. It is a multi-tenant CMS for youthcouncils in Belgian municipalities to organize themselves, ideas of members and communicate events like announcements or the status of action points.'),
  (5, 'Connect 4', 'https://github.com/Peter-512/Connect4', '2021-11-19', 'A Connect 4 console application game built in Java. Features a leaderboard, a simple AI and a save/load system.'),
  (6, 'Eirene', 'https://github.com/Peter-512/Eirene', '2022-09-19', 'A web application built in Java Spring, reading meditation and focus data from a headband and displaying it in a realtime dashboard. It also recorded multiple metrics about the user''s environment and made them aware of what could have caused a loss of focus.'),
  (7, 'Sveltetower','https://github.com/Peter-512/sveltetower-gcloud', '2023-05-16', 'A sveltekit application deployed to Google Cloud Platform using Compute Instances and linked to a cloud postgres database via a private cloud network.'),
  (8, 'KdGG', 'https://github.com/Peter-512/kdgg', '2022-09-25', 'A web application built in Java Spring where users can join and chat on multiple channel. Depending on their role, they can manage channels.'),
  (9, 'Portfolio', 'https://github.com/Peter-512/peter-dx', '2023-09-06', 'This portfolio website. Built in Sveltekit and deployed to Vercel. Uses supabase as a database and checkly for uptime monitoring and E2E tests.');

INSERT INTO team_members (id, name, github_link, image_url)
VALUES 
  (1, 'Seifeldin Sabry', 'https://github.com/Seifeldin-Sabry', 'https://github.com/Seifeldin-Sabry.png'),
  (2, 'Elina Van der Taelen', 'https://github.com/ItzMeLeo', 'https://github.com/ItzMeLeo.png'),
  (3, 'Filip Nowak', 'https://github.com/fibleep', 'https://github.com/fibleep.png'),
  (4, 'Thomas Ellmenreich', 'https://gitlab.com/thomas.ellmenreich', 'https://gitlab.com/uploads/-/system/user/avatar/10302630/avatar.png?width=400'),
  (5, 'Brandon Vu', 'https://github.com/Phuoung1', 'https://github.com/Phuoung1.png'),
  (6, 'Nova Dockx', 'https://gitlab.com/nova.dockx', 'https://gitlab.com/uploads/-/system/user/avatar/10253763/avatar.png?width=400'),
  (7, 'Nova Ayhan', 'https://gitlab.com/nova__es', 'https://gitlab.com/uploads/-/system/user/avatar/10310154/avatar.png?width=400'),
  (8, 'Paul Mocanu', 'https://gitlab.com/mocanupaul', 'https://secure.gravatar.com/avatar/3da797c2b3f32de2f629bce77f00aeaa?s=800&d=identicon');

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

INSERT INTO project_skills (project_id, skills_id)
VALUES
  (1, 14),
  (1, 9),
  (1, 28),
  (1, 19),
  (1, 20),
  (1, 26),
  (2, 1),
  (2, 2),
  (2, 3),
  (2, 9),
  (2, 19),
  (2, 26),
  (2, 28),
  (3, 9),
  (3, 28),
  (3, 18),
  (3, 14),
  (4, 1),
  (4, 2),
  (4, 3),
  (4, 9),
  (4, 14),
  (4, 15),
  (4, 16),
  (4, 19),
  (4, 20),
  (4, 26),
  (4, 28),
  (4, 31),
  (4, 36),
  (5, 1),
  (5, 2),
  (5, 9),
  (5, 14),
  (5, 19),
  (5, 20),
  (5, 26),
  (5, 28),
  (6, 1),
  (6, 2),
  (6, 4),
  (6, 9),
  (6, 14),
  (6, 15),
  (6, 16),
  (6, 19),
  (6, 20),
  (6, 26),
  (6, 28),
  (6, 36),
  (7, 6),
  (7, 20),
  (7, 19),
  (7, 9),
  (7, 28),
  (7, 31),
  (7, 2),
  (7, 4),
  (8, 1),
  (8, 2),
  (8, 4),
  (8, 9),
  (8, 14),
  (8, 15),
  (8, 16),
  (8, 20),
  (8, 28),
  (8, 36),
  (8, 25),
  (9, 2),
  (9, 4),
  (9, 6),
  (9, 9),
  (9, 20),
  (9, 25),
  (9, 10),
  (9, 32),
  (9, 33);