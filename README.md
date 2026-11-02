# 🌀 Entre Ciclos — Site de apresentação

Landing page que apresenta o jogo **Entre Ciclos** (RPG narrativo de pixel art feito na Godot 4):
premissa, sistema de combate, inimigos e galeria de prints do protótipo.

Mesma stack e fluxo de deploy do [portfólio](https://portfolio.nortixcode.com.br), pra subir como
subdomínio na mesma VPS.

🔗 **Subdomínio pretendido:** `https://entreciclos.nortixcode.com.br`

---

## 🛠️ Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **lucide-react** (ícones)
- Fontes: *Press Start 2P* (títulos) e *VT323* (acentos de terminal) via Google Fonts

---

## 💻 Rodar localmente

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## 📦 Build

```bash
pnpm build      # gera dist/
pnpm preview    # serve o dist em http://localhost:4174
```

O `vite.config.ts` já libera o host do subdomínio no `preview.allowedHosts`.

---

## 🐳 Deploy com Portainer (mesmo padrão do n-store)

O repositório traz `Dockerfile` (multi-stage: build com pnpm → serve estático com nginx),
`nginx.conf` e `docker-compose.yml`. O container serve o site **e** os builds em `/downloads/`.

Roteamento via **Traefik** na rede externa `web`, por **Host label** — igual ao frontend do
n-store. Não publica porta: o Traefik entrega o TLS (Let's Encrypt) sozinho.

1. **Portainer → Stacks → Add stack → Repository.**
   - Repository URL: `https://github.com/Mr-Reed-11/entre-ciclos-site`
   - Reference: `refs/heads/main` · Compose path: `docker-compose.yml`
2. **Deploy.** A própria stack resolve o subdomínio e o TLS pela label `Host` do Traefik
   (Cloudflare incluso) — nada de mexer em DNS na mão. Publica em `https://entreciclos.nortixcode.com.br`.
3. A cada push: **Pull and redeploy** (ou webhook) no Portainer.

> O compose usa `networks: web (external: true)` e as labels de Traefik com
> `entrypoints=websecure` e `certresolver=lets-encrypt` — ajuste só se o seu Traefik usar outros nomes.

---

## 📦 Builds do jogo

Ficam em `public/downloads/` e vão pro `dist/` no build, servidos em `/downloads/`:

- `entre-ciclos-windows.zip`
- `entre-ciclos-linux.zip`

Pra atualizar, substitua os arquivos (mesmos nomes) e faça redeploy. Os links estão em `src/App.tsx`.

---

## 🖼️ Atualizar as prints

As imagens ficam em `public/shots/`. Substitua mantendo os nomes (`combate.png`, `titulo.png`,
`corredor.png`, `laboratorio.png`, `fluk.png`, `quarto.png`) ou ajuste a lista em `src/App.tsx`.
