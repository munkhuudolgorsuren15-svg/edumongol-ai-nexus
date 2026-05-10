import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, Clock, Users, Award, PlayCircle, FileText, MessageSquare, Check, BookOpen } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { courses } from "@/components/data/courses";

export const Route = createFileRoute("/courses/$id")({
  component: CourseDetail,
  notFoundComponent: () => (
    <SiteLayout><div className="text-center py-32"><h1 className="text-3xl font-bold">Хичээл олдсонгүй</h1><Button asChild className="mt-6" variant="hero"><Link to="/courses">Буцах</Link></Button></div></SiteLayout>
  ),
});

const lessons = [
  { t: "Танилцуулга", d: "8:24" },
  { t: "Орчны тохиргоо", d: "12:10" },
  { t: "Үндсэн ойлголтууд", d: "18:45" },
  { t: "Бодит жишээ #1", d: "22:30" },
  { t: "Бодит жишээ #2", d: "25:12" },
  { t: "Дасгал ажил", d: "15:00" },
  { t: "Шалгалт", d: "10:00" },
];

function CourseDetail() {
  const { id } = Route.useParams();
  const course = courses.find((c) => c.id === id);
  if (!course) throw notFound();

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className={`relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br ${course.color} flex items-center justify-center`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
              <button className="relative h-20 w-20 rounded-full glass-strong flex items-center justify-center hover:scale-110 transition">
                <PlayCircle className="h-10 w-10" />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
              <span className="glass px-3 py-1 rounded-full">{course.category}</span>
              <span className="glass px-3 py-1 rounded-full">{course.level}</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">{course.title}</h1>
            <p className="mt-4 text-muted-foreground text-lg">{course.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {course.rating} (1,240 үнэлгээ)</span>
              <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {course.students.toLocaleString()} оюутан</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {course.duration}</span>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold">Юу сурах вэ?</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {["Бодит төсөл бүтээх", "Орчин үеийн арга барил", "Алдаа засварлах техник", "Багаар ажиллах ур чадвар", "Гэрчилгээ хүртэх", "AI туслахтай суралцах"].map((t) => (
                  <div key={t} className="flex items-start gap-2 glass rounded-xl p-3">
                    <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" /> <span className="text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold">Хичээлийн агуулга</h2>
              <div className="mt-4 glass rounded-2xl divide-y divide-white/5">
                {lessons.map((l, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 transition cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center text-sm">{i + 1}</div>
                      <div>
                        <div className="font-medium">{l.t}</div>
                        <div className="text-xs text-muted-foreground flex gap-3 mt-1">
                          <span className="flex items-center gap-1"><PlayCircle className="h-3 w-3" /> Видео</span>
                          <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> PDF</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{l.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold flex items-center gap-2"><MessageSquare className="h-6 w-6" /> Сэтгэгдэл</h2>
              <div className="mt-4 space-y-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="glass rounded-xl p-4 flex gap-3">
                    <img src={`https://i.pravatar.cc/60?img=${i*7}`} className="h-10 w-10 rounded-full" alt="" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">Оюутан #{i}</div>
                      <p className="text-sm text-muted-foreground mt-1">Маш ойлгомжтой тайлбар, бодит жишээнүүд гайхалтай.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-28 h-fit">
            <div className="glass-strong rounded-2xl p-6">
              <div className="text-3xl font-bold gradient-text">{course.price}</div>
              {course.progress !== undefined && course.progress > 0 && (
                <div className="mt-4">
                  <div className="text-sm flex justify-between mb-1"><span>Прогресс</span><span>{course.progress}%</span></div>
                  <Progress value={course.progress} />
                </div>
              )}
              <Button variant="hero" size="lg" className="w-full mt-5">
                {course.progress ? "Үргэлжлүүлэх" : "Хичээл худалдан авах"}
              </Button>
              <Button variant="glass" size="lg" className="w-full mt-2">Хүсэлтэд нэмэх</Button>

              <div className="mt-6 space-y-3 text-sm">
                {[
                  { i: BookOpen, t: `${lessons.length} хичээл` },
                  { i: Clock, t: `${course.duration} нийт` },
                  { i: Award, t: "Дуусгасны гэрчилгээ" },
                  { i: Users, t: "Насан туршийн хандалт" },
                ].map(({ i: Icon, t }) => (
                  <div key={t} className="flex items-center gap-2 text-muted-foreground">
                    <Icon className="h-4 w-4" /> {t}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="text-xs text-muted-foreground mb-2">Багш</div>
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/60?img=12" className="h-10 w-10 rounded-full" alt="" />
                  <div>
                    <div className="font-medium text-sm">{course.teacher}</div>
                    <div className="text-xs text-muted-foreground">Senior Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
