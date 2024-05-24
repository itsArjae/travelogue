import AppForm from "@/components/AppForm";
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import { Form, Formik } from "formik";

import * as Yup from "yup";
import { useAgenciesStore } from "../stores/useAgenciesStore";

const initialValues = {
  password: "",
  username: "",
};

const FieldsArray = [
  {
    title: "Owner's Information",
    divider: true,
    Fields: [
      {
        label: "Surname",
        type: "text",
        name: "surname",
      },
      {
        label: "First Name",
        type: "text",
        name: "first_name",
      },
    ],
  },
  {
    title: "",
    divider: false,
    Fields: [
      {
        label: "Middle Name",
        type: "text",
        name: "middle_name",
      },
    ],
  },
  {
    title: "",
    divider: false,
    Fields: [
      {
        label: "Contact Number",
        type: "text",
        name: "contact_no",
      },
    ],
  },
  {
    title: "",
    divider: false,
    Fields: [
      {
        label: "Email",
        type: "text",
        name: "email",
      },
    ],
  },
  {
    title: "",
    divider: false,
    Fields: [
      {
        label: "Username",
        type: "text",
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

  {
    title: "Agency's Information",
    divider: false,
    Fields: [
      {
        label: "Agency's Name",
        type: "text",
        name: "agency_name",
      },
    ],
  },
];

const schema = Yup.object({
  username: Yup.string()
    .max(10, "Exceeded Character limit")
    .min(4, "Invalid Username")
    .required("Username is Required"),
  password: Yup.string()
    .max(10, "Exceeded Character limit")
    .min(4, "Invalid Password")
    .required("Password is Required"),
});

const CreateAgencyDialog = () => {

  const {isAgencyDialogOpen, setAgencyDialogOpen} = useAgenciesStore()

  const onSubmit = (values: any, actions: any) => {
    console.log({ values, actions });
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Dialog open={isAgencyDialogOpen}>
      <DialogTitle sx={{ backgroundColor: "#799351", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          Create Agency
        </Typography>
        <IconButton sx={{height:"30px"}} onClick={()=>{setAgencyDialogOpen(false)}}>
          x
        </IconButton>
      </DialogTitle>
      <DialogContent >
      <Box >
      <AppForm
          FieldsArray={FieldsArray}
          buttonLabel="Submit"
          initialValues={initialValues}
          validationSchema={schema}
          handleSubmit={onSubmit}
        />
      </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAgencyDialog;
