import { Button } from "@mui/material";

// Hook import
import { useExerciseLesson } from "../../hooks/useExerciseLesson";

// Styles import
import { Container } from "./styles";

export function ExerciseFeedback() {
  // Hooks
  const {
    rightAnswer,
    feedbackDescription,
    allExercises,
    setCurrentExercise,
    setRightAnswer,
  } = useExerciseLesson();

  function handleNextExercise() {
    setCurrentExercise(allExercises[1]);
    setRightAnswer(undefined);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Container rightAnswer={rightAnswer}>
      <h3>{rightAnswer ? "Na mosca!" : "Resposta errada"}</h3>

      <p>{feedbackDescription}</p>

      <Button
        type="button"
        variant="contained"
        size="large"
        color={rightAnswer ? "success" : "error"}
        onClick={() => handleNextExercise()}
      >
        Continuar
      </Button>
    </Container>
  );
}
