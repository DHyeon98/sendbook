import { ReactNode, createContext, useContext } from "react";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";

// interface InputValue {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

interface InputType {
  type: string;
  name: string;
  placeholder: string;
  validation: object;
}

interface LabelType {
  htmlFor: string;
  children: ReactNode;
}

const formContext = createContext<any>(undefined);

export function Form({ children }: { children: ReactNode }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data: any) => {
    console.log("폼 완료", data);
  };
  return (
    <formContext.Provider value={{ register, errors }}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </formContext.Provider>
  );
}

function Input({ type, name, placeholder, validation }: InputType) {
  const { register, errors } = useContext(formContext);
  return (
    <>
      <input
        className={styles.input}
        id={name}
        placeholder={placeholder}
        type={type}
        {...register(name, validation)}
      />
      {errors[name] && (
        <span className={styles.errorText}>{errors[name].message}</span>
      )}
    </>
  );
}

function Email() {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return (
    <Input
      type="text"
      name="email"
      placeholder="이메일을 입력해주세요."
      validation={{
        required: "올바르지 않은 이메일 입니다.",
        pattern: {
          value: emailRegex,
          message: "이메일 형식을 확인해주세요.",
        },
      }}
    />
  );
}

function Password() {
  return (
    <Input
      type="password"
      name="password"
      placeholder="비밀번호를 입력해주세요."
      validation={{
        required: "올바르지 않은 비밀번호 입니다.",
        minLength: {
          value: 8,
          message: "8자 이상으로 작성해주세요.",
        },
      }}
    />
  );
}

function Label({ htmlFor, children }: LabelType) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

function Submit() {
  return (
    <button className={styles.button} type="submit">
      로그인
    </button>
  );
}

Form.Email = Email;
Form.Password = Password;
Form.Label = Label;
Form.Submit = Submit;
