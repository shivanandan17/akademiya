"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.startsWith("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button
            size="sm"
            className="text-rose-500 bg-stone-900 hover:text-white hover:bg-rose-500 transition-all"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button
            size="sm"
            className="text-rose-500 bg-stone-900 hover:text-white hover:bg-rose-500 transition-all"
          >
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
};
