import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Sparkles, Play, Star, Users, BookOpen, GraduationCap, Clock,
  Code2, Palette, Languages, Sigma, Briefcase Quote, Check,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { courses, categories, teachers, testimonials } from "@/components/data/courses";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduMongol AI — Цахим сургалтын шинэ үе" },
      { name: "description", content: "Монголын оюутнуудад зориулсан AI-д суурилсан цахим сургалтын платформ. Хүссэн газраасаа, хүссэн үедээ суралц." },
      { property: "og:title", content: "EduMongol AI — Цахим сургалтын шинэ үе" },
      { property: "og:description", content: "Програмчлал, дизайн, AI, англи хэл, математик, бизнесийн 500+ хичээл." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const iconMap = { Code2, Palette, Sparkles, Languages, Sigma, Briefcase } as const;

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <div ref={ref} className="font-display text-4xl md:text-5xl font-bold gradient-text">{n.toLocaleString()}{suffix}</div>;
}

function Home() {
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTIdx((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 pt-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-[oklch(0.8_0.18_300)]" />
              <span>AI-аар тэжээгдсэн шинэ үеийн боловсрол</span>
            </div>
            <h1 className="mt-6 font-display font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight">
              EduMongol AI <br />
              <span className="gradient-text">Цахим сургалтын</span> <br />
              шинэ үе.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Монголын оюутнуудад зориулсан хамгийн орчин үеийн платформ.
              Хүссэн газраасаа, хүссэн үедээ дэлхийн жишигт хүрсэн хичээлүүдийг үзээрэй.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/register">Сурч эхлэх <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/courses"><Play className="h-4 w-4" /> Хичээлүүд үзэх</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[12, 32, 47, 5].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/60?img=${i}`} className="h-10 w-10 rounded-full border-2 border-background" alt="" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  <span className="ml-2 font-semibold">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground">10,000+ оюутны үнэлгээ</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-6 bg-[image:var(--gradient-neon)] opacity-30 blur-3xl rounded-3xl" />
            <div className="relative glass-strong rounded-3xl overflow-hidden glow">
              <img src={heroImg} alt="EduMongol AI hero" width={1536} height={1024} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-4 flex items-center gap-3 animate-float">
              <div className="h-10 w-10 rounded-xl bg-[image:var(--gradient-neon)] flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Идэвхтэй оюутан</div>
                <div className="font-bold">+1,234 өнөөдөр</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass-strong rounded-2xl p-4 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-xs text-muted-foreground">Дуусгасан хичээл</div>
              <div className="font-bold gradient-text text-lg">98%</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="glass-strong rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { end: 10000, suffix: "+", label: "Идэвхтэй оюутан" },
            { end: 500, suffix: "+", label: "Хичээл" },
            { end: 120, suffix: "+", label: "Багш нар" },
            { end: 24, suffix: "/7", label: "Сургалт боломжтой" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <Counter end={s.end} suffix={s.suffix} />
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 mt-32">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">Сонирхлоор нь <span className="gradient-text">сонгоорой</span></h2>
          <p className="mt-4 text-muted-foreground">Дэлхийн жишигт нийцсэн 6 том чиглэл, 500+ хичээл.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => {
            const Icon = iconMap[c.icon as keyof typeof iconMap];
            return (
              <Link to="/courses" key={c.name} className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all hover:-translate-y-1 relative overflow-hidden">
                <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl group-hover:opacity-40 transition`} />
                <div className={`relative h-12 w-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{c.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.count} хичээл</p>
                <div className="mt-4 inline-flex items-center text-sm gradient-text font-medium">
                  Үзэх <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* COURSES */}
      <section className="mx-auto max-w-7xl px-4 mt-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">Алдартай <span className="gradient-text">хичээлүүд</span></h2>
            <p className="mt-3 text-muted-foreground">Хамгийн их үздэг, өндөр үнэлгээтэй курсууд.</p>
          </div>
          <Button asChild variant="glass">
            <Link to="/courses">Бүгдийг үзэх <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 6).map((c) => (
            <Link to="/courses/$id" params={{ id: c.id }} key={c.id} className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-all">
              <div className={`relative h-44 bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
                <BookOpen className="h-16 w-16 text-white/80" />
                <span className="absolute top-3 left-3 text-xs glass-strong px-2 py-1 rounded-md">{c.category}</span>
                <span className="absolute top-3 right-3 text-xs glass-strong px-2 py-1 rounded-md">{c.level}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg group-hover:gradient-text transition">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.teacher}</p>
                <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.duration}</span>
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {c.students.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {c.rating}</span>
                </div>
                {c.progress !== undefined && c.progress > 0 && (
                  <div className="mt-4">
                    <Progress value={c.progress} className="h-1.5" />
                    <div className="text-xs text-muted-foreground mt-1">{c.progress}% дууссан</div>
                  </div>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold gradient-text text-lg">{c.price}</span>
                  <span className="text-xs glass px-3 py-1 rounded-full">Үзэх →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TEACHERS */}
      <section className="mx-auto max-w-7xl px-4 mt-32">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">Туршлагатай <span className="gradient-text">багш нар</span></h2>
          <p className="mt-4 text-muted-foreground">Салбартаа тэргүүлэгч мэргэжилтнүүд.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 bg-[image:var(--gradient-neon)] rounded-full blur-md opacity-60" />
                <img src={t.img} alt={t.name} className="relative w-24 h-24 rounded-full object-cover border-2 border-white/10" />
              </div>
              <h3 className="mt-4 font-semibold">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
              <div className="flex justify-center gap-2 mt-4">
                {["in", "tw", "yt"].map((s) => (
                  <a key={s} href="#" className="h-8 w-8 rounded-lg glass flex items-center justify-center text-xs hover:text-primary">{s}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-4xl px-4 mt-32">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Оюутнуудын <span className="gradient-text">үнэлгээ</span></h2>
        </div>
        <div className="mt-12 relative glass-strong rounded-3xl p-8 md:p-12 min-h-[260px]">
          <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
          <div key={tIdx} className="animate-fade-up text-center">
            <p className="text-lg md:text-xl">"{testimonials[tIdx].text}"</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img src={testimonials[tIdx].img} className="w-12 h-12 rounded-full" alt="" />
              <div className="text-left">
                <div className="font-semibold">{testimonials[tIdx].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[tIdx].role}</div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)} className={`h-2 rounded-full transition-all ${i === tIdx ? "w-8 bg-[image:var(--gradient-neon)]" : "w-2 bg-white/20"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 mt-32">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Нийтлэг <span className="gradient-text">асуултууд</span></h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {[
            { q: "Хичээлийг хэрхэн худалдан авах вэ?", a: "Та бүртгэлтэй хэрэглэгч болсны дараа хүссэн хичээлээ сонгож, төлбөрөө банкны карт эсвэл QPay-ээр төлж болно." },
            { q: "Гэрчилгээ олгодог уу?", a: "Тийм, та хичээлийг 100% дуусгаж шалгалтаа өгсөн тохиолдолд QR баталгаажуулалттай цахим гэрчилгээ хүлээн авна." },
            { q: "Гар утаснаас үзэж болох уу?", a: "Манай платформ гар утас, таблет, компьютер бүх төхөөрөмж дээр бүрэн ажиллана." },
            { q: "Багш болж бүртгүүлэхэд ямар шаардлага вэ?", a: "Мэргэжлийн чиглэлээрээ туршлагатай хэн ч багшийн хүсэлт явуулж, манай багийн зөвшөөрлөөр хичээл байршуулах боломжтой." },
          ].map((f, i) => (
            <AccordionItem key={i} value={`i${i}`} className="glass rounded-xl border-0 px-5">
              <AccordionTrigger className="hover:no-underline text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 mt-32">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-[image:var(--gradient-neon)] opacity-20" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold">Өнөөдөр л <span className="gradient-text">эхэлцгээе</span></h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">7 хоног үнэгүй ашиглаж, дуртай хичээлээ үзээрэй.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="xl"><Link to="/register">Үнэгүй эхлэх</Link></Button>
              <Button asChild variant="glass" size="xl"><Link to="/contact">Бидэнтэй холбогдох</Link></Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {["Картын мэдээлэл шаардлагагүй", "Хэдийд ч цуцалж болно", "24/7 дэмжлэг"].map((t) => (
                <span key={t} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-400" /> {t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
