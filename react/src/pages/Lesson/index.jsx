// Assets import
import AudioExample from "../../assets/audio-example.svg";

// Hooks import
import { useExerciseLesson } from "../../hooks/useExerciseLesson";

// Components import
import { Header, SubHeader, GoBack } from "../../components";

// Styles import
import { Container } from "./styles";

export function Lesson() {
  // Hooks
  const { lesson } = useExerciseLesson();

  return (
    <>
      <Header />
      <Container>
        <main>
          <GoBack to="/dashboard" size="md" />

          <SubHeader
            title={lesson.nome_aula}
            description={lesson.descricao_aula}
            large
          />

          <article>
            <div id="video">
              <iframe
                width="100%"
                height="100%"
                src={lesson.url_video_aula}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>

            <img src={AudioExample} alt="" id="audio-example" />

            <h2>Boas Vindas!</h2>

            <p>{lesson.conteudo_aula}</p>
          </article>
        </main>
      </Container>
    </>
  );
}
