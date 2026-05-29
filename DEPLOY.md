# Ako sprístupniť MealMate na iPhone (aj keď je PC vypnutý)

Tvoj `server.js` je len lokálny — beží len kým máš zapnutý počítač.
Appka je ale **úplne statická** (žiadny backend), takže ju vieš zadarmo nasadiť na internet a používať odhocikiaľ.

## Možnosť A — GitHub Pages (zdarma, najjednoduchšie)

1. Choď na https://github.com a vytvor si účet (ak ešte nemáš).
2. Vytvor nový repozitár, napríklad `mealmate`. Nastav ho ako **Public**.
3. Nahraj do neho VŠETKY súbory z tohto priečinka **OKREM** `server.js` (server netreba):
   - `index.html`
   - `index.css`
   - `app.js`
   - `manifest.json`
   - `sw.js`
   - priečinok `assets/`
   - tento `DEPLOY.md` môžeš tiež nahrať
4. V repozitári klikni **Settings → Pages**.
5. Pod „Source" vyber **Deploy from a branch**, branch = `main`, folder = `/ (root)`. Klikni **Save**.
6. Po ~1 minúte ti GitHub ukáže URL, niečo ako:
   `https://tvoj-username.github.io/mealmate/`
7. Otvor túto URL na iPhone v **Safari** → klikni na **Zdieľať** → **Pridať na plochu**.
8. Hotovo. Appka beží 24/7 z internetu, ikona na ploche, funguje aj offline (cache cez service worker).

## Možnosť B — Netlify Drop (ešte rýchlejšie, bez GitHubu)

1. Otvor https://app.netlify.com/drop
2. Zo svojho `MealMate` priečinka odstráň (alebo ignoruj) `server.js`.
3. Celý priečinok pretiahni do okna v prehliadači.
4. Netlify ti hneď dá URL typu `https://nazov-12345.netlify.app`.
5. Otvor na iPhone v Safari → **Pridať na plochu**.

## Poznámka k iOS PWA

- Funguje len cez **Safari** (nie Chrome na iOS).
- Po „Pridať na plochu" si iOS appku nainštaluje a service worker cachne všetky súbory, takže funguje aj v lietadle / bez signálu.
- Dáta (denník jedál, profil, vlastné jedlá) sú uložené v `localStorage` priamo v zariadení.
