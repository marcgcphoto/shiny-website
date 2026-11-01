# Documentació de Shiny Moon Glass

Aquesta carpeta conté la documentació del projecte de **Shiny Moon Glass** a `shinymoonglass.com`.

La web és el projecte Next.js situat a l'arrel del repositori. La base tècnica conserva temporalment l'estructura de la web anterior mentre es completa la substitució del contingut per Shiny Moon Glass.

> **Important:** el codi encara mostra la marca, text, imatges, adreces d'Etsy, Pinterest i email de Simple Glass Patterns. És una base visual i tècnica; no s'ha de desplegar a `shinymoonglass.com` fins haver completat la substitució indicada a la documentació.

## Contingut

- [`01-posada-en-marxa.md`](01-posada-en-marxa.md): com executar el projecte.
- [`02-mapa-de-personalitzacio.md`](02-mapa-de-personalitzacio.md): on canviar marca, textos, enllaços i imatges.
- [`03-pla-del-projecte.md`](03-pla-del-projecte.md): proposta de fases per a la botiga principal.
- [`04-checklist-abans-de-publicar.md`](04-checklist-abans-de-publicar.md): revisió necessària abans d'apuntar el domini.

## Prova local ràpida

Des d'un terminal:

```bash
cd /Users/lotrex/Development/Shiny-Website
npm ci
npm run dev
```

Obre <http://localhost:3002>. Per comprovar la còpia abans de començar la personalització:

```bash
npm run lint
npm run typecheck
npm run build
```

Les instruccions han estat redactades per al Next.js 16 que porta aquest projecte; l'App Router usa `src/app/` i els recursos estàtics es publiquen des de `public/`.
