import React, { useEffect, useState } from "react";
import Devfront from "../../../Data/Travel";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Travel = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const toke = localStorage.getItem("token");
    if (!toke) {
      navigate("/travel");
    }
    setToken(toke);
  }, [navigate]);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const updatedUserAnswers = [
        ...userAnswers,
        {
          question: Devfront[currentQuestionIndex].question,
          selected: selectedAnswer,
          correct: Devfront[currentQuestionIndex].answer,
        },
      ];
      setUserAnswers(updatedUserAnswers);

      setSelectedAnswer(null);
      if (currentQuestionIndex < Devfront.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsFinished(true);
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsFinished(false);
    setSelectedAnswer(null);
  };

  const currentQuestion = Devfront[currentQuestionIndex];

  return (
    <Box sx={{margin:"150px 20px"}}>
      {token ? (
        <Box
          className="quiz-container"
          sx={{
            marginTop: "45px",
            backgroundColor: "background.paper",
            boxShadow: "0px 8px 15px rgba(227, 37, 252, 0.7)",
             textAlign:"center"
          }}
        >
          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: "20px",
              color: "text.primary",
               textAlign:"center"
            }}
          >
            Travel
          </Typography>
          {isFinished ? (
            <Box>
              <div className="result-section">
                <Typography sx={{ color: "text.primary" }}>
                  Your Score:{" "}
                  {
                    userAnswers.filter((ans) => ans.selected === ans.correct)
                      .length
                  }{" "}
                  out of {Devfront.length}
                </Typography>
                <Box sx={{ backgroundColor: "background.paper" }}>
                  <div className="results">
                    {userAnswers.map((result, index) => (
                      <div key={index} className="result-item">
                        <Typography sx={{ color: "text.primary" }}>
                          Question {index + 1}: {result.question}
                        </Typography>
                        <Typography sx={{ color: "text.primary" }}>
                          Your Answer: {result.selected} <br />
                          Correct Answer: {result.correct} <br />
                          {result.selected === result.correct ? (
                            <span className="correct">Correct</span>
                          ) : (
                            <span className="incorrect">Incorrect</span>
                          )}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </Box>
                <Button
                  onClick={restartQuiz}
                  sx={{
                    background: "linear-gradient(135deg, #6a11cb, #e325fc)",
                    boxShadow: "0px 8px 15px rgba(227, 37, 252, 0.7)",
                  }}
                >
                  Restart Quiz
                </Button>
              </div>
            </Box>
          ) : (
            <>
              <Box sx={{ backgroundColor: "background.paper" }}>
                <div className="question-section">
                  {currentQuestion ? (
                    <>
                      <Typography sx={{ color: "text.primary" }}>
                        {currentQuestion.question}
                      </Typography>
                      <ul className="options-list">
                        {currentQuestion.options.map((option, index) => (
                          <li
                            style={{
                              background:
                                "linear-gradient(135deg, #6a11cb, #e325fc)",
                              borderRadius: "15px",
                            }}
                            key={index}
                            onClick={() => handleAnswer(option)}
                            className={
                              selectedAnswer === option ? "selected" : ""
                            }
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Typography sx={{ color: "text.primary" }}>
                      Loading question...
                    </Typography>
                  )}
                </div>
              </Box>
              <Box sx={{ backgroundColor: "background.paper" }}>
                <div className="pagination-controls">
                  <Button
                    sx={{
                      background: "linear-gradient(135deg, #6a11cb, #e325fc)",
                    }}
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    sx={{
                      background: "linear-gradient(135deg, #6a11cb, #e325fc)",
                    }}
                    onClick={handleNext}
                    disabled={selectedAnswer === null}
                  >
                    {currentQuestionIndex === Devfront.length - 1
                      ? "Finish"
                      : "Next"}
                  </Button>
                </div>
              </Box>
              <Typography sx={{ color: "text.primary" }}>
                Question {currentQuestionIndex + 1} of {Devfront.length}
              </Typography>
            </>
          )}
        </Box>
      ) : (
        navigate("/login")
      )}
    </Box>
  );
};

export default Travel;
