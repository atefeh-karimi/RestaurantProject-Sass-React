import React from "react";

function AppPromotion() {
  return (
    <>
      {url.map((c) => {
        return (
          <img key={c.id} src={process.env.PUBLIC_URL + c.url} alt={c.title} />
        );
      })}
    </>
  );
}
const url = [
  {
    id: 1,
    title: "google-play",
    url: "/image/android-google-play.svg",
  },
  {
    id: 2,
    title: "app-sotre",
    url: "/image/apple-app-sotre.svg",
  },
  {
    id: 3,
    title: "huawei-download",
    url: "/image/huawei-download-icon.png",
  },
];
export default AppPromotion;
