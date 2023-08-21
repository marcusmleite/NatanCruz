import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Button, CircularProgress } from "@mui/material";
import { AES } from "crypto-js";

// Hooks import
import { useAuth } from "../../hooks/useAuth";

// Components import
import { Input } from "../../components";

// Service import
import { api } from "../../services/api";

// Validation import
import {
  SignUpValidation,
  transformDate,
  validateCpf,
} from "../../utils/index";

// Assets import
import StockWaveLogo from "../../assets/logo.svg";
import GoogleLogo from "../../assets/google-icon.svg";

// Style import
import { Wrapper, Container } from "./styles";

export function SignUp() {
  // Hooks
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(SignUpValidation),
  });

  // States
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      localStorage.removeItem("@STOCK-WAVE/token");

      const { senha_aluno_confirmacao, ...restData } = data;

      validateCpf(restData.cpf_usuario);

      const cleanCPF = String(restData.cpf_usuario).replace(/[\s.-]/g, "");

      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;

      const parsedData = {
        ...restData,
        cpf_usuario: cleanCPF,
        dt_nasc_aluno: transformDate(restData.dt_nasc_aluno),
        dt_reg_aluno: formattedDate,
        moedas_aluno: 0,
        nivel_aluno: { nome_nivel: "Iniciante" },
      };

      const { data: userData } = await api.post("/aluno", parsedData);

      const cryptoJsKey = import.meta.env.VITE_APP_CRYPTO_JS_KEY;
      const encrypted = AES.encrypt(
        JSON.stringify(userData),
        cryptoJsKey
      ).toString();

      localStorage.setItem("@STOCK-WAVE/token", encrypted);

      setUser(userData);

      navigate("/choose-level");
    } catch (error) {
      toast.error(error.message || "Não foi possível realizar o cadastro.", {
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
    <Wrapper>
      <Container>
        <header>
          <img
            src={StockWaveLogo}
            alt="Duas setas apontando para cima representando o logo tipo StockWave"
          />
          <h1>StockWave</h1>
          <p>Registre-se e comece a usar!</p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <Input
              label="Endereço de e-mail"
              placeholder="johndoe@example.com"
              name="email_usuario"
              type="email"
              aria-label="Input para digitar o email do usuário"
              control={control}
            />
          </fieldset>

          <fieldset>
            <Input
              label="Informe seu CPF"
              placeholder="000.000.000-00"
              name="cpf_usuario"
              mask="999.999.999-99"
              aria-label="Input para digitar o CPF do usuário"
              control={control}
            />
          </fieldset>

          <fieldset>
            <Input
              label="Informe seu nome completo"
              placeholder="John Doe"
              name="nome_usuario"
              aria-label="Input para digitar o nome completo do usuário"
              control={control}
            />
          </fieldset>

          <fieldset>
            <Input
              label="Data de nascimento"
              placeholder="00/00/0000"
              mask="99/99/9999"
              name="dt_nasc_aluno"
              aria-label="Input para digitar a data de nascimento do usuário"
              control={control}
            />
          </fieldset>

          <fieldset>
            <Input
              label="Sua senha"
              placeholder="*************"
              type="password"
              name="senha_aluno"
              aria-label="Input para digitar a senha do usuário"
              control={control}
            />
          </fieldset>

          <fieldset>
            <Input
              label="Confirme a senha"
              placeholder="*************"
              type="password"
              name="senha_aluno_confirmacao"
              aria-label="Input para digitar a confirmação da senha do usuário"
              control={control}
            />
          </fieldset>

          <fieldset>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              disabled={loading}
            >
              {loading ? <CircularProgress size={23} /> : "Cadastrar"}
            </Button>

            <Button
              variant="contained"
              type="button"
              startIcon={
                <img
                  src={GoogleLogo}
                  alt="Logo do Google para indicar login com a conta do gmail"
                />
              }
            >
              Login com Google
            </Button>
          </fieldset>
        </form>

        <div id="links">
          <Link to="/">Ir para o login</Link>
        </div>
      </Container>
    </Wrapper>
  );
}
