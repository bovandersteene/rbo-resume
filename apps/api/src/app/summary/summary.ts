import { Summary, Technology } from '../model';
import { ApiModelProperty } from '@nestjs/swagger';

export class SummaryDto implements Summary {
  @ApiModelProperty( )
  readonly firstName: string;
  @ApiModelProperty( )
  readonly name: string;
  @ApiModelProperty( )
  readonly email: string;
  @ApiModelProperty( )
  readonly imageUrl?: string;
  @ApiModelProperty( )
  readonly description: string;
}
