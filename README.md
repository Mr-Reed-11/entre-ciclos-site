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

## 🐳 Deploy com Portainer

O repositório já traz `Dockerfile` (multi-stage: build com pnpm → serve estático com nginx),
`nginx.conf` e `docker-compose.yml`. O container serve o site **e** os builds em `/downloads/`.

### Opção A — Stack do Portainer a partir do Git (recomendado)

1. **Portainer → Stacks → Add stack → Repository.**
2. Repository URL: o deste repo. Compose path: `docker-compose.yml`.
3. Deploy. O Portainer builda a imagem e sobe o container (porta `8081` → `80` interna).
4. Botão **Pull and redeploy** (ou webhook) pra atualizar a cada push.

### Opção B — Build local e push de imagem

```bash
docker build -t entre-ciclos-site:latest .
docker run -d --restart unless-stopped -p 8081:80 --name entre-ciclos-site entre-ciclos-site:latest
```

### Subdomínio

- **DNS:** registro **A** `entreciclos` → IP da VPS (mesmo do `portfolio`).
- **Proxy:** aponte o proxy do subdomínio (Nginx/NPM/Traefik) pra porta `8081` do container.
  Se usa Traefik, há labels prontas (comentadas) no `docker-compose.yml`.
- **HTTPS:** pelo seu proxy de sempre (certbot / NPM / Traefik + Let's Encrypt).

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
