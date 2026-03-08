import { ProductRepository } from "./product.repository.js";

export class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    async seed(total) {
        for (let i = 0; i < total; i++) {
            await this.productRepository.create({
                name: `Product ${i + 1}`,
                description: `Description for product ${i + 1}`,
                price: (i + 1) * 10,
                inPrice: (i + 1) * 8,
                inStock: 100,
                unit: "pcs"
            });
        }
    }

    async create(data) {
        return this.productRepository.create();
    }

    async findAll(search, page, limit) {
        return this.productRepository.findAll(search, page, limit);
    }

    async update(id, data) {
        return this.productRepository.update(parseInt(id), data);
    }
}