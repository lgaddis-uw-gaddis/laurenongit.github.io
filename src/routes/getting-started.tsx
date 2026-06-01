import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Check, Download, BookOpen, Sprout } from "lucide-react";
import farmLandscape from "@/assets/farm-landscape.png";

export const Route = createFileRoute("/getting-started")({
  head: () => ({
    meta: [
      { title: "Getting Started — Terra & Tavola" },
      { name: "description", content: "Download the complete guide to transforming open land into a flourishing, organic garden — from day one." },
      { property: "og:title", content: "Getting Started — Terra & Tavola" },
      { property: "og:description", content: "Download our complete planting guide and start your garden today." },
      { property: "og:image", content: farmLandscape },
    ],
  }),
  component: GettingStarted,
});

function GettingStarted() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero with the farm landscape image */}
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[440px] w-full overflow-hidden">
          <img
            src={farmLandscape}
            alt="Sunset over a lush farmhouse garden with rows of vegetables"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
            <p className="text-white/90 uppercase tracking-[0.3em] text-xs mb-4">Getting started</p>
            <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl leading-tight max-w-4xl drop-shadow">
              Your first season, planted with confidence
            </h1>
            <p className="mt-5 max-w-2xl text-white/90 text-lg leading-relaxed">
              Download the complete guide and follow the same steps that turn ordinary land
              into a flourishing, all-natural garden.
            </p>
          </div>
        </div>
      </section>

      {/* Download + intro */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-primary uppercase tracking-[0.25em] text-xs mb-3">The complete guide</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-5 leading-tight">
              Everything you need to grow, in one warm volume.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Over 80 pages of season-by-season planning, soil preparation, planting layouts,
              natural pest care, and the gentle technology that makes it all sustainable.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Day-one site assessment & soil basics",
                "100-day planting calendar for any climate",
                "Organic companion planting maps",
                "Drip irrigation & solar timer setup",
                "Composting, mulching & seed-saving",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/guides/terra-e-tavola-sample.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground hover:bg-primary/90 transition-colors shadow"
            >
              <Download className="h-5 w-5" /> Download the free sample
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
              <img src={farmLandscape} alt="The guide" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-lg flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <div>
                <div className="font-serif text-lg leading-none">The Guide</div>
                <div className="text-xs text-muted-foreground">PDF · 84 pages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing — one offer */}
      <section className="px-6 pb-28 bg-secondary/40 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary uppercase tracking-[0.25em] text-xs mb-3">Simple pricing</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">One guide. One harvest. Yours forever.</h2>
          <p className="text-muted-foreground text-lg">No subscriptions, no upsells — just everything we know, in your hands.</p>

          <div className="mt-12 rounded-3xl bg-card border border-border shadow-xl p-10 md:p-12 text-left">
            <div className="flex items-center gap-3 mb-2">
              <Sprout className="h-6 w-6 text-primary" />
              <h3 className="font-serif text-2xl">The Complete Garden Guide</h3>
            </div>
            <p className="text-muted-foreground mb-6">Lifetime access, future updates included.</p>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-serif text-6xl text-foreground">€39</span>
              <span className="text-muted-foreground">one-time</span>
            </div>

            <ul className="space-y-3 mb-10">
              {[
                "Full 84-page illustrated PDF guide",
                "100-day step-by-step planting calendar",
                "Printable garden layout templates",
                "Seasonal email check-ins from the farm",
                "Lifetime updates as we learn more",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/guides/terra-e-tavola-sample.pdf"
              download
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-primary-foreground hover:bg-primary/90 transition-colors text-lg"
            >
              <Download className="h-5 w-5" /> Download the Guide
            </a>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Secure checkout · Instant download · 30-day garden guarantee
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
