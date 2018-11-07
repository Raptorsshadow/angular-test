export class Model {
	user;
	items;
	constructor() {
		this.user = "Billy";
		this.items = [
			new TodoItem("Get Packed", true),
			new TodoItem("Inflate Tires", false),
			new TodoItem("Get Gas", false),
			new TodoItem("Depart", false),
		];
	}
}

export class TodoItem {
	action;
	done;
	constructor(action, done) {
		this.action = action;
		this.done = done;
	}
}