import * as yup from "yup";

export const BoardFormSchema = yup.object({
    name: yup.string().required("this field is required"),
    column: yup
        .string()
        .required("this field is required")
        .matches(/^[0-9]+$/, "this field should be a number"),
    row: yup
        .string()
        .required("this field is required")
        .matches(/^[0-9]+$/, "this field should be a number"),
});
