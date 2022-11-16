import * as yup from "yup";

const createUserShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  idAdmin: yup
    .boolean()
    .default(() => false)
    .optional(),
});

export default createUserShape
