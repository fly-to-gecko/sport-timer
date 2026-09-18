# Sport Timer

Kleine App (PWA) für iOS und Android: Gong bei Start und Ende jeder Übung,
einstellbare Übungen, Dauer, Pause und Serien, Bildschirm bleibt an.

## Auf GitHub Pages veröffentlichen

1. Auf github.com anmelden, oben rechts **+ → New repository**.
   Name: `sport-timer`, Sichtbarkeit **Public**, **Create repository**.
2. Im leeren Repository auf **uploading an existing file** klicken, alle
   Dateien aus diesem Ordner hineinziehen (nicht den Ordner selbst),
   **Commit changes**.
3. **Settings → Pages**: bei *Source* "Deploy from a branch" wählen,
   Branch `main`, Ordner `/ (root)`, **Save**.
4. Nach ein bis zwei Minuten ist die App erreichbar unter
   `https://DEINNAME.github.io/sport-timer/`

## Aufs Handy bringen

- **iPhone:** Adresse in Safari öffnen → Teilen-Symbol → "Zum Home-Bildschirm".
- **Android:** Adresse in Chrome öffnen → Menü (drei Punkte) →
  "App installieren" bzw. "Zum Startbildschirm hinzufügen".

Danach vom Icon starten. Die App läuft dann auch ohne Internet.

## Später ändern

Geänderte Datei im Repository hochladen und in `sw.js` die Zeile
`const CACHE = PREFIX + "v1";` auf `v2`, `v3` usw. erhöhen. Die Handys
holen das Update beim nächsten Start mit Internetverbindung; sichtbar wird
es beim übernächsten Start.
