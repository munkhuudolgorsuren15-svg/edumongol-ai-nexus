import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Mail, Lock, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Нэвтрэх — EduMongol AI" }, { name: "description", content: "EduMongol AI хаягаараа нэвтрэх." }] }),
  component: Login,
});

function Login() {
  return (
    <SiteLayout hideFooter>
      <section className="mx-auto max-w-md px-4 py-12">
        <div className="glass-strong rounded-3xl p-8 animate-fade-up">
          <div className="text-center">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-[image:var(--gradient-neon)] flex items-center justify-center glow">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <h1 className="mt-5 text-3xl font-bold">Тавтай морил</h1>
            <p className="text-muted-foreground text-sm mt-2">Сурахаа үргэлжлүүлэхийн тулд нэвтэрнэ үү.</p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                <Input type="password" placeholder="••••••••" className="pl-10 h-11 bg-white/5 border-white/10" required />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2"><Checkbox /> Сануулах</label>
              <a href="#" className="text-primary hover:underline">Нууц үг мартсан?</a>
            </div>
            <Button variant="hero" size="lg" className="w-full">Нэвтрэх <ArrowRight className="h-4 w-4" /></Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-muted-foreground">эсвэл</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="glass" size="lg" className="w-full">
              <svg className="h-4 w-4" viewBox="0 0 48 48"><path fill="#4285F4" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.5 30.2 0 24 0 14.6 0 6.4 5.4 2.5 13.3l7.8 6c1.9-5.6 7.2-9.8 13.7-9.8z"/><path fill="#34A853" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 2.9-2.2 5.3-4.7 7l7.6 5.9c4.4-4.1 6.9-10.1 6.9-17.4z"/><path fill="#FBBC05" d="M10.3 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.8-6C.9 16.6 0 20.2 0 24s.9 7.4 2.5 10.7l7.8-6z"/><path fill="#EA4335" d="M24 48c6.2 0 11.4-2 15.2-5.6l-7.6-5.9c-2.1 1.4-4.8 2.3-7.6 2.3-6.5 0-12-4.2-13.7-9.8l-7.8 6C6.4 42.6 14.6 48 24 48z"/></svg>
              Google
            </Button>
            <Button variant="glass" size="lg" className="w-full">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
              Facebook
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Шинэ хэрэглэгч үү? <Link to="/register" className="gradient-text font-semibold">Бүртгүүлэх</Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
