"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/config", label: "Config" },
  { href: "/submit", label: "Submit" },
  { href: "/logs", label: "Logs" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-pink-700">
              Drone Prae
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              const linkClasses = `
                text-sm font-medium border-b-2 h-full inline-flex items-center transition-colors
                ${
                  isActive
                    ? "border-pink-500 text-pink-700" // Active link in pink
                    : "border-transparent text-pink-600 hover:border-pink-400 hover:text-pink-700" // Inactive link in pink theme
                }
              `;

              return (
                <Link key={link.label} href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
