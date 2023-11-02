import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";
import {
  Wrap,
  Form,
  Title,
  Input,
  Separ,
  BottonInfo,
} from "../components/loginStyles";
import { ButtonUi } from "../components/ButtonUi";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = () => {};
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>LOGIN</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수입니다.",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage text={errors?.username?.message} />
        <Input
          {...register("password", {
            required: "비밀번호는 필수입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자리 이상입니다.",
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMessage text={errors?.password?.message} />
        <ButtonUi $isActice={isValid} buttonTitle={"로그인"} />
        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>
        <BottonInfo>
          아이디가 없으신가요? <Link to="/signup">회원가입 &rarr;</Link>
        </BottonInfo>
      </Form>
    </Wrap>
  );
};
