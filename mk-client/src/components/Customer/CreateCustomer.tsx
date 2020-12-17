import { FormikProps } from "formik";
import React from "react";
import { CustomerEditForm } from "interfaces/CustomerEditForm";

interface OwnProps {
}

interface FormValues {
    fields: CustomerEditForm;
}

type FormProps = OwnProps;
type Props = FormProps & FormikProps<FormValues>;

class CreateCustomerComponent extends React.PureComponent<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return 'Create customer';
    }
}

export const CreateCustomer = CreateCustomerComponent;