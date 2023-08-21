import { Button, IconButton } from "@mui/material";
import { X } from "phosphor-react";
import { useNavigate } from "react-router-dom";

// Assets import
import ModuleLevels from "../../assets/module-levels.svg";

// Style import
import { Container } from "./styles";

export function ContentModule({ open, anchorEl, onClose }) {
  // Hooks
  const navigate = useNavigate();

  return (
    <Container
      id="mouse-over-popover"
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      placement
      onClose={onClose}
      disableAutoFocus
    >
      <header>
        <IconButton onClick={onClose}>
          <X />
        </IconButton>
      </header>

      <main>
        <img
          src={ModuleLevels}
          alt="Coroas representando o nível referente ao módulo"
        />

        <div id="popup-module-content">
          <div id="module-info">
            <p>Nível 1/3</p>
            <p>Lição 1/6</p>
          </div>

          <footer>
            <Button
              color="primary"
              variant="contained"
              onClick={() => navigate("/lesson")}
            >
              Explicação
            </Button>

            <Button
              color="inherit"
              variant="contained"
              onClick={() => navigate("/exercise")}
            >
              Começar
            </Button>
          </footer>
        </div>
      </main>
    </Container>
  );
}
