import { EntityRepository, Repository } from 'typeorm';
import { JobEntity } from './job';

@EntityRepository(JobEntity)
export class JobRepository extends Repository<JobEntity> {

}
