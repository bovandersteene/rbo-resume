import { ApiModelProperty } from '@nestjs/swagger';
import { Job, Technology } from '../model';
import { format } from 'date-fns';
import { Transform } from 'class-transformer';
import { ArrayNotEmpty, IsBoolean, IsNotEmpty } from 'class-validator';
import { IsDateCustom } from '../utils/date.validator';

export class JobDTO implements Partial<Job>{
  @IsNotEmpty()
  @ApiModelProperty()
  readonly company: string;
  @IsNotEmpty()
  @IsBoolean()
  @ApiModelProperty()
  readonly current: boolean;
  @IsNotEmpty()
  @ApiModelProperty()
  readonly description: string;
  @ApiModelProperty()
  @IsDateCustom('endDate')
  readonly endDate?: Date;
  @IsNotEmpty()
  @IsDateCustom('startDate')
  @ApiModelProperty()
  readonly startDate: Date;
  @IsNotEmpty()
  @ArrayNotEmpty()
  @ApiModelProperty()
  readonly technologies: number[];
  @IsNotEmpty()
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
  @ApiModelProperty( )
  readonly title: string;

  constructor(partial: Partial<JobEntity>) {
    Object.assign(this, partial);
  }
}
