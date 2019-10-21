import { Technology } from './technology';

export interface Job {
  readonly current: boolean;
  readonly title: string;
  readonly company: string;
  readonly description: string;
  readonly startDate: Date;
  readonly endDate?: Date;
  readonly technologies: Technology[] | number[];
}
