import { Grid, useMediaQuery, useTheme } from "@mui/material";

// Hooks import
import { useExerciseLesson } from "../../hooks/useExerciseLesson";

// Components import
import {
  Header,
  Sidebar,
  SubHeader,
  UsersRanking,
  Modules,
} from "../../components";

// Style import
import { Container } from "./styles";

export function Dashboard() {
  // Hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("1045"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const { modules, getModulesLoading } = useExerciseLesson();

  return (
    <>
      <Header />

      <Container>
        <Sidebar />

        <main>
          <SubHeader
            title="Introdução"
            description="Comece a pontuar"
            large={isLargeScreen}
          />

          <Grid container sx={{ mt: "3rem", maxWidth: "72rem" }}>
            <Modules data={modules} loading={getModulesLoading} />
          </Grid>
        </main>

        {!isMobile && <UsersRanking />}
      </Container>
    </>
  );
}
