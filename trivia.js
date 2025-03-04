//Preguntas de la trivia
const questions = [
  {
    question: "¿Qué es el diseño web?",
    answers: [
      {
        description: "Una actividad enfocada en la programación de sitios web.",
        value: 0,
      },
      {
        description:
          "Una actividad creativa enfocada en la parte visual de entornos y materiales digitales.",
        value: 1,
      },
      {
        description:
          "Una actividad relacionada con la gestión de contenido web.",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Qué aspecto del diseño web es esencial para la experiencia del usuario?",
    answers: [
      {
        description: "La velocidad de Internet.",
        value: 0,
      },
      {
        description: "La funcionalidad y estética de la interfaz.",
        value: 1,
      },
      {
        description: "La seguridad del sitio web.",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Cuál es el tipo de diseño web que varía en función del dispositivo desde el cual se visualiza?",
    answers: [
      {
        description: "Diseño web responsive.",
        value: 1,
      },
      {
        description: "Diseño web fluido.",
        value: 0,
      },
      {
        description: "Diseño web fijo.",
        value: 0,
      },
    ],
  },
  {
    question: "¿Cuál es el objetivo principal del diseño web?",
    answers: [
      {
        description: "Mejorar la velocidad de carga de las páginas.",
        value: 0,
      },
      {
        description: "Elementos de hardware.",
        value: 0,
      },
      {
        description:
          "Crear una interfaz atractiva y funcional para el usuario.",
        value: 1,
      },
    ],
  },
  {
    question: "¿Qué importancia tiene el diseño web en el SEO?",
    answers: [
      {
        description:
          "Es fundamental, ya que puede determinar la calidad de la web a ojos de los motores de búsqueda.",
        value: 1,
      },
      {
        description: "Ninguna, el SEO solo depende del contenido.",
        value: 0,
      },
      {
        description: "Solo afecta la velocidad de carga de la página.",
        value: 0,
      },
    ],
  },
];

//Codigo de la trivia

//contador de respuestas correctas e indice de pregunta
let correctAnswers = 0;
let indexQuestion = 0;

//Evento para iniciar la trivia
const start = document.getElementById("start-button");
start.onclick = () => {
  showTrivia();
  trivia();
};

//Funcion para mostrar la trivia y ocultar el contenido principal (Blog)
const showTrivia = () => {
  const main = document.getElementById("main-content");
  main.classList.add("hidden");
  const triviaContent = document.getElementById("trivia-content");
  triviaContent.classList.remove("hidden");
};

//Funcion para ocultar trivia y mostrar corrección
const showCorrection = () => {
  let correctionContainer = document.getElementById("correction-container");
  let trivia = document.getElementById("trivia");
  let buttons = document.getElementById("trivia-buttons");

  trivia.classList.add("hidden");
  buttons.classList.add("hidden");
  correctionContainer.classList.remove("hidden");
};
//Funcion para ocultar corrección y mostrar trivia
const hiddenCorrection = () => {
  let correctionContainer = document.getElementById("correction-container");
  let trivia = document.getElementById("trivia");
  let buttons = document.getElementById("trivia-buttons");

  correctionContainer.classList.add("hidden");
  trivia.classList.remove("hidden");
  buttons.classList.remove("hidden");
}

//Funcion para mostrar las preguntas y respuestas
const trivia = () => {
  let questionTitle = document.getElementById("question-title");
  let answers = document.querySelectorAll(".answer");
  let questionNumber = document.getElementById("question-number");
  let correction = document.getElementById("correction");
  let emoji = document.getElementById("emoji");

  questionNumber.innerText = `Pregunta ${indexQuestion + 1} de ${
    questions.length
  }`;

  let question = questions[indexQuestion];
  questionTitle.innerText = question.question;

  answers.forEach((answer, index) => {
    answer.innerText = question.answers[index].description;
    answer.onclick = () => {
      if (question.answers[index].value === 1) {
        correctAnswers += 1;
        correction.innerText = "¡Correcto!";
        emoji.innerText = "🎉";
      } else {
        correction.innerText = "¡Incorrecto!";
        emoji.innerText = "😢";
      }
      showCorrection();
      setTimeout(hiddenCorrection, 1500);
      indexQuestion++;
      if (indexQuestion < questions.length) {
        trivia();
      } else {
        setTimeout(showResults, 1500);
      }
    };
  });
};

//Funcion para mostrar los resultados
const showResults = () => {
  const trivia = document.getElementById("trivia");
  trivia.classList.add("hidden");
  const results = document.getElementById("results");
  results.classList.remove("hidden");

  let score = document.getElementById("score");
  score.innerText = `${correctAnswers}/${questions.length}`;
};

//Evento para reiniciar la trivia
const restart = document.getElementById("restart");
restart.addEventListener("click", () => {
  if (indexQuestion === questions.length) {
    const results = document.getElementById("results");
    results.classList.add("hidden");
    const trivia = document.getElementById("trivia");
    trivia.classList.remove("hidden");
  }
  correctAnswers = 0;
  indexQuestion = 0;
  trivia();
});

//Evento para volver al inicio
const back = document.getElementById("home");
back.addEventListener("click", () => {
  if (indexQuestion === questions.length) {
    const results = document.getElementById("results");
    results.classList.add("hidden");
    const trivia = document.getElementById("trivia");
    trivia.classList.remove("hidden");
  }
  const triviaContent = document.getElementById("trivia-content");
  triviaContent.classList.add("hidden");
  const main = document.getElementById("main-content");
  main.classList.remove("hidden");
  correctAnswers = 0;
  indexQuestion = 0;
});
