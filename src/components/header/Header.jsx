"use client"

import { ShoppingCart } from "lucide-react";
import Container from "../container/Container";
import ThemeController from "../ui/theme/themeController/page";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../../app/context/CartContext";
import { FaRegHeart } from "react-icons/fa";


export default function Header() {
  const router = useRouter();
  const { cartItems } = useCart();

  const handleLogout = () => {
    router.push("/register");
  };

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-base-300 border-b-2 border-info rounded-b-xl">
      <Container>
        <div className="navbar flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/alifshop.svg" alt="Sardor Shop" className="w-10 h-auto" />
            <a href='/' className="text-xl text-info font-bold">SARDOR SHOP</a>
          </div>

          <div className="hidden md:flex">
            <NavDesktop />
          </div>

          <div className="flex items-center gap-4 ">


            <Link href={"/like"}>
              <FaRegHeart size={23} className="text-success" />
            </Link>

            <Link href="/cart" className="relative text-warning">
              <ShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>


            <div className="flex items-center p-1 flex-1">
              <ThemeController className="flex" />
            </div>

            <div>
              <Link href={"/register"} className="btn btn-success rounded-xl text-white font-bold" onClick={handleLogout}>
                Register
              </Link>
            </div>

            <div className="block md:hidden">
              <NavMobile />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
