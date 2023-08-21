import * as yup from "yup";

export const SignUpValidation = yup.object().shape({
  email_usuario: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  cpf_usuario: yup
    .string()
    .required("Informe o CPF")
    .max(15, "O CPF deve conter no máximo 8 caracteres"),
  nome_usuario: yup
    .string()
    .required("O nome é obrigatório")
    .max(80, "O nome deve conter no máximo 80 caracteres"),
  dt_nasc_aluno: yup.string().required("Informe a data de nascimento"),
  senha_aluno: yup.string().required("A senha é obrigatória"),
  senha_aluno_confirmacao: yup
    .string()
    .required("A confirmação da senha é obrigatória")
    .oneOf([yup.ref("senha_aluno"), null], "As senhas devem ser iguais"),
});
