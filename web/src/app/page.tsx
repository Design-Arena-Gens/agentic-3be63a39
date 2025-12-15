import type { ReactNode } from "react";

type LiquidExample = {
  id: string;
  title: string;
  description: string;
  Component: () => ReactNode;
  code: string;
};

const auroraSnippet = `export function AuroraDriftPanel() {
  return (
    <div className="liquid-aurora">
      <div className="liquid-aurora__content space-y-6">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs tracking-[0.35em] text-sky-100/80">
          LIVE DATA
        </span>
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold tracking-tight text-sky-50">
            Aurora Drift Analytics
          </h3>
          <p className="max-w-md text-sm text-sky-100/80">
            A glassy gradient slab with a moving aurora backlight.
          </p>
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-xl border border-white/15 bg-white/8 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.28em] text-sky-100/70">
              Latency
            </p>
            <p className="mt-2 text-2xl font-semibold text-sky-50">
              183ms
            </p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/8 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.28em] text-sky-100/70">
              Throughput
            </p>
            <p className="mt-2 text-2xl font-semibold text-sky-50">
              98%
            </p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/8 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.28em] text-sky-100/70">
              Stability
            </p>
            <p className="mt-2 text-2xl font-semibold text-sky-50">
              99.4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`;

function AuroraDriftPanel() {
  return (
    <div className="liquid-aurora">
      <div className="liquid-aurora__content space-y-6">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs tracking-[0.35em] text-sky-100/80">
          LIVE DATA
        </span>
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold tracking-tight text-sky-50">
            Aurora Drift Analytics
          </h3>
          <p className="max-w-md text-sm text-sky-100/80">
            A glassy gradient slab with a moving aurora backlight that reacts
            like high-end dashboard glass.
          </p>
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          {[
            { label: "Latency", value: "183ms" },
            { label: "Throughput", value: "98%" },
            { label: "Stability", value: "99.4" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/15 bg-white/8 p-4 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-sky-100/70">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-sky-50">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const gooeySnippet = `export function GooeyOrbit() {
  return (
    <div className="relative flex items-center justify-center">
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="liquid-orbit">
        <div className="liquid-orbit__ring" />
        <div className="liquid-orbit__droplet liquid-orbit__droplet--a" />
        <div className="liquid-orbit__droplet liquid-orbit__droplet--b" />
        <div className="liquid-orbit__droplet liquid-orbit__droplet--c" />
        <div className="liquid-orbit__core text-xs">SYNC</div>
      </div>
    </div>
  );
}`;

function GooeyOrbit() {
  return (
    <div className="relative flex items-center justify-center">
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="liquid-orbit">
        <div className="liquid-orbit__ring" />
        <div className="liquid-orbit__droplet liquid-orbit__droplet--a" />
        <div className="liquid-orbit__droplet liquid-orbit__droplet--b" />
        <div className="liquid-orbit__droplet liquid-orbit__droplet--c" />
        <div className="liquid-orbit__core text-xs">SYNC</div>
      </div>
    </div>
  );
}

const rippleSnippet = `export function LiquidPrimaryButton() {
  return (
    <div className="rounded-full border border-sky-500/40 bg-slate-950/70 p-0.5 backdrop-blur">
      <button className="liquid-ripple">
        <span className="text-sm uppercase tracking-[0.3em]">
          Engage Flow
        </span>
      </button>
    </div>
  );
}`;

function LiquidPrimaryButton() {
  return (
    <div className="rounded-full border border-sky-500/40 bg-slate-950/70 p-0.5 backdrop-blur">
      <button className="liquid-ripple">
        <span className="text-sm uppercase tracking-[0.3em]">
          Engage Flow
        </span>
      </button>
    </div>
  );
}

const curtainSnippet = `export function CurtainRevealHero() {
  return (
    <div className="liquid-curtain">
      <div className="liquid-curtain__media">
        <span className="liquid-curtain__tagline">Immersive Launch</span>
        <p className="liquid-curtain__headline">TIDE LX</p>
      </div>
    </div>
  );
}`;

function CurtainRevealHero() {
  return (
    <div className="liquid-curtain">
      <div className="liquid-curtain__media">
        <span className="liquid-curtain__tagline">Immersive Launch</span>
        <p className="liquid-curtain__headline">TIDE LX</p>
      </div>
    </div>
  );
}

const headlineSnippet = `export function MoltenGradientTitle() {
  return (
    <h2 className="liquid-headline">
      LIQUID GOLD
      <span className="liquid-headline__shadow">SIGNATURE EXPERIENCE</span>
    </h2>
  );
}`;

function MoltenGradientTitle() {
  return (
    <h2 className="liquid-headline">
      LIQUID GOLD
      <span className="liquid-headline__shadow">SIGNATURE EXPERIENCE</span>
    </h2>
  );
}

const LIQUID_EXAMPLES: LiquidExample[] = [
  {
    id: "aurora",
    title: "Aurora Drift Panel",
    description:
      "Premium analytics slab that fuses aurora lighting with glass morphism. Great for dashboards and hero metrics.",
    Component: AuroraDriftPanel,
    code: auroraSnippet,
  },
  {
    id: "gooey",
    title: "Gooey Orbit Loader",
    description:
      "Liquid loader engineered with SVG goo filters for seamless blob blending. Perfect for suspense moments.",
    Component: GooeyOrbit,
    code: gooeySnippet,
  },
  {
    id: "ripple",
    title: "Pulse Ripple CTA",
    description:
      "A button with continuous ripple energy. Uses layered radial gradients for a luxurious hover aura.",
    Component: LiquidPrimaryButton,
    code: rippleSnippet,
  },
  {
    id: "curtain",
    title: "Curtain Reveal Hero",
    description:
      "Animated curtain sweep that paints gradients across a product marque. Ideal for high-end launches.",
    Component: CurtainRevealHero,
    code: curtainSnippet,
  },
  {
    id: "headline",
    title: "Molten Gradient Title",
    description:
      "Shimmering headline with a molten gradient loop and soft chromed shadow to anchor premium storytelling.",
    Component: MoltenGradientTitle,
    code: headlineSnippet,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_40%)]" />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <header className="space-y-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-sky-200/70">
            <span className="h-px flex-1 bg-sky-500/30" />
            Liquid Transitions
            <span className="h-px flex-1 bg-sky-500/30" />
          </div>
          <div className="space-y-6">
            <MoltenGradientTitle />
            <p className="max-w-3xl text-base text-slate-200/80 sm:text-lg">
              Hand-picked motion recipes that feel like they were poured, not
              coded. Each section pairs a live demo with drop-in code so you can
              ship premium fluidity fast.
            </p>
          </div>
        </header>

        {LIQUID_EXAMPLES.map((example, idx) => (
          <section
            key={example.id}
            className="relative grid items-start gap-10 rounded-3xl border border-slate-800/60 bg-slate-900/30 p-8 shadow-[0_40px_90px_-60px_rgba(59,130,246,0.45)] backdrop-blur-xl md:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] md:p-12"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-sky-500/40 bg-slate-900/80 px-4 py-1 text-xs uppercase tracking-[0.4em] text-sky-200/80">
                {String(idx + 1).padStart(2, "0")} · Liquid Style
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                  {example.title}
                </h3>
                <p className="text-sm text-slate-200/75 sm:text-base">
                  {example.description}
                </p>
              </div>
              <div className="rounded-3xl border border-slate-700/60 bg-slate-950/60 p-6 shadow-inner">
                {example.Component()}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.45em] text-slate-300/70">
                Demo Markup & Notes
              </h4>
              <pre className="max-h-[420px] overflow-auto rounded-2xl border border-slate-800/90 bg-slate-950/80 p-6 text-[13px] leading-relaxed text-slate-200/90 shadow-[inset_0_20px_40px_rgba(15,23,42,0.8)]">
                <code>{example.code}</code>
              </pre>
              <p className="text-xs text-slate-400/80">
                Pair this JSX with the global CSS classes inside{" "}
                <code className="rounded bg-slate-800/80 px-1.5 py-0.5 text-[11px] text-sky-300">
                  src/app/globals.css
                </code>{" "}
                to unlock the motion gradients.
              </p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
