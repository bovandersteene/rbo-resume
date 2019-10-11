import { Technology } from '../model';
import { ApiModelProperty } from '@nestjs/swagger';

export class TechnologyDto implements Technology {
  @ApiModelProperty({description: 'Name of the technology'})
  readonly name: string;
  @ApiModelProperty({description: 'Level you own for this technology'})
  readonly level: number;
}
