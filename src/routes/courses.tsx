import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Star, Clock, Users, BookOpen, Filter } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { courses, categories } from "@/components/data/courses";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Хичээлүүд — EduMongol AI" },
      { name: "description", content: "500+ онлайн хичээл — програмчлал, дизайн, AI, англи хэл, бизнес." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const filtered = courses.filter((c) =>
    (!cat || c.category === cat) &&
    (c.title.toLowerCase().includes(q.toLowerCase()) || c.teacher.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold">Бүх <span className="gradient-text">хичээлүүд</span></h1>
          <p className="mt-4 text-muted-foreground">Хүссэн чиглэлээ сонгож, мэдлэгийн аяллаа эхлүүлээрэй.</p>
        </div>

        <div className="mt-10 glass-strong rounded-2xl p-4 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Хичээл, багшийн нэрээр хайх..." className="pl-10 bg-white/5 border-white/10 h-11" />
          </div>
          <Button variant="glass" size="lg"><Filter className="h-4 w-4" /> Шүүлтүүр</Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button onClick={() => setCat(null)} className={`px-4 py-2 rounded-full text-sm transition ${!cat ? "bg-[image:var(--gradient-neon)] text-white" : "glass hover:bg-white/10"}`}>Бүгд</button>
          {categories.map((c) => (
            <button key={c.name} onClick={() => setCat(c.name)} className={`px-4 py-2 rounded-full text-sm transition ${cat === c.name ? "bg-[image:var(--gradient-neon)] text-white" : "glass hover:bg-white/10"}`}>{c.name}</button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <Link to="/courses/$id" params={{ id: c.id }} key={c.id} className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-all">
              <div className={`relative h-44 bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
                <BookOpen className="h-16 w-16 text-white/80" />
                <span className="absolute top-3 left-3 text-xs glass-strong px-2 py-1 rounded-md">{c.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg group-hover:gradient-text">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.teacher}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.duration}</span>
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {c.students.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {c.rating}</span>
                </div>
                <div className="mt-4 font-bold gradient-text text-lg">{c.price}</div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">Үр дүн олдсонгүй.</div>
        )}
      </section>
    </SiteLayout>
  );
}
