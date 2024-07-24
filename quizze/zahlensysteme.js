export const quiz = {
  quizTitle: "Binär-, Hexadezimal- und Dezimalzahlen Umrechnung Quiz",
  quizSynopsis:
    "Testen Sie Ihr Wissen zur Umrechnung zwischen Binär-, Hexadezimal- und Dezimalzahlen. Dieses Quiz hilft Ihnen, die Grundlagen der Zahlensysteme zu verstehen und deren Umrechnung zu üben.",
  nrOfQuestions: "10",
  questions: [
    {
      question: "Was ist die Dezimalzahl für die Binärzahl 1010?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["10", "12", "14", "8"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Binärzahl 1010 entspricht der Dezimalzahl 10. Die Berechnung erfolgt durch 1×2^3 + 0×2^2 + 1×2^1 + 0×2^0.",
      point: "20",
    },
    {
      question: "Welche Binärzahl entspricht der Dezimalzahl 15?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["1111", "1001", "1101", "1011"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Dezimalzahl 15 entspricht der Binärzahl 1111. Dies ergibt sich aus der Summe 1×2^3 + 1×2^2 + 1×2^1 + 1×2^0.",
      point: "20",
    },
    {
      question: "Wie lautet die Hexadezimaldarstellung der Dezimalzahl 255?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["FF", "F0", "FE", "F1"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Dezimalzahl 255 entspricht der Hexadezimalzahl FF. Dies ergibt sich aus der Berechnung 15×16^1 + 15×16^0.",
      point: "20",
    },
    {
      question: "Welche Dezimalzahl entspricht der Hexadezimalzahl 1A?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["30", "26", "24", "28"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Hexadezimalzahl 1A entspricht der Dezimalzahl 26. Dies ergibt sich aus 1×16^1 + 10×16^0.",
      point: "20",
    },
    {
      question: "Was ist die Binärzahl für die Hexadezimalzahl 7F?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["1110111", "1100111", "1111000", "1111111"],
      correctAnswer: "4",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Hexadezimalzahl 7F entspricht der Binärzahl 1111111. Dies ergibt sich aus 7×16^1 + 15×16^0.",
      point: "20",
    },
    {
      question: "Welche Hexadezimalzahl entspricht der Binärzahl 11001010?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["BA", "B9", "CA", "C9"],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Binärzahl 11001010 entspricht der Hexadezimalzahl CA. Dies ergibt sich aus der Berechnung 12×16^1 + 10×16^0.",
      point: "20",
    },
    {
      question: "Was ist die Dezimalzahl für die Hexadezimalzahl 3B?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["62", "24", "59", "60"],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Hexadezimalzahl 3B entspricht der Dezimalzahl 59. Dies ergibt sich aus 3×16^1 + 11×16^0.",
      point: "20",
    },
    {
      question: "Wie lautet die Binärzahl für die Dezimalzahl 102?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["1010110", "1110110", "1001101", "1100110"],
      correctAnswer: "4",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Dezimalzahl 102 entspricht der Binärzahl 1100110. Dies ergibt sich aus der Berechnung 1×2^6 + 1×2^5 + 0×2^4 + 0×2^3 + 1×2^2 + 1×2^1 + 0×2^0.",
      point: "20",
    },
    {
      question: "Welche Hexadezimalzahl entspricht der Binärzahl 10011101?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["9D", "9E", "8D", "9F"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Binärzahl 10011101 entspricht der Hexadezimalzahl 9D. Dies ergibt sich aus der Berechnung 9×16^1 + 13×16^0.",
      point: "20",
    },
    {
      question: "Wie lautet die Binärzahl für die Hexadezimalzahl 2E?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["00101110", "00011110", "01011100", "00111001"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Hexadezimalzahl 2E entspricht der Binärzahl 00101110. Dies ergibt sich aus 2×16^1 + 14×16^0.",
      point: "20",
    },
    {
      question: "Welche Dezimalzahl entspricht der Binärzahl 111000?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["56", "62", "60", "64"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht.",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Die Binärzahl 111000 entspricht der Dezimalzahl 56. Dies ergibt sich aus 1×2^5 + 1×2^4 + 1×2^3.",
      point: "20",
    },
  ],
};
