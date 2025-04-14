function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const quiz = [
  {
    topic: "디자인 패턴 3가지",
    keyWord: "생성 패턴",
    meaning: "기존 코드의 재활용과 유연성을 증가시키는 객체 생성",
  },
  {
    topic: "디자인 패턴 3가지",
    keyWord: "구조 패턴",
    meaning:
      "구조를 유연하고 효율적으로 유지하면서 객체와 클래스를 더 큰 구조로 조합",
  },
  {
    topic: "디자인 패턴 3가지",
    keyWord: "행위 패턴",
    meaning:
      "객체들 사이의 통신과 책임 분배에 초점을 맞춤, 복잡한 흐름 제어 간소화함",
  },
];

shuffle(quiz);

function hideMeaning() {
  meaning.style.color = "cornflowerblue";
  meaning.style.background = "cornflowerblue";
}
function showMeaning() {
  meaning.style.color = "black";
  meaning.style.background = "none";
}
function showNextAnswer() {
  topicH2.innerText = quiz[quizIndex].topic;
  keyWordP.innerText = quiz[quizIndex].keyWord;
  meaningP.innerText = quiz[quizIndex].meaning;
}

const checkAnswerButton = document.querySelector("#checkAnswer");
const nextQuestionButton = document.querySelector("#nextQuestion");
const meaning = document.querySelector("#meaning");
const wrapMain = document.querySelector("#wrap");
const topicH2 = document.querySelector("#topic");
const keyWordP = document.querySelector("#keyWord");
const meaningP = document.querySelector("#meaning");

let isCheckedAnswer = false;

checkAnswerButton.addEventListener("click", () => {
  isCheckedAnswer = !isCheckedAnswer;

  if (isCheckedAnswer) {
    showMeaning();
  } else {
    hideMeaning();
  }
});

let quizIndex = 0;

topicH2.innerText = quiz[quizIndex].topic;
keyWordP.innerText = quiz[quizIndex].keyWord;
meaningP.innerText = quiz[quizIndex].meaning;

nextQuestionButton.addEventListener("click", () => {
  quizIndex++;
  if (isCheckedAnswer) {
    isCheckedAnswer = !isCheckedAnswer;
    hideMeaning();
  }

  if (quizIndex >= quiz.length + 1) {
    quizIndex = 1;
  }
  if (quizIndex >= quiz.length) {
    topicH2.innerText = "끝";
    keyWordP.innerText = "끝";
    meaningP.innerText = "끝";
    return;
  }

  showNextAnswer();
});
