import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Холбоо барих — EduMongol AI" }, { name: "description", content: "Бидэнтэй холбогдох — EduMongol AI." }] }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold">Холбоо <span className="gradient-text">барих</span></h1>
          <p className="mt-4 text-muted-foreground">Асуулт, санал хүсэлт байвал бидэнтэй холбогдоорой.</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {[
            { i: Mail, t: "И-мэйл", v: "info@edumongol.mn" },
            { i: Phone, t: "Утас", v: "+976 9911-2233" },
            { i: MapPin, t: "Хаяг", v: "Улаанбаатар, Сүхбаатар дүүрэг" },
          ].map((c) => (
            <div key={c.t} className="glass rounded-2xl p-6 text-center">
              <div className="mx-auto h-12 w-12 rounded-xl bg-[image:var(--gradient-neon)] flex items-center justify-center">
                <c.i className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 font-semibold">{c.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-strong rounded-3xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold">Зурвас илгээх</h2>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5"><Label>Нэр</Label><Input className="h-11 bg-white/5 border-white/10" required /></div>
              <div className="space-y-1.5"><Label>И-мэйл</Label><Input type="email" className="h-11 bg-white/5 border-white/10" required /></div>
            </div>
            <div className="space-y-1.5"><Label>Гарчиг</Label><Input className="h-11 bg-white/5 border-white/10" required /></div>
            <div className="space-y-1.5"><Label>Зурвас</Label><Textarea rows={5} className="bg-white/5 border-white/10" required /></div>
            <Button variant="hero" size="lg" className="w-full">Илгээх <Send className="h-4 w-4" /></Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
