import { Education, Job, Summary, Technology } from '@rbo-resume/api-interfaces';

export const educations: Education[] = [
  {
    course:
      'NestJS Workshop: Create a backend and frontend app in no time with NestJS and Angular',
    school: 'Javascript conference',
    startDate: new Date()
  }
];

export const technologies: Technology[] = [
  { id: 1, name: 'Javascript', level: 5 },
  { id: 2, name: 'Angular', level: 4 },
  { id: 3, name: 'NestJs', level: 3 }
];

export const jobs: Job[] = [
  {
    current: true,
    title: 'Frontend Software Engineer',
    company: 'reibo.io',
    description: 'Develop and consult some awesome frontend code',
    startDate: new Date(2016, 1, 1),
    technologies: technologies
  }
];

export const summary: Summary = {
  firstName: 'Bo',
  name: 'Vandersteene',
  email: 'bo@reibo.io',
  description:
    'Bo is a software engineer currently living in Belgium. She likes writing code and solve complex problems. She is passionate about front-end, testing and the latest trends in Computer Science. When not doing geek things, Bo spend some time with her husband and two kids, or fighting fires (she is also a volunteer firefighter).'
};
