import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Hook import
import { useExerciseLesson } from "../../hooks/useExerciseLesson";

// Styles import
import { Container, ButtonsWrapper, Button, BlurContainer } from "./styles";

export function ExerciseToComplete() {
  // Hooks
  const navigate = useNavigate();
  const { currentExercise, setActiveAlternative } = useExerciseLesson();

  const arr_pergunta = currentExercise.pergunta_questao.split("");

  const [clickedItems, setClickedItems] = useState([]); // [{ index: 0, label: '' }]
  const [alternativas, setAlternativas] = useState(currentExercise.questoes);
  const [pergunta, setPergunta] = useState(arr_pergunta);

  const hasNoUnderline = !pergunta.some((char) => char === "_");

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

  function handleSelectAlternative(alternative) {
    if (hasNoUnderline) return;

    const answer = {
      0: "a",
      1: "b",
      2: "c",
      3: "d",
    };

    setActiveAlternative(
      (previousState) => previousState + answer[alternative.index]
    );

    setAlternativas((previousState) => {
      const { index } = alternative;
      const newState = [...previousState];
      newState[index] = "_";
      return newState;
    });

    setClickedItems((previousState) => [...previousState, alternative]);
  }

  useEffect(() => {
    if (clickedItems.length > 0) {
      setPergunta((previousState) => {
        const newState = [...previousState];
        clickedItems.forEach((item) => {
          const underlineIndex = newState.findIndex(
            (char, index) => char === "_" && index > item.index
          );

          if (underlineIndex !== -1) {
            newState[underlineIndex] = item.label;
          }
        });

        setClickedItems((prev) => {
          const newArray = [...prev].slice(1); // Removendo o primeiro item clicado
          return newArray;
        });

        return newState;
      });
    }
  }, [clickedItems]);

  return (
    <Container>
      {pergunta.map((item) => {
        const isLetter = item !== "_";

        if (isLetter) return <span>{item}</span>;

        return <BlurContainer size="small" disableRipple />;
      })}

      <ButtonsWrapper>
        {alternativas.map((alternativa, index) => {
          const alternative = { index, label: alternativa };
          const isBlurred = alternativa === "_";

          if (isBlurred) return <BlurContainer size="small" disableRipple />;

          return (
            <Button
              size="small"
              onClick={() => handleSelectAlternative(alternative)}
              disableRipple
              disabled={hasNoUnderline}
            >
              {alternativa}
            </Button>
          );
        })}
      </ButtonsWrapper>
    </Container>
  );
}
