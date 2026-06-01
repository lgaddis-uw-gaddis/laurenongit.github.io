import { Link } from "@tanstack/react-router";
import { Sprout } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Sprout className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg">Terra & Tavola</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            A welcoming guide to turning open land into a flourishing, all-natural garden — rooted in Sicily.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/getting-started" className="hover:text-primary">Getting Started</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">From the Farm</h4>
          <p className="text-sm text-muted-foreground">
            Sicily, Italy · Grown with sunlight, patience, and care.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Terra & Tavola. All rights reserved.
      </div>
    </footer>
  );
}
