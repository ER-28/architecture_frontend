import apiWrapper from "../core/request/apiWrapper.ts";

type User = {
  id: number;
  name: string;
}

export const createUser = apiWrapper.executeMutation<never, User>(
  apiWrapper.apiPost<never, User>('/users')
)

export const user = await apiWrapper.fetchQuery(['user', '123'], () => apiWrapper.apiGet<User>('/users/123'));

export const updateUser = apiWrapper.executeMutation<User, never>(
  apiWrapper.apiPut<User, User>('/users/:id')
)
