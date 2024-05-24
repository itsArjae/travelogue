import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./index.module.css";

interface Props {
  initialValues: any;
  validationSchema: any;
  handleSubmit: any;
  FieldsArray: Fields[];
  buttonLabel: string;
}

interface Fields {
  divider: boolean;
  title?: string;
  Fields: fieldObject[];
}

interface fieldObject {
  label: string;
  type: string;
  name: string;
}

const AppForm = (props: Props) => {
  return (
    <Box>
      <Formik
        onSubmit={props.handleSubmit}
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
      >
        <Form autoComplete="off" className={styles.form}>
          {props.FieldsArray.map((fields, index) => (
            <Box key={index}>
              <Box>
                <Typography>{fields.title}</Typography>
              </Box>
              {fields.divider ? (
                <Divider sx={{ marginBottom: "10px" }} />
              ) : (
                <></>
              )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                {fields.Fields.map((fieldsData, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      margin: ".2rem",
                      height: "50px",
                      width: "100%",
                    }}
                  >
                    <Field
                      fullWidth
                      id={fieldsData.name}
                      name={fieldsData.name}
                      label={fieldsData.label}
                      type={fieldsData.type}
                      placeholder={fieldsData.label}
                      className={styles.field__style}
                    />
                    <ErrorMessage
                      component="span"
                      name={fieldsData.name}
                      className={styles.error__message}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          ))}

          <Button type="submit" variant="outlined">
            {props.buttonLabel}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default AppForm;
