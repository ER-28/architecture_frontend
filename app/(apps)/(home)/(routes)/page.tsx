'use client'


import {useAuth} from "@/app/(apps)/auth/_hooks/useAuth";

export default function Home() {
  const {isAuthenticated} = useAuth()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>TESTING ARCHI</p>
      {
        isAuthenticated ? (
          <p>You are authenticated</p>
        ) : (
          <p>You are not authenticated</p>
        )
      }
    </div>
  );
}
