import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EavAttribute } from '../model/eav-attribute.entity';
import { IEavAttribute } from '../../../../../../libs/eav-model/src/lib/i-eav-attribute';

@Injectable()
export class EavAttributeService {
  constructor(
    @InjectRepository(EavAttribute) private readonly eavAttributeRepository: Repository<EavAttribute>,
  ) { }

  create(initialValue: Partial<IEavAttribute> = {}) {
    return this.eavAttributeRepository.create(initialValue);
  }
}
