"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <header className="p-5 bg-blue-500 flex justify-between items-center">
        <div
          onClick={() => router.push("/")}
          className="text-white cursor-pointer font-bold text-2xl"
        >
          BuyNSell
        </div>
        <div>
          <button
            onClick={() => router.push("/api/login")}
            className="mr-2 bg-white px-4 py-2 rounded"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/api/register")}
            className="bg-white px-4 py-2 rounded"
          >
            Register
          </button>
        </div>
      </header>

      <main className="flex-grow  p-5 flex flex-col items-center justify-center">
        <div className="flex -mt-20 space-x-3">
          <button
            onClick={() => router.push("/api/buy")}
            className="mb-5 font-extrabold bg-green-500 text-white py-4 px-8 rounded text-2xl"
          >
            BUY
          </button>
          <button
            onClick={() => router.push("/api/sell")}
            className="mb-5 font-extrabold bg-red-500 text-white py-4 px-8 rounded text-2xl"
          >
            SELL
          </button>
        </div>

        <div className="w-full  flex justify-center p-2 bg-gray-200">
          <img src="/image1.jpg" alt="image" />
        </div>
      </main>
    </div>
  );
}
