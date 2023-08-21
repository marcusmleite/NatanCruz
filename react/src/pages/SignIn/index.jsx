import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";
import { AES } from "crypto-js";

// Hooks import
import { useAuth } from "../../hooks/useAuth";

// Service import
import { api } from "../../services/api";

// Components import
import { ForgotPasswordModal, Input } from "../../components";

// Validation import
import { SignInValidation } from "../../utils/validations";

// Assets import
import StockWaveLogo from "../../assets/logo.svg";
import GoogleLogo from "../../assets/google-icon.svg";

// Style import
import { Wrapper, Container } from "./styles";

export function SignIn() {
  // Hooks
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(SignInValidation),
  });

  // States
  const [loading, setLoading] = useState(false);
  const [forgotPasswordModalIsVisible, setForgotPasswordModalIsVisible] =
    useState(false);

  const onSubmit = async ({ email, password }) => {
    let navigateTo = "/choose-level";

    try {
      setLoading(true);

      const { data } = await api.post("/aluno/login", {
        email_usuario: email,
        senha_aluno: password,
      });

      setUser(data);

      const userId = data.id_usuario;
      if (!userId) throw new Error("Conta não encontrada.");

      const cryptoJsKey = import.meta.env.VITE_APP_CRYPTO_JS_KEY;
      const encrypted = AES.encrypt(
        JSON.stringify(data),
        cryptoJsKey
      ).toString();

      localStorage.setItem("@STOCK-WAVE/token", encrypted);

      // Verificando se usuário já escolheu o nível dele
      const localStorageUserId = JSON.parse(
        localStorage.getItem("@STOCK-WAVE/already-choose-level")
      );

      if (!!localStorageUserId && userId === localStorageUserId) {
        navigateTo = "/dashboard";
      }

      navigate(navigateTo);
    } catch (error) {
      toast.error("E-mail ou senha inválido.", {
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
  };

  return (
    <>
      <Wrapper>
        <Container>
          <header>
            <img
              src={StockWaveLogo}
              alt="Duas setas apontando para cima representando o logo tipo StockWave"
            />
            <h1>StockWave</h1>
            <p>Faça login e comece a usar!</p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <Input
                label="Endereço de e-mail"
                placeholder="johndoe@example.com"
                name="email"
                type="email"
                aria-label="Input para digitar o email do usuário"
                control={control}
              />
            </fieldset>

            <fieldset>
              <Input
                label="Sua senha"
                placeholder="*************"
                type="password"
                name="password"
                aria-label="Input para digitar a senha do usuário"
                control={control}
              />
            </fieldset>

            <fieldset>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    name="remember-me"
                    inputProps={{
                      "aria-label":
                        "Selecionar a opção de lembrar email e senha do usuário por 30 dias",
                    }}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: "2.3rem" } }}
                  />
                }
                label="Lembrar de mim por 30 dias"
              />
            </fieldset>

            <fieldset>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={23} />
                ) : (
                  "Entrar na plataforma"
                )}
              </Button>

              <Button
                variant="contained"
                type="button"
                disabled={loading}
                startIcon={
                  <img
                    src={GoogleLogo}
                    alt="Logo do google para indicar login com a conta do gmail"
                  />
                }
              >
                Login com Google
              </Button>
            </fieldset>
          </form>

          <div id="links">
            <p onClick={() => setForgotPasswordModalIsVisible(true)}>
              Esqueceu sua senha?
            </p>
            <Link to="/signup">Não possui conta? Crie uma agora!</Link>
          </div>
        </Container>
      </Wrapper>

      <ForgotPasswordModal
        modalIsOpen={forgotPasswordModalIsVisible}
        onCloseModal={() => setForgotPasswordModalIsVisible(false)}
      />
    </>
  );
}
