import { Supplier } from '../../../../domain/supplier';
import { SupplierEntity } from '../entities/supplier.entity';

export class SupplierMapper {
  static toDomain(raw: SupplierEntity): Supplier {
    const domain = new Supplier();
    domain.id = raw.id;
    domain.createdAt = raw.createdAt;
    domain.updatedAt = raw.updatedAt;
    domain.name = raw.name;
    domain.contactPerson = raw.contactPerson;
    domain.phoneNumber = raw.phoneNumber;
    domain.address = raw.address;
    return domain;
  }

  static toPersistence(domain: Supplier): SupplierEntity {
    const entity = new SupplierEntity();
    if (domain.id) entity.id = domain.id;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    entity.name = domain.name;
    entity.contactPerson = domain.contactPerson;
    entity.phoneNumber = domain.phoneNumber;
    entity.address = domain.address;
    return entity;
  }
}
