import { TrendUp, Storefront, Trophy } from "phosphor-react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

// Styles import
import { Container, ListItem } from "./styles";

export function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { pathname } = useLocation();

  const showRanking = useMediaQuery(theme.breakpoints.between("sm", "1045"));

  if (isMobile) return null;

  return (
    <Container>
      <ul>
        <li>
          <Link to="/dashboard">
            <ListItem
              active={pathname === "/dashboard" || pathname === "/lesson"}
            >
              <TrendUp size={30} />
              <p>APRENDER</p>
            </ListItem>
          </Link>
        </li>

        <li>
          <Link to="/ipo-store">
            <ListItem active={pathname === "/ipo-store"}>
              <Storefront size={30} />
              <p>LOJA</p>
            </ListItem>
          </Link>
        </li>

        {showRanking && pathname === "/dashboard" && (
          <li>
            <Link to="/ranking">
              <ListItem active={pathname === "/ranking"}>
                <Trophy size={30} />
                <p>RANKING</p>
              </ListItem>
            </Link>
          </li>
        )}
      </ul>
    </Container>
  );
}
