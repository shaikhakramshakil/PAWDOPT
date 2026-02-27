"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  FileText,
  MessageCircle,
  Calendar,
  Heart,
  ClipboardList,
  Settings,
} from "lucide-react";

const sidebarLinks = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pets", label: "Browse Pets", icon: Search },
  { href: "/applications", label: "Applications", icon: FileText },
  { href: "/messages", label: "Messages", icon: MessageCircle },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/donate", label: "Donations", icon: Heart },
  { href: "/adopt/1", label: "Adoption Request", icon: ClipboardList },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-[80px] left-0 w-[260px] h-[calc(100vh-80px)] bg-sidebar shadow-inner flex flex-col p-4 z-40">
      {/* Main nav links */}
      <nav className="flex-1 space-y-2">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`sidebar-link ${isActive ? "sidebar-link-active" : ""}`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom settings */}
      <div className="pt-4 border-t border-coral/10">
        <Link href="/settings" className="sidebar-link">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
