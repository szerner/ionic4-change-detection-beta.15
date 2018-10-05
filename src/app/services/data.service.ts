import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	items: string[] = [];
	private items$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

	constructor() { }

	getItems(): Observable<string[]> {
		return this.items$.asObservable();
	}

	addItem(item: string) {
		this.items.push(item);
		this.items$.next(this.items);
		console.log(this.items);
	}

}
