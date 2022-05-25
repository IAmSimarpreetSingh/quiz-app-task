import { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [notCorrect, setNotCorrent] = useState(0)
  const [green, setGreen] = useState(0)
  const [red, setRed] = useState(0)

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
      setGreen(green + 20);
    }
    else {
      setNotCorrent(notCorrect + 1);
      setRed(red + 20);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  function handleQues(value) {
    if (value) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    } else {
      const nextQuestion = currentQuestion - 1;
      if (nextQuestion >= 0) {
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        }
      } else {
        return
      }
    }
  }

  return (
    <div className="container" style={{ background: '#C5D6F5' }}>
      {showScore ? (
        <div className="container p-5">
          <h1 className="text-dark">You Score {score} from {questions.length}</h1>
          <button className="btn btn-secondary" onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <>
          <div className="container d-flex flex-column">
            <div className="container p-4 d-flex justify-content-between">
              <div className="row d-flex flex-column mt-5" style={{ height: '100px', width: '300px' }}>
                <div className="progress w-20 border h-25 rounded p-0" style={{ background: '#E9ECEF' }} >
                  <div className="progress-bar bg-danger" style={{ width: `${red}%` }}></div>
                </div>
                <h6 className="text-dark mt-2">{notCorrect}/{questions.length}</h6>
              </div>
              <div className="row d-flex flex-column mt-5" style={{ height: '100px', width: '300px' }}>
                <div className="progress w-20 border h-25 rounded p-0" style={{ background: '#E9ECEF' }} >
                  <div className="progress-bar bg-success" style={{ width: `${green}%` }}></div>
                </div>
                <h6 className="text-dark mt-2">{notCorrect}/{questions.length}</h6>
              </div>
            </div>
            <h4 className="text-dark text-center">{currentQuestion}/{questions.length}</h4>
          </div>

          <div className="row p-5" style={{ background: '#947ACC' }}>
            <div className="col-12">
              <h2 className='text-dark' >{questions[currentQuestion].questionText}</h2>
            </div >
            <div className="row">
              <div className="col-12">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button className="btn btn-outline-primary mt-4 text-dark"
                      onClick={() => handleAnswer(answerOption.isCorrect)}
                      key={index}
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-primary col-sm-2 mt-4 " onClick={() => handleQues(false)} >Prev</button>
              <button className="btn btn-primary col-sm-2 mt-4 " onClick={() => handleQues(true)}>Next</button>
            </div>

          </div >
        </>
      )

      }
    </div>
  );
}

export default App;
