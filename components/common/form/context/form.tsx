import { ReactNode, createContext, useContext } from "react";
import styles from "./form.module.css";
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  useForm,
} from "react-hook-form";

interface InputValue {
  username?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

interface FormType {
  children: ReactNode;
  submitFunc: (data: InputValue) => void;
}

interface InputType {
  type: string;
  name: keyof InputValue;
  placeholder: string;
  validation: object;
}

interface LabelType {
  htmlFor: string;
  children: ReactNode;
}

interface SubmitType {
  isLoading: boolean;
  children: ReactNode;
}

interface FormContextType {
  register: UseFormRegister<InputValue>;
  errors: FieldErrors<InputValue>;
  getValues: UseFormGetValues<InputValue>;
}

const formContext = createContext<FormContextType | undefined>(undefined);

export function Form({ children, submitFunc }: FormType) {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValue>({ mode: "onBlur" });
  const onSubmit = (data: InputValue) => {
    submitFunc(data);
  };
  return (
    <formContext.Provider value={{ register, errors, getValues }}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </formContext.Provider>
  );
}

function Input({ type, name, placeholder, validation }: InputType) {
  const context = useContext(formContext);
  if (!context) {
    throw new Error("유효한 위치에서 사용해야합니다.");
  }
  const { register, errors } = context;
  return (
    <>
      <input
        className={
          errors[name] ? `${styles.input} ${styles.error}` : styles.input
        }
        id={name}
        placeholder={placeholder}
        type={type}
        {...register(name, validation)}
      />
      {errors[name] && (
        <span className={styles.errorText}>{errors[name]?.message}</span>
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

function PasswordConfirm() {
  const context = useContext(formContext);
  if (!context) {
    throw new Error("유효한 위치에서 사용해야합니다.");
  }
  const { getValues } = context;
  return (
    <Input
      type="password"
      name="passwordConfirm"
      placeholder="비밀번호와 일치하는 값을 입력해주세요."
      validation={{
        required: "올바르지 않은 비밀번호 입니다.",
        minLength: {
          value: 8,
          message: "8자 이상으로 작성해주세요.",
        },
        validate: (value: string) =>
          value === getValues("password") || "비밀번호가 일치하지 않습니다.",
      }}
    />
  );
}

function Username() {
  return (
    <Input
      type="text"
      name="username"
      placeholder="닉네임을 입력해주세요."
      validation={{
        required: "올바르지 않은 닉네임 입니다.",
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

function Submit({ children, isLoading }: SubmitType) {
  return (
    <button
      className={
        isLoading ? `${styles.button} ${styles.loading}` : styles.button
      }
      type="submit"
      disabled={isLoading}
    >
      {children}
    </button>
  );
}

Form.Email = Email;
Form.Password = Password;
Form.PasswordConfirm = PasswordConfirm;
Form.Username = Username;
Form.Label = Label;
Form.Submit = Submit;
