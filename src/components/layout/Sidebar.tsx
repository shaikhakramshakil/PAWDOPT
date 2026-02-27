"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  ClipboardList,
  FileText,
  BookOpen,
  Phone,
  MessageCircle,
  Calendar,
  Heart,
  Settings,
} from "lucide-react";

const coreLinks = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pets", label: "Browse Pets", icon: Search },
  { href: "/adopt/1", label: "Adoption Request", icon: ClipboardList },
  { href: "/how-it-works", label: "Adoption Guidelines", icon: BookOpen },
  { href: "/contact", label: "Contact Shelter", icon: Phone },
];

const extraLinks = [
  { href: "/applications", label: "Applications", icon: FileText },
  { href: "/messages", label: "Messages", icon: MessageCircle },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/donate", label: "Donations", icon: Heart },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-[80px] left-0 w-[260px] h-[calc(100vh-80px)] bg-sidebar shadow-inner flex flex-col p-4 z-40">
      {/* Core Features */}
      <nav className="flex-1 space-y-1">
        <p className="px-4 py-1 text-[10px] font-bold text-coral uppercase tracking-wider">Core Features</p>
        {coreLinks.map((link) => {
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

        <div className="my-3 border-t border-coral/10" />

        <p className="px-4 py-1 text-[10px] font-bold text-textMuted uppercase tracking-wider">More</p>
        {extraLinks.map((link) => {
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
