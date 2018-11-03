import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { ConnectionService } from '../model/connection.service';
@Component({
	templateUrl: 'cartDetail.component.html'
})
export class CartDetailComponent {
	public connected: boolean = false;
	constructor(public cart: Cart, private connection: ConnectionService) {
		this.connected = this.connection.connected;
		connection.Changes.subscribe((state) => this.connected = state);
		console.log(`Connection State has changed.  Connected state: ${this.connected}`);
	}
}