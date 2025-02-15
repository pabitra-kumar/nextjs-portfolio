import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
            // {
            //   name: "About",
            //   link: "#about",
            // },
            // {
            //   name: "Projects",
            //   link: "#projects",
            // },
            // {
            //   name: "Contact",
            //   link: "#contact",
            // },
          ]}
        />
        <Hero />
      </div>
    </main>
  );
}
