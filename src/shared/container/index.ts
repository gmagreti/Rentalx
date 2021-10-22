import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecifcationsRepository } from '../../modules/cars/infra/typeorm/repositories/SpecificationRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

// ISpecificationRepository
container.registerSingleton<ISpecificationRepository>(
  'SpecifcationsRepository',
  SpecifcationsRepository,
);

// IUsersRepository
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
