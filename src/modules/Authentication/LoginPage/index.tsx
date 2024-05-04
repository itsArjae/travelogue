import AppCard from "@/components/AppCard";
import AppForm from "@/components/AppForm";
import { Box, Typography } from "@mui/material";
import { FieldsArray, initialValues, schema } from "./FormServices";
import Image from "next/image";

const LoginPage = () => {
  const onSubmit = (values: any, actions: any) => {
    console.log({ values, actions });
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppCard style={{width:"400px", padding:"30px"}}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Box>
        <Typography sx={{textAlign:"center", fontWeight:"bold", marginBottom:"50px"}}>
            LOGIN
        </Typography>
        <AppForm
          FieldsArray={FieldsArray}
          buttonLabel="Submit"
          handleSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={schema}
        />
      </AppCard>
    </Box>
  );
};

export default LoginPage;
