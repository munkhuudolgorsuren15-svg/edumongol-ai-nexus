import { Link, useRouterState } from "@tanstack/react-router";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Нүүр" },
  { to: "/courses", label: "Хичээлүүд" },
  { to: "/dashboard", label: "Хяналтын самбар" },
  { to: "/about", label: "Бидний тухай" },
  { to: "/contact", label: "Холбоо барих" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 mt-4">
        <nav className="glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[image:var(--gradient-neon)] blur-md opacity-70 group-hover:opacity-100 transition" />
              <div className="relative h-9 w-9 rounded-xl bg-[image:var(--gradient-neon)] flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="font-display font-bold text-lg">
              Edu<span className="gradient-text">Mongol</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm transition-colors",
                  path === l.to
                    ? "text-foreground bg-white/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Нэвтрэх</Link>
            </Button>
            <Button asChild variant="hero" size="sm">
              <Link to="/register">Бүртгүүлэх</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden glass-strong rounded-2xl mt-2 p-4 space-y-1 animate-fade-up">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button asChild variant="glass" size="sm" className="flex-1">
                <Link to="/login">Нэвтрэх</Link>
              </Button>
              <Button asChild variant="hero" size="sm" className="flex-1">
                <Link to="/register">Бүртгүүлэх</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}