import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categorieAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categorieAlreadyExists) {
      throw new Error(`Category ${name} already exists!`);
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
