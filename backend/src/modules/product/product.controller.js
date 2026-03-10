import { validationResult } from "express-validator";
import { ProductService } from "./product.service.js";
import { parsePrismaError } from "../../helper/prismaErrorParsing/prismaErrorParsing.helper.js";

const productService = new ProductService();

export class ProductController {

    async seed(req, res) {
        try {
            const total = 20;
            await productService.seed(total);
            return res.status(200).json({ message: "Seeded" });
        } catch (error) {
            return res.status(500).json({ message: parsePrismaError(error) });
        }
    }

    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const product = await productService.create(req.body);
            return res.status(201).json(product);
        } catch (error) {
            return res.status(500).json({ message: parsePrismaError(error) });
        }
    }

    async getAll(req, res) {
        try {
            const { search, page, limit } = req.query;
            const result = await productService.findAll(search, page ? parseInt(page) : 1, limit ? parseInt(limit) : 10);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: parsePrismaError(error) });
        }
    }

    async update(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { id } = req.params;
            const product = await productService.update(id, req.body);
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ message: parsePrismaError(error) });
        }
    }

}
