import { useState } from 'react'
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
} from 'lucide-react'

const DOWNLOADS = [
  { icon: Monitor, os: 'Windows', note: '.zip · extraia e rode o .exe', href: '/downloads/entre-ciclos-windows.zip' },
  { icon: Terminal, os: 'Linux', note: '.zip · extraia e rode o executável', href: '/downloads/entre-ciclos-linux.zip' },
]

const SHOTS = [
  { src: '/shots/titulo.png', title: 'Tela-título', desc: 'O ciclo começa de novo.' },
  { src: '/shots/combate.png', title: 'Combate', desc: 'Batalha em primeira pessoa contra o sentimento que ganhou forma.' },
  { src: '/shots/corredor.png', title: 'O corredor', desc: 'O laboratório, silencioso anos depois da Quebra.' },
  { src: '/shots/laboratorio.png', title: 'Sala de análise', desc: 'Servidores, terminais e os registros do experimento.' },
  { src: '/shots/fluk.png', title: 'Fluk', desc: 'Nem tudo nesta ilha quer te fazer mal.' },
  { src: '/shots/quarto.png', title: 'O quarto', desc: 'Erik acorda sem lembrar do que aconteceu.' },
]

const COMBAT = [
  {
    icon: Swords,
    color: 'text-amber',
    title: 'Ataque no ritmo',
    desc: 'As setas sobem até a marca — acerte no tempo certo, estilo rhythm game, pra bater em cheio.',
  },
  {
    icon: Shield,
    color: 'text-cyan',
    title: 'Defesa por timing',
    desc: 'Os golpes vêm das direções da tela. Bloqueie na janela certa — ou acerte o parry e vire o jogo. Dá pra defender dois ao mesmo tempo, uma mão em cada.',
  },
  {
    icon: Sparkles,
    color: 'text-purple',
    title: 'Magia e Especial',
    desc: 'Encha a barra de Especial e gaste em magias — quanto mais poder você junta na mão, mais forte é o que você arremessa.',
  },
  {
    icon: Split,
    color: 'text-green',
    title: 'Purificar ou absorver',
    desc: 'Ao vencer, escolha libertar o sentimento — ou absorver sua energia. O preço dessa escolha te segue até o final.',
  },
]

const FEATURES = [
  { icon: Clock, title: 'Voltar no tempo', desc: 'O poder — e o peso — de reescrever o que já aconteceu.' },
  { icon: Ghost, title: 'Inimigos de sentimento', desc: 'Energia informe que só toma forma ao travar em alguém. O primeiro: a ansiedade.' },
  { icon: Terminal, title: 'Terminais & hacking', desc: 'Invada os sistemas do laboratório e descubra o que ficou pra trás.' },
  { icon: Eye, title: 'Tom melancólico', desc: 'Pixel art retro-futurista sobre memória e o que sobra de quem a gente era.' },
]

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

export default function App() {
  const [egg, setEgg] = useState(false)
  return (
    <div className="bg-grid scanlines relative min-h-screen">
      <Squares />

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-bg/70 border-b border-line">
        <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#top" className="font-display text-xs sm:text-sm text-ink">
            ENTRE<span className="text-green">·</span>CICLOS
          </a>
          <div className="flex items-center gap-5 text-sm text-muted">
            <a href="#conceito" className="hover:text-ink transition-colors">Conceito</a>
            <a href="#combate" className="hover:text-ink transition-colors">Combate</a>
            <a href="#galeria" className="hover:text-ink transition-colors">Galeria</a>
            <a href="#baixar" className="rounded-md bg-green/15 border border-green/40 px-3 py-1.5 text-green hover:bg-green/25 transition-colors">Baixar</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative z-10 mx-auto max-w-6xl px-4 pt-16 sm:pt-24 pb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-green/40 bg-green/10 px-3 py-1 text-xs text-green mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-green blink" /> Protótipo jogável
        </span>
        <h1 className="font-display text-ink leading-[1.3] text-3xl sm:text-5xl md:text-6xl">
          Entre <span className="text-cyan">Ciclos</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl text-muted">
          Um RPG narrativo de pixel art sobre um laboratório numa ilha, uma energia que
          <span className="text-ink"> volta no tempo</span> e inimigos nascidos dos
          <span className="text-ink"> sentimentos</span> de quem viveu ali.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#baixar"
            className="inline-flex items-center gap-2 rounded-md bg-green px-5 py-2.5 font-medium text-bg hover:brightness-110 transition"
          >
            <Download size={18} /> Baixar o protótipo
          </a>
          <a
            href="#conceito"
            className="rounded-md border border-line px-5 py-2.5 text-ink hover:bg-white/5 transition"
          >
            Conhecer o conceito
          </a>
        </div>

        <div className="mt-14 relative mx-auto max-w-4xl floaty">
          <div className="absolute -inset-4 rounded-2xl bg-cyan/10 blur-2xl" aria-hidden />
          <img
            src="/shots/combate.png"
            alt="Cena de combate em primeira pessoa de Entre Ciclos"
            className="pixel relative w-full rounded-xl border border-line shadow-2xl"
          />
        </div>
        <a href="#conceito" className="mt-10 inline-flex text-muted hover:text-ink transition" aria-label="Rolar para baixo">
          <ChevronDown className="animate-bounce" />
        </a>
      </section>

      {/* Conceito */}
      <section id="conceito" className="relative z-10 mx-auto max-w-6xl px-4 py-20 border-t border-line">
        <SectionLabel>A premissa</SectionLabel>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-xl sm:text-2xl text-ink leading-[1.5]">
              Uma ilha. Um laboratório.<br />
              <span className="text-purple">Um ciclo que não fecha.</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                Pesquisadores tentaram misturar a energia de uma <span className="text-ink">esfera</span>{' '}
                com pessoas. Poucos sobreviveram ao toque — e os que sobreviveram ganharam o poder de{' '}
                <span className="text-cyan">voltar no tempo</span>.
              </p>
              <p>
                Você acorda como <span className="text-ink">Erik</span> num laboratório vazio e silencioso, muito
                depois de um evento ter esvaziado a ilha. A superfície foi tomada pela vegetação e por criaturas —
                algumas pacíficas, como o <span className="text-ink">Fluk</span>; outras, não.
              </p>
              <p>
                É um jogo melancólico e retro-futurista sobre <span className="text-ink">memória</span>, o preço de
                voltar atrás e o que sobra da gente quando reescrevemos o que já aconteceu.
              </p>
            </div>
          </div>
          <div className="relative floaty">
            <div className="absolute -inset-3 rounded-2xl bg-purple/10 blur-2xl" aria-hidden />
            <img
              src="/shots/corredor.png"
              alt="O corredor do laboratório"
              className="pixel relative w-full rounded-xl border border-line"
            />
          </div>
        </div>
      </section>

      {/* Combate */}
      <section id="combate" className="relative z-10 mx-auto max-w-6xl px-4 py-20 border-t border-line">
        <SectionLabel>O combate</SectionLabel>
        <h2 className="font-display text-xl sm:text-2xl text-ink leading-[1.5] max-w-3xl">
          Batalhas em <span className="text-amber">primeira pessoa</span>, por turnos
        </h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Fora de combate o inimigo é só uma névoa de energia. Ao iniciar a luta, o sentimento{' '}
          <span className="text-ink">se materializa</span> — e você encara ele de frente, com as próprias mãos.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {COMBAT.map((c) => (
            <div key={c.title} className="card rounded-xl p-6">
              <c.icon className={`${c.color} mb-3`} size={26} />
              <h3 className="text-ink font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">{c.desc}</p>
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
              alt="Inimigo materializado em combate"
              className="pixel relative w-full rounded-xl border border-line"
            />
          </div>
          <div className="order-1 md:order-2">
            <SectionLabel>Os inimigos</SectionLabel>
            <h2 className="font-display text-xl sm:text-2xl text-ink leading-[1.5]">
              Sentimentos que <span className="text-amber">ganharam forma</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                Os inimigos nascem dos sentimentos das pessoas que trabalhavam ali — energia informe que só toma
                forma ao travar num portador. Cada um tem sua cor e seu jeito de se mover.
              </p>
              <p>
                O primeiro que você enfrenta é a <span className="text-amber">ansiedade</span>: nervosa, rápida,
                difícil de prever. E a cada vitória vem a pergunta — <span className="text-green">libertar</span> ou{' '}
                <span className="text-purple">absorver</span>?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 border-t border-line">
        <SectionLabel>No jogo</SectionLabel>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="card rounded-xl p-6">
              <f.icon className="text-cyan mb-3" size={24} />
              <h3 className="text-ink font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Baixar */}
      <section id="baixar" className="relative z-10 mx-auto max-w-6xl px-4 py-20 border-t border-line">
        <div className="card rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -inset-10 bg-green/5 blur-3xl" aria-hidden />
          <div className="relative">
            <SectionLabel>Baixar</SectionLabel>
            <h2 className="font-display text-xl sm:text-2xl text-ink leading-[1.5]">
              Jogue o <span className="text-green">protótipo</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted leading-relaxed">
              Uma fatia do Capítulo 1: explore o laboratório, encontre o primeiro inimigo e enfrente-o no
              combate em primeira pessoa.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {DOWNLOADS.map((d) => (
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
                    <span className="block text-xs text-muted">{d.note}</span>
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted">
              Controles: <span className="text-ink">setas</span> pra mover ·{' '}
              <span className="text-ink">Z</span> confirma/interage · <span className="text-ink">X</span> volta ·{' '}
              <span className="text-ink">C</span> pausa.
            </p>

            {/* easter egg: um "build" que não devia estar aqui (SUJEITO 04 = Yury) */}
            {egg && (
              <div className="mt-8 mx-auto max-w-md rounded-lg border border-purple/40 bg-purple/5 p-5 text-left floaty">
                <div className="flex items-center gap-3">
                  <Ghost className="text-purple shrink-0" size={24} />
                  <div>
                    <p className="font-term text-xl leading-none text-purple blink">SUJEITO_04.zip</p>
                    <p className="mt-1 text-xs text-muted">arquivo corrompido · origem desconhecida · 0 bytes</p>
                  </div>
                </div>
                <p className="mt-4 text-sm italic text-muted">
                  "Você já baixou esse ciclo antes.{' '}
                  <span className="text-purple">Só não lembra.</span>"
                </p>
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
        <SectionLabel>Galeria</SectionLabel>
        <h2 className="font-display text-xl sm:text-2xl text-ink mb-8">Imagens do protótipo</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SHOTS.map((s) => (
            <figure key={s.src} className="card group rounded-xl overflow-hidden">
              <div className="overflow-hidden bg-black">
                <img
                  src={s.src}
                  alt={s.title}
                  loading="lazy"
                  className="pixel w-full aspect-video object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-term text-xl text-green leading-none">{s.title}</p>
                <p className="mt-1 text-muted text-sm">{s.desc}</p>
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
            <p className="mt-2">Protótipo em desenvolvimento · feito na Godot 4</p>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://portfolio.nortixcode.com.br" className="hover:text-ink transition" target="_blank" rel="noreferrer">
              Vítor Ornelas
            </a>
            <span className="text-line">·</span>
            <a href="#top" className="hover:text-ink transition">Voltar ao topo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
