import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children, hideFooter }: { children: React.ReactNode; hideFooter?: boolean }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Animated background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[oklch(0.5_0.25_280/0.35)] blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[oklch(0.55_0.22_240/0.35)] blur-[120px] animate-blob" style={{ animationDelay: "-9s" }} />
        <div className="absolute inset-0 grid-bg" />
      </div>
      <Navbar />
      <main className="pt-28">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}