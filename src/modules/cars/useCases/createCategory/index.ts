import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export default (): CreateCategoryController => {
  console.log('CreateCategory Initial')
  const categoriesRepository = new CategoriesRepository();
  console.log('CreateCategory finaly')

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
  );

  return createCategoryController;
};
