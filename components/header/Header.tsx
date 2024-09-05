import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <div className="flex items-center justify-between px-16 pt-2 text-[#ff69b4] md:px-32">
    <Link href="/">
      <h1 className="flex items-center transition duration-300 hover:opacity-100">
        <Image
          src="/TeleGem.png"
          width={80}
          height={80}
          className="2xl:w-48"
          alt="Logo"
        />
        <span
          className="link-container mt-1 text-4xl font-extrabold xl:text-5xl 2xl:text-8xl"
          onClick={() => window.location.reload()}
        >
          TeleGem
        </span>
      </h1>
    </Link>
    <nav className="hidden text-3xl font-semibold sm:flex xl:text-5xl 2xl:text-8xl">
      <p>
        Made By{" "}
        <span>
          <Link
            className="xl:text-5xl 2xl:text-8xl"
            href="https://www.linkedin.com/in/amjadimdad00"
            target="_blank"
          >
            Amjad Imdad
          </Link>
        </span>
      </p>
    </nav>
  </div>
);

export default Header;
