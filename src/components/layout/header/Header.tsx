'use client';
import Link from "next/link";
import { Menu } from '@boxicons/react';
import Logo from "@/components/logo";
import ToggleTheme from "@/components/toggle-theme";

const Header = () => {
  return (
    <header className="bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center h-15">
        <Logo />
        <button className="text-white text-2xl block md:hidden cursor-pointer" role="button" aria-label="menu">
          <Menu />
        </button>
        <nav className="items-center gap-9 h-full hidden md:flex">
          <Link href="/" className="text-base text-white h-full flex items-center">About</Link>
          <Link href="/" className="text-base text-white h-full flex items-center">Experience</Link>
          <Link href="/" className="text-base text-white h-full flex items-center">Skill</Link>
          <Link href="/" className="text-base text-white h-full flex items-center">Project</Link>
          <Link href="/" className="text-base text-white h-full flex items-center">Blog</Link>
          <Link href="/" className="text-base text-white h-full flex items-center">Contact</Link>
          <ToggleTheme />
        </nav>
      </div>
    </header>
  );
};

export default Header;
