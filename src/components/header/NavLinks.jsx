import Link from "next/link";

export default function NavDesktop() {
  return (
    <nav className="flex items-center gap-6">
      <Link href="/" className="text-base-content font-medium cursor-pointer">Bosh sahifa</Link>
      <Link href="/products" className="text-base-content font-medium cursor-pointer" >Mahsulotlar</Link>
      <Link href="/about" className="text-base-content font-medium cursor-pointer">Biz haqimizda</Link>
      <Link href="/contact" className="text-base-content font-medium cursor-pointer">Aloqa</Link>
    </nav>
  );
}
