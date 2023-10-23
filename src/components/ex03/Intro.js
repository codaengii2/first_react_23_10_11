export const Intro = ({ name, age, job }) => {
  //   console.log(props);

  //   const name = props.name;
  //   const age = props.age;

  //   const { name, age } = props;
  //=> 객체 비구조화 할당 (destructuring assignment)
  // =>  const { property1, property2 } = props;

  return (
    <div>
      <h2>자기소개</h2>
      <h3>이름 : {name}</h3>
      <h4>나이 : {age}</h4>
      <h4>직업 : {job}</h4>
      <hr />
    </div>
  );
};

// *jsx 문법 내부에서 변수를 사용할땐
// 중괄호를 사용할 것
