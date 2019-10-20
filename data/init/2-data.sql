insert into resume_summary (id, firstName,name, email, imageUrl, description ) VALUES (1, 'Bo', 'Vandersteene', 'bo@reibo.io', '', 'Bo is a software engineer currently living in Belgium. She likes writing code and solve complex problems. She is passionate about front-end, testing and the latest trends in Computer Science. When not doing geek things, Bo spend some time with her husband and two kids, or fighting fires (she is also a volunteer firefighter).');

insert into resume_education (id, course, school, startDate, endDate) VALUES (1 ,   'NestJS Workshop: Create a backend and frontend app in no time with NestJS and Angular', 'Javascript conference', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

insert into resume_technology (id, name, level) VALUES (1, 'Javascript', 5);
insert into resume_technology (id, name, level) VALUES (2, 'Angular', 4);
insert into resume_technology (id, name, level) VALUES (3, 'NestJs', 3);

insert into resume_job (id, current, title, company, description, startDate) VALUES (1, true, 'Frontend Software Engineer', 'reibo.io', 'Develop and consult some awesome frontend code', CURRENT_TIMESTAMP );

insert into resume_job_technology (job_id, technology_id) VALUES (1, 1);
insert into resume_job_technology (job_id, technology_id) VALUES (1, 2);
insert into resume_job_technology (job_id, technology_id) VALUES (1, 3);
