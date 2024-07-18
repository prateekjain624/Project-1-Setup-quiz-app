const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

const nextEl = document.getElementById("next");

let score = 0;

let currentquestions = 0;

let totalScore = quesJSON.length;

function questions() {
  const { correctAnswer, options, question } = quesJSON[currentquestions];

  questionEl.textContent = question;

  const shuffledoptions = shuffledarray(options);

  shuffledoptions.forEach((list) => {
    const opt = document.createElement("button");
    opt.textContent = list;
    opt.value = list;
    optionEl.appendChild(opt);

    opt.addEventListener("click", () => {
      if (list === correctAnswer) {
        score++;
      } else {
        score -= 0.25;
      }

      scoreEl.textContent = `Score: ${score} / ${totalScore}`;

      nextquestion();
    });
  });
}

questions();

nextEl.addEventListener("click", () => {
  scoreEl.textContent = `Score: ${score}/ ${totalScore}`;

  nextquestion();
});

// shuffled options

function shuffledarray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * i + 1);
    [array[j], array[i]] = [array[i], array[j]];
  }

  return array;
}

function nextquestion() {
  currentquestions++;
  optionEl.textContent = "";

  if (currentquestions >= quesJSON.length) {
    questionEl.textContent = "quiz is completed";
    nextEl.remove();
  } else {
    questions();
  }
}
