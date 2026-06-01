import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, Leaf, Sun, Sprout } from "lucide-react";
import farmLandscape from "@/assets/farm-landscape.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terra & Tavola — Grow your farm in 100 days" },
      { name: "description", content: "Welcome to the start of your farming journey. Turn open land into a lush, all-natural garden with our guided approach." },
      { property: "og:title", content: "Terra & Tavola — Grow your farm in 100 days" },
      { property: "og:description", content: "Turn open land into a lush, all-natural garden with our guided approach." },
      { property: "og:image", content: farmLandscape },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={farmLandscape}
          alt="A flourishing farmhouse garden at sunset"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-serif italic text-white/90 text-lg md:text-xl mb-4 tracking-wide">
            Welcome to the start of your farming journey
          </p>
          <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] max-w-5xl drop-shadow-lg">
            Grow your farm <em className="text-primary-foreground/95">in 100 days</em>
          </h1>
          <p className="mt-6 max-w-2xl text-white/90 text-lg md:text-xl leading-relaxed">
            From a quiet patch of land to a lush, living garden — a warm, hand-guided
            approach to all-natural growing. We are so happy you found us.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/getting-started"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground text-base hover:bg-primary/90 transition-all shadow-lg"
            >
              Begin your garden
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/10 backdrop-blur px-7 py-3.5 text-white text-base hover:bg-white/20 transition-all"
            >
              Meet the grower
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs tracking-[0.3em] uppercase">
          Scroll
        </div>
      </section>

      {/* Promise band */}
      <section className="py-24 px-6 bg-background">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-primary uppercase tracking-[0.25em] text-xs mb-4">Our promise</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
            Land has memory. We help you wake it up — gently, and from day one.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No tilling shortcuts, no chemicals, no guesswork. Just a generous, season-by-season
            plan that turns bare ground into rows of vegetables, fruit, and flowers you'll be
            proud to bring to your table.
          </p>
        </div>
      </section>

      {/* Bare soil to harvest — looping video */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-primary uppercase tracking-[0.25em] text-xs mb-3">Watch it happen</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              From bare soil to a full harvest.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A season, condensed — the quiet miracle that unfolds when you give the land what it needs.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-auto block"
            >
              <source src="/transformation.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
          </div>
        </div>
      </section>



      {/* Three pillars */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
          {[
            { icon: Sprout, title: "Start from scratch", body: "A first-day plan for any garden, patio, or open field — no experience required." },
            { icon: Leaf, title: "All-natural & organic", body: "Soil-first methods, companion planting, and zero synthetic inputs. Ever." },
            { icon: Sun, title: "Green technology", body: "Thoughtful tools — drip irrigation, solar timers, compost systems — that work with the land." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-8 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA to guide */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-primary/95 text-primary-foreground p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${farmLandscape})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="relative">
            <p className="uppercase tracking-[0.3em] text-xs mb-4 opacity-80">The complete guide</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">From bare land to first harvest</h2>
            <p className="max-w-xl mx-auto opacity-90 mb-8 text-lg">
              The same step-by-step playbook we follow on our Sicilian farm — yours to download today.
            </p>
            <Link
              to="/getting-started"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-3.5 hover:bg-background/90 transition-colors"
            >
              See pricing & download <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
