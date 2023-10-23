const users = [
  {
    id: 0,
    name: "김수인",
    age: 1,
  },
  {
    id: 1,
    name: "이정환",
    age: 2,
  },
  {
    id: 2,
    name: "김무무",
    age: 3,
  },
];

export const IntroEx = () => {
  return (
    <div>
      {users.map((human) => (
        <div key={human.id}>
          <h2>자기소개</h2>
          <h3>이름 : {human.name}</h3>
          <h3>나이 : {human.age}</h3>
        </div>
      ))}
    </div>
  );
};
