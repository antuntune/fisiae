export const quiz = {
  quizTitle: "LF02  Fragen",
  quizSynopsis:
    "Bei jedem Versuch wählt der Quiz zufällig 20 Fragen aus einem Pool von insgesamt 106 Fragen aus. ",
  nrOfQuestions: "20",
  questions: [
    {
      question:
        "Ein Computer funktioniert nur mit einer Eingabeeinheit und einer Ausgabeeinheit.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Computer benötigt zusätzlich eine Zentraleinheit (CPU), um die Daten zu verarbeiten.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Ein Computer funktioniert nur mit einer Eingabeeinheit und der Zentraleinheit.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Computer benötigt in der Regel eine Zentraleinheit, ein Eingabegerät und ein Ausgabegerät, um vollständig zu funktionieren.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Sind nur Einheiten der Eingabe und der Verarbeitung vorhanden, ist die Verarbeitung wertlos, da beim Ausschalten der Verarbeitungseinheit die Daten gelöscht werden und es keine Ausgabe gab.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ohne eine Ausgabe nach der Verarbeitung sind die verarbeiteten Daten nicht nutzbar und würden verloren gehen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "In der Datenverarbeitung spricht man stets vom EVA-Prinzip auch vom AVE-Prinzip möglich.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Es gibt nur das EVA-Prinzip (Eingabe, Verarbeitung, Ausgabe). Ein „AVE-Prinzip“ existiert nicht.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Die CPU ist ein Peripheriegerät.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die CPU ist die Zentraleinheit und kein Peripheriegerät. Peripheriegeräte sind zum Beispiel Drucker oder Tastaturen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Konfiguration bedeutet die Zusammenstellung von Komponenten.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Konfiguration bezieht sich auf die Zusammensetzung und Einstellung von Komponenten und Geräten in Bezug auf eine bestimmte Anwendung.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Ein Desktop-PC ist i.d.R. leistungsstärker als eine Workstation.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Eine Workstation ist in der Regel leistungsstärker als ein Desktop-PC, da sie für anspruchsvollere Aufgaben konzipiert ist.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Ein Thin-Client ist in einem großen Tower-Gehäuse untergebracht.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Thin-Client ist in der Regel klein und kompakt, oft sogar so klein, dass er hinter einem Monitor oder unter einem Schreibtisch versteckt werden kann. Er wird nicht in einem großen Tower-Gehäuse untergebracht.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Bei Embedded Systems sind Computer in Anlagen und Teilen integriert.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Embedded Systems sind Computersysteme, die fest in andere Geräte oder Maschinen integriert sind, um spezifische Aufgaben zu erfüllen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "IoT bedeutet Internet of Things.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "IoT steht für „Internet of Things“, was sich auf die Vernetzung von Geräten und Systemen über das Internet bezieht.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "BIOS ist eine kleine Betriebssoftware.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das BIOS (Basic Input/Output System) ist eine Firmware, die grundlegende Funktionen eines Computers steuert, bevor das eigentliche Betriebssystem startet.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Ein LAN ist ein weltweites Netzwerk.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein LAN (Local Area Network) ist ein lokales Netzwerk, das sich typischerweise auf ein begrenztes geografisches Gebiet, wie ein Gebäude oder einen Campus, erstreckt. Ein weltweites Netzwerk wäre ein WAN (Wide Area Network).",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "On-Premise bedeutet Anwendung in einer Cloud.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "On-Premise bezieht sich auf Software, die auf lokalen Servern vor Ort installiert wird, nicht in einer Cloud.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Proprietäre Software ist kommerzielle Software mit Lizenz.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Proprietäre Software ist in der Regel kommerziell und erfordert eine Lizenz, um genutzt zu werden. Sie ist nicht quelloffen und ihre Weiterverbreitung und Veränderung sind meist eingeschränkt.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Ein Mangel ist vorhanden, wenn dem Kunden das Produkt nicht gefällt.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Mangel liegt nicht einfach dann vor, wenn dem Kunden das Produkt nicht gefällt. Ein Mangel bezieht sich auf objektive Defizite, wie die Nichteinhaltung von vertraglich vereinbarten Spezifikationen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Ein Qualitätsmangel schließt den Quantitätsmangel ein.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Qualitätsmangel bezieht sich auf die Qualität des gelieferten Produkts, während ein Quantitätsmangel sich auf die gelieferte Menge bezieht. Diese Mängel sind unterschiedlich und schließen sich nicht gegenseitig ein.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Es ist schon ein Mangel, wenn die Benutzeranleitungen mangelhaft sind.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Eine mangelhafte Benutzeranleitung kann als Mangel angesehen werden, da sie die Nutzung des Produkts beeinträchtigen kann.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Wenn keine Spezifikation vertraglich vereinbart ist, kann auch kein Mangel festgestellt werden.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Auch wenn keine spezifischen Spezifikationen vereinbart wurden, muss das Produkt für den gewöhnlichen Gebrauch geeignet sein. Ansonsten könnte es als mangelhaft betrachtet werden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Wenn nicht genau das gewünschte Gerät, aber ein ähnliches Gerät geliefert wurde, ist das kein Mangel.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Wenn ein anderes als das bestellte Gerät geliefert wurde, könnte dies dennoch als Mangel betrachtet werden, es sei denn, der Kunde hat das alternative Gerät ausdrücklich akzeptiert.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Wenn im Vertrag ISO-Normen oder Formfaktoren als Spezifikationen angegeben sind, muss man sich daran halten, ansonsten kann der Auftraggeber einen Mangel feststellen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Wenn bestimmte Normen oder Spezifikationen im Vertrag festgelegt wurden, müssen diese eingehalten werden. Ansonsten kann der Kunde einen Mangel reklamieren.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Ein Anbieter muss im Nachhinein nicht alles möglich machen, was ein Kunde erwartet hat.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Anbieter ist nur verpflichtet, das zu liefern, was vertraglich vereinbart wurde. Erwartungshaltungen des Kunden, die nicht Teil des Vertrags sind, müssen nicht erfüllt werden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Bei einem Bruttopreis von 1.000,00 € und 19 % Umsatzsteuer beträgt der Nettopreis (Kosten) 881,00 €.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Nettopreis wird berechnet, indem der Bruttopreis durch 1,19 geteilt wird. Der korrekte Nettopreis beträgt daher 840,34 € und nicht 881,00 €.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Wenn auf 500,00 € die MwSt. von 19 % aufgeschlagen werden soll, so sind das 95,00 €.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "19 % von 500,00 € ergeben 95,00 €. Der Bruttopreis wäre dann 595,00 €.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Das billigste Angebot ist immer das wirtschaftlichste Angebot.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das billigste Angebot ist nicht immer das wirtschaftlichste, da auch andere Faktoren wie Qualität, Folgekosten und Langlebigkeit berücksichtigt werden müssen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Folgekosten gibt es nur außerhalb der Gewährleistung.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Folgekosten können während der gesamten Lebensdauer eines Produkts anfallen, unabhängig davon, ob noch Gewährleistung besteht oder nicht.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Anschaffungskosten sind nur die reinen Gerätekosten.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Zu den Anschaffungskosten gehören neben den reinen Gerätekosten auch Zusatzkosten wie Transport, Installation und Schulung.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Beim Datenschutz wird im Unternehmen ausschließlich an den Schutz der Unternehmensdaten gedacht.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Datenschutz bezieht sich nicht nur auf Unternehmensdaten, sondern insbesondere auch auf den Schutz personenbezogener Daten von Kunden, Mitarbeitern und anderen betroffenen Personen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Offiziell informiert das BSI zur IT-Sicherheit.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das Bundesamt für Sicherheit in der Informationstechnik (BSI) informiert und berät offiziell zu Themen der IT-Sicherheit in Deutschland.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Informationssicherheit ist im IT-Grundschutzkompendium des BSI oder in der ISO 9000 beschrieben.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Informationssicherheit wird detailliert im IT-Grundschutzkompendium des BSI und in der ISO/IEC 27001 beschrieben, nicht in der ISO 9000, die sich auf Qualitätsmanagementsysteme bezieht.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Integrität der Daten bedeutet Korrektheit der Daten.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Integrität der Daten bedeutet, dass die Daten korrekt und unverändert bleiben, wie sie erstellt oder übermittelt wurden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Beim Phishing werden durch Tricks Logindaten unrechtmäßig erlangt.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Phishing bezeichnet den Versuch, durch gefälschte E-Mails, Websites oder andere Methoden sensible Daten wie Logindaten zu erlangen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Echobot ist ein Botnetzvirus.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Echobot ist ein bekannter Botnetzvirus, der Netzwerke infizieren kann.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "CPU ist das Motherboard insgesamt.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die CPU (Central Processing Unit) ist der Prozessor des Computers und nicht das gesamte Motherboard. Das Motherboard ist die Hauptplatine, auf der die CPU und andere Komponenten montiert sind.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "CLK bedeutet Central Large Canceling.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "CLK steht für „Clock“ und bezeichnet die Taktfrequenz, mit der die CPU und andere Komponenten synchronisiert werden. „Central Large Canceling“ ist kein gängiger Begriff.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "UEFI ist ein anderes Wort für BIOS.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "UEFI (Unified Extensible Firmware Interface) ist der Nachfolger des BIOS (Basic Input/Output System) und bietet mehr Funktionen und eine modernere Benutzeroberfläche, ist aber nicht dasselbe wie BIOS.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Mit einer VMM können mehrere Betriebssysteme mit entsprechenden Programmen gleichzeitig laufen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Virtual Machine Monitor (VMM) ermöglicht die gleichzeitige Ausführung mehrerer Betriebssysteme auf einer einzigen Hardware durch Virtualisierung.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "RAM bedeutet Read and Write Memory.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "RAM steht für „Random Access Memory“, nicht „Read and Write Memory“. Es handelt sich um einen flüchtigen Speicher, in dem Daten temporär gespeichert werden, während sie von der CPU verarbeitet werden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Systeminformationen eines PCs erhält man über das Office-Programm.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Systeminformationen eines PCs erhält man nicht über ein Office-Programm, sondern über spezielle Systemtools oder das BIOS/UEFI.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Die Geschwindigkeit des RAM wird in MT/s gemessen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Geschwindigkeit des RAM wird in Megatransfers pro Sekunde (MT/s) gemessen. Dieser Wert gibt an, wie viele Datenübertragungen pro Sekunde der RAM leisten kann.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "SO-RAM sind für Desktopssysteme.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "SO-DIMM (Small Outline Dual Inline Memory Module) RAM-Module sind für Laptops und kleine Formfaktor-Computer vorgesehen, nicht für Desktop-Systeme.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Derzeit ist das DDR4 das RAM mit dem höchsten Energieverbrauch.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "DDR4-RAM ist energieeffizienter als frühere Generationen. DDR5-RAM ist inzwischen die neuere Generation, die höhere Leistung bei vergleichbarem oder sogar geringerem Energieverbrauch bietet.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Mit DDR3 können 32 GB erreicht werden.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "DDR3-RAM-Module können in Kapazitäten bis zu 32 GB erhältlich sein, abhängig von der Modulgröße und dem Speicherbedarf des Systems.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "DDR3 gibt es nur in 2-GB-, 4-GB- und 8-GB-Riegeln.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "DDR3-RAM gibt es in verschiedenen Größen, einschließlich 1 GB, 2 GB, 4 GB, 8 GB und 16 GB, abhängig vom Hersteller und Einsatzzweck.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "SSDs sind magnetische Flashspeicher.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "SSDs (Solid State Drives) basieren nicht auf magnetischer Speichertechnologie. Sie verwenden stattdessen Flash-Speicherzellen zur Speicherung von Daten, im Gegensatz zu herkömmlichen Festplatten, die magnetische Scheiben verwenden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Latenz bedeutet Reaktionsgeschwindigkeit (des Speichers).",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Latenz bezeichnet die Verzögerungszeit, die der Speicher benötigt, um auf einen Befehl zu reagieren. Niedrigere Latenzen bedeuten schnellere Reaktionszeiten.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "PCIe-Steckplätze sind für RAM-Karten und RAM-Riegel zu verwenden.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "PCIe-Steckplätze (Peripheral Component Interconnect Express) sind nicht für RAM-Karten oder RAM-Riegel gedacht. Sie dienen zum Anschluss von Erweiterungskarten wie Grafikkarten, Netzwerkkarten oder SSDs. RAM wird in spezielle RAM-Steckplätze eingesetzt.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Bei DIMMs ist beim Einbau auf die Einkerbungen zu achten.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "DIMMs (Dual Inline Memory Modules) haben Einkerbungen, die sicherstellen, dass das Modul korrekt in den Steckplatz eingesetzt wird. Es ist wichtig, darauf zu achten, dass das Modul richtig ausgerichtet ist, um Schäden zu vermeiden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "SATA-Anschlüsse sind für Festplatten vorgesehen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "SATA-Anschlüsse (Serial ATA) werden hauptsächlich für den Anschluss von Festplatten, SSDs und optischen Laufwerken verwendet.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Je mehr Lanes, desto geringer ist die Datenrate/s.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Im Gegenteil, je mehr Lanes ein PCIe-Slot hat, desto höher ist die Datenübertragungsrate. Lanes sind Datenpfade, über die Informationen parallel übertragen werden, sodass mehr Lanes eine höhere Gesamtgeschwindigkeit ermöglichen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Der M.2-Port löst den SATA-Port ab.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "M.2-Ports können SATA-Ports ersetzen, da sie sowohl SATA- als auch NVMe-SSDs unterstützen. NVMe-SSDs über den M.2-Port bieten dabei deutlich höhere Geschwindigkeiten als herkömmliche SATA-SSDs.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Die Datentransferrate wird in GB/s gemessen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Laut dem Buch wird die Datentransferrate in Gbit/s (Gigabit pro Sekunde) gemessen und nicht in GB/s (Gigabyte pro Sekunde). Die Datenrate wird hingegen in GB/s gemessen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "USB-Anschlüsse gibt es bis zur Spezifikation 2.0.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "USB-Anschlüsse gibt es bis zu höheren Spezifikationen, einschließlich USB 3.0, 3.1, 3.2 und sogar USB4. Diese bieten im Vergleich zu USB 2.0 wesentlich höhere Übertragungsgeschwindigkeiten.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Die SSD ist magnetisch, die HHD ein Flash-Speicher.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Eine SSD ist ein Flash-Speicher, während eine HDD auf magnetischer Technologie basiert.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Latenzzeit und Umdrehungsgeschwindigkeit haben bei SSD keinen Einfluss auf die Datenübertragungsrate.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Bei SSDs gibt es keine Umdrehungsgeschwindigkeit, und die Latenzzeiten sind aufgrund der Technologie deutlich geringer und haben somit keinen Einfluss auf die Datenübertragungsrate.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Es gibt PCI-Steckplätze mit einer Datenrate von theoretisch ca. 8 GByte/s.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Tabelle auf Seite 161 zeigt, dass PCIe x16 der Version 3.0 eine Datenrate von 16 GByte/s erreicht, und PCIe x8 entsprechend 8 GByte/s.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "NAND-Technologie bezieht sich auf SSD, QLC speichert jeweils 4 Bits.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "QLC (Quad-Level Cell) speichert tatsächlich 4 Bits pro Zelle.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "NAS-Systeme sind Festplattensysteme, die als Fileserver arbeiten.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "NAS-Systeme dienen dazu, Speicherplatz in einem Netzwerk bereitzustellen, ähnlich wie ein Fileserver.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Die Standardgröße ist derzeit 19 Zoll. (Monitor)",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Standardgröße für Monitore liegt heutzutage eher bei 24 oder 27 Zoll, nicht bei 19 Zoll.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Curved Monitore sind heute günstig zu kaufen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Curved Monitore sind mittlerweile zu erschwinglichen Preisen erhältlich, vor allem im Vergleich zu den früheren Preisen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Monitore mit TN-Panel sind preisgünstig mit schlechterem Blickwinkel.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "TN-Panels sind in der Regel günstiger, bieten jedoch schlechtere Blickwinkel im Vergleich zu IPS- oder VA-Panels.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Monitore mit IPS-Panel sind teurer, aber besser im Bild und im Blickwinkel.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "IPS-Panels sind in der Regel teurer, bieten aber eine bessere Bildqualität und deutlich bessere Blickwinkel im Vergleich zu TN-Panels. Daher ist die Aussage korrekt.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Eine Reaktionszeit von 8 ms ist sehr gut. (Monitor)",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Eine Reaktionszeit von 8 ms ist für viele Anwendungen ausreichend, aber für Gaming und andere Anwendungen, bei denen schnelle Bildwechsel wichtig sind, sind schnellere Reaktionszeiten von 1-5 ms besser.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Um auf Energie zu achten, ist auf die Label TCO, Energy Star und das TN-Panel zu achten.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Um Energieeffizienz zu gewährleisten, sollte man auf entsprechende Labels wie TCO und Energy Star achten. TN-Panels sind in der Regel energieeffizienter als IPS- oder VA-Panels, was hier relevant ist.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Ein Industriebetrieb ist ein interner Kunde eines Handelsbetriebs.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Industriebetrieb ist ein externer Kunde für einen Handelsbetrieb, da es sich um verschiedene Unternehmen handelt.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "„Schläferkunden“ sind aus der Kundendatei zu entfernen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Schläferkunden, also inaktive Kunden, sollten nicht entfernt, sondern reaktiviert oder mit gezielten Marketingmaßnahmen wieder angesprochen werden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Allen Kunden sollte gleich viel Zeit gewidmet werden.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Unterschiedliche Kunden haben unterschiedlichen Wert für das Unternehmen, daher sollte die Zeit entsprechend priorisiert werden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Der Verlust eines A-Kunden kann ein Unternehmen in wirtschaftliche Schwierigkeiten bringen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "A-Kunden sind oft für einen Großteil des Umsatzes verantwortlich, daher kann der Verlust eines solchen Kunden gravierende Auswirkungen haben.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Neukunden sollte man immer skeptisch begegnen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Neukunden sollten positiv aufgenommen werden, um eine gute Kundenbeziehung aufzubauen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "In C-Kunden sollte man viel Zeit investieren, da sie i.d.R. sehr freundlich sind.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "C-Kunden sind zwar oft freundlich, aber aus wirtschaftlicher Sicht weniger relevant, daher sollte hier nicht unverhältnismäßig viel Zeit investiert werden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "B-Kunden können viel Potenzial haben und werden daher besonders aufmerksam beraten.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "B-Kunden haben ein hohes Wachstumspotenzial und sollten daher gezielt betreut werden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "ABC-Kunden sollte man unterschiedlich freundlich beraten.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Alle Kunden sollten freundlich behandelt werden, unabhängig von ihrer Kategorisierung.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Das Pflichtenheft kommt vom Kunden.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das Lastenheft kommt vom Kunden, während das Pflichtenheft vom Auftragnehmer erstellt wird.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Das Lastenheft beschreibt alle Anforderungen sehr genau.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das Lastenheft beschreibt die Anforderungen allgemein und aus der Sicht des Auftraggebers. Die genaue Spezifikation und die detaillierten Anforderungen werden im Pflichtenheft beschrieben.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Das Lastenheft beschreibt das Was und Womit.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das Lastenheft beschreibt das 'Was' (was benötigt wird) und 'Wofür' (zu welchem Zweck). Das 'Womit' (wie es umgesetzt wird) wird im Pflichtenheft beschrieben.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Das Feinkonzept gehört zum Lastenheft.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das Feinkonzept gehört typischerweise zum Pflichtenheft, da es die detaillierte technische Umsetzung beschreibt.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Ziele sollen möglichst „SMART“ formuliert werden.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ziele im Lasten- und Pflichtenheft sollten „SMART“ (Spezifisch, Messbar, Akzeptiert, Realistisch, Terminiert) formuliert werden, um die klare Erfüllung und Überprüfung zu gewährleisten.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Lieferung eines PCs mit 4 GB RAM statt mit 16 GB RAM. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "2", // Sachmangel: Qualität/Art
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Qualität/Art, da die Spezifikation des gelieferten Produkts nicht der Bestellung entspricht.",
      point: "20",
    },
    {
      question:
        "Lieferung eines PCs ohne Betriebssystem, obwohl bestellt. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "2", // Sachmangel: Qualität/Art
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Qualität/Art, da das bestellte Betriebssystem fehlt.",
      point: "20",
    },
    {
      question:
        "Lieferung eines Monitors mit sehr vielen Fehlpixeln, dem Verkäufer bekannt. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "2", // Sachmangel: Qualität/Art
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Qualität/Art, da der Monitor nicht den Qualitätsanforderungen entspricht.",
      point: "20",
    },
    {
      question:
        "Lieferung von 20 Mäusen statt wie bestellt 24 Stück. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "3", // Sachmangel: Quantität
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Quantität, da weniger Mäuse geliefert wurden als bestellt.",
      point: "20",
    },
    {
      question:
        "Lieferung von Software ohne Bedienungsanleitung auf Deutsch, auf Englisch enthalten. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "2", // Sachmangel: Qualität/Art
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Qualität/Art, da die Bedienungsanleitung nicht in der gewünschten Sprache geliefert wurde.",
      point: "20",
    },
    {
      question:
        "Lieferung von Druckern ohne Zubehör. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "2", // Sachmangel: Qualität/Art
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Qualität/Art, da das notwendige Zubehör für die Drucker fehlt.",
      point: "20",
    },
    {
      question:
        "Lieferung eines PCs statt mit 4 MHz CPU mit 1,4 MHz (Ryto1 statt Ryto4). Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "2", // Sachmangel: Qualität/Art
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Qualität/Art, da die CPU des PCs langsamer ist als bestellt.",
      point: "20",
    },
    {
      question:
        "Softwarelizenz zur betriebsweiten Nutzung bestellt, jedoch nur Lizenz mit Einzelnutzung. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "1", // Rechtsmangel
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Rechtsmangel, da die bestellte Lizenz zur betriebsweiten Nutzung nicht geliefert wurde.",
      point: "20",
    },
    {
      question:
        "Notebook-Lieferung als Convertible bestellt, Tastaturschnittstelle Standard. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "2", // Sachmangel: Qualität/Art
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Qualität/Art, da das Notebook nicht wie bestellt als Convertible geliefert wurde.",
      point: "20",
    },
    {
      question:
        "PC-Lieferung mit sehr lautem Lüfter, obwohl leise bestellt. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "2", // Sachmangel: Qualität/Art
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Qualität/Art, da der Lüfter des PCs lauter ist als bestellt.",
      point: "20",
    },
    {
      question:
        "PC-Lieferung mit weniger Schnittstellen als gefordert. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "2", // Sachmangel: Qualität/Art
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Qualität/Art, da der PC weniger Schnittstellen hat als gefordert.",
      point: "20",
    },
    {
      question:
        "PC-Lieferung nur Office-Test-Version, obwohl Dauerlizenz bestellt. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "1", // Rechtsmangel
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Rechtsmangel, da die Dauerlizenz nicht geliefert wurde.",
      point: "20",
    },
    {
      question:
        "Drucker erhält in der Erstlieferung nur Toner für 10 Druckseiten. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "4", // Kein Mangel
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es liegt kein Mangel vor, da es sich um eine übliche Erstlieferung handelt, die häufig eine geringere Menge an Verbrauchsmaterialien enthält.",
      point: "20",
    },
    {
      question:
        "Karton bei Lieferung beschädigt, sonst keine feststellbaren Schäden. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "4", // Kein Mangel
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es liegt kein Mangel vor, da nur der Karton beschädigt ist und keine weiteren Schäden feststellbar sind.",
      point: "20",
    },
    {
      question:
        "Es wurde eine genau bezeichnete Grafikkarte bestellt, jedoch eine andere, bessere eingebaut. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "2", // Sachmangel: Qualität/Art
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Sachmangel bezüglich der Qualität/Art, da eine andere Grafikkarte eingebaut wurde, auch wenn sie besser ist.",
      point: "20",
    },
    {
      question:
        "Es wurde eine Garantieerweiterung auf 48 Monate vereinbart, jedoch nur gesetzliche Gewährleistung bescheinigt. Um welche Mängelart handelt es sich hierbei?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Rechtsmangel",
        "Sachmangel: Qualität/Art",
        "Sachmangel: Quantität",
        "Kein Mangel",
      ],
      correctAnswer: "1", // Rechtsmangel
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Es handelt sich um einen Rechtsmangel, da die vereinbarte Garantieerweiterung nicht bescheinigt wurde.",
      point: "20",
    },
    {
      question:
        "Bei einem zweiseitigem Handelskauf hat man als Kunde immer eine Garantie.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2", // Falsch
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Eine Garantie ist nicht immer automatisch gegeben, sie muss explizit vereinbart werden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Bei einem einseitigem Handelskauf gilt die gesetzliche Gewährleistung.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1", // Richtig
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die gesetzliche Gewährleistung gilt bei einem einseitigen Handelskauf.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Wenn man bei einer Lieferung einen Mangel feststellt, kann man immer sofort sein Geld zurückverlangen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2", // Falsch
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Man hat nicht immer sofort das Recht auf Rückzahlung, erst muss eine Nacherfüllung verlangt werden.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Ein Rechtsgeschäft von einem 17jährigen ist prinzipiell schwebend unwirksam.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1", // Richtig
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ein Rechtsgeschäft von einem Minderjährigen ist schwebend unwirksam, bis die Eltern zustimmen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Bei einer empfangsbedürftigen Willenserklärung muss der Empfänger die Willenserklärung auch tatsächlich persönlich erhalten haben.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2", // Falsch
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Es reicht aus, dass die Willenserklärung in den Machtbereich des Empfängers gelangt.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Beim Piezo-Druckverfahren werden winzige Tintentropfen mithilfe eines Heizelements erzeugt, erhitzt und dann explosionsartig aus der Düse gepresst.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2", // Falsch
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Beim Piezo-Druckverfahren wird kein Heizelement verwendet; stattdessen wird ein Kristall durch elektrische Spannung verformt, um Tinte aus der Düse zu pressen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Der Verlust eines A-Kunden stellt für ein Unternehmen in der Regel kein Problem dar, da diese Kunden eher unbedeutend sind.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2", // Falsch
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "A-Kunden sind in der Regel besonders wichtige Kunden für ein Unternehmen, daher stellt ihr Verlust meist ein großes Problem dar.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Der „Kritische Pfad“ in einem Netzplan beschreibt die Handlungsschritte, die besonders schwierig/kompliziert sind.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2", // Falsch
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der „Kritische Pfad“ beschreibt die Abfolge von Vorgängen, die keine zeitlichen Puffer haben. Er zeigt, welche Schritte am längsten dauern und den Projektabschluss bestimmen.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Das Lastenheft wird vom Auftraggeber erstellt und beschreibt ergebnisorientiert das Was und Wofür.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1", // Richtig
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das Lastenheft wird tatsächlich vom Auftraggeber erstellt und beschreibt, was erreicht werden soll und zu welchem Zweck.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Das Pflichtenheft wird vom Auftragnehmer erstellt und beschreibt genau und detailliert das Wie und Womit.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1", // Richtig
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das Pflichtenheft beschreibt detailliert, wie die Anforderungen des Lastenhefts technisch umgesetzt werden sollen, und wird vom Auftragnehmer erstellt.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question: "Das Feinkonzept gehört zum Lastenheft.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2", // Falsch
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Das Feinkonzept gehört zum Pflichtenheft, nicht zum Lastenheft.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "IT-Aufrüstung, Recycling und Remarketing sind heute out, da Hardware sehr billig und der personelle Aufwand zu hoch sind.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2", // Falsch
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "IT-Aufrüstung, Recycling und Remarketing sind nach wie vor relevant, da sie Ressourcen schonen und ökonomisch sinnvoll sein können.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Bei Investitionsentscheidungen zählen nur die einmaligen Anschaffungskosten.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "2", // Falsch
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Bei Investitionsentscheidungen spielen auch laufende Kosten, Abschreibungen und mögliche Erträge eine Rolle.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
    {
      question:
        "Arbeitgeber sind in Deutschland zur Durchführung einer Gefährdungsbeurteilung verpflichtet, um vorhandene Gefährdungen klar zu identifizieren und entsprechende Schutzmaßnahmen zu treffen.",
      answers: ["Richtig", "Falsch"],
      correctAnswer: "1", // Richtig
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Arbeitgeber sind gesetzlich verpflichtet, Gefährdungsbeurteilungen durchzuführen, um die Sicherheit und Gesundheit ihrer Arbeitnehmer zu gewährleisten.",
      point: "20",
      questionType: "text",
      answerSelectionType: "single",
    },
  ],
};
