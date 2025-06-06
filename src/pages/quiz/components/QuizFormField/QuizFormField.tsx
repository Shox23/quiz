import { FC, memo } from "react";
import { FormFieldProps } from "./types";
import { Typography } from "antd";

export const FormField: FC<FormFieldProps> = memo(
  ({ title, children, id }) => (
    <div className="form-field" id={id.toString()}>
      <Typography.Title level={4} className="form-field__title">
        {title}
      </Typography.Title>
      <div className="form-field__content">{children}</div>
    </div>
  )
);

FormField.displayName = "FormField";
