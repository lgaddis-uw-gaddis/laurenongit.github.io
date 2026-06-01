import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Leaf, Sun, Sprout, ArrowRight } from "lucide-react";
import portrait from "@/assets/about-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Terra & Tavola" },
      { name: "description", content: "Twenty years on a Sicilian farm, growing all-natural with green technology. Meet the hands behind Terra & Tavola." },
      { property: "og:title", content: "About — Terra & Tavola" },
      { property: "og:description", content: "Twenty years on a Sicilian farm — meet the hands behind Terra & Tavola." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl grid gap-14 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src={portrait}
                alt="Portrait in the garden among sunflowers and rows of cabbage"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden md:block bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-lg font-serif italic">
              Sicily, Italy
            </div>
          </div>

          <div>
            <p className="text-primary uppercase tracking-[0.25em] text-xs mb-4">Our story</p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.05] mb-6">
              Twenty years with my hands in the soil.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              I grew up on a small family farm in <strong className="text-foreground">Sicily, Italy</strong>,
              where the days were measured in sunrises, seed packets, and the slow turn of the seasons.
              More than two decades later, the land still teaches me something new every spring.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              Terra & Tavola exists to share what those years have taught me — not as a manual, but
              as an invitation. Whatever your patch of earth looks like today, it has everything it
              needs to flourish.
            </p>
            <Link
              to="/getting-started"
              className="inline-flex items-center gap-2 mt-4 rounded-full bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              Start with the guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our ways of farming */}
      <section className="px-6 py-24 bg-secondary/40">
        <div className="mx-auto max-w-5xl text-center mb-14">
          <p className="text-primary uppercase tracking-[0.25em] text-xs mb-3">Our ways of farming</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Old soul, gentle hands, modern care.
          </h2>
        </div>

        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: "All-Natural",
              body: "Cover crops, hand-weeding, and patient observation — never synthetic shortcuts. The soil is a living thing, and we treat it like one.",
            },
            {
              icon: Sprout,
              title: "Fully Organic",
              body: "Compost we make ourselves, seeds we save year after year, and companion planting that lets the garden defend itself.",
            },
            {
              icon: Sun,
              title: "Green Technology",
              body: "Solar-powered drip irrigation, rainwater catchment, and smart timers — quiet tools that respect the rhythm of the land.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-8">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-foreground">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience strip */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { stat: "20+", label: "Years on the farm" },
            { stat: "100%", label: "Organic & natural" },
            { stat: "100 days", label: "From seed to harvest" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="font-serif text-6xl text-primary">{stat}</div>
              <div className="mt-2 uppercase tracking-[0.2em] text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing note */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed text-foreground">
            "Growing food is the most hopeful thing a person can do. I'd love nothing more
            than to help you start."
          </p>
          <p className="mt-6 text-muted-foreground uppercase tracking-[0.3em] text-xs">
            — From our farm to yours
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
