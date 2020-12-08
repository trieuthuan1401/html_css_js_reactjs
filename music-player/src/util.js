import { uuid } from "uuidv4";
function chillHop() {
  return [
    {
      name: "BlackJack",
      cover:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/0/5/6/40564f839b476fd66838e497796a3d5f.jpg",
      artist: "Soobin",
      audio:
        "https://vnso-zn-24-tf-mp3-320s1-zmp3.zadn.vn/b388618ac9cd209379dc/1596613103323736812?authen=exp=1606924623~acl=/b388618ac9cd209379dc/*~hmac=cdfaeacbd5ddd5b72893734d088f6361",
      color: ["#205950", "#2ab3bf"],
      id: uuid(),
      active: false,
    },
    {
      name: "Hoa Hải Đường",
      cover:
        "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/8/f/3/e/8f3e26bca8dee0f1e42b77c41588727e.jpg",
      artist: "jack",
      audio:
        "https://vnso-zn-24-tf-mp3-s1-zmp3.zadn.vn/5ea0ffce4b89a2d7fb98/5383891903338973067?authen=exp=1607273529~acl=/5ea0ffce4b89a2d7fb98/*~hmac=08f09dd7cbeb4616c073874f02cee6aa",
      color: ["#205950", "#2ab3bf"],
      id: uuid(),
      active: false,
    },
  ];
}

export default chillHop;
