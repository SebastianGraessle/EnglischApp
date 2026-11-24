/* =====================================================================
   VOKABELN – English Adventure (Version 3.1)
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
     • "Er/Sie/Es heißt" (Schrägstrich ohne Leerzeichen) → jede Variante zählt.
     • Text in Klammern ist freiwillig, z. B. "(to) need" oder "(im Haus)".
     • Englische Kurzformen dürfen ausgeschrieben werden (you're = you are).

   OPTIONAL
     emoji      "🚗"
     merk       Eselsbrücke / Merkhilfe (Arten siehe unten)
     beispiel   englischer Beispielsatz      beispielDe  deutsche Übersetzung
     gegenteil  englisches Wort des Gegenteils (muss als "en" existieren)
     bild       Pfad zu einem Bild, z. B. "bilder/buch1-unit1/downstairs.jpg"
     deAlt / enAlt  zusätzlich erlaubte Antworten, z. B. ["zuhause"]
     deKurz     kürzere deutsche Anzeige in Fragen
     sprich     was die Stimme vorlesen soll

   GUTE ESELSBRÜCKEN – 6 Arten
     🧩 Zerlegen:  door + bell = Türklingel
     🎬 Bild:      Ein Pinguin rutscht die Treppe DOWN
     ↔ Gegenteil: upstairs ⬆ / downstairs ⬇
     🔊 Klang:     „maybe“ – may be = kann sein
     ✍️ Falle:     stummes k in (k)now
     💬 Satz:      I've got a sister.
   Lustig und ungewöhnlich = besser merkbar. Aber nur für schwierige Wörter.

   Achtung: Wenn du buch, kapitel oder en einer Vokabel änderst,
   beginnt ihr Lernstand wieder bei "Neu".
   ===================================================================== */

const VOKABELN = [
  // ---------- Heftseite 1 ----------
  { buch: "Buch 1", kapitel: "Unit 1", en: "if", de: "wenn, falls", emoji: "🤔", merk: "💬 IF you like ice cream, eat it! – Wenn du Eis magst, iss es!", beispiel: "If you need help, call me.", beispielDe: "Wenn du Hilfe brauchst, ruf mich an." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) need", de: "brauchen, benötigen", emoji: "🛒", merk: "🔊 need klingt wie „nied“ – „Ich brauch's, ich NEED's!“", beispiel: "I need a new phone.", beispielDe: "Ich brauche ein neues Handy." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "at home", de: "daheim, zu Hause", deAlt: ["zuhause"], emoji: "🏡", merk: "✍️ Falle: at HOME – nicht „at house“!", beispiel: "I'm at home.", beispielDe: "Ich bin zu Hause." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "everyone", de: "jeder; alle", emoji: "👨‍👩‍👧‍👦", merk: "🧩 every (jeder) + one (einer) = jeder, alle" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "This is ...", de: "Dies ist ... / Das ist ...", emoji: "👉", merk: "🔊 THIS klingt wie „dies“ → Dies ist …", beispiel: "This is my sister.", beispielDe: "Das ist meine Schwester." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "street", de: "die Straße", emoji: "🏘️", merk: "↔ street = Straße im Ort 🏘️ · road = Straße zwischen Orten 🛣️" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "It's called ...", de: "Er/Sie/Es heißt ...", emoji: "🏷️", merk: "🔊 called klingt wie „kohlt“ – „Mein Hund heißt Kohl? Nein, he's CALLED Max!“", beispiel: "My dog is called Max.", beispielDe: "Mein Hund heißt Max." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "road", de: "die Straße (Landstraße zwischen Orten; Straße in Orten)", deKurz: "die Straße (Landstraße)", deAlt: ["die Landstraße"], emoji: "🛣️", merk: "🔊 ROAD – auf der Landstraße ROLLT das Auto von Ort zu Ort 🛣️" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "car", de: "das Auto", emoji: "🚗", merk: "🔊 car klingt wie „Karre“ – die alte Karre = das Auto" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "house", de: "das Haus", emoji: "🏠", merk: "🔊 house klingt fast wie „Haus“" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "a lot of", de: "viel ..., viele ...", emoji: "🍬", merk: "🎬 Ein ganzes LOS voller Bonbons = a LOT of sweets", beispiel: "I've got a lot of friends.", beispielDe: "Ich habe viele Freunde." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "lots of", de: "viel ..., viele ...", emoji: "🎈", merk: "↔ lots of = a lot of – beide heißen „viel / viele“" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "postman", de: "der Briefträger, der Postbote", emoji: "📮", merk: "🧩 POST + MAN = der Mann, der die Post bringt" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "morning", de: "der Morgen, der Vormittag", emoji: "🌅", merk: "🔊 MORNing – MORgen", beispiel: "Good morning!", beispielDe: "Guten Morgen!" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "doorbell", de: "die Türklingel, die Türglocke", emoji: "🛎️", bild: "bilder/buch1-unit1/doorbell.jpg", merk: "🧩 🚪 door (Tür) + 🔔 bell (Klingel) = Türklingel · 🎬 Die Giraffe drückt mit der Nase auf die doorbell!" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "bell", de: "die Klingel, die Glocke", emoji: "🔔", merk: "🔊 bell – die Glocke macht „bell, bell!“ wie ein bellender Hund 🐶🔔" },

  // ---------- Heftseite 2 ----------
  { buch: "Buch 1", kapitel: "Unit 1", en: "maybe", de: "vielleicht", emoji: "🤷", merk: "🔊 may be = „kann sein“ → vielleicht" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "dad", de: "der Papa, der Vati", emoji: "👨", gegenteil: "mum", merk: "↔ dad = Papa · father = Vater" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "mum", de: "die Mama, die Mutti", emoji: "👩", gegenteil: "dad", merk: "↔ mum = Mama · mother = Mutter" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) come", de: "kommen", emoji: "🚶", merk: "🔊 come klingt wie „kamm“ – Komm, kämm dich! 💇", beispiel: "Come here!", beispielDe: "Komm her!" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "so", de: "also; deshalb, daher", emoji: "➡️", beispiel: "It's late, so I go home.", beispielDe: "Es ist spät, deshalb gehe ich nach Hause." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "you're", de: "du bist", emoji: "🫵", merk: "🧩 you're = you are → du bist · ✍️ Apostroph nicht vergessen!" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "her class", de: "ihre Klasse", emoji: "👩‍🏫", merk: "🔊 class klingt wie „Klasse“" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "room", de: "das Zimmer, der Raum", emoji: "🛏️", merk: "🔊 room klingt wie „Raum“" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "upstairs", de: "oben; nach oben (im Haus)", emoji: "⬆️", gegenteil: "downstairs", merk: "🧩 ⬆️ UP + STAIRS 🪜 (Treppe) = die Treppe hinauf → nach oben" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "downstairs", de: "unten; nach unten (im Haus)", emoji: "⬇️", gegenteil: "upstairs", bild: "bilder/buch1-unit1/downstairs.jpg", merk: "🎬 Der Pinguin rutscht auf einem Tablett die Treppe DOWN! ⬇️ DOWN + STAIRS 🪜" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "why?", de: "warum?", emoji: "❓", merk: "🔊 „WHY?“ klingt wie „Wai?“ – Warum weint das Baby? WHY?" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "an hour", de: "eine Stunde", emoji: "⏰", merk: "✍️ Das h ist stumm → AN hour (nicht „a hour“) · 🔊 hour klingt wie „Auer“ – eine Stunde auf der Uhr" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "for", de: "für", emoji: "🎁", merk: "🔊 for klingt wie „für“", beispiel: "This is for you.", beispielDe: "Das ist für dich." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "It/He/She isn't here. (= is not)", de: "Es/Er/Sie ist nicht hier.", sprich: "She isn't here.", emoji: "🚪", merk: "🧩 isn't = is not → ist nicht" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "not", de: "nicht", emoji: "🚫", merk: "🔊 not – „Not“ heißt: es geht NICHT mehr" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "here", de: "hier; hierher", emoji: "📍", merk: "🔊 here klingt wie „hier“ · ✍️ h-e-r-e" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "Sorry.", de: "Verzeihung. / Entschuldigung.", emoji: "🙏", merk: "🔊 „Sorry“ sagen wir auch auf Deutsch" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "Who?", de: "Wer?", emoji: "🕵️", merk: "✍️ Falle: WHO = wer · WHERE = wo · 🔊 who klingt wie „Hu?“ – die Eule fragt: Wer? 🦉" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "brother", de: "der Bruder", emoji: "👦", gegenteil: "sister", merk: "🔊 brother – Bruder" },

  // ---------- Heftseite 3 ----------
  { buch: "Buch 1", kapitel: "Unit 1", en: "sister", de: "die Schwester", emoji: "👧", gegenteil: "brother", merk: "🔊 sister – Schwester (beide enden auf -ster)", beispiel: "I've got a sister.", beispielDe: "Ich habe eine Schwester." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "Yes, I am.", de: "Ja, das bin ich.", emoji: "🙋", merk: "✍️ I immer GROSS – auch mitten im Satz!" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "See you.", de: "Bis gleich. / Bis bald.", emoji: "👋", merk: "🧩 See you = „(Ich) sehe dich (wieder)“ → Bis bald!" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "You're lucky.", de: "Du hast Glück.", emoji: "🍀", merk: "🎬 Lucky Luke hat immer Glück 🤠🍀" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "sure", de: "sicher", emoji: "👍", merk: "🔊 sure klingt wie „schur“ – „Bist du sicher? – SURE!“", beispiel: "Are you sure?", beispielDe: "Bist du sicher?" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "smile", de: "das Lächeln", emoji: "😊", merk: "🎬 Smiley 😊 = ein Lächeln" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "sometimes", de: "manchmal", emoji: "🌦️", merk: "🧩 some (manche) + times (Male) = manchmal" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "weird", de: "seltsam, komisch", emoji: "🤪", bild: "bilder/buch1-unit1/weird.jpg", merk: "🎬 Eine Katze mit Krawatte liest Zeitung – that's WEIRD! ✍️ Schreibung: w-E-I-r-d" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "at school", de: "in der Schule", emoji: "🏫", merk: "✍️ Falle: AT school – nicht „in school“" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "she's (she is)", de: "sie ist ...", emoji: "👱‍♀️", merk: "🧩 she's = she is → sie ist" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "they aren't", de: "sie sind nicht", emoji: "🙅", merk: "🧩 aren't = are not → sind nicht" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "divorced", de: "geschieden", emoji: "📄", merk: "🔊 divorced – „Die Vorhänge (di-VOR-ced) werden geteilt“ → getrennt, geschieden" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "they're", de: "sie sind", emoji: "👫", merk: "🧩 they're = they are → sie sind" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "parents (pl)", de: "Eltern", deAlt: ["die Eltern"], emoji: "👨‍👩‍👧", merk: "✍️ Falle: parents = Eltern (NICHT Verwandte!) · pl = Plural" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) listen", de: "zuhören, horchen", emoji: "👂", merk: "✍️ Stummes t: lis(t)en · 🎬 Psst – LISTEN, da raschelt was im Paket!" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "phone", de: "das (Mobil-)Telefon, das Handy", deAlt: ["das Mobiltelefon"], emoji: "📱", merk: "🔊 phone klingt wie „Fon“ – Tele-FON · ✍️ ph wie f" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "message", de: "die Nachricht, die SMS", emoji: "💬", merk: "🔊 Messenger → message = Nachricht" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "free", de: "frei", emoji: "🆓", merk: "🔊 free klingt wie „frie“ – frei" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) hang out (infml)", de: "hängen, abhängen, rumhängen", emoji: "🛋️", merk: "🎬 Zwei Faultiere HANG OUT am Ast 🦥🦥 · infml = umgangssprachlich" },

  // ---------- Heftseite 4 ----------
  { buch: "Buch 1", kapitel: "Unit 1", en: "at my place", de: "bei mir", emoji: "🔑", merk: "🧩 my place = mein Platz → bei mir (zu Hause)", beispiel: "Let's hang out at my place.", beispielDe: "Lass uns bei mir abhängen." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "place", de: "der Ort, der Platz, die Stelle", emoji: "📌", merk: "🔊 place – Platz" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) know", de: "kennen", emoji: "🤝", merk: "✍️ Stummes k: (k)now – das k ist geheim, das KENNt nur, wer es KNOWs", beispiel: "I know her.", beispielDe: "Ich kenne sie." },
  { buch: "Buch 1", kapitel: "Unit 1", en: "primary school", de: "die Grundschule", emoji: "🎒", merk: "🧩 primary = erste → die erste Schule = Grundschule" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "again", de: "wieder, noch einmal", emoji: "🔁", merk: "🔊 again klingt wie „a-gen“ – „Nochmal! AGAIN, AGAIN!“ ruft das Kind auf dem Karussell 🎠" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "Good morning.", de: "Guten Morgen.", emoji: "☀️", merk: "🧩 good = gut · morning = Morgen" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "Here's ... (= Here is ...) / Here are ...", de: "Hier ist ... / Hier sind ...", sprich: "Here is. Here are.", emoji: "🫴", merk: "↔ Here IS (eins) · Here ARE (mehrere)" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "parcel", de: "das Paket, das Päckchen", emoji: "📦", bild: "bilder/buch1-unit1/parcel.jpg", merk: "🎬 Ein winziger Postbote schiebt ein RIESIGES parcel – P wie Paket, P wie Parcel" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "very big", de: "sehr groß", emoji: "🐘", merk: "🎬 Ein very big Elefant 🐘 im very small Auto 🚗" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "(to) understand", de: "verstehen", emoji: "💡", merk: "🧩 UNDER + STAND – du stehst unter dem Schild und verstehst es 🪧" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "father", de: "der Vater", emoji: "👨‍🦱", gegenteil: "mother", merk: "🔊 father – Vater (beide mit -ter/-ther)" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "mother", de: "die Mutter", emoji: "👩‍🦰", gegenteil: "father", merk: "🔊 mother – Mutter" },
  { buch: "Buch 1", kapitel: "Unit 1", en: "useful", de: "nützlich", emoji: "🛠️", bild: "bilder/buch1-unit1/useful.jpg", merk: "🧩 USE (benutzen) + FUL = gut zu gebrauchen · 🎬 Regenschirm im Regen: useful ✅ – unter Wasser: not useful ❌" },
  { buch: "Buch 1", kapitel: "Uni 2", en: "phrase", de: "der Satz, der Ausdruck, die Redewendung", emoji: "💭", merk: "🔊 phrase klingt wie „Phrase“ – eine Redewendung" },

  // ---------- Neue Vokabeln hier einfügen, z. B.: ----------
  // { buch: "Buch 1", kapitel: "Unit 2", en: "dog", de: "der Hund", emoji: "🐶" },
];
