import { Request, Response } from "express";
import { Category } from "../entities/Category";
import { UpdateCategoryService } from "../services/UpdateCategoryService";


export class UpdateCategoryControler {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description } = request.body;
        
        const service = new UpdateCategoryService();

        const result = await service.execute({id, name, description});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).json(result);
    }
}



