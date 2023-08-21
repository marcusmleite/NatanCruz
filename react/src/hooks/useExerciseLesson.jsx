import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "react-toastify";

// Hooks import
import { useAuth } from "./useAuth";

// Service import
import { api } from "../services/api";

const ExerciseLessonContext = createContext({});

// RENOMEAR ESSE HOOK
function ExerciseLessonProvider({ children }) {
  // Hooks
  const { user } = useAuth();

  const [allExercises, setAllExercises] = useState([]);
  const [selectedModuleId, setSelectedModuleId] = useState("");
  const [currentExercise, setCurrentExercise] = useState({});
  const [lesson, setLesson] = useState({});
  const [rightAnswer, setRightAnswer] = useState(undefined);
  const [feedbackDescription, setFeedbackDescription] = useState("");
  const [activeAlternative, setActiveAlternative] = useState("");
  const [getExerciseLoading, setGetExerciseLoading] = useState(false);
  const [getModulesLoading, setGetModulesLoading] = useState(false);
  const [getLessonLoading, setGetLessonLoading] = useState(false);
  const [modules, setModules] = useState({
    first: [],
    second: [],
    third: [],
  });

  useEffect(() => {
    async function getExercises() {
      try {
        if (!user.id_usuario || !selectedModuleId) return;

        setGetExerciseLoading(true);

        const { data } = await api.get(`/modulo_questao/${selectedModuleId}`);

        const questao = data.questoes[0];

        const values = Object.values(questao);
        const insufficientInformation = values.some((value) => !value);

        if (insufficientInformation) throw new Error("Dados inválidos");

        const lessonsFormatted = data.questoes.map((item) => {
          const transformedData = {
            id_questao: item.id_questao,
            pergunta_questao: item.pergunta_questao,
            questoes: [
              item.alt_a_questao,
              item.alt_b_questao,
              item.alt_c_questao,
              item.alt_d_questao,
            ],
            tipo_questao: item.tipo_questao,
          };

          return transformedData;
        });

        const firstExercise = lessonsFormatted[0];
        setCurrentExercise(firstExercise);
        setAllExercises(lessonsFormatted);
      } catch (error) {
        toast.error("Não foi possível buscar os exercícios desse módulo", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setGetExerciseLoading(false);
      }
    }

    getExercises();
  }, [selectedModuleId, user.id_usuario]);

  useEffect(() => {
    async function getModules() {
      try {
        if (!user.id_usuario) return;

        setGetModulesLoading(true);

        const { data } = await api.get("/modulo");

        if (!Array.isArray(data)) throw new Error("Dados inválidos");

        setSelectedModuleId(data[0].id_modulo);

        const updatedModules = {
          first: data.slice(0, 3).map((obj) => ({
            id_modulo: obj.id_modulo.toString(),
            nome_modulo: obj.nome_modulo,
            nivel_modulo: obj.nivel_modulo.nome_nivel,
            imagem_modulo: obj.url_imagem_modulo,
          })),
          second: data.slice(3, 6).map((obj) => ({
            id_modulo: obj.id_modulo.toString(),
            nome_modulo: obj.nome_modulo,
            nivel_modulo: obj.nivel_modulo.nome_nivel,
            imagem_modulo: obj.url_imagem_modulo,
          })),
          third: data.slice(6).map((obj) => ({
            id_modulo: obj.id_modulo.toString(),
            nome_modulo: obj.nome_modulo,
            nivel_modulo: obj.nivel_modulo.nome_nivel,
            imagem_modulo: obj.url_imagem_modulo,
          })),
        };

        setModules(updatedModules);
      } catch (error) {
        toast.error("Não foi possível buscar os módulos.", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setGetModulesLoading(false);
      }
    }

    getModules();
  }, [user.id_usuario]);

  useEffect(() => {
    async function getClass() {
      if (!user.id_usuario || !selectedModuleId) return;

      try {
        setGetLessonLoading(true);

        const { data } = await api.get(`/modulo_aula/${selectedModuleId}`);

        const { aula } = data[0];

        const values = Object.values(data[0].aula);
        const insufficientInformation = values.some((value) => !value);

        if (insufficientInformation) throw new Error("Dados inválidos");

        setLesson(aula);
      } catch (error) {
        toast.error("Não foi possível buscar os dados da aula", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setGetLessonLoading(false);
      }
    }

    getClass();
  }, [selectedModuleId, user.id_usuario]);

  const providerValues = useMemo(() => {
    return {
      // Exercise
      currentExercise,
      setCurrentExercise,
      activeAlternative,
      setActiveAlternative,
      getExerciseLoading,
      allExercises,
      setAllExercises,

      // Feedback answer
      rightAnswer,
      setRightAnswer,
      feedbackDescription,
      setFeedbackDescription,

      // Modules
      modules,
      getModulesLoading,
      setSelectedModuleId,

      // Lesson
      lesson,
      getLessonLoading,
    };
  }, [
    currentExercise,
    activeAlternative,
    getExerciseLoading,
    allExercises,
    rightAnswer,
    feedbackDescription,
    modules,
    getModulesLoading,
    lesson,
    getLessonLoading,
  ]);

  return (
    <ExerciseLessonContext.Provider value={providerValues}>
      {children}
    </ExerciseLessonContext.Provider>
  );
}

function useExerciseLesson() {
  const context = useContext(ExerciseLessonContext);

  if (!context)
    throw new Error(
      "useExerciseLesson must be used within a ExerciseLessonProvider"
    );

  return context;
}

export { useExerciseLesson, ExerciseLessonProvider };
