'use client';

import React from 'react';
import {AuthViewModel} from "@/app/_src/apps/auth/_viewmodels/AuthViewModel";
import {LoginForm} from "@/app/_src/apps/auth/_components/LoginForm";
import {TYPES} from "@/app/_src/apps/auth/types";
import {AuthContainer} from "@/app/_src/apps/auth/auth.config";

export default function LoginPage() {
  const authViewModel = AuthContainer.get<AuthViewModel>(TYPES.AuthViewModel);
  return <LoginForm viewModel={authViewModel} />;
}