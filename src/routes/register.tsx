import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, Mail, Lock, User, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Бүртгүүлэх — EduMongol AI" }, { name: "description", content: "EduMongol AI шинэ хаяг үүсгэх." }] }),
  component: Register,
});

const roles = [
  { id: "student", label: "Оюутан", desc: "Хичээл үзэх" },
  { id: "teacher", label: "Багш", desc: "Хичээл заах" },
];

function Register() {
  const [role, setRole] = useState("student");
  return (
    <SiteLayout hideFooter>
      <section className="mx-auto max-w-md px-4 py-12">
        <div className="glass-strong rounded-3xl p-8 animate-fade-up">
          <div className="text-center">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-[image:var(--gradient-neon)] flex items-center justify-center glow">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <h1 className="mt-5 text-3xl font-bold">Шинэ бүртгэл</h1>
            <p className="text-muted-foreground text-sm mt-2">Үнэгүй бүртгэл үүсгээд эхлээрэй.</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2">
            {roles.map((r) => (
              <button key={r.id} onClick={() => setRole(r.id)} className={`p-4 rounded-xl text-left transition ${role === r.id ? "gradient-border bg-white/5" : "glass hover:bg-white/5"}`}>
                <div className="font-semibold">{r.label}</div>
                <div className="text-xs text-muted-foreground">{r.desc}</div>
              </button>
            ))}
          </div>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <Label>Бүтэн нэр</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Овог Нэр" className="pl-10 h-11 bg-white/5 border-white/10" required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>И-мэйл</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="email" placeholder="name@example.com" className="pl-10 h-11 bg-white/5 border-white/10" required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Нууц үг</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="password" placeholder="Дор хаяж 8 тэмдэгт" className="pl-10 h-11 bg-white/5 border-white/10" required minLength={8} />
              </div>
            </div>
            <Button variant="hero" size="lg" className="w-full">Бүртгүүлэх <ArrowRight className="h-4 w-4" /></Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Бүртгэлтэй юу? <Link to="/login" className="gradient-text font-semibold">Нэвтрэх</Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
