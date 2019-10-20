import { EntityRepository, Repository } from 'typeorm';
import { EducationEntity } from './education';

@EntityRepository(EducationEntity)
export class EducationRepository extends Repository<EducationEntity>{

}
