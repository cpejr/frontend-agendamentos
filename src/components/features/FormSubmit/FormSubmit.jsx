import { useState } from "react";
import Input from "../../commons/Inputs/Inputs";
import { ErrorMessage, FormContainer, IconWrapper1, InputWrapper } from "./Styles";
import { Eye, EyeOff } from "lucide-react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function FormSubmit({ inputs, onSubmit, schema, children }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState({});

  const togglePasswordVisibility = (key) => {
    setShowPassword((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  function submitHandler(data) {
    onSubmit(data);
    reset();
  }

  return (
    <FormContainer onSubmit={handleSubmit(submitHandler)}>
      {inputs.map((input) => (
        <InputWrapper key={input.key}>
          <Input
            type={input.type === "password" && showPassword[input.key] ? "text" : input.type}
            name={input.key}
            placeholder={input.placeholder}
            {...register(input.key)}
          />
          {input.type === "password" && (
            <IconWrapper1 onClick={() => togglePasswordVisibility(input.key)}>
              {showPassword[input.key] ? <Eye /> : <EyeOff />}
            </IconWrapper1>
          )}
          {errors[input.key] && <ErrorMessage>{errors[input.key]?.message || "Erro desconhecido"}</ErrorMessage>}
        </InputWrapper>
      ))}
      {children}
    </FormContainer>
  );
}

FormSubmit.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.instanceOf(Object).isRequired,
};
