import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseISO } from "date-fns";

// Assets import
import Avatar from "../../assets/avatar.svg";
import StockWaveLogo from "../../assets/logo.svg";

// Service import
import { api } from "../../services/api";

// Hooks import
import { useAuth } from "../../hooks/useAuth";

// Validation import
import { EditProfileValidation } from "../../utils/validations";

// Components import
import { Input, GoBack } from "../../components";

// Styles import
import { Wrapper, Container } from "./styles";

export function Profile() {
  // Hooks
  const { user, setUser } = useAuth();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(EditProfileValidation),
  });

  const onSubmit = async ({ email_usuario, senha_aluno }) => {
    try {
      const { data } = await api.put(`/aluno/${user.id_usuario}`, {
        ...user,
        email_usuario,
        senha_aluno,
      });

      const { data: usuarioData } = await api.put(
        `/usuario/${user.id_usuario}`,
        {
          cpf_usuario: user.cpf_usuario,
          email_usuario,
          id_usuario: user.id_usuario,
          nome_usuario: user.nome_usuario,
        }
      );

      const userDataUpdated = {
        ...user,
        ...usuarioData,
        ...data,
      };

      setUser(userDataUpdated);

      toast.success("Perfil editado com sucesso!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("Não foi possível editar seu perfil", {
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
  };

  function formatDate(dataStr) {
    const date = parseISO(dataStr);
    const formattedDate = date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
    return formattedDate;
  }

  return (
    <Wrapper>
      <header>
        <img
          src={StockWaveLogo}
          alt="Duas setas apontando para cima representando o logo tipo StockWave"
        />
        <span>Perfil</span>
      </header>

      <GoBack to="/dashboard" />

      <Container>
        <header>
          <div>
            <img src={Avatar} alt="Foto do usuário logado na aplicação" />

            <div id="user-data">
              <span>{user.nome_usuario}</span>
              <p>{formatDate(user.dt_nasc_aluno)}</p>
            </div>
          </div>

          <p>Criado em {formatDate(user.dt_reg_aluno)}</p>
        </header>

        <div id="description">
          Olá, {user.nome_usuario} 👋
          <br />
          <br />
          Aqui é a tela do seu perfil, e por aqui que você pode editar algumas
          das suas informações 🚀
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <Input
              label="Endereço de e-mail"
              placeholder="johndoe@example.com"
              name="email_usuario"
              type="email"
              aria-label="Input para digitar o email do usuário"
              variant="standard"
              control={control}
              defaultValue={user.email_usuario}
            />
          </fieldset>

          <fieldset>
            <Input
              label="Sua senha"
              placeholder="*************"
              type="password"
              name="senha_aluno"
              aria-label="Input para digitar a senha do usuário"
              variant="standard"
              control={control}
              defaultValue={user.senha_aluno}
            />
          </fieldset>

          <fieldset>
            <Input
              label="Confirme a senha"
              placeholder="*************"
              type="password"
              name="senha_aluno_confirmacao"
              aria-label="Input para digitar a confirmação da senha do usuário"
              variant="standard"
              control={control}
              defaultValue={user.senha_aluno}
            />
          </fieldset>

          <Button variant="contained" type="submit" color="secondary">
            Editar
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
}
