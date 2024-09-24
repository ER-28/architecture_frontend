'use client';

import React from 'react';
import {TodoViewModel} from "@/app/_src/apps/todo/_viewmodels/TodoViewModel";
import {TYPES} from "@/app/_src/apps/todo/types";
import {TodoContainer} from "@/app/_src/apps/todo/app.config";
import {TodoList} from "@/app/_src/apps/todo/_components/TodoList";
import {useAuth} from "@/app/_src/apps/auth/_hooks/useAuth";

export default function TodoPage() {
  const {checkAuth} = useAuth()
  const todoViewModel = TodoContainer.get<TodoViewModel>(TYPES.TodoViewModel);


  return checkAuth() ? (
      <TodoList viewModel={todoViewModel} />
    ) : (
      <h2>Please log in to access the Todo List</h2>
    )
}