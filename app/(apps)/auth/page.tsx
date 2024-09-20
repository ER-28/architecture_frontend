'use client';

import React from 'react';
import {AuthViewModel} from "@/app/(apps)/auth/_viewmodels/AuthViewModel";
import {LoginForm} from "@/app/(apps)/auth/_components/LoginForm";
import {TYPES} from "@/app/(apps)/auth/types";
import {AuthContainer} from "@/app/(apps)/auth/auth.config";

export default function LoginPage() {
  const authViewModel = AuthContainer.get<AuthViewModel>(TYPES.AuthViewModel);
  return <LoginForm viewModel={authViewModel} />;
}