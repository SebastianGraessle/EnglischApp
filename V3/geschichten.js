/* =====================================================================
   GESCHICHTEN – English Adventure (Version 3)
   =====================================================================
   Eine Geschichte gehört zu einem Buch + Unit. Jede Szene wird frei,
   sobald alle ihre "woerter" mindestens erkannt wurden.

   woerter  – genau die "en"-Werte aus vokabeln.js
   text     – englische Zeilen; **fett** = Vokabel
   de       – deutsche Übersetzung (gleiche Anzahl Zeilen)
   frage    – { text, optionen: [...], richtig: Index ab 0 }
   ===================================================================== */

const GESCHICHTEN = [
  {
    id: "b1u1-parcel",
    buch: "Buch 1",
    kapitel: "Unit 1",
    titel: "The mysterious parcel",
    emoji: "📦",
    szenen: [
      {
        titel: "Ding-dong!",
        woerter: ["morning", "doorbell", "postman", "parcel", "very big"],
        text: [
          "It's Saturday **morning**. The **doorbell** rings.",
          "The **postman** is at the door.",
          "He's got a **parcel**. It's **very big**!"
        ],
        de: [
          "Es ist Samstagmorgen. Die Türklingel läutet.",
          "Der Postbote ist an der Tür.",
          "Er hat ein Paket. Es ist sehr groß!"
        ],
        frage: { text: "What has the postman got?", optionen: ["a car", "a parcel", "a doorbell"], richtig: 1 }
      },
      {
        titel: "Who is it?",
        woerter: ["mum", "upstairs", "room", "Who?", "downstairs", "dad", "It/He/She isn't here. (= is not)"],
        text: [
          "**Mum** is **upstairs** in her **room**.",
          "\"**Who** is it?\" she asks.",
          "Lucy runs **downstairs**.",
          "**Dad isn't here.** He's at work."
        ],
        de: [
          "Mama ist oben in ihrem Zimmer.",
          "„Wer ist es?“, fragt sie.",
          "Lucy rennt nach unten.",
          "Papa ist nicht hier. Er ist bei der Arbeit."
        ],
        frage: { text: "Where is Mum?", optionen: ["downstairs", "upstairs", "at school"], richtig: 1 }
      },
      {
        titel: "A weird parcel",
        woerter: ["brother", "sister", "(to) listen", "weird", "maybe", "phone"],
        text: [
          "Lucy's **brother** and **sister** come, too.",
          "\"Shh! **Listen**!\" says her **sister**. Something is in the parcel!",
          "\"That's **weird**!\" says her **brother**.",
          "\"**Maybe** it's a **phone**?\""
        ],
        de: [
          "Lucys Bruder und Schwester kommen auch.",
          "„Psst! Hört zu!“, sagt ihre Schwester. Irgendetwas ist in dem Paket!",
          "„Das ist komisch!“, sagt ihr Bruder.",
          "„Vielleicht ist es ein Handy?“"
        ],
        frage: { text: "What does her brother say?", optionen: ["That's weird!", "Good morning!", "See you."], richtig: 0 }
      },
      {
        titel: "What's in the parcel?",
        woerter: ["smile", "You're lucky.", "sure", "for", "at home"],
        text: [
          "They open the parcel. It's a dog! A very small dog in a very big parcel!",
          "Lucy has got a big **smile**.",
          "\"Is it **for** me? Are you **sure**?\"",
          "\"**You're lucky!**\" says Mum. Now the dog is **at home** with Lucy."
        ],
        de: [
          "Sie öffnen das Paket. Es ist ein Hund! Ein sehr kleiner Hund in einem sehr großen Paket!",
          "Lucy lächelt breit.",
          "„Ist er für mich? Bist du sicher?“",
          "„Du hast Glück!“, sagt Mama. Jetzt ist der Hund bei Lucy zu Hause."
        ],
        frage: { text: "What is in the parcel?", optionen: ["a phone", "a very small dog", "a car"], richtig: 1 }
      }
    ]
  }
];
