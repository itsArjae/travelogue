import AppCard from "@/components/AppCard";
import AppForm from "@/components/AppForm";
import { Box, Typography } from "@mui/material";
import { FieldsArray, initialValues, schema } from "./FormServices";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const onSubmit = (values: any, actions: any) => {
    console.log({ values, actions });
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    actions.resetForm();
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
      <AppCard style={{ width: "300px", padding: "30px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Box>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "5px" }}
        >
          LOGIN
        </Typography>
        <AppForm
          FieldsArray={FieldsArray}
          buttonLabel="Login"
          handleSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={schema}
        />
        <Typography sx={{ marginTop: "10px" }}>
          Doesn&rsquo;t have an account yet? <Link href="/">Sign up</Link>
        </Typography>
      </AppCard>
    </Box>
  );
};

export default LoginPage;
