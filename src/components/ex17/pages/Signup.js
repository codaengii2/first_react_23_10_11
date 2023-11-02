import { useForm } from "react-hook-form";
import {
  Wrap,
  Form,
  Title,
  Input,
  Separ,
  BottonInfo,
} from "../components/loginStyles";
import { ErrorMessage } from "../components/ErrorMessage";
import { Link } from "react-router-dom";
import { ButtonUi } from "../components/ButtonUi";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = () => {};
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>Signup</Title>
        <Input
          {...register("name", {
            required: "이름을 입력해주세요",
          })}
          type="password"
          placeholder="이름"
        />
        <ErrorMessage text={errors?.name?.message} />

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
        <Input {...register("email")} type="password" placeholder="이메일" />
        <ButtonUi $isActive={isValid} buttonTitle={"회원가입"}></ButtonUi>
        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>
        <BottonInfo>
          아이디가 있으신가요? <Link to="/login">로그인 &rarr;</Link>
        </BottonInfo>
      </Form>
    </Wrap>
  );
};
