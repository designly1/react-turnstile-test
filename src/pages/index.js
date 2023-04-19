import Image from 'next/image'
import { Inter } from 'next/font/google'
import Turnstile, { useTurnstile } from 'react-turnstile'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [token, setToken] = useState(false);
  const { reset } = useTurnstile();

  const handleTurnstile = (token) => {
    setToken(token);
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <Turnstile
        sitekey="0x4AAAAAAAEHUsp0L7dvmf9i"
        onVerify={handleTurnstile}
      />
      <button
        className="border-2 border-black rounded-md p-4 hover:bg-gray-200"
        onClick={reset}
      >Reset Turnstile</button>
      <div className="flex flex-col gap-1">
        <label htmlFor='token'>Token:</label>
        <textarea id="token" className="w-full md:w-[500px]" rows={5} value={token}></textarea>
      </div>
    </main>
  )
}
