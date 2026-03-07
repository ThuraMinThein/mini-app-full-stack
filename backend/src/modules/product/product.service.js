import { ProductRepository } from "./product.repository.js";

export class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }
}