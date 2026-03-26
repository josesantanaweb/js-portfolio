import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
}

const Logo = ({ variant = "dark" }: LogoProps) => {
  return (
    <Link href="/">
      <Image src={variant === "dark" ? "/images/logo-dark.svg" : "/images/logo-light.svg"} alt="Logo" width={100} height={100} className="w-12 h-6" />
    </Link>
  );
};

export default Logo;
