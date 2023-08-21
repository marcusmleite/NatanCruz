import { Button, Skeleton } from "@mui/material";
import { toast } from "react-toastify";
import { AES } from "crypto-js";

// Components import
import { useCallback, useEffect } from "react";
import {
  Header,
  ExerciseAlternative,
  ExerciseFeedback,
  ExerciseToComplete,
} from "../../components";

// Hook import
import { useExerciseLesson } from "../../hooks/useExerciseLesson";
import { useAuth } from "../../hooks/useAuth";

// Services import
import { api } from "../../services/api";

// Styles import
import { Container } from "./styles";

export function Exercise() {
  // Hooks
  const { user, setUser } = useAuth();
  const {
    currentExercise,
    rightAnswer,
    activeAlternative,
    setRightAnswer,
    getExerciseLoading,
    setFeedbackDescription,
    setActiveAlternative,
  } = useExerciseLesson();

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        let result = "";

        const alternativeOption = {
          1: "a",
          2: "b",
          3: "c",
          4: "d",
        };

        result =
          currentExercise.tipo_questao === "alternativa"
            ? alternativeOption[activeAlternative]
            : activeAlternative;

        const { data } = await api.post(
          `/questao/${currentExercise.id_questao}/verificar`,
          {
            resposta: result,
          }
        );

        setRightAnswer(data.resposta);
        setFeedbackDescription(data.observacao);

        try {
          const rightAnswerData = data.resposta;

          if (!rightAnswerData) return;

          const { data: userData } = await api.put(
            `/aluno/${user.id_usuario}`,
            {
              ...user,
              moedas_aluno: user.moedas_aluno + 75,
            }
          );

          const cryptoJsKey = import.meta.env.VITE_APP_CRYPTO_JS_KEY;
          const encrypted = AES.encrypt(
            JSON.stringify(userData),
            cryptoJsKey
          ).toString();

          localStorage.setItem("@STOCK-WAVE/token", encrypted);

          setUser(userData);
        } catch (error) {
          toast.error("Não foi possível adicionar moedas", {
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

        window.scrollTo({ top: 300, behavior: "smooth" });
      } catch (error) {
        toast.error("Não foi possível se comunicar com o servidor.", {
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
    },
    [
      activeAlternative,
      currentExercise.id_questao,
      currentExercise.tipo_questao,
      setFeedbackDescription,
      setRightAnswer,
      setUser,
      user,
    ]
  );

  useEffect(() => {
    return () => {
      setRightAnswer(undefined);
      setActiveAlternative("");
    };
  }, [setActiveAlternative, setRightAnswer]);

  return (
    <>
      <Header />
      <Container>
        {getExerciseLoading ? (
          <>
            <Skeleton
              sx={{ marginTop: "6rem" }}
              variant="h1"
              width="60%"
              height="3.2rem"
            />
            <Skeleton
              sx={{ marginTop: "2.5rem" }}
              variant="h1"
              width="75%"
              height="3.2rem"
            />
            <Skeleton
              sx={{ marginTop: "2.5rem" }}
              variant="h1"
              width="55%"
              height="3.2rem"
            />
          </>
        ) : (
          <>
            <form onSubmit={onSubmit}>
              {currentExercise?.id_questao &&
                {
                  alternativa: <ExerciseAlternative />,
                  completar: <ExerciseToComplete />,
                }[currentExercise.tipo_questao]}

              {typeof rightAnswer === "undefined" &&
                currentExercise?.id_questao && (
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={!activeAlternative}
                  >
                    Enviar
                  </Button>
                )}
            </form>

            {typeof rightAnswer !== "undefined" && <ExerciseFeedback />}
          </>
        )}
      </Container>
    </>
  );
}
