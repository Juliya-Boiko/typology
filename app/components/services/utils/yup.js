import * as Yup from "yup";

export const subscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  agreement: Yup.bool()
    .oneOf([true], 'Field must be checked')
    .required('Required'),
});