create table resume_summary
(
  id          int auto_increment primary key,
  firstName   varchar(255) not null,
  name        varchar(255) not null,
  email       varchar(255) not null,
  imageUrl    varchar(255),
  description text not null
);

create table resume_education
(
  id        int auto_increment primary key,
  course    varchar(255) not null,
  school    varchar(255) not null,
  startDate timestamp not null,
  endDate   timestamp null default null
);

create table resume_technology
(
  id     int auto_increment primary key,
  level  int not null,
  name   varchar(255) not null unique
);

create table resume_job
(
  id          int auto_increment primary key,
  company     varchar(255) not null,
  current     boolean not null default false,
  description varchar(255) not null,
  title       varchar(255) not null,
  startDate   timestamp not null,
  endDate     timestamp null default null
);

create table resume_job_technology (
  job_id         int not null,
  technology_id  int not null,
  primary key (job_id, technology_id),
  constraint fk_resume_technology_id  foreign key  (technology_id) references resume_technology(id),
  constraint fk_resume_job_id         foreign key  (job_id)        references resume_technology(id)
)
