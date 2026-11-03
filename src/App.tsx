import { useEffect, useState } from 'react'
import {
  Swords,
  Shield,
  Sparkles,
  Split,
  Clock,
  Ghost,
  Terminal,
  Eye,
  ChevronDown,
  Download,
  Monitor,
  MessageCircle,
} from 'lucide-react'
import { content, type Lang } from './i18n'

const DISCORD_URL = 'https://discord.gg/uUCJAJYv6Y'

// Meta independente de idioma (ícones, cores, links). O texto vem do dicionário.
const DOWNLOAD_META = [
  { icon: Monitor, os: 'Windows', href: '/downloads/entre-ciclos-windows.zip' },
  { icon: Terminal, os: 'Linux', href: '/downloads/entre-ciclos-linux.zip' },
]
const SHOT_SRCS = [
  '/shots/titulo.png',
  '/shots/combate.png',
  '/shots/corredor.png',
  '/shots/laboratorio.png',
  '/shots/fluk.png',
  '/shots/quarto.png',
]
const COMBAT_META = [
  { icon: Swords, color: 'text-amber' },
  { icon: Shield, color: 'text-cyan' },
  { icon: Sparkles, color: 'text-purple' },
  { icon: Split, color: 'text-green' },
]
const FEATURE_ICONS = [Clock, Ghost, Terminal, Eye]

function Squares() {
  const squares = Array.from({ length: 14 }, (_, i) => {
    const size = 14 + ((i * 37) % 40)
    const left = (i * 71) % 100
    const dur = 18 + ((i * 13) % 22)
    const delay = -((i * 29) % 30)
    return (
      <span
        key={i}
        className="square"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          bottom: `-80px`,
          animationDuration: `${dur}s`,
          animationDelay: `${delay}s`,
        }}
      />
    )
  })
  return <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>{squares}</div>
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-display text-[10px] sm:text-xs tracking-widest text-cyan/80 mb-4 uppercase">
      {children}
    </p>
  )
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center rounded-md border border-line overflow-hidden text-base leading-none">
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-label="English"
        title="English"
        className={`px-1.5 py-1 transition ${lang === 'en' ? 'bg-white/10' : 'opacity-50 hover:opacity-100'}`}
      >
        🇺🇸
      </button>
      <button
        type="button"
        onClick={() => setLang('pt')}
        aria-label="Português"
        title="Português"
        className={`px-1.5 py-1 transition ${lang === 'pt' ? 'bg-white/10' : 'opacity-50 hover:opacity-100'}`}
      >
        🇧🇷
      </button>
    </div>
  )
}

export default function App() {
  const [egg, setEgg] = useState(false)
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('ec-lang')
      if (saved === 'en' || saved === 'pt') return saved
    } catch {
      /* ignore */
    }
    return 'en'
  })

  useEffect(() => {
    try {
      localStorage.setItem('ec-lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const c = content[lang]

  return (
    <div className="bg-grid scanlines relative min-h-screen">
      <Squares />

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-bg/70 border-b border-line">
        <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#top" className="font-display text-xs sm:text-sm text-ink">
            ENTRE<span className="text-green">·</span>CICLOS
          </a>
          <div className="flex items-center gap-3 sm:gap-5 text-sm text-muted">
            <a href="#conceito" className="hidden sm:inline hover:text-ink transition-colors">{c.nav.concept}</a>
            <a href="#combate" className="hidden sm:inline hover:text-ink transition-colors">{c.nav.combat}</a>
            <a href="#galeria" className="hidden sm:inline hover:text-ink transition-colors">{c.nav.gallery}</a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <MessageCircle size={15} /> Discord
            </a>
            <a href="#baixar" className="rounded-md bg-green/15 border border-green/40 px-3 py-1.5 text-green hover:bg-green/25 transition-colors">{c.nav.download}</a>
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative z-10 mx-auto max-w-6xl px-4 pt-16 sm:pt-24 pb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-green/40 bg-green/10 px-3 py-1 text-xs text-green mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-green blink" /> {c.hero.badge}
        </span>
        <h1 className="font-display text-ink leading-[1.3] text-3xl sm:text-5xl md:text-6xl">
          Entre <span className="text-cyan">Ciclos</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl text-muted">{c.hero.desc}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#baixar"
            className="inline-flex items-center gap-2 rounded-md bg-green px-5 py-2.5 font-medium text-bg hover:brightness-110 transition"
          >
            <Download size={18} /> {c.hero.ctaDownload}
          </a>
          <a
            href="#conceito"
            className="rounded-md border border-line px-5 py-2.5 text-ink hover:bg-white/5 transition"
          >
            {c.hero.ctaConcept}
          </a>
        </div>

        <div className="mt-14 relative mx-auto max-w-4xl floaty">
          <div className="absolute -inset-4 rounded-2xl bg-cyan/10 blur-2xl" aria-hidden />
          <img
            src="/shots/combate.png"
            alt={c.hero.imgAlt}
            className="pixel relative w-full rounded-xl border border-line shadow-2xl"
          />
        </div>
        <a href="#conceito" className="mt-10 inline-flex text-muted hover:text-ink transition" aria-label={c.hero.ctaConcept}>
          <ChevronDown className="animate-bounce" />
        </a>
      </section>

      {/* Conceito */}
      <section id="conceito" className="relative z-10 mx-auto max-w-6xl px-4 py-20 border-t border-line">
        <SectionLabel>{c.concept.label}</SectionLabel>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-xl sm:text-2xl text-ink leading-[1.5]">{c.concept.heading}</h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">{c.concept.body}</div>
          </div>
          <div className="relative floaty">
            <div className="absolute -inset-3 rounded-2xl bg-purple/10 blur-2xl" aria-hidden />
            <img
              src="/shots/corredor.png"
              alt={c.concept.imgAlt}
              className="pixel relative w-full rounded-xl border border-line"
            />
          </div>
        </div>
      </section>

      {/* Combate */}
      <section id="combate" className="relative z-10 mx-auto max-w-6xl px-4 py-20 border-t border-line">
        <SectionLabel>{c.combat.label}</SectionLabel>
        <h2 className="font-display text-xl sm:text-2xl text-ink leading-[1.5] max-w-3xl">{c.combat.heading}</h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">{c.combat.intro}</p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {COMBAT_META.map((m, i) => (
            <div key={i} className="card rounded-xl p-6">
              <m.icon className={`${m.color} mb-3`} size={26} />
              <h3 className="text-ink font-semibold text-lg">{c.combat.cards[i].title}</h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">{c.combat.cards[i].desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inimigos */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 border-t border-line">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative order-2 md:order-1 floaty">
            <div className="absolute -inset-3 rounded-2xl bg-amber/10 blur-2xl" aria-hidden />
            <img
              src="/shots/combate.png"
              alt={c.enemies.imgAlt}
              className="pixel relative w-full rounded-xl border border-line"
            />
          </div>
          <div className="order-1 md:order-2">
            <SectionLabel>{c.enemies.label}</SectionLabel>
            <h2 className="font-display text-xl sm:text-2xl text-ink leading-[1.5]">{c.enemies.heading}</h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">{c.enemies.body}</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 border-t border-line">
        <SectionLabel>{c.features.label}</SectionLabel>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURE_ICONS.map((Icon, i) => (
            <div key={i} className="card rounded-xl p-6">
              <Icon className="text-cyan mb-3" size={24} />
              <h3 className="text-ink font-semibold">{c.features.items[i].title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">{c.features.items[i].desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Baixar */}
      <section id="baixar" className="relative z-10 mx-auto max-w-6xl px-4 py-20 border-t border-line">
        <div className="card rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -inset-10 bg-green/5 blur-3xl" aria-hidden />
          <div className="relative">
            <SectionLabel>{c.download.label}</SectionLabel>
            <h2 className="font-display text-xl sm:text-2xl text-ink leading-[1.5]">{c.download.heading}</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted leading-relaxed">{c.download.intro}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {DOWNLOAD_META.map((d, i) => (
                <a
                  key={d.os}
                  href={d.href}
                  className="group inline-flex items-center gap-3 rounded-lg border border-line bg-bg/60 px-5 py-3 text-left hover:border-green/50 hover:bg-white/5 transition"
                >
                  <d.icon className="text-cyan group-hover:text-green transition" size={24} />
                  <span>
                    <span className="flex items-center gap-2 font-medium text-ink">
                      <Download size={15} /> {d.os}
                    </span>
                    <span className="block text-xs text-muted">{c.download.notes[i]}</span>
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted">{c.download.note}</p>

            <div className="mt-8 border-t border-line pt-8">
              <p className="text-muted">{c.download.discordText}</p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-cyan/40 bg-cyan/10 px-5 py-2.5 font-medium text-cyan hover:bg-cyan/20 transition"
              >
                <MessageCircle size={18} /> {c.download.discordBtn}
              </a>
            </div>

            {/* easter egg: um "build" que não devia estar aqui (SUJEITO 04 = Yury) */}
            {egg && (
              <div className="mt-8 mx-auto max-w-md rounded-lg border border-purple/40 bg-purple/5 p-5 text-left floaty">
                <div className="flex items-center gap-3">
                  <Ghost className="text-purple shrink-0" size={24} />
                  <div>
                    <p className="font-term text-xl leading-none text-purple blink">{c.egg.file}</p>
                    <p className="mt-1 text-xs text-muted">{c.egg.meta}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm italic text-muted">{c.egg.line}</p>
              </div>
            )}
          </div>

          {/* gatilho discreto do easter egg (cantinho do card) */}
          <button
            type="button"
            onClick={() => setEgg((v) => !v)}
            aria-label="?"
            tabIndex={-1}
            className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-[2px] border border-purple/20 opacity-25 hover:opacity-100 hover:border-purple/70 transition"
          />
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="relative z-10 mx-auto max-w-6xl px-4 py-20 border-t border-line">
        <SectionLabel>{c.gallery.label}</SectionLabel>
        <h2 className="font-display text-xl sm:text-2xl text-ink mb-8">{c.gallery.heading}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SHOT_SRCS.map((src, i) => (
            <figure key={src} className="card group rounded-xl overflow-hidden">
              <div className="overflow-hidden bg-black">
                <img
                  src={src}
                  alt={c.gallery.shots[i].title}
                  loading="lazy"
                  className="pixel w-full aspect-video object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-term text-xl text-green leading-none">{c.gallery.shots[i].title}</p>
                <p className="mt-1 text-muted text-sm">{c.gallery.shots[i].desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div>
            <p className="font-display text-xs text-ink">ENTRE·CICLOS</p>
            <p className="mt-2">{c.footer.tagline}</p>
          </div>
          <div className="flex items-center gap-5">
            <a href={DISCORD_URL} className="inline-flex items-center gap-1.5 hover:text-ink transition" target="_blank" rel="noreferrer">
              <MessageCircle size={15} /> Discord
            </a>
            <span className="text-line">·</span>
            <a href="https://portfolio.nortixcode.com.br" className="hover:text-ink transition" target="_blank" rel="noreferrer">
              Vítor Ornelas
            </a>
            <span className="text-line">·</span>
            <a href="#top" className="hover:text-ink transition">{c.footer.backToTop}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
