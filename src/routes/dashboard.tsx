import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Award, Clock, TrendingUp, Bell, PlayCircle, CheckCircle2, Trophy, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { courses } from "@/components/data/courses";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Хяналтын самбар — EduMongol AI" }] }),
  component: Dashboard,
});

const stats = [
  { i: BookOpen, label: "Идэвхтэй курс", v: "4", c: "from-blue-500 to-cyan-400" },
  { i: CheckCircle2, label: "Дуусгасан", v: "12", c: "from-emerald-500 to-teal-400" },
  { i: Clock, label: "Сурсан цаг", v: "84ц", c: "from-purple-500 to-pink-500" },
  { i: Trophy, label: "Гэрчилгээ", v: "7", c: "from-amber-500 to-orange-500" },
];

const week = [40, 65, 50, 80, 95, 70, 85];

function Dashboard() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">Сайн уу, <span className="gradient-text">Тэмүүлэн</span> 👋</h1>
            <p className="text-muted-foreground mt-1">Өнөөдөр сурахад бэлэн үү?</p>
          </div>
          <Button variant="glass"><Bell className="h-4 w-4" /> Мэдэгдэл (3)</Button>
        </div>

        {/* STATS */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 relative overflow-hidden">
              <div className={`absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${s.c} opacity-20 blur-2xl`} />
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${s.c} flex items-center justify-center`}>
                <s.i className="h-5 w-5 text-white" />
              </div>
              <div className="mt-4 text-3xl font-bold">{s.v}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {/* Continue */}
          <div className="lg:col-span-2 glass-strong rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Үргэлжлүүлэн үзэх</h2>
              <Link to="/courses" className="text-sm text-primary hover:underline">Бүгдийг үзэх</Link>
            </div>
            <div className="mt-5 space-y-4">
              {courses.filter((c) => c.progress).map((c) => (
                <Link to="/courses/$id" params={{ id: c.id }} key={c.id} className="flex items-center gap-4 p-3 glass rounded-xl hover:bg-white/5 transition">
                  <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shrink-0`}>
                    <PlayCircle className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{c.title}</div>
                    <div className="text-xs text-muted-foreground">{c.teacher}</div>
                    <div className="mt-2 flex items-center gap-3">
                      <Progress value={c.progress} className="h-1.5 flex-1" />
                      <span className="text-xs text-muted-foreground">{c.progress}%</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Activity chart */}
          <div className="glass-strong rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Долоо хоногийн идэвх</h2>
              <TrendingUp className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="mt-6 flex items-end justify-between h-40 gap-2">
              {week.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="relative w-full rounded-t-lg bg-[image:var(--gradient-neon)] transition-all hover:opacity-80" style={{ height: `${v}%` }}>
                    <div className="absolute inset-0 rounded-t-lg blur-md opacity-50 bg-[image:var(--gradient-neon)]" />
                  </div>
                  <span className="text-xs text-muted-foreground">{["Д","М","Л","П","Б","Б","Н"][i]}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Энэ долоо хоногт</span>
              <span className="font-bold gradient-text">12.5 цаг</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="glass-strong rounded-2xl p-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Calendar className="h-5 w-5" /> Удахгүйн</h2>
            <div className="mt-4 space-y-3">
              {["React Hooks танилцуулга", "AI semester шалгалт", "UI/UX тойм семинар"].map((t, i) => (
                <div key={t} className="glass rounded-xl p-3 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[image:var(--gradient-neon)] flex items-center justify-center text-xs font-bold">
                    {i + 12}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{t}</div>
                    <div className="text-xs text-muted-foreground">{["12-р сарын 18, 18:00", "12-р сарын 20, 14:00", "12-р сарын 22, 10:00"][i]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Award className="h-5 w-5" /> Гэрчилгээ</h2>
            <div className="mt-4 space-y-3">
              {["JavaScript Fundamentals", "Tailwind CSS Pro", "Python Basics"].map((t) => (
                <div key={t} className="glass rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-amber-400" />
                    <span className="text-sm font-medium">{t}</span>
                  </div>
                  <button className="text-xs gradient-text">Татах</button>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Bell className="h-5 w-5" /> Сүүлийн үйлдэл</h2>
            <div className="mt-4 space-y-4">
              {[
                { t: "React курсын 5-р хичээл дууссан", time: "2 цагийн өмнө" },
                { t: "Шинэ комментэд хариу ирлээ", time: "5 цагийн өмнө" },
                { t: "AI quiz-д 92 оноо авлаа", time: "Өчигдөр" },
              ].map((a) => (
                <div key={a.t} className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-[image:var(--gradient-neon)] mt-2" />
                  <div className="flex-1">
                    <div className="text-sm">{a.t}</div>
                    <div className="text-xs text-muted-foreground">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
