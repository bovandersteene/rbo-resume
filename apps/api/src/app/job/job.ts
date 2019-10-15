import { ApiModelProperty } from '@nestjs/swagger';
import { Job, Technology } from '../model';
import { format } from 'date-fns';
import { Transform } from 'class-transformer';

export class JobDTO implements Job {
  @ApiModelProperty()
  readonly company: string;
  @ApiModelProperty()
  readonly current: boolean;
  @ApiModelProperty()
  readonly description: string;
  @ApiModelProperty()
  readonly endDate: Date;
  @ApiModelProperty()
  readonly startDate: Date;
  @ApiModelProperty()
  readonly technologies: Technology[];
  @ApiModelProperty()
  readonly title: string;
}

export class JobEntity implements Job {
  readonly company: string;
  readonly current: boolean;
  readonly description: string;
  @Transform(date => date ? format(date, 'dd/MM/yyyy') : undefined)
  readonly endDate?: Date;
  @Transform(date => format(date, 'dd/MM/yyyy'))
  readonly startDate: Date;
  readonly technologies: Technology[];
  readonly title: string;

  constructor(partial: Partial<JobEntity>) {
    Object.assign(this, partial);
  }
}
