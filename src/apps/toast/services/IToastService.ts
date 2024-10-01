import type { BaseToastModel, ToastModel } from "../models/Toast.ts";

export interface IToastService {
	add(toast: BaseToastModel): ToastModel;
	close(id: string): void;
	clearAll(): void;
	getToasts(): ToastModel[];
}
