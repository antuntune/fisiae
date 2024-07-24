export const quiz = {
  quizTitle: "Windows CMD & Remote Lab Quiz",
  quizSynopsis:
    "Testen Sie Ihr Wissen über grundlegende Windows CMD-Befehle, Remote-Lab-Zugriffsverfahren und eine Einführung in Hyper-V. Dieses Quiz behandelt wesentliche Befehle und Konzepte, um Ihnen zu helfen, sich mit diesen Tools vertraut zu machen.",
  nrOfQuestions: "10",
  questions: [
    {
      question:
        "Welcher CMD-Befehl wird verwendet, um alle Dateien und Verzeichnisse im aktuellen Verzeichnis aufzulisten?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["cd", "del", "dir", "copy"],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Befehl `dir` listet alle Dateien und Verzeichnisse im aktuellen Verzeichnis auf.",
      point: "20",
    },
    {
      question:
        "Wie erstellen Sie ein neues Verzeichnis namens 'Praxis' im aktuellen Verzeichnis mit CMD?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["mkdir Praxis", "create Praxis", "new Praxis", "make Praxis"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Befehl `mkdir` wird verwendet, um ein neues Verzeichnis zu erstellen.",
      point: "20",
    },
    {
      question:
        "Welcher Befehl wird verwendet, um die Datei 'beispiel.txt' in CMD zu löschen?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "erase beispiel.txt",
        "remove beispiel.txt",
        "del beispiel.txt",
        "rm beispiel.txt",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Befehl `del` wird verwendet, um Dateien in CMD zu löschen.",
      point: "20",
    },
    {
      question:
        "Wie erstellen Sie eine neue Textdatei namens 'beispiel.txt' in CMD und fügen Text hinzu?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "echo Dies ist eine Beispieldatei. > beispiel.txt",
        "create beispiel.txt 'Dies ist eine Beispieldatei.'",
        "write 'Dies ist eine Beispieldatei.' > beispiel.txt",
        "new beispiel.txt 'Dies ist eine Beispieldatei.'",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Befehl `echo` wird verwendet, um Text in eine Datei zu schreiben. Der `>` Operator überschreibt die Datei oder erstellt sie neu, wenn sie nicht existiert.",
      point: "20",
    },
    {
      question:
        "Welcher Befehl wird verwendet, um zum Verzeichnis 'C:\\umschulung' zu wechseln?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "change C:\\umschulung",
        "cd C:\\umschulung",
        "move C:\\umschulung",
        "goto C:\\umschulung",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Befehl `cd` wird verwendet, um in ein angegebenes Verzeichnis zu wechseln.",
      point: "20",
    },
    {
      question:
        "Wie kopieren Sie die Datei 'beispiel.txt' aus dem Verzeichnis 'Praxis' in das Verzeichnis 'Backup'?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "duplicate Praxis\\beispiel.txt Backup\\beispiel.txt",
        "copy Praxis\\beispiel.txt Backup\\beispiel.txt",
        "move Praxis\\beispiel.txt Backup\\beispiel.txt",
        "transfer Praxis\\beispiel.txt Backup\\beispiel.txt",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Befehl `copy` wird verwendet, um eine Datei von einem Ort zum anderen zu kopieren.",
      point: "20",
    },
    {
      question: "Wie entfernen Sie das Verzeichnis 'Praxis', wenn es leer ist?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "remove Praxis",
        "rmdir Praxis",
        "delete Praxis",
        "erase Praxis",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Befehl `rmdir` wird verwendet, um ein leeres Verzeichnis zu entfernen.",
      point: "20",
    },
    {
      question: "Wie löschen Sie alle Inhalte und das Verzeichnis 'Backup'?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "erase /s Backup",
        "remove /q Backup",
        "delete /s Backup",
        "rmdir /s /q Backup",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Befehl `rmdir /s /q` entfernt ein Verzeichnis und alle darin enthaltenen Dateien ohne Rückfrage.",
      point: "20",
    },
    {
      question:
        "Wie stellen Sie eine Verbindung zum Remote Lab über den Windows-Remote-Desktop her?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Starten Sie den VPN-Client",
        "Geben Sie die IP-Adresse oder den Hostnamen des Remote Lab Computers in das Remote-Desktop-Programm ein",
        "Öffnen Sie die CMD-Anwendung",
        "Verbinden Sie sich mit dem lokalen Netzwerk",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Um eine Verbindung zum Remote Lab herzustellen, geben Sie die IP-Adresse oder den Hostnamen des Remote Lab Computers in die Windows-Remote-Desktop-Anwendung ein.",
      point: "20",
    },
    {
      question: "Wie löschen Sie den Bildschirm der Eingabeaufforderung?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["reset", "cls", "clear", "clean"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Der Befehl `cls` wird verwendet, um den Bildschirm der Eingabeaufforderung zu löschen.",
      point: "20",
    },
    {
      question:
        "Welches der folgenden Schritte gehört zu den Verfahren zur Verbindung mit dem Remote Lab über Remote Desktop?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Dateien im Remote Lab herunterladen",
        "VPN-Verbindung trennen",
        "CMD-Anwendung öffnen",
        "Zertifikat akzeptieren",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Bei der Verbindung zum Remote Lab müssen Sie möglicherweise ein Zertifikat akzeptieren, wenn Sie eine Warnung sehen.",
      point: "20",
    },
    {
      question: "Was ist Hyper-V?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Ein neuer Typ von Netzwerkspeicher",
        "Ein Hypervisor zur Virtualisierung von Computern",
        "Ein Windows-Benutzerkonto",
        "Ein grafisches Design-Tool",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Hyper-V ist ein Hypervisor von Microsoft zur Virtualisierung von Computern.",
      point: "20",
    },
  ],
};
