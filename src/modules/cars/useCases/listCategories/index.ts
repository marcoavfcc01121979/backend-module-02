import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

import { ListCategoriesController } from './ListCategoriesController';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = null;

const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoryControlle = new ListCategoriesController(listCategoryUseCase);

export { listCategoryControlle };
