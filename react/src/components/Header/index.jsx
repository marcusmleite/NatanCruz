import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  MenuItem,
  Menu,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { CaretDown } from "phosphor-react";

// Hooks import
import { useAuth } from "../../hooks/useAuth";

// Assets import
import Avatar from "../../assets/avatar.svg";
import StockWaveLogo from "../../assets/logo.svg";
import Coin from "../../assets/coin.svg";
import CoinWhite from "../../assets/coin-white.svg";

// Theme import
import { theme } from "../../styles/theme/default";

// Styles import
import { LogoContainer, Toolbar, UserLoggedContainer } from "./styles";

export function Header() {
  // Hooks
  const { user } = useAuth();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // States
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    localStorage.removeItem("@STOCK-WAVE/token");
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {!isMobile && (
          <LogoContainer onClick={() => navigate("/dashboard")}>
            <img
              src={StockWaveLogo}
              alt="Duas setas apontando para cima representando o logo tipo StockWave"
            />
            <h3>StockWave</h3>
          </LogoContainer>
        )}

        <UserLoggedContainer
          onClick={handleMenu}
          isMobile
          aria-label="Opção posicionada à direita do header com avatar e moedas do usuário"
        >
          <div>
            <img
              src={Avatar}
              alt="Imagem de um rapaz que representa o usuário logado na aplicação"
            />

            <span>{user.nome_usuario}</span>
          </div>

          {!isMobile && (
            <IconButton
              color="primary"
              tabindex="0"
              aria-label="Opções do header, sair da aplicação e ir para perfil"
            >
              <CaretDown
                size={12}
                weight="fill"
                style={{ color: "#000", margin: "0 1.5rem" }}
              />
            </IconButton>
          )}

          <div id="coins-container">
            <img
              src={isMobile ? CoinWhite : Coin}
              alt="Ilustração de um diamante representando as moedas na plataforma"
            />
            <p>{user.moedas_aluno}</p>
          </div>
        </UserLoggedContainer>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          transformOrigin={{
            horizontal: isMobile ? "left" : "center",
            vertical: "top",
          }}
          anchorOrigin={{
            horizontal: isMobile ? "left" : "center",
            vertical: "bottom",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => navigate("/profile")}
            sx={{
              ":hover": {
                color: theme.palette.primary.dark,
                fontWeight: "bold",
              },
            }}
          >
            Meu perfil
          </MenuItem>
          <MenuItem
            onClick={handleLogout}
            sx={{
              ":hover": {
                color: theme.palette.primary.dark,
                fontWeight: "bold",
              },
            }}
          >
            Sair
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
