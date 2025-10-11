"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between">
         <button
          className="btn btn-info btn-circle"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      {open && (
        <div className="absolute right-0 top-15 bg-base-content rounded-lg shadow-lg w-48 p-2 z-50 flex flex-col gap-3 hover:bg-base-100">
          <Link
            href="/"
            className="text-base-300 font-medium hover:text-primary transition"
            onClick={() => setOpen(false)}
          >
            Bosh sahifa
          </Link>
          <Link
            href="/products"
            className="text-base-300 font-medium hover:text-primary transition"
            onClick={() => setOpen(false)}
          >
            Mahsulotlar
          </Link>
          <Link
            href="/about"
            className="text-base-300 font-medium hover:text-primary transition"
            onClick={() => setOpen(false)}
          >
            Biz haqimizda
          </Link>
          <Link
            href="/contact"
            className="text-base-300 font-medium hover:text-primary transition"
            onClick={() => setOpen(false)}
          >
            Aloqa
          </Link>
        </div>
      )}
    </div>
  );
}
