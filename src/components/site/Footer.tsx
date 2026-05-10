import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, GraduationCap, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-[image:var(--gradient-neon)] flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg">
              Edu<span className="gradient-text">Mongol</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Монголын оюутнуудад зориулсан AI-д суурилсан цахим сургалтын платформ.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:text-primary transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Платформ</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-foreground">Хичээлүүд</Link></li>
            <li><Link to="/dashboard" className="hover:text-foreground">Хяналтын самбар</Link></li>
            <li><Link to="/about" className="hover:text-foreground">Бидний тухай</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Эх сурвалж</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Блог</a></li>
            <li><a href="#" className="hover:text-foreground">Тусламж</a></li>
            <li><a href="#" className="hover:text-foreground">Нийтлэг асуулт</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Холбоо барих</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2 items-center"><Mail className="h-4 w-4" /> info@edumongol.mn</li>
            <li className="flex gap-2 items-center"><Phone className="h-4 w-4" /> +976 9911-2233</li>
            <li className="flex gap-2 items-center"><MapPin className="h-4 w-4" /> Улаанбаатар, Монгол</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EduMongol AI. Бүх эрх хуулиар хамгаалагдсан.
      </div>
    </footer>
  );
}