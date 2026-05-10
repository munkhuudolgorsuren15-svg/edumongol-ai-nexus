import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Target, Heart, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { teachers } from "@/components/data/courses";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Бидний тухай — EduMongol AI" }, { name: "description", content: "EduMongol AI-ийн эрхэм зорилго ба баг." }] }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
          <Sparkles className="h-3.5 w-3.5" /> Бидний түүх
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold">Боловсролын <span className="gradient-text">шинэ хувьсгал</span></h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          EduMongol AI нь Монголын хүүхэд залууст дэлхийн жишигт нийцсэн боловсролыг
          хүртээмжтэй болгох эрхэм зорилготойгоор үүсгэн байгуулагдсан.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-20 grid md:grid-cols-3 gap-6">
        {[
          { i: Target, t: "Эрхэм зорилго", d: "Хэн ч, хаанаас ч чанартай боловсрол хүртэх боломжийг бий болгох." },
          { i: Heart, t: "Үнэт зүйл", d: "Чанар, хүртээмж, шинэлэг сэтгэлгээ — бидний гурван тулгуур." },
          { i: Zap, t: "Технологи", d: "AI-аар хувийн сурагч бүрд тохирсон сургалтын замналыг бүрдүүлнэ." },
        ].map((c) => (
          <div key={c.t} className="glass-strong rounded-2xl p-8">
            <div className="h-12 w-12 rounded-xl bg-[image:var(--gradient-neon)] flex items-center justify-center">
              <c.i className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-xl font-bold">{c.t}</h3>
            <p className="text-muted-foreground mt-2 text-sm">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-32">
        <h2 className="text-4xl font-bold text-center">Бидний <span className="gradient-text">баг</span></h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 text-center">
              <img src={t.img} className="w-24 h-24 mx-auto rounded-full border-2 border-white/10" alt="" />
              <h3 className="mt-4 font-semibold">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 mt-32 text-center">
        <div className="glass-strong rounded-3xl p-12">
          <h2 className="text-3xl font-bold">Бидэнтэй нэгдээрэй</h2>
          <p className="mt-3 text-muted-foreground">Сурах эрмэлзэлтэй хэн бүхэнд хаалга нээлттэй.</p>
          <Button asChild variant="hero" size="xl" className="mt-6"><Link to="/register">Эхлүүлэх</Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}
