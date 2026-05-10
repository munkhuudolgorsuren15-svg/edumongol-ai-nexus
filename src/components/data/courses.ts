export type Course = {
  id: string;
  title: string;
  category: string;
  teacher: string;
  duration: string;
  level: "Анхан" | "Дунд" | "Гүнзгий";
  rating: number;
  students: number;
  progress?: number;
  price: string;
  color: string;
  description: string;
};

export const courses: Course[] = [
  { id: "react-mn", title: "React.js Бүрэн курс", category: "Програмчлал", teacher: "Б. Энхбат", duration: "12 цаг", level: "Дунд", rating: 4.9, students: 2840, progress: 65, price: "₮199,000", color: "from-blue-500 to-cyan-400", description: "Modern React 19 ашиглан бодит төслүүд бүтээж сурна." },
  { id: "ai-fund", title: "AI & Машин сургалтын үндэс", category: "AI & Технологи", teacher: "Д. Сараа", duration: "18 цаг", level: "Анхан", rating: 4.8, students: 1920, progress: 30, price: "₮249,000", color: "from-purple-500 to-pink-500", description: "Хиймэл оюуны үндсэн ойлголтууд, Python-оор практик." },
  { id: "ui-ux", title: "UI/UX Дизайн мастер", category: "Дизайн", teacher: "М. Номин", duration: "10 цаг", level: "Анхан", rating: 4.7, students: 1450, progress: 0, price: "₮179,000", color: "from-fuchsia-500 to-rose-400", description: "Figma-аар орчин үеийн интерфэйсийг загварчилна." },
  { id: "english", title: "Англи хэл - IELTS 7.0+", category: "Англи хэл", teacher: "L. Sara", duration: "30 цаг", level: "Дунд", rating: 4.9, students: 3210, price: "₮299,000", color: "from-emerald-500 to-teal-400", description: "IELTS-ийн бүх хэсэгт зориулсан стратеги, дасгалууд." },
  { id: "math", title: "Дээд математик", category: "Математик", teacher: "Г. Болд", duration: "20 цаг", level: "Гүнзгий", rating: 4.6, students: 980, price: "₮159,000", color: "from-amber-500 to-orange-500", description: "Их сургуулийн математикийн бүх сэдэв." },
  { id: "biz", title: "Стартап бизнесийн эхлэл", category: "Бизнес", teacher: "Т. Ану", duration: "8 цаг", level: "Анхан", rating: 4.8, students: 1680, price: "₮219,000", color: "from-indigo-500 to-blue-500", description: "Бизнесийн санаагаа MVP болгож, хөрөнгө татах." },
];

export const categories = [
  { name: "Програмчлал", icon: "Code2", count: 124, color: "from-blue-500 to-cyan-400" },
  { name: "Дизайн", icon: "Palette", count: 86, color: "from-fuchsia-500 to-pink-500" },
  { name: "AI & Технологи", icon: "Sparkles", count: 64, color: "from-purple-500 to-violet-500" },
  { name: "Англи хэл", icon: "Languages", count: 92, color: "from-emerald-500 to-teal-400" },
  { name: "Математик", icon: "Sigma", count: 48, color: "from-amber-500 to-orange-500" },
  { name: "Бизнес", icon: "Briefcase", count: 71, color: "from-indigo-500 to-blue-500" },
];

export const teachers = [
  { name: "Б. Энхбат", role: "Senior Software Engineer", img: "https://i.pravatar.cc/200?img=12" },
  { name: "Д. Сараа", role: "AI Researcher · PhD", img: "https://i.pravatar.cc/200?img=47" },
  { name: "М. Номин", role: "Lead Product Designer", img: "https://i.pravatar.cc/200?img=32" },
  { name: "Г. Болд", role: "Mathematics Professor", img: "https://i.pravatar.cc/200?img=15" },
];

export const testimonials = [
  { name: "А. Тэмүүлэн", role: "Оюутан", text: "EduMongol-ийн ачаар миний програмчлалын мэдлэг асар их өргөжсөн. Багш нар үнэхээр гарамгай.", img: "https://i.pravatar.cc/100?img=5" },
  { name: "Б. Хулан", role: "Дизайнер", text: "UI/UX курс надад мэргэжлийн анхны ажилдаа орох итгэлийг өгсөн. Маш сайн зохион байгуулалттай.", img: "https://i.pravatar.cc/100?img=23" },
  { name: "Ч. Болормаа", role: "IELTS оюутан", text: "IELTS 7.5 авсан! Багш Sara-ийн тайлбар, дасгал маш үр дүнтэй байсан.", img: "https://i.pravatar.cc/100?img=44" },
];