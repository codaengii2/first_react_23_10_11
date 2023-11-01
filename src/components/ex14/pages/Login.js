import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "../component/ErrorMessage";
const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 15px;
  margin-top: 10px;
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: hotpink;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", //기본값으로 적용됨 매번 값을 갱신시킴
  });

  // console.log(isValid);
  // => 유효성 검사 후 boolean값으로 반환함

  //   console.log(errors && errors.username && errors.username.message);
  // console.log(errors?.username?.message);
  // 옵셔널 체이닝 연산자
  // => &&연산자로 객체에 접근하는 것 보다 옵셔널 체이닝(Optional chaining)을 이용하여
  // 객체 안에 있는 객체를 쉽게 접근할 수 있음

  const loginHandler = (data) => {
    // 이벤트 함수 매개변수의 첫번째 자리는
    // 유저가 입력한 내용을 객체형태로 반환함
    // console.log(data);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>LOGIN</Title>

        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage text={errors?.username?.message} />
        <Input
          {...register("password", {
            required: "패스워드까지 작성해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 작성해주세요.",
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message: "숫자와 문자, 특수문자를 혼합해서 사용가능",
            },
            // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            //=> 정규식 표현 Regexp
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage text={errors?.password?.message} />

        <Button $isActive={isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};

// 차크라 css => css 편하게 쓰는 라이브러리..?

//... 스프레드 연산자

//e.preventDefault 자동

// *useForm
// => 폼 관련 패키지
// ex)
// const {
//   register, // input 태그 name 및 등록 역할
//   handleSubmit, // form 태그 이벤트 등록
//   formState: {errors, isValid} //form 상태를 관리
//  errors: form 유효성 검사 후 에러를 객체로 변환함,
//  isValid: form 상태가 유효한지 boolean값으로 반환
// } = useForm({
// mode: "onChange"// form 모드로 유효성 검사를 어떻게 처리할지 값은 작성할 수 있음
//});

{
  /* <input {register, ("name명",{
  required: "" //현 input값이 필수값인지 아닌지 boolean값 및 문자열로 작성가능
})} /> */
}
