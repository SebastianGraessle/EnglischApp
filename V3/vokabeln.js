/* =====================================================================
   VOKABELN – English Adventure (Version 3)
   =====================================================================
   Eine Zeile pro Vokabel. Neue Bücher und Units erscheinen automatisch.

   PFLICHT
     buch      "Buch 1"   – genau so, wie die Lehrerin es sagt
     kapitel   "Unit 13"  – genau so, wie die Lehrerin es sagt
     en        Englisch wie im Heft
     de        Deutsch wie im Heft – MIT Artikel bei Nomen (der/die/das)

   SO PRÜFT DIE APP (wie die Lehrerin)
     • Groß-/Kleinschreibung zählt, Artikel zählen, ä/ö/ü/ß zählen.
     • Mehrere Bedeutungen mit Komma, Semikolon oder " / " trennen → eine reicht.
       Ganze Sätze (enden mit . ? ! oder ...) werden nur bei " / " getrennt.
     • "Er/Sie/Es heißt" (Schrägstrich ohne Leerzeichen) → jede Variante zählt.
     • Text in Klammern ist freiwillig, z. B. "(to) need" oder "(im Haus)".
     • Englische Kurzformen dürfen auch ausgeschrieben werden (you're = you are).

   OPTIONAL
     emoji      "🚗"
     merk       Merkhilfe / Eselsbrücke
     beispiel   englischer Beispielsatz      beispielDe  deutsche Übersetzung
     gegenteil  englisches Wort des Gegenteils (muss als "en" existieren)
     bild       Pfad zu einem Bild, z. B. "bilder/unit1/downstairs.jpg"
     deAlt / enAlt  zusätzlich erlaubte Antworten, z. B. ["zuhause"]
     deKurz     kürzere deutsche Anzeige in Fragen
     sprich     was die Stimme vorlesen soll

   Achtung: Wenn du buch, kapitel oder en einer Vokabel änderst,
   beginnt ihr Lernstand wieder bei "Neu".
   ===================================================================== */

const VOKABELN = [
  // ---------- Heftseite 1 ----------
  { buch: "Buch 1", kapitel: "Unit 1", en: "if", de: "wenn, falls", emoji: "🤔", beispiel: "If you need help, call me.", beispielDe: "Wenn du Hilfe brauchst, ruf mich an." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) need", de: "brauchen, benötigen", emoji: "🛒", beispiel: "I need a new phone.", beispielDe: "Ich brauche ein neues Handy." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "at home", de: "daheim, zu Hause", deAlt: ["zuhause"], emoji: "🏡", merk: "at home – nicht „at house“!", beispiel: "I'm at home.", beispielDe: "Ich bin zu Hause." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "everyone", de: "jeder; alle", emoji: "👨‍👩‍👧‍👦", merk: "every (jeder) + one (einer) = jeder, alle" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "This is ...", de: "Dies ist ... / Das ist ...", emoji: "👉", beispiel: "This is my sister.", beispielDe: "Das ist meine Schwester." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "street", de: "die Straße", emoji: "🏘️", merk: "street = Straße im Ort 🏘️ · road = Straße zwischen Orten 🛣️" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "It's called ...", de: "Er/Sie/Es heißt ...", emoji: "🏷️", beispiel: "My dog is called Max.", beispielDe: "Mein Hund heißt Max." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "road", de: "die Straße (Landstraße zwischen Orten; Straße in Orten)", deKurz: "die Straße (Landstraße)", deAlt: ["die Landstraße"], emoji: "🛣️", merk: "road = Straße zwischen Orten 🛣️ · street = Straße im Ort 🏘️" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "car", de: "das Auto", emoji: "🚗" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "house", de: "das Haus", emoji: "🏠" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "a lot of", de: "viel ..., viele ...", emoji: "🍬", merk: "a lot of = lots of – beide heißen „viel / viele“", beispiel: "I've got a lot of friends.", beispielDe: "Ich habe viele Freunde." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "lots of", de: "viel ..., viele ...", emoji: "🎈", merk: "lots of = a lot of – beide heißen „viel / viele“" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "postman", de: "der Briefträger, der Postbote", emoji: "📮", merk: "POST + MAN = der Mann, der die Post bringt" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "morning", de: "der Morgen, der Vormittag", emoji: "🌅", beispiel: "Good morning!", beispielDe: "Guten Morgen!" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "doorbell", de: "die Türklingel, die Türglocke", emoji: "🛎️", merk: "🚪 door (Tür) + 🔔 bell (Klingel) = Türklingel" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "bell", de: "die Klingel, die Glocke", emoji: "🔔" },

  // ---------- Heftseite 2 ----------
  { buch: "Buch 1", kapitel: "Unit 1", en: "maybe", de: "vielleicht", emoji: "🤷", merk: "Merkhilfe: may be = „kann sein“ → vielleicht" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "dad", de: "der Papa, der Vati", emoji: "👨", gegenteil: "mum" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "mum", de: "die Mama, die Mutti", emoji: "👩", gegenteil: "dad", merk: "mum = Mama · mother = Mutter" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) come", de: "kommen", emoji: "🚶", beispiel: "Come here!", beispielDe: "Komm her!" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "so", de: "also; deshalb, daher", emoji: "➡️", beispiel: "It's late, so I go home.", beispielDe: "Es ist spät, deshalb gehe ich nach Hause." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "you're", de: "du bist", emoji: "🫵", merk: "you're = you are → du bist" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "her class", de: "ihre Klasse", emoji: "👩‍🏫" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "room", de: "das Zimmer, der Raum", emoji: "🛏️" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "upstairs", de: "oben; nach oben (im Haus)", emoji: "⬆️", gegenteil: "downstairs", merk: "⬆️ UP + STAIRS 🪜 (Treppe) = nach oben" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "downstairs", de: "unten; nach unten (im Haus)", emoji: "⬇️", gegenteil: "upstairs", merk: "⬇️ DOWN + STAIRS 🪜 – stell dir einen Pinguin vor, der die Treppe hinunterrutscht!" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "why?", de: "warum?", emoji: "❓" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "an hour", de: "eine Stunde", emoji: "⏰", merk: "Das h ist stumm → AN hour (nicht „a hour“)" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "for", de: "für", emoji: "🎁", beispiel: "This is for you.", beispielDe: "Das ist für dich." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "It/He/She isn't here. (= is not)", de: "Es/Er/Sie ist nicht hier.", sprich: "She isn't here.", emoji: "🚪" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "not", de: "nicht", emoji: "🚫" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "here", de: "hier; hierher", emoji: "📍" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "Sorry.", de: "Verzeihung. / Entschuldigung.", emoji: "🙏" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "Who?", de: "Wer?", emoji: "🕵️" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "brother", de: "der Bruder", emoji: "👦", gegenteil: "sister" },

  // ---------- Heftseite 3 ----------
  { buch: "Buch 1", kapitel: "Unit 1", en: "sister", de: "die Schwester", emoji: "👧", gegenteil: "brother", beispiel: "I've got a sister.", beispielDe: "Ich habe eine Schwester." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "Yes, I am.", de: "Ja, das bin ich.", emoji: "🙋" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "See you.", de: "Bis gleich. / Bis bald.", emoji: "👋" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "You're lucky.", de: "Du hast Glück.", emoji: "🍀" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "sure", de: "sicher", emoji: "👍", beispiel: "Are you sure?", beispielDe: "Bist du sicher?" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "smile", de: "das Lächeln", emoji: "😊" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "sometimes", de: "manchmal", emoji: "🌦️", merk: "some (manche) + times (Male) = manchmal" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "weird", de: "seltsam, komisch", emoji: "🤪", merk: "Eine Katze liest Zeitung 🐱📰 – That's weird! · Schreibung: w-E-I-r-d" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "at school", de: "in der Schule", emoji: "🏫" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "she's (she is)", de: "sie ist ...", emoji: "👱‍♀️" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "they aren't", de: "sie sind nicht", emoji: "🙅" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "divorced", de: "geschieden", emoji: "📄" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "they're", de: "sie sind", emoji: "👫" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "parents (pl)", de: "Eltern", deAlt: ["die Eltern"], emoji: "👨‍👩‍👧", merk: "pl = Plural (Mehrzahl): parents = beide Eltern" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) listen", de: "zuhören, horchen", emoji: "👂", merk: "Stummes t: lis(t)en" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "phone", de: "das (Mobil-)Telefon, das Handy", deAlt: ["das Mobiltelefon"], emoji: "📱", merk: "phone klingt wie „Fon“ – Tele-FON" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "message", de: "die Nachricht, die SMS", emoji: "💬", merk: "Messenger → message = Nachricht" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "free", de: "frei", emoji: "🆓" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) hang out (infml)", de: "hängen, abhängen, rumhängen", emoji: "🛋️", merk: "infml = umgangssprachlich" },

  // ---------- Heftseite 4 ----------
  { buch: "Buch 1", kapitel: "Unit 1", en: "at my place", de: "bei mir", emoji: "🔑", beispiel: "Let's hang out at my place.", beispielDe: "Lass uns bei mir abhängen." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "place", de: "der Ort, der Platz, die Stelle", emoji: "📌" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) know", de: "kennen", emoji: "🤝", merk: "Stummes k: (k)now", beispiel: "I know her.", beispielDe: "Ich kenne sie." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "primary school", de: "die Grundschule", emoji: "🎒", merk: "primary = erste → die erste Schule = Grundschule" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "again", de: "wieder, noch einmal", emoji: "🔁" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "Good morning.", de: "Guten Morgen.", emoji: "☀️" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "Here's ... (= Here is ...) / Here are ...", de: "Hier ist ... / Hier sind ...", sprich: "Here is. Here are.", emoji: "🫴" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "parcel", de: "das Paket, das Päckchen", emoji: "📦", merk: "Ein winziger Postbote schleppt ein riesiges parcel 📦" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "very big", de: "sehr groß", emoji: "🐘" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) understand", de: "verstehen", emoji: "💡", merk: "Merkbild: Du stehst UNDER (unter) dem Schild und verstehst es 🪧" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "father", de: "der Vater", emoji: "👨‍🦱", gegenteil: "mother" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "mother", de: "die Mutter", emoji: "👩‍🦰", gegenteil: "father" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "useful", de: "nützlich", emoji: "🛠️", merk: "USE (benutzen) + FUL(L) = gut zu gebrauchen → nützlich ☂️" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "phrase", de: "der Satz, der Ausdruck, die Redewendung", emoji: "💭" },

  // ---------- Neue Vokabeln hier einfügen, z. B.: ----------
  // { buch: "Buch 1", kapitel: "Unit 2", en: "dog", de: "der Hund", emoji: "🐶" },
];
