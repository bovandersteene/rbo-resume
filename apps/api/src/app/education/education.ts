import { Education } from '@rbo-resume/api-interfaces';
import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { format } from "date-fns";
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class EducationDto implements Education {
  @ApiModelProperty()
  @IsNotEmpty()
  readonly course: string;
  @ApiModelProperty()
  readonly endDate?: Date;
  @ApiModelProperty()
  @IsNotEmpty()
  readonly school: string;
  @ApiModelProperty()
  @IsNotEmpty()
  readonly startDate: Date;
}

@Entity('education')
export class EducationEntity implements Education {
  @PrimaryGeneratedColumn()
 readonly id: number;
  @Column()
  readonly course: string;
  @Column()
  readonly school: string;
  @Column()
  @Transform(date => format(date, 'dd/MM/yyyy'))
  readonly startDate: Date;
  @Column()
  @Transform(date => date ? format(date, 'dd/MM/yyyy') : undefined)
  readonly endDate?: Date;

  constructor(partial: Partial<EducationEntity>) {
    Object.assign(this, partial);
  }
}
