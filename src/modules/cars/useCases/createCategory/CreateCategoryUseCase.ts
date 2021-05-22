import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

/**
 * [2] - Definir o tipo de retorno
 * [1] - Alterar o retorno do erro
 * [3] - Acessar o repositorio
 */

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}  // 3

    execute({ name, description }: IRequest): void {  // 2
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            // 1 -return response.status(400).json({ error: 'Category Already exists!' });
            throw new Error('Category Already exists!');
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
