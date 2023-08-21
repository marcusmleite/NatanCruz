import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Components import
import { Header, SubHeader, UsersRanking } from "../../components";

// Styles import
import { Container } from "./styles";

// This screen will only exist on mobile
export function Ranking() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const showRanking = useMediaQuery(theme.breakpoints.between("sm", "1045"));
  const navigate = useNavigate();

  if (!isMobile && !showRanking) {
    navigate("/dashboard");
    return null;
  }

  return (
    <>
      <Header />
      <Container>
        <SubHeader title="Veja como você está se saindo!" />

        <main>
          <UsersRanking />
        </main>
      </Container>
    </>
  );
}
