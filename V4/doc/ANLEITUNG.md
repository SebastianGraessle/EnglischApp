# Sonderfunktion: Geräte synchronisieren

Standard ist der lokale Speicher. Diese Anleitung brauchst du nur, wenn der Lernstand
auf mehreren Geräten (z. B. iPad und Handy) gleich sein soll. Einmalig ca. 15 Minuten.

```
App ──Familien-Code──► Speicherdienst (Cloudflare) ──Token (Secret)──► GitHub
                                                         │ repository_dispatch
                                                         ▼
                      privates Repo: Workflow prüft & führt zusammen → lernstand.json
```

| Wo | Was liegt dort |
|---|---|
| App / Gerät | Adresse des Speicherdienstes + Familien-Code (nicht im Export) |
| Cloudflare | GitHub-Token als verschlüsseltes Secret |
| Workflow | automatischer GITHUB_TOKEN, nur dieses Repo, verfällt nach dem Lauf |
| privates Repo | `lernstand.json` mit vollständigem Verlauf |

## 1. Privates Daten-Repo mit Workflow
1. Neues Repository `english-adventure-data` → **Private** → mit README anlegen.
2. Inhalt von `daten-repo/` hochladen, **inklusive Ordner `.github`**.
   Tipp: „Add file → Create new file“ und als Namen `.github/workflows/lernstand.yml` eintippen,
   Inhalt einfügen. Genauso `.github/scripts/merge-lernstand.mjs`.
3. Settings → Actions → General → Workflow permissions: **Read and write permissions**.

## 2. Token (kommt nur zu Cloudflare)
GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → Generate:
- Repository access: **Only select repositories** → `english-adventure-data`
- Repository permissions: **Contents: Read and write** (sonst nichts)
- Ablauf z. B. 1 Jahr. Token kopieren.

## 3. Speicherdienst bei Cloudflare (kostenlos)
1. dash.cloudflare.com → Workers & Pages → Create → Worker „english-adventure“ → Deploy.
2. „Edit code“ → Inhalt von `speicherdienst/worker.js` einfügen → Deploy.
3. Settings → Variables and Secrets:
   - `ALLOWED_ORIGIN` (Text) = `https://<benutzer>.github.io`
   - `REPO` (Text) = `<benutzer>/english-adventure-data`
   - `FILE` (Text) = `lernstand.json`
   - `GH_TOKEN` (**Secret**) = Token aus Schritt 2
   - `FAMILY_CODE` (**Secret**) = selbst ausgedacht, mind. 12 Zeichen, z. B. `Sonnenblume-Gaggenau-42`
4. Adresse merken: `https://english-adventure.<name>.workers.dev`

## 4. In der App einschalten
Fortschritt → Eltern → **☁️ Geräte synchronisieren (Sonderfunktion)** → Adresse + Familien-Code → Einschalten.
Weitere Geräte: „Einrichtungs-Link für weiteres Gerät“ antippen und auf dem anderen Gerät öffnen.

## Gut zu wissen
- Gelernt wird immer lokal. Übertragen wird ca. 30 Sekunden nach Änderungen und nach jeder Runde.
  Auf GitHub landet es ca. 1 Minute später (Workflow-Laufzeit). Symbol oben: ☁️✓ / ☁️• / ☁️⚠️.
- Haben zwei Geräte gleichzeitig gelernt, wird **pro Wort** zusammengeführt – es geht nichts verloren.
- Eigene Fotos der Kinder werden nicht übertragen (zu groß) – dafür Export/Import nutzen.
- Ohne Internet oder bei Störung lernt die App normal weiter und holt die Übertragung später nach.
- Familien-Code verraten? In Cloudflare neuen Code setzen, Geräte neu verbinden. Der GitHub-Token bleibt geheim.
- Token abgelaufen? Neuen erzeugen, nur in Cloudflare `GH_TOKEN` ersetzen.
- Älteren Stand zurückholen: im Daten-Repo `lernstand.json` → History.
- Ausschalten: Eltern → Synchronisierung → Ausschalten. Der Lernstand bleibt auf dem Gerät.
