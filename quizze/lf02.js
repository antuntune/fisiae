export const quiz = {
  quizTitle: "LF02 LZK",
  quizSynopsis: "Richtig-Falsch Fragen aus Kompetenzchecks",
  nrOfQuestions: "76",
  questions: [
    {
      question:
        "Ein Computer funktioniert nur mit einer Eingabeeinheit und einer Ausgabeeinheit.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Computer benötigt zusätzlich eine Zentraleinheit (CPU), um die Daten zu verarbeiten.",
      point: "20",
    },

    {
      question:
        "Ein Computer funktioniert nur mit einer Eingabeeinheit und der Zentraleinheit.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Computer benötigt mindestens eine Eingabeeinheit und eine Zentraleinheit, um zu funktionieren.",
      point: "20",
    },

    {
      question:
        "Sind nur Einheiten der Eingabe und der Verarbeitung vorhanden, ist die Verarbeitung wertlos, da beim Ausschalten der Verarbeitungseinheit die Daten gelöscht werden und es keine Ausgabe gab.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ohne eine Ausgabe nach der Verarbeitung sind die verarbeiteten Daten nicht nutzbar und würden verloren gehen.",
      point: "20",
    },

    {
      question:
        "In der Datenverarbeitung spricht man stets vom EVA-Prinzip auch vom AVE-Prinzip möglich.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Es gibt nur das EVA-Prinzip (Eingabe, Verarbeitung, Ausgabe). Ein „AVE-Prinzip“ existiert nicht.",
      point: "20",
    },

    {
      question: "Die CPU ist ein Peripheriegerät.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die CPU ist die Zentraleinheit und kein Peripheriegerät. Peripheriegeräte sind zum Beispiel Drucker oder Tastaturen.",
      point: "20",
    },

    {
      question: "Konfiguration bedeutet die Zusammenstellung von Komponenten.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Konfiguration bezieht sich auf die Zusammensetzung und Einstellung von Komponenten und Geräten in Bezug auf eine bestimmte Anwendung.",
      point: "20",
    },

    {
      question:
        "Ein Desktop-PC ist i.d.R. leistungsstärker als eine Workstation.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Eine Workstation ist in der Regel leistungsstärker als ein Desktop-PC, da sie für anspruchsvollere Aufgaben konzipiert ist.",
      point: "20",
    },

    {
      question:
        "Ein Thin-Client ist in einem großen Tower-Gehäuse untergebracht.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Thin-Client ist in der Regel klein und kompakt, oft sogar so klein, dass er hinter einem Monitor oder unter einem Schreibtisch versteckt werden kann. Er wird nicht in einem großen Tower-Gehäuse untergebracht.",
      point: "20",
    },

    {
      question:
        "Bei Embedded Systems sind Computer in Anlagen und Teilen integriert.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Embedded Systems sind Computersysteme, die fest in andere Geräte oder Maschinen integriert sind, um spezifische Aufgaben zu erfüllen.",
      point: "20",
    },

    {
      question: "IoT bedeutet Internet of Things.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "IoT steht für „Internet of Things“, was sich auf die Vernetzung von Geräten und Systemen über das Internet bezieht.",
      point: "20",
    },

    {
      question: "BIOS ist eine kleine Betriebssoftware.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das BIOS (Basic Input/Output System) ist eine Firmware, die grundlegende Funktionen eines Computers steuert, bevor das eigentliche Betriebssystem startet.",
      point: "20",
    },

    {
      question: "Ein LAN ist ein weltweites Netzwerk.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein LAN (Local Area Network) ist ein lokales Netzwerk, das sich typischerweise auf ein begrenztes geografisches Gebiet, wie ein Gebäude oder einen Campus, erstreckt. Ein weltweites Netzwerk wäre ein WAN (Wide Area Network).",
      point: "20",
    },

    {
      question: "On-Premise bedeutet Anwendung in einer Cloud.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "On-Premise bezieht sich auf Software, die auf lokalen Servern vor Ort installiert wird, nicht in einer Cloud.",
      point: "20",
    },

    {
      question: "Proprietäre Software ist kommerzielle Software mit Lizenz.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Proprietäre Software ist in der Regel kommerziell und erfordert eine Lizenz, um genutzt zu werden. Sie ist nicht quelloffen und ihre Weiterverbreitung und Veränderung sind meist eingeschränkt.",
      point: "20",
    },

    {
      question:
        "Ein Mangel ist vorhanden, wenn dem Kunden das Produkt nicht gefällt.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Mangel liegt nicht einfach dann vor, wenn dem Kunden das Produkt nicht gefällt. Ein Mangel bezieht sich auf objektive Defizite, wie die Nichteinhaltung von vertraglich vereinbarten Spezifikationen.",
      point: "20",
    },

    {
      question: "Ein Qualitätsmangel schließt den Quantitätsmangel ein.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Qualitätsmangel bezieht sich auf die Qualität des gelieferten Produkts, während ein Quantitätsmangel sich auf die gelieferte Menge bezieht. Diese Mängel sind unterschiedlich und schließen sich nicht gegenseitig ein.",
      point: "20",
    },

    {
      question:
        "Es ist schon ein Mangel, wenn die Benutzeranleitungen mangelhaft sind.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Eine mangelhafte Benutzeranleitung kann als Mangel angesehen werden, da sie die Nutzung des Produkts beeinträchtigen kann.",
      point: "20",
    },

    {
      question:
        "Wenn keine Spezifikation vertraglich vereinbart ist, kann auch kein Mangel festgestellt werden.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Auch wenn keine spezifischen Spezifikationen vereinbart wurden, muss das Produkt für den gewöhnlichen Gebrauch geeignet sein. Ansonsten könnte es als mangelhaft betrachtet werden.",
      point: "20",
    },

    {
      question:
        "Wenn nicht genau das gewünschte Gerät, aber ein ähnliches Gerät geliefert wurde, ist das kein Mangel.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Wenn ein anderes als das bestellte Gerät geliefert wurde, könnte dies dennoch als Mangel betrachtet werden, es sei denn, der Kunde hat das alternative Gerät ausdrücklich akzeptiert.",
      point: "20",
    },

    {
      question:
        "Wenn im Vertrag ISO-Normen oder Formfaktoren als Spezifikationen angegeben sind, muss man sich daran halten, ansonsten kann der Auftraggeber einen Mangel feststellen.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Wenn bestimmte Normen oder Spezifikationen im Vertrag festgelegt wurden, müssen diese eingehalten werden. Ansonsten kann der Kunde einen Mangel reklamieren.",
      point: "20",
    },

    {
      question:
        "Ein Anbieter muss im Nachhinein nicht alles möglich machen, was ein Kunde erwartet hat.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Anbieter ist nur verpflichtet, das zu liefern, was vertraglich vereinbart wurde. Erwartungshaltungen des Kunden, die nicht Teil des Vertrags sind, müssen nicht erfüllt werden.",
      point: "20",
    },

    {
      question:
        "Bei einem Bruttopreis von 1.000,00 € und 19 % Umsatzsteuer beträgt der Nettopreis (Kosten) 881,00 €.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Nettopreis wird berechnet, indem der Bruttopreis durch 1,19 geteilt wird. Der korrekte Nettopreis beträgt daher 840,34 € und nicht 881,00 €.",
      point: "20",
    },

    {
      question:
        "Wenn auf 500,00 € die MwSt. von 19 % aufgeschlagen werden soll, so sind das 95,00 €.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "19 % von 500,00 € ergeben 95,00 €. Der Bruttopreis wäre dann 595,00 €.",
      point: "20",
    },

    {
      question:
        "Das billigste Angebot ist immer das wirtschaftlichste Angebot.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das billigste Angebot ist nicht immer das wirtschaftlichste, da auch andere Faktoren wie Qualität, Folgekosten und Langlebigkeit berücksichtigt werden müssen.",
      point: "20",
    },

    {
      question: "Folgekosten gibt es nur außerhalb der Gewährleistung.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Folgekosten können während der gesamten Lebensdauer eines Produkts anfallen, unabhängig davon, ob noch Gewährleistung besteht oder nicht.",
      point: "20",
    },

    {
      question: "Anschaffungskosten sind nur die reinen Gerätekosten.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Zu den Anschaffungskosten gehören neben den reinen Gerätekosten auch Zusatzkosten wie Transport, Installation und Schulung.",
      point: "20",
    },

    {
      question:
        "Beim Datenschutz wird im Unternehmen ausschließlich an den Schutz der Unternehmensdaten gedacht.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Datenschutz bezieht sich nicht nur auf Unternehmensdaten, sondern insbesondere auch auf den Schutz personenbezogener Daten von Kunden, Mitarbeitern und anderen betroffenen Personen.",
      point: "20",
    },

    {
      question: "Offiziell informiert das BSI zur IT-Sicherheit.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das Bundesamt für Sicherheit in der Informationstechnik (BSI) informiert und berät offiziell zu Themen der IT-Sicherheit in Deutschland.",
      point: "20",
    },

    {
      question:
        "Informationssicherheit ist im IT-Grundschutzkompendium des BSI oder in der ISO 9000 beschrieben.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Informationssicherheit wird detailliert im IT-Grundschutzkompendium des BSI und in der ISO/IEC 27001 beschrieben, nicht in der ISO 9000, die sich auf Qualitätsmanagementsysteme bezieht.",
      point: "20",
    },

    {
      question: "Integrität der Daten bedeutet Korrektheit der Daten.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Integrität der Daten bedeutet, dass die Daten korrekt und unverändert bleiben, wie sie erstellt oder übermittelt wurden.",
      point: "20",
    },

    {
      question:
        "Beim Phishing werden durch Tricks Logindaten unrechtmäßig erlangt.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Phishing bezeichnet den Versuch, durch gefälschte E-Mails, Websites oder andere Methoden sensible Daten wie Logindaten zu erlangen.",
      point: "20",
    },

    {
      question: "Echobot ist ein Botnetzvirus.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Echobot ist ein bekannter Botnetzvirus, der Netzwerke infizieren kann.",
      point: "20",
    },

    {
      question: "CPU ist das Motherboard insgesamt.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die CPU (Central Processing Unit) ist der Prozessor des Computers und nicht das gesamte Motherboard. Das Motherboard ist die Hauptplatine, auf der die CPU und andere Komponenten montiert sind.",
      point: "20",
    },

    {
      question: "CLK bedeutet Central Large Canceling.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "CLK steht für „Clock“ und bezeichnet die Taktfrequenz, mit der die CPU und andere Komponenten synchronisiert werden. „Central Large Canceling“ ist kein gängiger Begriff.",
      point: "20",
    },

    {
      question: "UEFI ist ein anderes Wort für BIOS.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "UEFI (Unified Extensible Firmware Interface) ist der Nachfolger des BIOS (Basic Input/Output System) und bietet mehr Funktionen und eine modernere Benutzeroberfläche, ist aber nicht dasselbe wie BIOS.",
      point: "20",
    },

    {
      question:
        "Mit einer VMM können mehrere Betriebssysteme mit entsprechenden Programmen gleichzeitig laufen.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Virtual Machine Monitor (VMM) ermöglicht die gleichzeitige Ausführung mehrerer Betriebssysteme auf einer einzigen Hardware durch Virtualisierung.",
      point: "20",
    },

    {
      question: "RAM bedeutet Read and Write Memory.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "RAM steht für „Random Access Memory“, nicht „Read and Write Memory“. Es handelt sich um einen flüchtigen Speicher, in dem Daten temporär gespeichert werden, während sie von der CPU verarbeitet werden.",
      point: "20",
    },

    {
      question:
        "Systeminformationen eines PCs erhält man über das Office-Programm.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Systeminformationen eines PCs erhält man nicht über ein Office-Programm, sondern über spezielle Systemtools oder das BIOS/UEFI.",
      point: "20",
    },

    {
      question: "Die Geschwindigkeit des RAM wird in MT/s gemessen.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Geschwindigkeit des RAM wird in Megatransfers pro Sekunde (MT/s) gemessen. Dieser Wert gibt an, wie viele Datenübertragungen pro Sekunde der RAM leisten kann.",
      point: "20",
    },

    {
      question: "SO-RAM sind für Desktopssysteme.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "SO-DIMM (Small Outline Dual Inline Memory Module) RAM-Module sind für Laptops und kleine Formfaktor-Computer vorgesehen, nicht für Desktop-Systeme.",
      point: "20",
    },

    {
      question:
        "Derzeit ist das DDR4 das RAM mit dem höchsten Energieverbrauch.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "DDR4-RAM ist energieeffizienter als frühere Generationen. DDR5-RAM ist inzwischen die neuere Generation, die höhere Leistung bei vergleichbarem oder sogar geringerem Energieverbrauch bietet.",
      point: "20",
    },

    {
      question: "Mit DDR3 können 32 GB erreicht werden.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "DDR3-RAM-Module können in Kapazitäten bis zu 32 GB erhältlich sein, abhängig von der Modulgröße und dem Speicherbedarf des Systems.",
      point: "20",
    },

    {
      question: "DDR3 gibt es nur in 2-GB-, 4-GB- und 8-GB-Riegeln.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "DDR3-RAM gibt es in verschiedenen Größen, einschließlich 1 GB, 2 GB, 4 GB, 8 GB und 16 GB, abhängig vom Hersteller und Einsatzzweck.",
      point: "20",
    },

    {
      question: "SSDs sind magnetische Flashspeicher.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "SSDs (Solid State Drives) basieren nicht auf magnetischer Speichertechnologie. Sie verwenden stattdessen Flash-Speicherzellen zur Speicherung von Daten, im Gegensatz zu herkömmlichen Festplatten, die magnetische Scheiben verwenden.",
      point: "20",
    },

    {
      question: "Latenz bedeutet Reaktionsgeschwindigkeit (des Speichers).",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Latenz bezeichnet die Verzögerungszeit, die der Speicher benötigt, um auf einen Befehl zu reagieren. Niedrigere Latenzen bedeuten schnellere Reaktionszeiten.",
      point: "20",
    },

    {
      question:
        "PCIe-Steckplätze sind für RAM-Karten und RAM-Riegel zu verwenden.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "PCIe-Steckplätze (Peripheral Component Interconnect Express) sind nicht für RAM-Karten oder RAM-Riegel gedacht. Sie dienen zum Anschluss von Erweiterungskarten wie Grafikkarten, Netzwerkkarten oder SSDs. RAM wird in spezielle RAM-Steckplätze eingesetzt.",
      point: "20",
    },

    {
      question: "Bei DIMMs ist beim Einbau auf die Einkerbungen zu achten.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "DIMMs (Dual Inline Memory Modules) haben Einkerbungen, die sicherstellen, dass das Modul korrekt in den Steckplatz eingesetzt wird. Es ist wichtig, darauf zu achten, dass das Modul richtig ausgerichtet ist, um Schäden zu vermeiden.",
      point: "20",
    },

    {
      question: "SATA-Anschlüsse sind für Festplatten vorgesehen.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "SATA-Anschlüsse (Serial ATA) werden hauptsächlich für den Anschluss von Festplatten, SSDs und optischen Laufwerken verwendet.",
      point: "20",
    },

    {
      question: "Je mehr Lanes, desto geringer ist die Datenrate/s.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Im Gegenteil, je mehr Lanes ein PCIe-Slot hat, desto höher ist die Datenübertragungsrate. Lanes sind Datenpfade, über die Informationen parallel übertragen werden, sodass mehr Lanes eine höhere Gesamtgeschwindigkeit ermöglichen.",
      point: "20",
    },

    {
      question: "Der M.2-Port löst den SATA-Port ab.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "M.2-Ports können SATA-Ports ersetzen, da sie sowohl SATA- als auch NVMe-SSDs unterstützen. NVMe-SSDs über den M.2-Port bieten dabei deutlich höhere Geschwindigkeiten als herkömmliche SATA-SSDs.",
      point: "20",
    },

    {
      question: "Die Datentransferrate wird in GB/s gemessen.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Laut dem Buch wird die Datentransferrate in Gbit/s (Gigabit pro Sekunde) gemessen und nicht in GB/s (Gigabyte pro Sekunde). Die Datenrate wird hingegen in GB/s gemessen.",
      point: "20",
    },

    {
      question: "USB-Anschlüsse gibt es bis zur Spezifikation 2.0.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "USB-Anschlüsse gibt es bis zu höheren Spezifikationen, einschließlich USB 3.0, 3.1, 3.2 und sogar USB4. Diese bieten im Vergleich zu USB 2.0 wesentlich höhere Übertragungsgeschwindigkeiten.",
      point: "20",
    },
  ],
};
