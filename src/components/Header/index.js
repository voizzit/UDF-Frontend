"use client";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useHeader } from "./useHeader";
import Image from "../Image/image";
import { BsBag } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { LangSwitcher } from "./LangSwitcher";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {useTranslations} from 'next-intl'
import { Link } from "@/i18n/routing";


export default function Header() {
  const { main, isScrollingDown } = useHeader();
  const t = useTranslations('Index')

  return (
    <>
      <header
        className="fixed top-0 left-0 z-50 w-full   dark:bg-gray-950 dark:text-gray-50"
        ref={main}
      >
        <div className="shadow-s z-50  relative py-3 md:py-2">
          <div className="container mx-auto flex justify-between items-center  px-4 md:px-6">
            <nav className="hidden space-x-5 md:flex ms-auto align-middle items-center">
              <LangSwitcher />
              {links?.map((link, i) => {
                return (
                  <Link
                    href="#"
                    key={i}
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors text-white hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    prefetch={false}
                  >
                    {t(`${link?.title}`)}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
      {/* <BottomMenu/> */}
    </>
  );
}

const links = [
  {
    title: "About Us",
  },
  {
    title: "Issues",
  },
  {
    title: "Media and Press",
  },
  {
    title: "Achievements",
  },
  {
    title: "Leaders",
  },
];
