/* =====================================================================
   VOKABELN – Buch 1: Welcome + Unit 1
   Aus den fotografierten Vokabelseiten übertragen.

   WICHTIG FÜR ENGLISH ADVENTURE:
   Ein Vokabeltest umfasst jeweils EINE Buchseite. Deshalb ist jede
   Testseite als eigenes "kapitel" angelegt, z. B.:
       Welcome · p.8
       Welcome · p.9
       Unit 1 · p.22
       Unit 1 · p.24
       ...
       Unit 1 · p.49

   So kann in der App genau die von der Lehrerin angekündigte Seite
   ausgewählt werden. Seiten ohne neue Vokabeln erscheinen nicht.

   Prüfregeln der App:
   • Groß-/Kleinschreibung zählt.
   • Deutsche Artikel zählen.
   • ä/ö/ü/ß zählen.
   • Mehrere Bedeutungen: eine richtige Bedeutung genügt.
   • Text in Klammern wie (to) ist freiwillig.
   ===================================================================== */

const VOKABELN = [
  // ===================================================================
  // WELCOME – p.8
  // ===================================================================
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "Welcome to Brighton.", de: "Willkommen in Brighton.", merk: "welcome = willkommen" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "My name is Alice.", de: "Ich heiße Alice.", merk: "Wörtlich: Mein Name ist Alice." },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "I'm from Brighton.", de: "Ich bin aus Brighton. / Ich komme aus Brighton." },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "I'm eleven years old.", de: "Ich bin elf Jahre alt." },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "one", de: "eins" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "two", de: "zwei" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "three", de: "drei" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "four", de: "vier" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "five", de: "fünf" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "six", de: "sechs" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "seven", de: "sieben" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "eight", de: "acht" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "nine", de: "neun" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "ten", de: "zehn" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "eleven", de: "elf" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "twelve", de: "zwölf" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "a city", de: "eine Stadt, eine Großstadt", merk: "one city – two, three, four cities" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "in England", de: "in England" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "my friend", de: "mein Freund / meine Freundin" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "too", de: "auch" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "by the sea", de: "am Meer" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "the", de: "der, die, das" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "sea", de: "das Meer" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "boy", de: "der Junge" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "girl", de: "das Mädchen" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "beach", de: "der Strand" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "sand", de: "der Sand" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "seagull", de: "die Möwe" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "sky", de: "der Himmel", merk: "sky kennst du vielleicht aus 'Show' als ähnliche Lautfolge." },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "stone", de: "der Stein" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "(to) see", de: "sehen; besuchen" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "(to) like", de: "mögen" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "picture", de: "das Bild" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "(to) think", de: "denken, glauben; meinen" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "nice", de: "nett, schön" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "cool", de: "cool" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "big", de: "groß", gegenteil: "small" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "small", de: "klein", gegenteil: "big" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "great", de: "großartig" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "hot", de: "heiß", gegenteil: "cold" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "cold", de: "kalt", gegenteil: "hot" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "Nice to meet you.", de: "Freut mich, dich/euch/Sie kennenzulernen." },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "How old are you?", de: "Wie alt bist du?" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "Are you ...?", de: "Bist du ...?" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "Where are you from?", de: "Woher kommst du?" },
  { buch: "Buch 1", kapitel: "Welcome · p.8", en: "where?", de: "wo?; woher?; wohin?" },

  // ===================================================================
  // WELCOME – p.9
  // ===================================================================
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "hometown", de: "die Heimatstadt", merk: "home + town = Heimatstadt" },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "town", de: "die Stadt" },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "Hello.", de: "Hallo. / Guten Tag." },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "today", de: "heute" },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "How are you?", de: "Wie geht's? / Wie geht es dir/euch/Ihnen?" },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "I'm fine, thanks.", de: "Gut, danke." },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "(to) live", de: "wohnen; leben" },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "can", de: "können" },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "(to) fly", de: "fliegen" },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "a tour of Brighton", de: "ein Rundgang / eine Rundfahrt / eine Reise durch Brighton" },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "Germany", de: "Deutschland" },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "Bye.", de: "Tschüss. / Auf Wiedersehen." },
  { buch: "Buch 1", kapitel: "Welcome · p.9", en: "Goodbye.", de: "Tschüss. / Auf Wiedersehen." },

  // ===================================================================
  // WELCOME – p.10
  // ===================================================================
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "garden", de: "der Garten" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "palace", de: "der Palast, das Schloss" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "the gardens are great", de: "die Gärten sind großartig" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "park", de: "der Park" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "game", de: "das Spiel" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "bag", de: "die Tasche, der Beutel, die Tüte" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "ball", de: "der Ball" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "balloon", de: "der Luftballon" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "bee", de: "die Biene" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "bike", de: "das Fahrrad" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "dog", de: "der Hund" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "grass", de: "das Gras; der Rasen" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "flower", de: "die Blume; die Blüte" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "sandwich", de: "das Sandwich, (zusammengeklapptes) belegtes Brot" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "tree", de: "der Baum" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "something", de: "etwas" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "blue", de: "blau" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "No, that's wrong.", de: "Nein, das ist falsch. / Nein, das stimmt nicht." },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "Yes, that's right.", de: "Ja, das ist richtig. / Ja, das stimmt." },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "now", de: "nun, jetzt" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "(It's) your turn.", de: "Du bist dran / an der Reihe." },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "your", de: "dein/e; euer/eure; Ihr/e" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "(to) spell", de: "buchstabieren" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "spelling", de: "die Rechtschreibung" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "colour", de: "die Farbe" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "red", de: "rot" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "yellow", de: "gelb" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "green", de: "grün" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "brown", de: "braun" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "orange", de: "orange" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "grey", de: "grau" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "pink", de: "pink, rosa" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "purple", de: "violett, lila" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "white", de: "weiß" },
  { buch: "Buch 1", kapitel: "Welcome · p.10", en: "black", de: "schwarz" },

  // ===================================================================
  // WELCOME – p.11
  // ===================================================================
  { buch: "Buch 1", kapitel: "Welcome · p.11", en: "(to) find", de: "finden" },
  { buch: "Buch 1", kapitel: "Welcome · p.11", en: "banana", de: "die Banane" },
  { buch: "Buch 1", kapitel: "Welcome · p.11", en: "(to) have", de: "haben" },
  { buch: "Buch 1", kapitel: "Welcome · p.11", en: "wrong", de: "falsch, verkehrt" },

  // ===================================================================
  // WELCOME – p.12
  // ===================================================================
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "school", de: "die Schule" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "new", de: "neu" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "at", de: "an, bei, in (in Ortsangaben)" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "year", de: "der Jahrgang (die Jahrgangsstufe)" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "please", de: "bitte" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "uniform", de: "die (Schul-)Uniform" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "awesome", de: "klasse, großartig" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "class", de: "die (Schul-)Klasse" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "Let me show you ...", de: "Lass mich dir ... zeigen." },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "me", de: "mich; mir" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "(to) show", de: "zeigen" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "our", de: "unser/e" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "classroom", de: "das Klassenzimmer" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "we", de: "wir" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "family", de: "die Familie" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "Let us sing.", de: "Lass(t) uns singen." },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "us", de: "uns" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "blazer", de: "der Blazer, die Sportjacke" },
  { buch: "Buch 1", kapitel: "Welcome · p.12", en: "tie", de: "der Schlips, die Krawatte" },

  // ===================================================================
  // WELCOME – p.13
  // ===================================================================
  { buch: "Buch 1", kapitel: "Welcome · p.13", en: "thing", de: "die Sache, das Ding" },
  { buch: "Buch 1", kapitel: "Welcome · p.13", en: "(to) know", de: "wissen", merk: "Das k wird nicht gesprochen: (k)now." },
  { buch: "Buch 1", kapitel: "Welcome · p.13", en: "Thanks.", de: "Danke." },
  { buch: "Buch 1", kapitel: "Welcome · p.13", en: "Thank you.", de: "Danke." },
  { buch: "Buch 1", kapitel: "Welcome · p.13", en: "with", de: "mit, bei" },
  { buch: "Buch 1", kapitel: "Welcome · p.13", en: "dot", de: "der Punkt, das Pünktchen" },
  { buch: "Buch 1", kapitel: "Welcome · p.13", en: "double", de: "Doppel-" },

  // ===================================================================
  // WELCOME – p.14
  // ===================================================================
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "(to) sit", de: "sitzen; sich setzen" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "together", de: "zusammen" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "Mr Lee", de: "Herr Lee" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "Mrs Lee", de: "Frau Lee" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "(to) teach", de: "unterrichten" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "art", de: "die Kunst" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "history", de: "die Geschichte" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "class teacher", de: "Klassenlehrer/in" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "poem", de: "das Gedicht" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "day", de: "der Tag" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "Monday", de: "Montag" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "Tuesday", de: "Dienstag" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "Wednesday", de: "Mittwoch" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "Thursday", de: "Donnerstag" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "Friday", de: "Freitag" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "Saturday", de: "Samstag, Sonnabend" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "Sunday", de: "Sonntag" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "book", de: "das Buch; das Heft" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "song", de: "das Lied, der Song" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "(to) go", de: "gehen" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "(to) speak", de: "sprechen" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "French", de: "Französisch" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "(to) read", de: "lesen" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "(to) watch a film", de: "sich einen Film anschauen" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "but", de: "aber" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "I don't have ...", de: "Ich habe kein/keine/keinen ..." },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "so cool/hot/...", de: "so cool/heiß/..." },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "board", de: "die (Wand-)Tafel" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "chair", de: "der Stuhl" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "desk", de: "der Schreibtisch" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "exercise book", de: "das Schulheft, das Übungsheft" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "pencil case", de: "das Federmäppchen" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "pencil", de: "der Bleistift" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "schoolbag", de: "die Schultasche" },
  { buch: "Buch 1", kapitel: "Welcome · p.14", en: "student", de: "Schüler/in; Student/in" },

  // ===================================================================
  // WELCOME – p.15
  // ===================================================================
  { buch: "Buch 1", kapitel: "Welcome · p.15", en: "marker", de: "der Textmarker" },
  { buch: "Buch 1", kapitel: "Welcome · p.15", en: "pen", de: "der Kugelschreiber, der Stift, der Füller" },
  { buch: "Buch 1", kapitel: "Welcome · p.15", en: "rubber", de: "der/das Radiergummi" },
  { buch: "Buch 1", kapitel: "Welcome · p.15", en: "ruler", de: "das Lineal" },
  { buch: "Buch 1", kapitel: "Welcome · p.15", en: "sharpener", de: "der Anspitzer" },
  { buch: "Buch 1", kapitel: "Welcome · p.15", en: "no ...", de: "kein ..., keine ..." },
  { buch: "Buch 1", kapitel: "Welcome · p.15", en: "problem", de: "das Problem" },
  { buch: "Buch 1", kapitel: "Welcome · p.15", en: "Here you are.", de: "Hier, bitte." },
  { buch: "Buch 1", kapitel: "Welcome · p.15", en: "Simon says ...", de: "Simon sagt ..." },

  // ===================================================================
  // WELCOME – p.16
  // ===================================================================
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "world", de: "die Welt" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "pet", de: "das Haustier" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "cute", de: "niedlich, süß" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "scary", de: "unheimlich, gruselig" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "boring", de: "langweilig" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "budgie", de: "der Wellensittich" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "cat", de: "die Katze" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "fish", de: "der Fisch" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "guinea pig", de: "das Meerschweinchen" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "parrot", de: "der Papagei" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "rabbit", de: "das Kaninchen" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "rat", de: "die Ratte" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "snake", de: "die Schlange" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "spider", de: "die Spinne" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "under", de: "unter" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "I don't like ...", de: "Ich mag ... nicht. / Ich mag kein/keine/keinen ..." },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "more", de: "mehr" },
  { buch: "Buch 1", kapitel: "Welcome · p.16", en: "animal", de: "das Tier" },

  // ===================================================================
  // WELCOME – p.17
  // ===================================================================
  { buch: "Buch 1", kapitel: "Welcome · p.17", en: "hobby", de: "das Hobby" },
  { buch: "Buch 1", kapitel: "Welcome · p.17", en: "football", de: "der Fußball" },
  { buch: "Buch 1", kapitel: "Welcome · p.17", en: "(to) run", de: "rennen, laufen" },
  { buch: "Buch 1", kapitel: "Welcome · p.17", en: "music", de: "die Musik" },
  { buch: "Buch 1", kapitel: "Welcome · p.17", en: "(to) swim", de: "schwimmen" },
  { buch: "Buch 1", kapitel: "Welcome · p.17", en: "(to) dance", de: "tanzen" },
  { buch: "Buch 1", kapitel: "Welcome · p.17", en: "what", de: "was" },
  { buch: "Buch 1", kapitel: "Welcome · p.17", en: "What about you?", de: "Und du? / Und was ist mit dir? / Und ihr? / Und was ist mit euch?" },
  { buch: "Buch 1", kapitel: "Welcome · p.17", en: "if", de: "wenn, falls" },
  { buch: "Buch 1", kapitel: "Welcome · p.17", en: "(to) need", de: "brauchen, benötigen" },

  // ===================================================================
  // UNIT 1 – p.22
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.22", en: "at home", de: "daheim, zu Hause", deAlt: ["zuhause"] },
  { buch: "Buch 1", kapitel: "Unit 1 · p.22", en: "everyone", de: "jeder; alle" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.22", en: "This is ...", de: "Dies ist ... / Das ist ..." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.22", en: "street", de: "die Straße" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.22", en: "It's called ...", de: "Er/Sie/Es heißt ..." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.22", en: "road", de: "die Straße (Landstraße zwischen Orten; Straße in Orten)", deKurz: "die Straße (Landstraße)", deAlt: ["die Landstraße"] },
  { buch: "Buch 1", kapitel: "Unit 1 · p.22", en: "car", de: "das Auto" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.22", en: "house", de: "das Haus" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.22", en: "a lot of", de: "viel ..., viele ..." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.22", en: "lots of", de: "viel ..., viele ..." },

  // ===================================================================
  // UNIT 1 – p.24
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "postman", de: "der Briefträger, der Postbote" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "morning", de: "der Morgen, der Vormittag" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "doorbell", de: "die Türklingel, die Türglocke" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "bell", de: "die Klingel, die Glocke" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "maybe", de: "vielleicht" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "dad", de: "der Papa, der Vati" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "mum", de: "die Mama, die Mutti" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "(to) come", de: "kommen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "so", de: "also; deshalb, daher" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "you're", de: "du bist" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "her class", de: "ihre Klasse" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "upstairs", de: "oben; nach oben (im Haus)", gegenteil: "downstairs" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "downstairs", de: "unten; nach unten (im Haus)", gegenteil: "upstairs" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "room", de: "das Zimmer, der Raum" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "why?", de: "warum?" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "an hour", de: "eine Stunde" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "for", de: "für" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "It/He/She isn't here. (= is not)", de: "Es/Er/Sie ist nicht hier.", sprich: "She isn't here." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "here", de: "hier; hierher" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "Sorry.", de: "Verzeihung. / Entschuldigung." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "Who?", de: "Wer?" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "brother", de: "der Bruder", gegenteil: "sister" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "sister", de: "die Schwester", gegenteil: "brother" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "Yes, I am.", de: "Ja, das bin ich." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "See you.", de: "Bis gleich. / Bis bald." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "You're lucky.", de: "Du hast Glück." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "sure", de: "sicher" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "smile", de: "das Lächeln" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "sometimes", de: "manchmal" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "weird", de: "seltsam, komisch" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "at school", de: "in der Schule" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "she's (she is)", de: "sie ist ..." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "they aren't", de: "sie sind nicht" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "they're", de: "sie sind" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "divorced", de: "geschieden" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "parents (pl)", de: "Eltern", deAlt: ["die Eltern"] },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "(to) listen", de: "zuhören, horchen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "phone", de: "das (Mobil-)Telefon, das Handy", deAlt: ["das Telefon", "das Mobiltelefon"] },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "message", de: "die Nachricht, die SMS" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "free", de: "frei" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "(to) hang out (infml)", de: "hängen, abhängen, rumhängen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "at my place", de: "bei mir" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "place", de: "der Ort, der Platz, die Stelle" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "(to) know", de: "kennen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "primary school", de: "die Grundschule" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "again", de: "wieder; noch einmal" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "Good morning.", de: "Guten Morgen." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "Here's ... (= Here is ...) / Here are ...", de: "Hier ist ... / Hier sind ...", sprich: "Here is. Here are." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "parcel", de: "das Paket, das Päckchen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "very big", de: "sehr groß" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "(to) understand", de: "verstehen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "father", de: "der Vater", gegenteil: "mother" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "mother", de: "die Mutter", gegenteil: "father" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "useful", de: "nützlich" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.24", en: "phrase", de: "der Satz, der Ausdruck, die Redewendung" },

  // ===================================================================
  // UNIT 1 – p.25
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "grandma", de: "die Oma; die Großmutter" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "grandpa", de: "der Opa; der Großvater" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "aunt", de: "die Tante" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "uncle", de: "der Onkel" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "cousin", de: "der Cousin, die Cousine" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "some", de: "einige, ein paar; etwas" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "English", de: "Englisch; englisch" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "word", de: "das Wort" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "like words in other languages", de: "wie Wörter in anderen Sprachen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "other", de: "andere/r/s" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "language", de: "die Sprache" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "e.g.", de: "z. B. (zum Beispiel)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "(to) help", de: "helfen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "help", de: "die Hilfe" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "when", de: "wenn" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "(to) learn", de: "lernen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "(to) talk (to)", de: "reden (mit), sich unterhalten (mit)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.25", en: "people (pl)", de: "Leute, Menschen" },

  // ===================================================================
  // UNIT 1 – p.26
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.26", en: "umbrella", de: "der Schirm, der Regenschirm" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.26", en: "(to) type", de: "tippen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.26", en: "(to) pronounce", de: "aussprechen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.26", en: "then", de: "dann" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.26", en: "(to) hear", de: "hören" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.26", en: "(to) say", de: "sagen" },

  // ===================================================================
  // UNIT 1 – p.28
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.28", en: "question", de: "die Frage" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.28", en: "answer", de: "die Antwort" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.28", en: "your favourite book", de: "dein Lieblingsbuch" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.28", en: "(to) use", de: "benutzen, verwenden" },

  // ===================================================================
  // UNIT 1 – p.29
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.29", en: "or", de: "oder" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.29", en: "before a, e, i, o, u", de: "vor A, E, I, O, U" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.29", en: "letter", de: "der Buchstabe" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.29", en: "careful", de: "vorsichtig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.29", en: "conversation", de: "das Gespräch, die Unterhaltung" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.29", en: "There are ...", de: "Es sind ... / Es gibt ..." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.29", en: "There's ...", de: "Es ist ... / Es gibt ..." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.29", en: "its", de: "sein/e; ihr/e" },

  // ===================================================================
  // UNIT 1 – p.30
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "Lily's letter", de: "Lilys Brief" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "full stop", de: "der Punkt (Satzzeichen)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "in English / in German", de: "auf Englisch / auf Deutsch" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "the first word", de: "das erste Wort" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "sentence", de: "der Satz" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "country", de: "das Land (Staat)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "missing", de: "fehlend" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "order", de: "die Reihenfolge" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "step", de: "der Schritt" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "(to) draw", de: "zeichnen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "(to) write", de: "schreiben" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "this classroom/city/name", de: "dieses Klassenzimmer / diese Stadt / dieser Name" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "(to) look at sth./sb.", de: "etwas / jn. anschauen, ansehen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "(to) look sth. up", de: "etwas nachschlagen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.30", en: "(to) check", de: "(über)prüfen, kontrollieren" },

  // ===================================================================
  // UNIT 1 – p.32
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "(to) get", de: "(sich) etwas besorgen, (sich) etwas holen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "drink", de: "das Getränk" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "(to) drink", de: "trinken" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "Are there any ...?", de: "Gibt es (irgendwelche) ...?" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "glass", de: "das Glas" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "kitchen", de: "die Küche" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "(to) be fun", de: "Spaß machen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "(to) have fun", de: "Spaß haben, sich amüsieren" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "bedroom", de: "das Schlafzimmer" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "quiet", de: "ruhig, still, leise" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "tidy", de: "ordentlich" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "clothes (pl)", de: "die Kleidung, Kleidungsstücke" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "on the bed", de: "auf dem Bett" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "on that chair", de: "auf dem Stuhl (dort), auf jenem Stuhl" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "bin", de: "der Abfalleimer" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "behind", de: "hinter" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "in front of", de: "vor" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "door", de: "die Tür" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "TV", de: "der Fernseher, das Fernsehgerät" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "(to) watch TV", de: "fernsehen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "guys (pl) (infml)", de: "Leute" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "photo", de: "das Foto" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "young", de: "jung" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "That's me.", de: "Das bin ich." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "really", de: "wirklich" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "next to", de: "neben" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "dead", de: "tot" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "guitar", de: "die Gitarre" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "late", de: "spät" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.32", en: "compliment", de: "das Kompliment" },

  // ===================================================================
  // UNIT 1 – p.33
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "shelf", de: "das Regal" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "lamp", de: "die Lampe" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "toilet", de: "die Toilette" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "bath", de: "das Bad" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "bathroom", de: "das Badezimmer, das Bad" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "armchair", de: "der Sessel" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "cupboard", de: "der Schrank" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "sink", de: "das Abwaschbecken, das Spülbecken" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "living room", de: "das Wohnzimmer" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "sofa", de: "das Sofa" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "table", de: "der Tisch" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "clock", de: "die (Wand-, Stand-, Turm-)Uhr" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "window", de: "das Fenster" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "wall", de: "die Mauer, die Wand" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.33", en: "drawing", de: "die Zeichnung" },

  // ===================================================================
  // UNIT 1 – p.34
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.34", en: "chant", de: "der Sprechchor" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.34", en: "rule", de: "die Regel, die Vorschrift" },

  // ===================================================================
  // UNIT 1 – p.35
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.35", en: "(to) describe sth. (to sb.)", de: "(jm.) etwas beschreiben" },

  // ===================================================================
  // UNIT 1 – p.36
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.36", en: "area", de: "das Gebiet, die Gegend" },

  // ===================================================================
  // UNIT 1 – p.37
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.37", en: "(to) make", de: "bilden; machen; herstellen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.37", en: "(to) do", de: "machen, tun" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.37", en: "(to) visit", de: "besuchen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.37", en: "culture", de: "die Kultur" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.37", en: "guest", de: "der Gast" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.37", en: "easy", de: "einfach, leicht" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.37", en: "flat", de: "die Wohnung" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.37", en: "furniture (no pl)", de: "die Möbel (pl)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.37", en: "important", de: "wichtig" },

  // ===================================================================
  // UNIT 1 – p.38
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "another", de: "ein(e) andere(r,s); noch ein(e)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "joke", de: "der Witz" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "(to) play", de: "spielen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "funny", de: "witzig, komisch" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "You're right/wrong.", de: "Du hast Recht/Unrecht." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "I can't ...", de: "Ich kann nicht ..." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "(to) play the guitar", de: "Gitarre spielen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "amazing", de: "erstaunlich, unglaublich" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "bad", de: "schlecht, schlimm" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "dinner", de: "das Abendessen, das Abendbrot" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "time", de: "die Zeit; die Uhrzeit" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "soon", de: "bald" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "(to) open", de: "öffnen, aufmachen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "open", de: "offen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "(to) stay", de: "bleiben" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "idea", de: "die Idee; die Vorstellung" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "many", de: "viele" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "(to) remember (sth.)", de: "sich erinnern (an etwas)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "all", de: "alles; alle" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "face", de: "das Gesicht" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "friendly", de: "freundlich" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "my best friend", de: "mein bester Freund / meine beste Freundin" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "a bit", de: "ein bisschen, etwas" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "mean", de: "gemein" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.38", en: "(to) laugh", de: "lachen" },

  // ===================================================================
  // UNIT 1 – p.39
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "false", de: "falsch", gegenteil: "true" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "true", de: "wahr", gegenteil: "false" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "line", de: "die Zeile" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "character", de: "der Charakter, die Figur, die Person (im Roman, Film usw.)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "already", de: "schon, bereits" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "story", de: "die Geschichte, die Erzählung" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "kid (infml)", de: "das Kind / Jugendliche(r)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "her", de: "sie; ihr" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "life skills (pl)", de: "Lebenskompetenzen, lebenswichtige Fertigkeiten" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "(to) make friends", de: "Freunde finden" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "(to) ask", de: "fragen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "(to) ask (sb.) a question", de: "(jm.) eine Frage stellen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.39", en: "Have a go.", de: "Versuch's mal." },

  // ===================================================================
  // UNIT 1 – p.40
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.40", en: "high", de: "hoch" },

  // ===================================================================
  // UNIT 1 – p.41
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.41", en: "(to) put", de: "legen, stellen, (etwas wohin) tun, setzen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.41", en: "to", de: "um zu" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.41", en: "after the s", de: "nach dem S" },

  // ===================================================================
  // UNIT 1 – p.42
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "zero", de: "Null" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "to", de: "bis" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "O", de: "Null (in Telefonnummern)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "thirteen", de: "dreizehn" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "fourteen", de: "vierzehn" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "fifteen", de: "fünfzehn" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "sixteen", de: "sechzehn" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "seventeen", de: "siebzehn" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "eighteen", de: "achtzehn" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "nineteen", de: "neunzehn" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "twenty", de: "zwanzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "twenty-one", de: "einundzwanzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "twenty-two", de: "zweiundzwanzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "twenty-three", de: "dreiundzwanzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "twenty-four", de: "vierundzwanzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "twenty-five", de: "fünfundzwanzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "twenty-six", de: "sechsundzwanzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "thirty", de: "dreißig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "thirty-one", de: "einunddreißig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "thirty-two", de: "zweiunddreißig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "forty", de: "vierzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "fifty", de: "fünfzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "sixty", de: "sechzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "seventy", de: "siebzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "eighty", de: "achtzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "ninety", de: "neunzig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.42", en: "a hundred / one hundred", de: "hundert" },

  // ===================================================================
  // UNIT 1 – p.43
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.43", en: "address", de: "die Adresse" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.43", en: "player", de: "Spieler/in" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.43", en: "talk", de: "der Vortrag, das Referat, die Rede, der Bericht" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.43", en: "the gist", de: "das Wesentliche, der Hauptinhalt" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.43", en: "detail", de: "das Detail, die Einzelheit" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.43", en: "partner", de: "Partner/in" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.43", en: "stepsister", de: "die Stiefschwester" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.43", en: "the main topic", de: "das Hauptthema" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.43", en: "(to) be good at football/art/...", de: "gut sein in Fußball/Kunst/...; gut Fußball/Kunst/... können" },

  // ===================================================================
  // UNIT 1 – p.44
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.44", en: "first", de: "zuerst, als Erstes" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.44", en: "speaker", de: "Sprecher/in" },

  // ===================================================================
  // UNIT 1 – p.46
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.46", en: "4 pm", de: "4 Uhr nachmittags / 16 Uhr" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.46", en: "4 am", de: "4 Uhr morgens, vormittags" },

  // ===================================================================
  // UNIT 1 – p.47
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.47", en: "dark", de: "dunkel" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.47", en: "box", de: "der Kasten, die Kiste, das Kästchen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.47", en: "scared", de: "verängstigt" },

  // ===================================================================
  // UNIT 1 – p.48
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.48", en: "Well, ...", de: "Nun, ... / Also, ... / Na ja, ..." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.48", en: "(to) answer", de: "antworten, beantworten" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.48", en: "It's magic.", de: "Es ist Magie. / Es ist magisch." },
  { buch: "Buch 1", kapitel: "Unit 1 · p.48", en: "ready", de: "bereit, fertig" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.48", en: "(to) tell sb. about sth.", de: "jm. von etwas erzählen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.48", en: "(to) take", de: "nehmen, mitnehmen; (weg-, hin)bringen" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.48", en: "back", de: "zurück" },

  // ===================================================================
  // UNIT 1 – p.49
  // ===================================================================
  { buch: "Buch 1", kapitel: "Unit 1 · p.49", en: "around", de: "um ... (herum)" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.49", en: "just", de: "einfach; nur, bloß" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.49", en: "silly", de: "albern; blöd" },
  { buch: "Buch 1", kapitel: "Unit 1 · p.49", en: "toy", de: "das Spielzeug" },
];
