import { SpecifcationsRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = new SpecifcationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationController, CreateSpecificationUseCase };
