import * as Yup from "yup";

export const initialValues = {
    password:"",
    username:""
};

export const FieldsArray = [
  {
    title: "",
    divider: false,
    Fields: [
      {
        label: "Username",
        type: "username",
        name: "username",
      },
    ],
  },
  {
    title: "",
    divider: false,
    Fields: [
      {
        label: "Password",
        type: "password",
        name: "password",
      },
    ],
  },
];

export const schema = Yup.object({
  username: Yup.string()
    .max(10, "Exceeded Character limit")
    .min(4, "Invalid Username")
    .required("Username is Required"),
  password: Yup.string()
    .max(10, "Exceeded Character limit")
    .min(4, "Invalid Password")
    .required("Password is Required"),
});
