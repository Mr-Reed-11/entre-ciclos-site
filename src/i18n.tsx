import type { ReactNode } from 'react'

export type Lang = 'en' | 'pt'

export interface Content {
  nav: { concept: string; combat: string; gallery: string; download: string }
  hero: { badge: string; desc: ReactNode; ctaDownload: string; ctaConcept: string; imgAlt: string }
  concept: { label: string; heading: ReactNode; body: ReactNode; imgAlt: string }
  combat: { label: string; heading: ReactNode; intro: ReactNode; imgAlt: string; cards: { title: string; desc: string }[] }
  enemies: { label: string; heading: ReactNode; body: ReactNode; imgAlt: string }
  features: { label: string; items: { title: string; desc: string }[] }
  download: {
    label: string
    heading: ReactNode
    intro: string
    note: ReactNode
    notes: string[]
    discordText: string
    discordBtn: string
  }
  gallery: { label: string; heading: string; shots: { title: string; desc: string }[] }
  footer: { tagline: string; backToTop: string }
  egg: { file: string; meta: string; line: ReactNode }
}

export const content: Record<Lang, Content> = {
  en: {
    nav: { concept: 'Concept', combat: 'Combat', gallery: 'Gallery', download: 'Download' },
    hero: {
      badge: 'Playable prototype',
      desc: (
        <>
          A narrative pixel-art RPG about a lab on an island, an energy that
          <span className="text-ink"> rewinds time</span>, and enemies born from the
          <span className="text-ink"> feelings</span> of those who lived there.
        </>
      ),
      ctaDownload: 'Download the prototype',
      ctaConcept: 'See the concept',
      imgAlt: 'First-person combat scene from Entre Ciclos',
    },
    concept: {
      label: 'The premise',
      heading: (
        <>
          An island. A lab.<br />
          <span className="text-purple">A cycle that won't close.</span>
        </>
      ),
      body: (
        <>
          <p>
            Researchers tried to merge the energy of a <span className="text-ink">sphere</span> with people.
            Few survived the touch — and those who did gained the power to{' '}
            <span className="text-cyan">rewind time</span>.
          </p>
          <p>
            You wake up as <span className="text-ink">Erik</span> in an empty, silent lab, long after an event
            emptied the island. The surface has been overtaken by vegetation and creatures — some peaceful, like{' '}
            <span className="text-ink">Fluk</span>; others, not.
          </p>
          <p>
            It's a melancholic, retro-futuristic game about <span className="text-ink">memory</span>, the price of
            going back, and what's left of us when we rewrite what already happened.
          </p>
        </>
      ),
      imgAlt: 'The lab corridor',
    },
    combat: {
      label: 'The combat',
      heading: (
        <>
          <span className="text-amber">First-person</span>, turn-based battles
        </>
      ),
      intro: (
        <>
          Out of combat the enemy is just a mist of energy. When the fight starts, the feeling{' '}
          <span className="text-ink">materializes</span> — and you face it head-on, with your own hands.
        </>
      ),
      imgAlt: 'Enemy materialized in combat',
      cards: [
        {
          title: 'Rhythm attack',
          desc: 'Arrows rise to the mark — hit them on time, rhythm-game style, to land a clean blow.',
        },
        {
          title: 'Timing defense',
          desc: 'Attacks come from the screen’s directions. Block in the right window — or nail the parry and turn the fight around. You can defend two at once, one hand each.',
        },
        {
          title: 'Magic & Special',
          desc: 'Fill the Special bar and spend it on spells — the more power you gather in your hand, the stronger what you hurl.',
        },
        {
          title: 'Purify or absorb',
          desc: 'On victory, choose to free the feeling — or absorb its energy. The price of that choice follows you to the end.',
        },
      ],
    },
    enemies: {
      label: 'The enemies',
      heading: (
        <>
          Feelings that <span className="text-amber">took shape</span>
        </>
      ),
      body: (
        <>
          <p>
            Enemies are born from the feelings of the people who worked there — formless energy that only takes
            shape when it latches onto a host. Each has its own color and way of moving.
          </p>
          <p>
            The first one you face is <span className="text-amber">anxiety</span>: jittery, fast, hard to predict.
            And with every win comes the question — <span className="text-green">free</span> or{' '}
            <span className="text-purple">absorb</span>?
          </p>
        </>
      ),
      imgAlt: 'Enemy materialized in combat',
    },
    features: {
      label: 'In the game',
      items: [
        { title: 'Rewind time', desc: 'The power — and the weight — of rewriting what already happened.' },
        { title: 'Enemies of feeling', desc: 'Formless energy that only takes shape by latching onto someone. The first: anxiety.' },
        { title: 'Terminals & hacking', desc: 'Break into the lab’s systems and uncover what was left behind.' },
        { title: 'Melancholic tone', desc: 'Retro-futuristic pixel art about memory and what remains of who we were.' },
      ],
    },
    download: {
      label: 'Download',
      heading: (
        <>
          Play the <span className="text-green">prototype</span>
        </>
      ),
      intro: 'A slice of Chapter 1: explore the lab, find the first enemy, and face it in first-person combat.',
      note: (
        <>
          Controls: <span className="text-ink">arrows</span> to move ·{' '}
          <span className="text-ink">Z</span> confirm/interact · <span className="text-ink">X</span> back ·{' '}
          <span className="text-ink">C</span> pause.
        </>
      ),
      notes: ['.zip · extract and run the .exe', '.zip · extract and run the executable'],
      discordText: 'Played it? Join the official server to give feedback, follow development, and hang out with everyone.',
      discordBtn: 'Join the Discord',
    },
    gallery: {
      label: 'Gallery',
      heading: 'Prototype screenshots',
      shots: [
        { title: 'Title screen', desc: 'The cycle begins again.' },
        { title: 'Combat', desc: 'First-person battle against a feeling that took shape.' },
        { title: 'The corridor', desc: 'The lab, silent years after the Break.' },
        { title: 'Analysis room', desc: 'Servers, terminals, and the experiment’s records.' },
        { title: 'Fluk', desc: 'Not everything on this island wants to harm you.' },
        { title: 'The bedroom', desc: 'Erik wakes with no memory of what happened.' },
      ],
    },
    footer: { tagline: 'Prototype in development · made in Godot 4', backToTop: 'Back to top' },
    egg: {
      file: 'SUBJECT_04.zip',
      meta: 'corrupted file · unknown origin · 0 bytes',
      line: (
        <>
          "You’ve downloaded this cycle before.{' '}
          <span className="text-purple">You just don’t remember.</span>"
        </>
      ),
    },
  },

  pt: {
    nav: { concept: 'Conceito', combat: 'Combate', gallery: 'Galeria', download: 'Baixar' },
    hero: {
      badge: 'Protótipo jogável',
      desc: (
        <>
          Um RPG narrativo de pixel art sobre um laboratório numa ilha, uma energia que
          <span className="text-ink"> volta no tempo</span> e inimigos nascidos dos
          <span className="text-ink"> sentimentos</span> de quem viveu ali.
        </>
      ),
      ctaDownload: 'Baixar o protótipo',
      ctaConcept: 'Conhecer o conceito',
      imgAlt: 'Cena de combate em primeira pessoa de Entre Ciclos',
    },
    concept: {
      label: 'A premissa',
      heading: (
        <>
          Uma ilha. Um laboratório.<br />
          <span className="text-purple">Um ciclo que não fecha.</span>
        </>
      ),
      body: (
        <>
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
        </>
      ),
      imgAlt: 'O corredor do laboratório',
    },
    combat: {
      label: 'O combate',
      heading: (
        <>
          Batalhas em <span className="text-amber">primeira pessoa</span>, por turnos
        </>
      ),
      intro: (
        <>
          Fora de combate o inimigo é só uma névoa de energia. Ao iniciar a luta, o sentimento{' '}
          <span className="text-ink">se materializa</span> — e você encara ele de frente, com as próprias mãos.
        </>
      ),
      imgAlt: 'Inimigo materializado em combate',
      cards: [
        {
          title: 'Ataque no ritmo',
          desc: 'As setas sobem até a marca — acerte no tempo certo, estilo rhythm game, pra bater em cheio.',
        },
        {
          title: 'Defesa por timing',
          desc: 'Os golpes vêm das direções da tela. Bloqueie na janela certa — ou acerte o parry e vire o jogo. Dá pra defender dois ao mesmo tempo, uma mão em cada.',
        },
        {
          title: 'Magia e Especial',
          desc: 'Encha a barra de Especial e gaste em magias — quanto mais poder você junta na mão, mais forte é o que você arremessa.',
        },
        {
          title: 'Purificar ou absorver',
          desc: 'Ao vencer, escolha libertar o sentimento — ou absorver sua energia. O preço dessa escolha te segue até o final.',
        },
      ],
    },
    enemies: {
      label: 'Os inimigos',
      heading: (
        <>
          Sentimentos que <span className="text-amber">ganharam forma</span>
        </>
      ),
      body: (
        <>
          <p>
            Os inimigos nascem dos sentimentos das pessoas que trabalhavam ali — energia informe que só toma
            forma ao travar num portador. Cada um tem sua cor e seu jeito de se mover.
          </p>
          <p>
            O primeiro que você enfrenta é a <span className="text-amber">ansiedade</span>: nervosa, rápida,
            difícil de prever. E a cada vitória vem a pergunta — <span className="text-green">libertar</span> ou{' '}
            <span className="text-purple">absorver</span>?
          </p>
        </>
      ),
      imgAlt: 'Inimigo materializado em combate',
    },
    features: {
      label: 'No jogo',
      items: [
        { title: 'Voltar no tempo', desc: 'O poder — e o peso — de reescrever o que já aconteceu.' },
        { title: 'Inimigos de sentimento', desc: 'Energia informe que só toma forma ao travar em alguém. O primeiro: a ansiedade.' },
        { title: 'Terminais & hacking', desc: 'Invada os sistemas do laboratório e descubra o que ficou pra trás.' },
        { title: 'Tom melancólico', desc: 'Pixel art retro-futurista sobre memória e o que sobra de quem a gente era.' },
      ],
    },
    download: {
      label: 'Baixar',
      heading: (
        <>
          Jogue o <span className="text-green">protótipo</span>
        </>
      ),
      intro: 'Uma fatia do Capítulo 1: explore o laboratório, encontre o primeiro inimigo e enfrente-o no combate em primeira pessoa.',
      note: (
        <>
          Controles: <span className="text-ink">setas</span> pra mover ·{' '}
          <span className="text-ink">Z</span> confirma/interage · <span className="text-ink">X</span> volta ·{' '}
          <span className="text-ink">C</span> pausa.
        </>
      ),
      notes: ['.zip · extraia e rode o .exe', '.zip · extraia e rode o executável'],
      discordText: 'Jogou? Entra no servidor oficial pra dar feedback, acompanhar o desenvolvimento e conversar com a galera.',
      discordBtn: 'Entrar no Discord',
    },
    gallery: {
      label: 'Galeria',
      heading: 'Imagens do protótipo',
      shots: [
        { title: 'Tela-título', desc: 'O ciclo começa de novo.' },
        { title: 'Combate', desc: 'Batalha em primeira pessoa contra o sentimento que ganhou forma.' },
        { title: 'O corredor', desc: 'O laboratório, silencioso anos depois da Quebra.' },
        { title: 'Sala de análise', desc: 'Servidores, terminais e os registros do experimento.' },
        { title: 'Fluk', desc: 'Nem tudo nesta ilha quer te fazer mal.' },
        { title: 'O quarto', desc: 'Erik acorda sem lembrar do que aconteceu.' },
      ],
    },
    footer: { tagline: 'Protótipo em desenvolvimento · feito na Godot 4', backToTop: 'Voltar ao topo' },
    egg: {
      file: 'SUJEITO_04.zip',
      meta: 'arquivo corrompido · origem desconhecida · 0 bytes',
      line: (
        <>
          "Você já baixou esse ciclo antes.{' '}
          <span className="text-purple">Só não lembra.</span>"
        </>
      ),
    },
  },
}
