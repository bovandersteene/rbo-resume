import { Technology } from '@rbo-resume/api-interfaces';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

export class TechnologyDto implements Technology {
  readonly id: number;
  @IsNotEmpty()
  @ApiModelProperty({description: 'Name of the technology'})
  readonly name: string;
  @IsNotEmpty()
  @IsNumber()
  @Max(5)
  @Min(0)
  @ApiModelProperty({description: 'Level you own for this technology'})
  readonly level: number;
}

@Entity('technology')
export class TechnologyEntity implements Technology{
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column()
  readonly level: number;
  @Column()
  readonly name: string;

  constructor(partial: Partial<Technology>) {
    Object.assign(this, partial);
  }
}
