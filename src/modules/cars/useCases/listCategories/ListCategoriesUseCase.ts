import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}  // 3

    execute(): Category[] {  // 2
        const categories = this.categoryRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
