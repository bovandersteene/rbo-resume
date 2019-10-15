import { Education } from '../model';
import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { format } from "date-fns";
import { IsNotEmpty } from 'class-validator';

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

export class EducationEntity implements Education {
  readonly course: string;
  readonly school: string;
  @Transform(date => format(date, 'dd/MM/yyyy'))
  readonly startDate: Date;
  @Transform(date => date ? format(date, 'dd/MM/yyyy') : undefined)
  readonly endDate?: Date;

  constructor(partial: Partial<EducationEntity>) {
    Object.assign(this, partial);
  }
}
