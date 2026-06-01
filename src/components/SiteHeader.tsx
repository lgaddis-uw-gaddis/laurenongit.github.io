import { Link } from "@tanstack/react-router";
import { Sprout } from "lucide-react";

export function SiteHeader() {
  const linkCls =
    "text-sm tracking-wide uppercase text-foreground/80 hover:text-primary transition-colors";
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <Sprout className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl">Terra & Tavola</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>Home</Link>
          <Link to="/getting-started" className={linkCls} activeProps={{ className: "text-primary" }}>Getting Started</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-primary" }}>About</Link>
        </nav>
        <Link
          to="/getting-started"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Get the Guide
        </Link>
      </div>
    </header>
  );
}
