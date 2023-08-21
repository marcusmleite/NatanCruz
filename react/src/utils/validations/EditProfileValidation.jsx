import * as yup from "yup";

export const EditProfileValidation = yup.object().shape({
  email_usuario: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  senha_aluno: yup.string().required("A senha é obrigatória"),
  senha_aluno_confirmacao: yup
    .string()
    .required("A confirmação da senha é obrigatória")
    .oneOf([yup.ref("senha_aluno"), null], "As senhas devem ser iguais"),
});
