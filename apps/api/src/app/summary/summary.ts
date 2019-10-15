import { Summary } from '../model';
import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class SummaryDto implements Summary {
  @ApiModelProperty()
  readonly firstName: string;
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly email: string;
  @ApiModelProperty()
  readonly imageUrl?: string;
  @ApiModelProperty()
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
