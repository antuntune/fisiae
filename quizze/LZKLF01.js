export const quiz = {
  quizTitle: "LZK Fragen",
  quizSynopsis:
    "Dieses Quiz testet dein Wissen über Arbeitsrecht, Unternehmensorganisation und weitere verwandte Themen. Beantworte die Fragen, um zu sehen, wie gut du die Konzepte verstanden hast.",
  nrOfQuestions: "46",
  questions: [
    {
      question: "Welche Aussage ist falsch?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Die Kündigungsfrist beträgt immer mindestens vier Wochen.",
        "Für Mitarbeiter in der Probezeit gibt es keinen Mindestlohn.",
        "Der Mindesturlaub bei einer Fünf-Tage-Woche beträgt 20 Arbeitstage.",
        "Mitarbeitern, die sechs Wochen dem Betrieb angehören, steht bei unverschuldeter Arbeitsunfähigkeit eine Fortzahlung des Arbeitsentgelts bis zu sechs Wochen zu.",
        "Die Auszubildenden haben nach bestandener Probezeit einen besonderen Kündigungsschutz.",
        "Mit Mitarbeitern, die mehr als sechs Wochen arbeitsunfähig sind, hat der Betrieb ein betriebliches Eingliederungsmanagement (BEM) durchzuführen.",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "In Deutschland gibt es auch während der Probezeit einen Mindestlohn.",
      point: "20",
    },
    {
      question:
        "Die IT AG schließt mit der Bewerberin Frau Nikola einen unbefristeten Arbeitsvertrag. Die IT AG ist an einen Tarifvertrag gebunden. Welche der folgenden Aussagen zum unbefristeten Arbeitsvertrag ist zutreffend?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Es darf keine Probezeit vereinbart werden.",
        "Es dürfen mehr Urlaubstage vereinbart werden als im Tarifvertrag festgelegt sind.",
        "Es darf keine Teilzeitbeschäftigung vereinbart werden.",
        "Es darf von keinem Vertragspartner ordentlich gekündigt werden.",
        "Es darf für die Einarbeitungsphase ein Entgelt vereinbart werden, das unter dem Tarifentgelt liegt.",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Tarifverträge setzen Mindeststandards, aber es ist erlaubt, bessere Bedingungen, wie mehr Urlaubstage, zu vereinbaren.",
      point: "20",
    },
    {
      question:
        "Bei welchem der folgenden Bestandteile Ihres Arbeitsvertrags ist der Arbeitgeber an kollektives Arbeitsrecht gebunden?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Das monatliche Bruttogehalt beträgt 3.500 EUR.",
        "Die Angestellte arbeitet als Sachbearbeiterin im Kundenservice.",
        "Die reguläre wöchentliche Arbeitszeit beträgt gemäß Betriebsvereinbarung 38 Stunden.",
        "Die Firma gewährt einen monatlichen Fahrtkostenzuschuss von 200 EUR.",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Kollektives Arbeitsrecht beeinflusst Regelungen wie die Arbeitszeit, die durch Betriebsvereinbarungen festgelegt werden.",
      point: "20",
    },
    {
      question:
        "Welche der folgenden Formulierungen in einer Stellenanzeige verstößt gegen das Allgemeine Gleichbehandlungsgesetz (AGG)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Sie verfügen über gute Kenntnisse in ITIL.",
        "Sie beherrschen die deutsche Sprache verhandlungssicher in Wort und Schrift.",
        "Sie sind mobil und bereit, auch längere Reisen ins Ausland zu unternehmen.",
        "Sie passen in unser junges dynamisches Team, wenn Baby-Pause und Midlife Crisis für Sie noch in weiter Ferne liegen.",
        "Sie sind an flexible Arbeitszeiten gewöhnt und können gelegentlich abends länger arbeiten.",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Formulierungen, die sich auf das Alter beziehen, verstoßen gegen das AGG, das Diskriminierung aufgrund von Alter verbietet.",
      point: "20",
    },
    {
      question: "Welche Aussage ist falsch?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Arbeitgeberverbände und Gewerkschaften vertreten ihre Mitglieder in sozial- und arbeitsrechtlichen Belangen.",
        "Der Betriebsrat hat laut Betriebsverfassungsgesetz ein Mitbestimmungsrecht bei der Festlegung von Beginn und Ende der täglichen Arbeitszeit, des Urlaubsplans oder der Einführung eines Personalbeurteilungssystems.",
        "Die zuständige Gewerkschaft und der Arbeitgeberverband verhandeln einen Flächentarifvertrag.",
        "Der Betriebsrat hat kein Anhörungsrecht bei der Kündigung eines Arbeitnehmers.",
        "Arbeitgeber und Betriebsrat haben nach dem Betriebsverfassungsgesetz über strittige Fragen mit dem ernsten Willen zur Einigung zu verhandeln.",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Der Betriebsrat hat ein Anhörungsrecht bei der Kündigung eines Arbeitnehmers, das bedeutet, er muss vor der Kündigung angehört werden.",
      point: "20",
    },
    {
      question: "Welche Aussage ist falsch?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Urlaub und Kündigungsfristen werden im Manteltarifvertrag geregelt.",
        "Betriebsratsmitglieder sind während der Amtszeit und ein Jahr danach nicht kündbar.",
        "Eine Kündigung eines Mitarbeiters ohne Anhörung des Betriebsrates ist unwirksam.",
        "Die regelmäßige Amtszeit eines Betriebsrats beträgt für eine Wahlperiode vier Jahre.",
        "Betriebsvereinbarungen werden dann im Betrieb getroffen, wenn kein Betriebsrat eingerichtet ist.",
      ],
      correctAnswer: "5",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Betriebsvereinbarungen werden in der Regel dann getroffen, wenn ein Betriebsrat existiert. Ohne Betriebsrat gibt es keine Betriebsvereinbarungen.",
      point: "20",
    },
    {
      question: "Welche Aufgaben und Rechte hat der Betriebsrat nicht?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Der Betriebsrat darf Betriebsversammlungen durchführen.",
        "Der Betriebsrat bestimmt mit bei der Festlegung der Arbeitsvergütung in den Arbeitsverträgen.",
        "Der Betriebsrat bestimmt mit bei der Festsetzung von Akkord- und Prämiensätzen.",
        "Der Betriebsrat bestimmt mit bei der Festlegung von Beginn und Ende der täglichen Arbeitszeit.",
        "Der Betriebsrat fördert die Durchsetzung der Gleichstellung von Frauen und Männern.",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Der Betriebsrat hat kein Mitbestimmungsrecht bei der Festlegung der Arbeitsvergütung in den Arbeitsverträgen, dies ist Teil der individuellen Vertragsgestaltung.",
      point: "20",
    },
    {
      question:
        "In einem Tarifkonflikt legen die organisierten Arbeitnehmer der IT AG nach Aufruf der zuständigen Gewerkschaft für eine Stunde die Arbeit nieder. Zu welcher der folgenden Arbeitskampfmaßnahmen hat die Gewerkschaft aufgerufen?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Generalstreik",
        "Schwerpunktstreik",
        "Wilder Streik",
        "Warnstreik",
        "Boykott",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Ein Warnstreik ist eine kurzfristige Arbeitsniederlegung, um auf Tarifkonflikte aufmerksam zu machen.",
      point: "20",
    },
    {
      question:
        "Welche der folgenden Aussagen können Sie ohne zusätzliche Informationen treffen? Im III. Quartal …",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "wurden die Werbemaßnahmen erhöht.",
        "wurde das Angebot vergrößert.",
        "wurde kein Marktgleichgewichtspreis erreicht.",
        "sinkt der Marktpreis.",
        "wirkte sich die höhere Nachfrage nach einem Komplementärprodukt aus.",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Ohne weitere Informationen ist es nicht möglich, genauere Aussagen zu Werbemaßnahmen, Angebot oder Marktpreisen zu treffen.",
      point: "20",
    },
    {
      question:
        "Welches der folgenden Beispielprojekte ist am besten geeignet, um als Pilotprojekt zu beginnen?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Ein neues ERP-System soll in allen Unternehmensbereichen implementiert werden.",
        "Eine neue Kunden-Management-Software soll in einem bestimmten Geschäftsbereich getestet werden.",
        "Ein neues Produkt wird international eingeführt.",
        "Ein großes neues Bürogebäude wird errichtet.",
        "Ein neues Logistiksystem wird eingeführt, um die Lagerbestände zu optimieren.",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Pilotprojekte sind ideal, wenn sie in einem begrenzten Bereich getestet werden, bevor sie auf andere Bereiche ausgeweitet werden.",
      point: "20",
    },
    {
      question:
        "Welches der folgenden Tools ist am besten geeignet, um ein Projekt zu planen und zu überwachen?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Eine Excel-Tabelle",
        "Ein Dokument mit Projektzielen",
        "Ein detaillierter Projektplan mit Gantt-Diagramm",
        "Ein Kalender für Meilensteine",
        "Ein E-Mail-Archiv",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Ein detaillierter Projektplan mit Gantt-Diagramm ist am besten geeignet, um Projekte umfassend zu planen und zu überwachen.",
      point: "20",
    },
    {
      question:
        "Welches der folgenden Vorgehensmodelle ist bei der Softwareentwicklung am weitesten verbreitet?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Wasserfallmodell",
        "Design Thinking",
        "Scrum",
        "Lean Startup",
        "Prototyping",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Das Wasserfallmodell ist eines der traditionellsten und weit verbreiteten Vorgehensmodelle in der Softwareentwicklung.",
      point: "20",
    },
    {
      question:
        "Wie nennt man das Dokument, in dem die Ziele und Anforderungen eines Projekts festgehalten werden?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Projektplan",
        "Pflichtenheft",
        "Lastenheft",
        "Risikomanagementplan",
        "Projektabschlussbericht",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Das Lastenheft beschreibt die Ziele und Anforderungen eines Projekts aus der Sicht des Auftraggebers.",
      point: "20",
    },
    {
      question:
        "Welcher der folgenden Punkte gehört nicht zu den Aufgaben des Projektleiters?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Koordination der Projektaufgaben",
        "Kommunikation mit den Stakeholdern",
        "Erstellung des Projektbudgets",
        "Durchführung von Fachaufgaben im Projekt",
        "Überwachung des Projektfortschritts",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Der Projektleiter ist in der Regel nicht für die Durchführung der Fachaufgaben verantwortlich, sondern für die Koordination und Überwachung des Projekts.",
      point: "20",
    },
    {
      question:
        "Wie nennt man die Technik zur Erfassung und Analyse der Anforderungen eines Projekts?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Anforderungsanalyse",
        "Risikomanagement",
        "Qualitätsmanagement",
        "Projektcontrolling",
        "Change Management",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Die Anforderungsanalyse dient der Erfassung und Analyse der Anforderungen an ein Projekt.",
      point: "20",
    },
    {
      question:
        "Wie nennt man die Methode, bei der in regelmäßigen Abständen eine Bewertung des Projektfortschritts erfolgt?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Projektmonitoring",
        "Projektplanung",
        "Risikomanagement",
        "Projektabschluss",
        "Projektkontrolle",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Projektmonitoring bezieht sich auf die regelmäßige Überwachung und Bewertung des Projektfortschritts.",
      point: "20",
    },
    {
      question:
        "Welcher der folgenden Punkte gehört nicht zu den typischen Merkmalen eines Projekts?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Einmaligkeit",
        "Festgelegte Zeitdauer",
        "Ressourcenzuweisung",
        "Reproduzierbarkeit",
        "Zielorientierung",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Reproduzierbarkeit ist kein typisches Merkmal eines Projekts, da Projekte in der Regel einzigartig sind.",
      point: "20",
    },
    {
      question:
        "Welches der folgenden Dokumente beschreibt die detaillierte Planung und Durchführung eines Projekts?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Projektplan",
        "Projektauftrag",
        "Pflichtenheft",
        "Lastenheft",
        "Projektdokumentation",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Der Projektplan enthält die detaillierte Planung und Durchführung eines Projekts.",
      point: "20",
    },
    {
      question:
        "Welches Vorgehensmodell in der Softwareentwicklung legt großen Wert auf ständige Rückkopplung und iterative Verbesserung?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Wasserfallmodell",
        "Scrum",
        "V-Modell",
        "Rational Unified Process (RUP)",
        "Prototyping",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Scrum ist ein agiles Vorgehensmodell, das iterative Entwicklung und regelmäßige Rückkopplung betont.",
      point: "20",
    },
    {
      question:
        "Welches der folgenden Elemente gehört nicht zu den typischen Aufgaben eines Projektmanagers?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Planung der Projektziele",
        "Steuerung des Projektteams",
        "Erstellung der Projektkostenrechnung",
        "Durchführung der technischen Aufgaben",
        "Überwachung des Projektfortschritts",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Der Projektmanager ist in der Regel für die Planung, Steuerung und Überwachung des Projekts zuständig, nicht für die technische Durchführung der Aufgaben.",
      point: "20",
    },
    {
      question:
        "Wie nennt man die Methode, bei der eine Analyse des Projektumfelds durchgeführt wird?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Stakeholder-Analyse",
        "SWOT-Analyse",
        "Risikomanagement",
        "Kundenbefragung",
        "Projektreview",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Die Stakeholder-Analyse dient der Untersuchung und Bewertung der Interessen und Einflüsse der Stakeholder auf das Projekt.",
      point: "20",
    },
    {
      question:
        "Welches Dokument beschreibt die spezifischen Anforderungen eines Kunden an ein Produkt oder eine Dienstleistung?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Lastenheft",
        "Pflichtenheft",
        "Projektauftrag",
        "Projektplan",
        "Projektdokumentation",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Das Lastenheft beschreibt die Anforderungen des Kunden an das Produkt oder die Dienstleistung.",
      point: "20",
    },
    {
      question:
        "Welches Dokument enthält detaillierte technische Anforderungen und Umsetzungsvorgaben für ein Projekt?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Lastenheft",
        "Pflichtenheft",
        "Projektplan",
        "Projektdokumentation",
        "Risikomanagementplan",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Das Pflichtenheft enthält detaillierte technische Anforderungen und Vorgaben für die Umsetzung eines Projekts.",
      point: "20",
    },
    {
      question:
        "Welcher der folgenden Begriffe beschreibt eine Methode zur Risikoanalyse in Projekten?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "SWOT-Analyse",
        "Kundenbefragung",
        "Stakeholder-Analyse",
        "Projektmonitoring",
        "Fehlermöglichkeits- und Einflussanalyse (FMEA)",
      ],
      correctAnswer: "5",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Die Fehlermöglichkeits- und Einflussanalyse (FMEA) ist eine Methode zur Risikoanalyse, die potenzielle Fehler und deren Auswirkungen bewertet.",
      point: "20",
    },
    {
      question:
        "Welcher der folgenden Begriffe beschreibt eine Methode zur Risikoidentifikation und -bewertung in Projekten?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Fehlermöglichkeits- und Einflussanalyse (FMEA)",
        "Kundenbefragung",
        "SWOT-Analyse",
        "Stakeholder-Analyse",
        "Projektreview",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Die SWOT-Analyse dient der Identifikation und Bewertung von Stärken, Schwächen, Chancen und Risiken eines Projekts.",
      point: "20",
    },
    {
      question:
        "Wie nennt man das Verfahren, bei dem ein Projekt in kleinere Teile gegliedert wird, um die Planung und Kontrolle zu erleichtern?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Work Breakdown Structure (WBS)",
        "Gantt-Diagramm",
        "Projektstrukturplan",
        "Meilensteinplanung",
        "Ressourcenplanung",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Die Work Breakdown Structure (WBS) dient der Gliederung eines Projekts in kleinere, besser handhabbare Teile.",
      point: "20",
    },
    {
      question:
        "Wie nennt man den Prozess, bei dem die Ressourcen eines Projekts geplant und zugewiesen werden?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Ressourcenplanung",
        "Kostenplanung",
        "Projektcontrolling",
        "Aufgabenverteilung",
        "Zeitplanung",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Die Ressourcenplanung umfasst die Planung und Zuweisung der benötigten Ressourcen für ein Projekt.",
      point: "20",
    },
  ],
};
