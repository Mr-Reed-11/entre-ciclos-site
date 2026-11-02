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

## 🚀 Deploy na VPS (igual ao portfólio)

1. **Na VPS**, clonar/puxar o repositório e buildar:

   ```bash
   git pull
   pnpm install
   pnpm build
   ```

2. **Servir o preview** (porta `4174`) de forma persistente — ex. com `pm2`:

   ```bash
   pm2 start "pnpm preview --port 4174" --name entreciclos
   pm2 save
   ```

   > Alternativa estática: apontar o nginx direto pra pasta `dist/` (ver abaixo), sem precisar do preview rodando.

3. **DNS:** criar um registro **A** `entreciclos` → IP da VPS (mesmo IP do `portfolio`).

4. **Nginx** — bloco do subdomínio (reverse proxy pro preview):

   ```nginx
   server {
       server_name entreciclos.nortixcode.com.br;

       location / {
           proxy_pass http://127.0.0.1:4174;
           proxy_set_header Host $host;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

   Ou, servindo o `dist/` como estático (mais simples e leve):

   ```nginx
   server {
       server_name entreciclos.nortixcode.com.br;
       root /caminho/para/entre-ciclos-site/dist;
       index index.html;
       location / { try_files $uri $uri/ /index.html; }
   }
   ```

5. **HTTPS:** `sudo certbot --nginx -d entreciclos.nortixcode.com.br`

---

## 🖼️ Atualizar as prints

As imagens ficam em `public/shots/`. Pra gerar novas a partir do jogo, abri as cenas na Godot
com uma cena utilitária que captura o viewport (480×270 em 3x). É só substituir os arquivos
mantendo os nomes (`combate.png`, `titulo.png`, `corredor.png`, `laboratorio.png`, `fluk.png`,
`quarto.png`) ou ajustar a lista em `src/App.tsx`.
