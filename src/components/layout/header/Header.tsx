import Link from "next/link";
import Logo from "@/components/logo";

const Header = () => {
  return (
    <header className="bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 flex justify-between items-center h-15">
        <Logo />
        <nav className="flex items-center gap-9 h-full">
          <Link href="/" className="text-base text-white h-full flex items-center">About</Link>
          <Link href="/" className="text-base text-white h-full flex items-center">Experience</Link>
          <Link href="/" className="text-base text-white h-full flex items-center">Skill</Link>
          <Link href="/" className="text-base text-white h-full flex items-center">Project</Link>
          <Link href="/" className="text-base text-white h-full flex items-center">Blog</Link>
          <Link href="/" className="text-base text-white h-full flex items-center">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
