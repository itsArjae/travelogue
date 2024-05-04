import { Box } from "@mui/material"
import { Form, Formik } from "formik";


const AppForm = () => {

    const initialValues = {
        id: ""
    }

    const onSubmit = (values: any, actions: any) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }
    return(
        <Box>
            <Formik onSubmit={onSubmit} initialValues={initialValues} >
                <Form>
                    
                </Form>
            </Formik>
        </Box>
    )
}

export default AppForm;