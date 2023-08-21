import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Hook import
import { useExerciseLesson } from "../../hooks/useExerciseLesson";

// Styles import
import { Wrapper, AlternativeContainer } from "./styles";

export function ExerciseAlternative() {
  // Hooks
  const navigate = useNavigate();
  const {
    currentExercise,
    activeAlternative,
    setActiveAlternative,
    rightAnswer,
  } = useExerciseLesson();

  useEffect(() => {
    if (!currentExercise?.id_questao) {
      navigate("/dashboard");
      toast.error("Exercício com dado inválido.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [currentExercise?.id_questao, navigate]);

  return (
    <Wrapper>
      <h1>{currentExercise.pergunta_questao}</h1>

      {currentExercise.questoes.map((item, index) => {
        const alternativeNumber = index + 1;
        return (
          <AlternativeContainer
            isActive={activeAlternative === alternativeNumber}
            rightAnswer={
              typeof rightAnswer === "undefined" ? undefined : rightAnswer
            }
            type="button"
            onClick={() => {
              if (typeof rightAnswer !== "undefined") return;
              setActiveAlternative(alternativeNumber);
            }}
          >
            <div>
              <p>{alternativeNumber}</p>
            </div>

            <span>{item}</span>
          </AlternativeContainer>
        );
      })}
    </Wrapper>
  );
}
