import { Injectable } from '@angular/core';
import { Product } from './product.model';
// import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ProductRepository {
	private products: Product[] = [];
	private categories: string[] = [];
	constructor(private dataSource: RestDataSource) {
		dataSource.getProducts().subscribe(data => {
			this.products = data;
			this.updateCategories();
		});
	}

	getProducts(category: string = null): Product[] {
		return this.products.filter(p => category === null || category === p.category);
	}

	getProduct(id: number): Product {
		return this.products.find(p => id === p.id);
	}

	getCategories(): string [] {
		return this.categories;
	}

	updateCategories() {
		this.categories = this.products
			.map(p => p.category)
			.filter((c, index, array) => array.indexOf(c) === index).sort();
	}

	saveProduct(product: Product) {
		if (product.id === null || product.id === 0) {
			this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
		} else {
			this.dataSource.updateProduct(product).subscribe(p => {
				this.products.splice(this.products.findIndex(p2 => p2.id === product.id), 1, product);
			});
		}
		this.updateCategories();
	}

	deleteProduct(id: number) {
		this.dataSource.deleteProduct(id).subscribe(p => {
			this.products.splice(this.products.findIndex(p2 => p2.id === id), 1);
		});
	}
}
