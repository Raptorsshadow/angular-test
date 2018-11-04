import {
	Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges
} from '@angular/core';

class CounterDirectiveContext {
	constructor(public $implicit: any) {}
}

@Directive({
	selector: '[appCounterOf]'
})
export class CounterDirective {
	constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {

	}

	@Input('appCounterOf')
	counter: number;

	onChanges(changes: SimpleChanges) {
		this.container.clear();
		for (let i = 0; i < this.counter; i++) {
			this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
		}
	}
}
