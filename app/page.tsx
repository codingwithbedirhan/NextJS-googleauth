"use client";

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next Auth</h1>
      {status}
      {status === "authenticated" &&
        <div className="flex flex-col items-center justify-center">
          <div>Giriş {session.user?.name} tarafından yapıldı</div>
          {session.user?.image &&
            <img
              src={session.user.image}
              alt="user"
              className="object-contain w-12 h-12 rounded-full m-4"
            />
          }

          <button
            onClick={() => signOut()}
            className="p-4 bg-blue-600 text-white rounded-xl"
          >
            Çıkış yap
          </button>
        </div>

      }

      {status === "unauthenticated" &&
        <button
          onClick={() => signIn("google")}
          className="p-4 bg-blue-600 text-white rounded-xl"
        >
          Giriş yap
        </button>
      }
      {
        status === "loading" &&
        <label>Yükleniyor...</label>
      }
    </main>
  )
}
