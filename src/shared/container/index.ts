import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecifcationsRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
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
