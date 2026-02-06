"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // The Arena (Events), Projects, and Contact are also dark-themed pages
  const isDarkTheme = pathname === "/" || pathname === "/events" || pathname === "/projects" || pathname === "/contact";

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className={cn(
              "font-display text-2xl font-bold tracking-wider",
              isDarkTheme ? "text-zinc-300" : "text-zinc-800"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VAMSHI PORTFOLIO
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <motion.div
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                isHome
                  ? "text-blue-400"
                  : (isDarkTheme ? "text-zinc-400 hover:text-zinc-200" : "text-zinc-400 hover:text-zinc-800")
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HOME
            </motion.div>
          </Link>
          <Link href="/education">
            <motion.div
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                pathname === "/education"
                  ? "text-blue-400"
                  : (isDarkTheme ? "text-zinc-400 hover:text-zinc-200" : "text-zinc-400 hover:text-zinc-800")
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EDUCATION
            </motion.div>
          </Link>
          <Link href="/experience">
            <motion.div
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                pathname === "/experience"
                  ? "text-blue-400"
                  : (isDarkTheme ? "text-zinc-400 hover:text-zinc-200" : "text-zinc-400 hover:text-zinc-800")
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPERIENCE
            </motion.div>
          </Link>
          <Link href="/projects">
            <motion.div
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                pathname === "/projects"
                  ? "text-blue-400"
                  : (isDarkTheme ? "text-zinc-400 hover:text-zinc-200" : "text-zinc-400 hover:text-zinc-800")
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PROJECTS
            </motion.div>
          </Link>
          <Link href="/contact">
            <motion.div
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                pathname === "/contact"
                  ? "text-blue-400"
                  : (isDarkTheme ? "text-zinc-400 hover:text-zinc-200" : "text-zinc-400 hover:text-zinc-800")
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
