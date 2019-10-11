import { Summary } from '../model';
import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SummaryDto implements Summary {
  @ApiModelProperty()
  @IsNotEmpty()
  readonly firstName: string;
  @ApiModelProperty()
  @IsNotEmpty()
  readonly name: string;
  @ApiModelProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @ApiModelProperty()
  readonly imageUrl?: string;
  @ApiModelProperty()
  @IsNotEmpty()
  readonly description: string;
}


export class SummaryEntity implements Summary {
  readonly description: string;
  readonly email: string;
  readonly firstName: string;
  readonly imageUrl?: string;
  readonly name: string;

  @Exclude()
  readonly password: string;

  constructor(partial: Partial<SummaryEntity>) {
    Object.assign(this, partial);
  }
}
