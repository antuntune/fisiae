export const quiz = {
  quizTitle: "VPN und Verschlüsselung Quiz",
  quizSynopsis:
    "Dieses Quiz testet dein Wissen über Verschlüsselung und VPNs, basierend auf dem bereitgestellten Text. Beantworte die Fragen, um zu sehen, wie gut du die Konzepte verstanden hast.",
  nrOfQuestions: "6",
  questions: [
    {
      question: "Was ist Verschlüsselung (Encryption)?",
      questionType: "text",
      questionPic: "/how-encryption-works.png", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "Das Verbergen deiner Nachrichten in einer speziellen Box, die nur mit einem Schlüssel geöffnet werden kann",
        "Eine Methode, um Nachrichten in Klartext zu versenden",
        "Ein Verfahren, das nur in VPNs verwendet wird",
        "Ein öffentliches Netzwerkprotokoll",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Verschlüsselung ist wie das Verschließen deiner Nachrichten in einer speziellen Box, die nur du und die Person, an die du die Nachricht sendest, öffnen können.",
      point: "20",
    },
    {
      question: "Was ist ein VPN?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Ein Dienst, der eine sichere und private Tunnel für deine Internetverbindung erstellt",
        "Ein spezielles Programm zur Datenverschlüsselung",
        "Ein öffentlich zugängliches Netzwerk",
        "Ein Router, der deine IP-Adresse versteckt",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Ein VPN, oder Virtual Private Network, ist ein Dienst, der einen sicheren und privaten Tunnel für deine Internetverbindung erstellt.",
      point: "20",
    },
    {
      question: "Wie hilft ein VPN beim Zugriff auf Inhalte überall?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Es verschlüsselt deine Daten nur innerhalb deines Landes",
        "Es versteckt deine IP-Adresse und lässt es so aussehen, als ob du von einem anderen Standort surfst",
        "Es blockiert den Zugriff auf internationale Inhalte",
        "Es dient als Firewall",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Durch die Verbindung mit einem VPN-Server in einem anderen Land sieht es so aus, als ob du von dort aus surfst, wodurch du auf die Inhalte zugreifen kannst.",
      point: "20",
    },
    {
      question: "Warum ist ein VPN in öffentlichen WiFi-Netzwerken nützlich?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Es verhindert, dass dein ISP deine Daten sehen kann",
        "Es schützt deine Daten vor neugierigen Augen im selben Netzwerk durch Verschlüsselung",
        "Es erhöht die Geschwindigkeit deines Internets",
        "Es ermöglicht dir den Zugriff auf gesperrte Websites",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "In öffentlichen WiFi-Netzwerken schützt das VPN deine Daten vor neugierigen Augen, da die Verschlüsselung sicherstellt, dass niemand im selben Netzwerk deine Online-Aktivitäten einsehen kann.",
      point: "20",
    },
    {
      question:
        "Warum ist ein VPN notwendig, um auf das GFN Remote-Lab zuzugreifen?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Weil es den Internetzugang beschleunigt",
        "Weil es eine sichere, verschlüsselte Verbindung zum Schulnetzwerk herstellt",
        "Weil es die Schulressourcen entsperrt",
        "Weil es deinen PC schneller macht",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "Ein VPN ist notwendig, um eine sichere, verschlüsselte Verbindung zum Schulnetzwerk herzustellen, damit dein PC sich so verhält, als ob er sich im Schulnetzwerk befindet.",
      point: "20",
    },
    {
      question:
        "Welche der folgenden Aussagen über OpenVPN und kommerzielle VPN-Apps ist korrekt?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "OpenVPN ist ein Open-Source-VPN-Protokoll und Software",
        "Kommerzielle VPN-Apps wie Surfshark sind ideal für den privaten Gebrauch",
        "OpenVPN bietet benutzerfreundliche Apps und einfache Einrichtung",
        "Kommerzielle VPN-Apps bieten oft zusätzliche Funktionen wie Server in vielen Ländern",
      ],
      correctAnswer: [1, 2, 4],
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer: "Falsche Antwort. Bitte versuche es erneut.",
      explanation:
        "OpenVPN ist ein weit verbreitetes Open-Source-VPN-Protokoll, das für seine Sicherheit und Flexibilität bekannt ist. Kommerzielle VPN-Apps bieten benutzerfreundliche Apps und zusätzliche Funktionen wie Server in vielen Ländern.",
      point: "30",
    },
  ],
};
