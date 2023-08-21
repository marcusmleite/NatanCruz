import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Input } from "../Input";

const ForgotPasswordValidation = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
});

export function ForgotPasswordModal({ modalIsOpen, onCloseModal }) {
  // Hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(ForgotPasswordValidation),
  });

  const onSubmit = ({ email }) => {
    onCloseModal();

    toast.success(`Enviado com sucesso para: ${email}!`, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Dialog open={modalIsOpen} onClose={onCloseModal} fullScreen={isMobile}>
      <DialogTitle>Recupere sua senha</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent sx={{ padding: "0px 24px" }}>
          <DialogContentText>
            Esqueceu sua senha? Sem problemas! Basta informar o seu endereço de
            email registrado e enviaremos um link seguro para você recuperar o
            acesso à sua conta.
          </DialogContentText>
          <Input
            autoFocus
            margin="dense"
            label="Endereço de e-mail"
            type="email"
            fullWidth
            variant="standard"
            name="email"
            control={control}
            aria-label="Input para digitar o email que recuperará a senha"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseModal}>Cancelar</Button>
          <Button type="submit">Enviar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
