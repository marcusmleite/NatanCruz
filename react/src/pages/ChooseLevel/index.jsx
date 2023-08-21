import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Skeleton } from "@mui/material";

// Hooks import
import { useAuth } from "../../hooks/useAuth";

// Service import
import { api } from "../../services/api";

// Assets import
import LevelEasy from "../../assets/level-easy.svg";
import LevelMedium from "../../assets/level-medium.svg";
import LevelHard from "../../assets/level-hard.svg";

import { Container } from "./styles";

const levelImages = {
  Iniciante: LevelEasy,
  Intermediário: LevelMedium,
  Avançado: LevelHard,
};

export function ChooseLevel() {
  // Hooks
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  // States
  const [loading, setLoading] = useState(true);
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    async function getLevels() {
      try {
        setLoading(true);

        const { data } = await api.get("/nivel");

        if (!Array.isArray(data)) throw new Error("Dados inválidos");

        const items = data.map((level) => ({
          image: levelImages[level],
          title: level,
        }));

        setLevels(items);
      } catch (error) {
        toast.error(error.message || "Não foi possível buscar os níveis.", {
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
        setLoading(false);
      }
    }

    getLevels();
  }, []);

  async function handleUpdateUserLevel(level) {
    try {
      const { data } = await api.put(`/aluno/${user.id_usuario}`, {
        ...user,
        nivel_aluno: {
          nome_nivel: level,
        },
      });

      setUser(data);

      localStorage.setItem(
        "@STOCK-WAVE/already-choose-level",
        JSON.stringify(user.id_usuario)
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Não foi possível atualizar seu nível", {
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
  }

  return (
    <Container>
      <h1>Em que nível você prefere começar?</h1>

      <section>
        {loading &&
          Object.keys(levelImages).map(() => (
            <Skeleton
              sx={{
                borderRadius: "4rem",
                "& ~ &": { marginLeft: "2.125rem" },
                "@media screen and (max-width: 768px)": {
                  "& ~ &": { marginLeft: 0 },
                  marginTop: "1.875rem",
                },
              }}
              variant="rounded"
              width="26rem"
              height="25rem"
            />
          ))}

        {!loading &&
          levels.map((item) => (
            <button
              onClick={() => handleUpdateUserLevel(item.title)}
              key={item.title}
              tabIndex="0"
              aria-label="Níveis de dificuldade da plataforma"
              type="button"
            >
              <img
                src={item.image}
                alt={`Ícone representando a escolha do nível ${item.title}`}
              />
              <p>{item.title}</p>
            </button>
          ))}
      </section>
    </Container>
  );
}
