# Posada en marxa del projecte Shiny Moon Glass

## Què tens ara

L'arrel del repositori és la nova aplicació Next.js de Shiny Moon Glass. Es pot obrir directament amb VS Code o Codex i executar-la amb Node.js.

## Executar i verificar

Requisit: Node.js compatible amb Next.js 16 (Node 20.9 o posterior és una opció segura).

```bash
cd /Users/lotrex/Development/Shiny-Website
npm ci
npm run dev
```

El servidor de desenvolupament està configurat al port 3002. Les comprovacions disponibles són:

```bash
npm run lint
npm run typecheck
npm run build
```

## Ordre recomanat de treball

1. Canviar les dades de marca i els enllaços externs indicats al mapa de personalització.
2. Substituir primer el logotip, favicon i imatges principals.
3. Reescriure els textos per explicar la botiga de peces de vitrall acabades, encàrrecs o el model comercial que decideixis.
4. Afegir les pàgines i funcionalitats de venda només quan el catàleg, la plataforma de pagament i els requisits legals estiguin decidits.
5. Passar les tres comprovacions abans de cada desplegament.

La pàgina actual és una sola ruta (`src/app/page.tsx`). En el Next.js actual, una carpeta amb `page.tsx` crea una ruta pública i `layout.tsx` defineix l'esquelet comú. Això permet afegir després, per exemple, `src/app/shop/page.tsx` per crear `/shop` sense reestructurar la portada.
