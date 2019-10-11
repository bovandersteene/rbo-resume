import { ApiModelProperty } from '@nestjs/swagger';
import { Job, Technology } from '../model';

export class JobDTO implements Job {
  @ApiModelProperty( )
  readonly company: string;
  @ApiModelProperty( )
  readonly current: boolean;
  @ApiModelProperty( )
  readonly description: string;
  @ApiModelProperty( )
  readonly endDate: Date;
  @ApiModelProperty( )
  readonly startDate: Date;
  @ApiModelProperty( )
  readonly technologies: Technology[];
  @ApiModelProperty( )
  readonly title: string;
}
