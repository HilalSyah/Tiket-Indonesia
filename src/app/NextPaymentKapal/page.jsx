"use client";

import Image from "next/image";
import { productKapal } from "../lib/Pelni3";
import Checkout from "../components/Checkout";
import { useEffect } from "react";
import CheckoutKapal3 from "../Components/CheckoutKapal3";

export default function Home() {
  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main className="max-w-xl mx-auto sm:p-16">
        <div className="chek border-[2px] h-[35rem] border-slate-400 rounded-[1rem] shadow-md shadow-slate-600">
          <div className="flex flex-col">
            <Image
              src="/Background (11).png"
              alt="Kapal Gambar"
              width={250}
              height={250}
              objectFit="cover" 
              className="w-full rounded-t-[1rem]" 
            />
            <div className="border border-gray-100 bg-white p-6">
              <h3 className="mt-4 text-lg font-medium text-gray-900">{productKapal.name}</h3>
              <p className="mt-1.5 text-sm text-gray-700">Rp {productKapal.price}</p>
              <CheckoutKapal3 />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
