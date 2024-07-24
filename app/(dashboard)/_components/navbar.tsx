import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-slate-700 shadow-sm">
      <MobileSidebar />
    </div>
  );
};
