import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import type { BaseToastModel, ToastModel } from "../models/Toast";
import type { IToastService } from "../services/IToastService";
import TYPES from "../types";

@injectable()
export class ToastViewModel {
	constructor(
		@inject(TYPES.IToastService) private toastService: IToastService,
	) {
		makeAutoObservable(this);
	}

	get toasts() {
		return this.toastService.getToasts();
	}

	addToast(toast: BaseToastModel): ToastModel {
		return this.toastService.add(toast);
	}

	closeToast(id: string) {
		this.toastService.close(id);
	}

	clearAllToasts() {
		this.toastService.clearAll();
	}
}
