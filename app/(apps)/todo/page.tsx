'use client';

import React from 'react';
import {TodoViewModel} from "@/app/(apps)/todo/_viewmodels/TodoViewModel";
import {TYPES} from "@/app/(apps)/todo/types";
import {TodoContainer} from "@/app/(apps)/todo/app.config";
import {TodoList} from "@/app/(apps)/todo/_components/TodoList";
import {useAuth} from "@/app/(apps)/auth/_hooks/useAuth";

export default function TodoPage() {
  const {isAuthenticated} = useAuth()
  const todoViewModel = TodoContainer.get<TodoViewModel>(TYPES.TodoViewModel);


  return isAuthenticated ? (
      <TodoList viewModel={todoViewModel} />
    ) : (
      <h2>Please log in to access the Todo List</h2>
    )
}