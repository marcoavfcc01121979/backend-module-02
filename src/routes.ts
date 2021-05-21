import { Request, Response } from 'express';

import CreateCourseService from './CreateCourseServer';

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: 'NodeJs',
        educator: 'Marco Ferreira',
    });

    CreateCourseService.execute({
        name: 'ReactJs',
        duration: 12,
        educator: 'Marco Antonio',
    });

    return response.send();
}
