export const FoodMenu = ({ menus }) => {
  //   console.log(menus);
  return (
    <>
      {/* <div>
        <h2>{week} 메뉴</h2>
        <h3>breakfast : {breakfast}</h3>
        <h3>lunch : {lunch}</h3>
        <h3>dinner : {dinner}</h3>
      </div> */}

      {/* <div>
        <h2>{menus[0].week} 메뉴</h2>
        <h2>breakfast : {menus[0].breakfast} </h2>
        <h2>lunch : {menus[0].lunch} </h2>
        <h2>dinner : {menus[0].dinner} </h2>
      </div>

      <div>
        <h2>{menus[1].week} 메뉴</h2>
        <h2>breakfast : {menus[1].breakfast} </h2>
        <h2>lunch : {menus[1].lunch} </h2>
        <h2>dinner : {menus[1].dinner} </h2>
      </div>

      <div>
        <h2>{menus[2].week} 메뉴</h2>
        <h2>breakfast : {menus[2].breakfast} </h2>
        <h2>lunch : {menus[2].lunch} </h2>
        <h2>dinner : {menus[2].dinner} </h2>
      </div> */}

      {/* {menus.map((menu) => (
        <div key>
        
        </div>
      ))} */}
    </>
  );
};

// jsX는 무조건 부모태그 하나로 묶어줘야하는데
// 역할을 하지않는 태그를 엑스트라 태그라고 함
// => 그래서 fragment 태그를 대신 사용함
