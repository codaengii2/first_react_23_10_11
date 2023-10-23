const favorite = [
  {
    id: 0,
    site: "네이버",
    adress: "https://www.naver.com",
  },
  {
    id: 1,
    site: "카카오",
    adress: "https://www.kakao.com",
  },
  {
    id: 2,
    site: "유튜브",
    adress: "https://www.youtube.com",
  },
];

export const FavSite = () => {
  return (
    <div>
      <h2>즐겨찾기</h2>
      {favorite.map((site) => (
        <div key={site.id}>
          <a href={site.adress}>{site.site}</a>
        </div>
      ))}
    </div>
  );
};
