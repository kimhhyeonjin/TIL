export default function Home() {
  const name = "park";
  const link = "https://google.com";

  return (
    <div>
      <h4 className="title">신선배송</h4>
      <p className="title-sub">by dev {name}</p>
      <div style={{ textAlign: "center" }}>
        <a style={{ color: "red", fontSize: "12px" }} href={link}>
          링크
        </a>
      </div>
    </div>
  );
}
