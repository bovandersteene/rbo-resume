import { ApiModelProperty } from '@nestjs/swagger';
import { Job, Technology } from '@rbo-resume/api-interfaces';
import { format } from 'date-fns';
import { Transform } from 'class-transformer';
import { ArrayNotEmpty, IsBoolean, IsNotEmpty } from 'class-validator';
import { IsDateCustom } from '../utils/date.validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, JoinTableOptions } from 'typeorm';

export class JobDTO implements Partial<Job> {
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


@Entity('job')
export class JobEntity implements Job {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column()
  readonly company: string;
  @Column()
  readonly current: boolean;
  @Column()
  readonly description: string;
  @Column()
  @Transform(date => date ? format(date, 'dd/MM/yyyy') : undefined)
  readonly endDate?: Date;
  @Column()
  @Transform(date => format(date, 'dd/MM/yyyy'))
  readonly startDate: Date;

  @JoinTable({
    nane: 'job_technology',
    joinColumn: 'job_id',
    inverseJoinColumn: 'technology_id'
  } as JoinTableOptions)
  readonly technologies: Technology[];
  @Column()
  readonly title: string;

  constructor(partial: Partial<JobEntity>) {
    Object.assign(this, partial);
  }
}
