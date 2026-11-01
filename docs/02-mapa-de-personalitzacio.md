# Mapa de personalització

La base s'ha copiat sense modificar perquè sigui fàcil identificar què s'ha de reemplaçar. Aquest és l'inventari de canvis per convertir-la en Shiny Moon Glass.

## Marca i metadades

| Element | Fitxer | Canvi necessari |
| --- | --- | --- |
| Nom del projecte | `package.json` | Canviar `name` de `simple-glass-patterns` a `shiny-moon-glass`. |
| Títol, descripció i icones SEO | `src/app/layout.tsx` | Actualitzar `metadata.title`, `metadata.description` i els camins de `icons`. |
| Idioma principal | `src/app/layout.tsx` | Ajustar `lang="en"` si la web s'escriu primer en català, castellà o un altre idioma. |
| Logotip de capçalera i peu | `public/images/brand/sgp-logo-icon.png` i `src/app/page.tsx` | Afegir el nou actiu i reemplaçar el camí i el wordmark. |
| Favicon | `src/app/icon.png`, `src/app/apple-icon.png` | Substituir-los per les icones de Shiny Moon Glass. |
| Tipografia decorativa | `src/app/fonts/dreamland.woff2` | Mantenir-la o reemplaçar-la; si canvia, actualitzar el `localFont` de `layout.tsx`. |

## Contingut i enllaços

Tot el contingut de la portada és a `src/app/page.tsx`.

| Zona | Què hi ha ara | Què decidir per a Shiny Moon Glass |
| --- | --- | --- |
| Constants inicials | Botiga Etsy i perfil Pinterest de Simple Glass Patterns | Enllaços definitius de botiga, xarxes, WhatsApp/Instagram o eliminar-los. |
| Capçalera i peu | Wordmark “Simple Glass Patterns” | Nom, navegació i crides a l'acció de la marca nova. |
| Hero | Promou patrons digitals de vitrall | Missatge central de la botiga principal: obra acabada, encàrrecs, kits, patrons o una combinació. |
| Valor de producte | Descàrrega instantània, PDF i Cricut | Beneficis reals de l'oferta nova. |
| Graella de destacats | Nou patrons amb enllaços Etsy | Productes reals, col·leccions o una secció temporal fins tenir catàleg. |
| Mosaic Pinterest | Tres pins de SGP | Fotos o publicacions pròpies de Shiny Moon Glass. |
| About i Contact | Història i email de SGP | Text biogràfic, canal de contacte i política d'atenció propis. |

La composició visual és a `src/app/globals.css`. Mantén les classes si només canvies el contingut; modifica-les quan vulguis donar una identitat visual nova (colors, espais, vores, tipografies o disposició).

## Imatges actuals que cal revisar

| Ubicació | Ús actual |
| --- | --- |
| `public/images/brand/sgp-logo-icon.png` | Logo de Simple Glass Patterns. |
| `public/images/hero-pattern-samples.png` | Il·lustració principal amb mostres de patrons. |
| `public/images/pinterest/` | Tres miniatures enllaçades a Pinterest de SGP. |
| `public/images/thumbs/` | Nou miniatures de patrons i bundles de SGP. |

Abans de publicar, confirma que Shiny Moon Glass té dret a reutilitzar cada imatge. Si només vols conservar l'estructura durant el disseny, deixa les imatges de mostra i substitueix-les totes com a últim pas abans de producció.

## Gestió de contingut futura

Per començar, és adequat continuar amb el contingut directament a `page.tsx`: és ràpid i no afegeix infraestructura. Quan hi hagi productes freqüents, un catàleg, variants, stock o comandes, separa les dades de la presentació i decideix entre una plataforma de comerç (p. ex. Shopify) o un backend propi. Aquesta decisió s'ha de prendre abans de construir cistella, pagaments o comptes de client.
