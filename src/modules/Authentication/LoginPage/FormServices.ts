import * as Yup from "yup";

export const initialValues = {
  id: "",
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
    .min(4, "Invalid Id")
    .required("Id is Required"),
});
