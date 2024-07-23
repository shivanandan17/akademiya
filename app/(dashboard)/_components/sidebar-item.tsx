"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith("${href}/");

  const onClick = () => {
    router.push(href);
  };

  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className={cn(
          "flex  w-full items-center gap-x-2 text-white text-sm font-[500] pl-6 transition-all group hover:text-rose-500",
          !isActive ? "hover:bg-white" : null,
          isActive ? "text-rose-500 hover:text-rose-500" : null
        )}
      >
        <div className="flex items-center gap-x-2 py-4">
          <Icon
            size={22}
            className={cn(
              "text-white group-hover:text-rose-500 transition-all",
              isActive ? "text-rose-500" : null
            )}
          />
          {label}
        </div>
        <div
          className={cn(
            "ml-auto opacity-0 border-2 border-rose-700 h-auto transition-all",
            isActive ? "opacity-100" : null
          )}
        />
      </button>
    </div>
  );
};
