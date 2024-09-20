import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import {AuthViewModel} from "@/app/(apps)/auth/_viewmodels/AuthViewModel";

interface LoginFormProps {
  viewModel: AuthViewModel;
}

export const LoginForm: React.FC<LoginFormProps> = observer(({ viewModel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await viewModel.login(username, password);
    if (success) {
      router.push('/todo');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      {viewModel.error && <p style={{ color: 'red' }}>{viewModel.error}</p>}
    </form>
  );
});