import { type DefaultOptions, QueryClient } from "@tanstack/query-core";
import { getEnv } from "../env/env.ts";
import { apiDelete, apiGet, apiPost, apiPut } from "./apiHelpers";
import { setupAxiosInstance } from "./axiosSetup";
import { createQueryFunctions } from "./queryFunctions";

const defaultOptions: DefaultOptions = {
	queries: {
		retry: 1,
		staleTime: 5 * 60 * 1000,
	},
};

const queryClient = new QueryClient({ defaultOptions });

setupAxiosInstance(getEnv("API_URL", "https://dev-eddy.xefi.fr"));

const { fetchQuery, executeMutation } = createQueryFunctions(queryClient);

const apiWrapper = {
	fetchQuery,
	executeMutation,
	apiGet,
	apiPost,
	apiPut,
	apiDelete,
};

export type ApiWrapper = typeof apiWrapper;
export default apiWrapper;
