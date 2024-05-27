import { ReactNode, createContext, useContext } from "react";
import { useForm } from "react-hook-form";

interface InputValue {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const formContext = createContext<any>(undefined);

export function Form({ children }: { children: ReactNode }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {
    console.log("폼 완료");
  };
  return (
    <formContext.Provider value={{ register }}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </formContext.Provider>
  );
}

function Email() {
  const { register } = useContext(formContext);
  return (
    <input type="text" name="firstName" ref={...register({ required: true })} />
  );
}

Form.Email = Email;
