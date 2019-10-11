import { Education } from '../model';
import { ApiModelProperty } from '@nestjs/swagger';

export class EducationDto  implements Education{
  @ApiModelProperty( )
  readonly course: string;
  @ApiModelProperty( )
  readonly endDate: Date;
  @ApiModelProperty( )
  readonly school: string;
  @ApiModelProperty( )
  readonly startDate: Date;

}
