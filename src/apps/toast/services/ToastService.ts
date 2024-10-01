import { injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";
import {
	type BaseToastModel,
	type ToastModel,
	ToastSchema,
} from "../models/Toast";
import type { IToastService } from "./IToastService";

@injectable()
export class ToastService implements IToastService {
	private toasts: ToastModel[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	getToasts() {
		return this.toasts;
	}

	add(toast: BaseToastModel): ToastModel {
		const newToast = ToastSchema.parse({
			...toast,
			id: v4(),
		});
		this.toasts.push(newToast);
		return newToast;
	}

	close(id: string): void {
		this.toasts = this.toasts.filter((t) => t.id !== id);
	}

	clearAll(): void {
		this.toasts = [];
	}
}
