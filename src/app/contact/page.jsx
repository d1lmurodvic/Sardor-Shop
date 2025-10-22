"use client";

import Container from "@/components/container/Container";
import Image from "next/image";
import mailImg from "../../../public/news.png";

export default function ContactPage() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center h-screen relative bottom-10">
        <h2 className="text-3xl font-bold text-primary- mb-2">
          BIZGA QANDAYDUR SAVOLINGIZ BORMI?
        </h2>

        <div className="flex items-center gap-2 text-sm text-neutral border-b border-info">
          <span className="flex items-center gap-1">
            🌍 <span className="font-semibold text-base-content">Yunusabad</span>
          </span>
          <span className="text-primary-content">|</span>
          <span className="link link-hover text-primary">UZ</span>
          <span className="text-primary-content">:</span>
          
          <span className="text-base-content">
            Strada 31 August 1989 78, Chisinau, MD-2012
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-4 w-full md:w-3/4">
          <div className="flex justify-center">
            <Image
              src={mailImg}
              alt="Mail illustration"
              width={250}
              height={250}
              className="drop-shadow-md"
            />
          </div>

          <form className="flex flex-col gap-4 w-full md:w-1/2 p-6 rounded-2xl ">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="email"
              placeholder="What's your email?"
              className="input input-bordered input-primary w-full"
            />
            <textarea
              className="textarea textarea-bordered textarea-primary h-24 w-full"
              placeholder="Your questions..."
            ></textarea>

            <button className="btn btn-primary text-primary-content">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
