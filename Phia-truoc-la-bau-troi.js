// ✅ Background images (randomized on load)
const backgroundImages = [
  "images/Image1.png",
  "images/Image2.png",
  "images/Image3.png",
  "images/Image4.png",
  "images/Image5.png"
];

// ✅ Ad image(s) — can be single or multiple
const adImages = [
  "images/Image6.png"
];

// ✅ Bait links to pop open
const baitLinks = [
  "https://archive.org/details/the-pillow-book/page/n4/mode/1up",
  "http://gitmoma.org/artists/7901-an-my-le",
  "https://luatvietnam.vn/tin-phap-luat/luat-nghia-vu-quan-su-230-17913-article.html",
  "https://tamanhhospital.vn/cac-bien-phap-tranh-thai-an-toan/",
  "https://fulbright.edu.vn/vi/tuyen-sinh/hoc-bong/?utm_source=GGSearch&utm_medium=SEM&utm_campaign=29SpringMarCom&utm_term=BrandedKWs",
  "https://www.moma.org/research/conservation/matters-in-media-art", 
  "https://spcollege.libguides.com/c.php?g=254383&p=1695452",
  "https://vnexpress.net/danh-chong-toi-tap-vi-anh-dam-noi-song-khong-hanh-phuc-4799035.html",
  "https://www.jstor.org/stable/26965514",
  "https://www.google.com/search?q=Orange+and+Yellow",
  "https://www.youtube.com/watch?v=so8sB25IL4o",
  "https://quantrimang.com/cuoc-song/truyen-ma-ngan-185417",
  "https://cellphones.com.vn/sforum/phim-ngon-tinh-tong-tai",
  "https://www.crescentmall.com.vn/tenants/ovs",
  "https://s3.amazonaws.com/giin-web-assets/iris/assets/files/guidance/2019-12-12_IRIS-HT-Data%20Collection_R5.pdf",
  "https://genius.com/Lola-young-messy-lyrics",
  "https://nhipcaudautu.vn/phong-cach-song/di-tim-gia-tri-cho-cong-dong-lgbt-3357185/",
  "https://matca.vn/khoa-hoc-nhiep-anh-nang-cao-cung-jamie-maxtone-graham/",
  "https://tuoitre.vn/co-gi-o-mang-den-thien-duong-hong-ma-ca-ngan-du-khach-ve-tham-20231231183607197.htm",
  "https://thienvu.com.vn/tuyen-tap-100-bai-hat-karaoke-nhac-tre-hay-thinh-hanh-nhat",
  "https://www.vinmec.com/vie/bai-viet/dau-day-kinh-chan-phai-dieu-tri-nao-vi", 
  "https://www.google.com/search?q=L%C6%B0+M%E1%BA%ABn+San",
  "https://saveourseas.com/worldofsharks",
  "http://www.designishistory.com", 
  "https://wnfdiary.com/black-and-white-photography-vol-1/", 
  "https://afends.com/collections/fyb25-womens-jeans-pants",
  "https://tuoitre.vn/nha-trang-ong-trump-da-dat-ong-zelensky-vao-dung-vi-tri-20250312150728003.htm", 
  "https://vinwonders.com/vi/wonderpedia/news/mi-quang-ngon-o-sai-gon/", 
  "https://en.m.wikipedia.org/wiki/Rashid_(name)",
  "https://beyblade.fandom.com/wiki/Hell_Kerbecs_BD145EWD",
  "https://beyblade.fandom.com/wiki/Cloud_Lyra_85SF",
  "https://en.m.wikipedia.org/wiki/Discman", 
  "https://cheapeststore.ru/product/267011589476",
  "https://nhathuocminhchau.com/mounjaro-25mg05ml-lilly-4-but",
  "https://javhiv.com",
  "https://www.maisonmargiela.com/en-us/",
  "https://ffern.co/",
  "https://www.juliusroberts.co.uk",
  "http://socisdg.com/en/blog/what-would-happen-if-there-would-be-no-poverty-in-the-world/",
  "https://www.dafont.com/aisling.font?text=SUPER",
  "https://procreate.brushes.work/my-main-illustration-brushes/",
  "https://nettruyenvie.com/truyen-tranh/no-home/chuong-211",
  "https://tarot.com.vn/",
  "https://lyrics.vn/lyrics/18686-heaven.html",
  "https://youtu.be/ApbanRpMAwg?si=aI-3DuWI0PCag0eA",
  "https://www.youtube.com/watch?v=fKrTCGGEiWY",
  "https://www.youtube.com/watch?v=ph1xFfBNp3Q",
  "https://www.youtube.com/watch?v=CB1Qygf8aes",
  "https://www.youtube.com/watch?v=NB5Vhip9SOc",
  "https://www.youtube.com/watch?v=EBCKDJG8EpI",
  "https://thanhlyhangcu.com/",
  "https://vnexpress.net/dau-dau-mung-cuoi-500-000-dong-thi-it-mot-trieu-lai-nhieu-4812764.html"
];

// Run this code once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Set a random background image
  const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
  document.body.style.backgroundImage = `url(${randomBg})`;

  // ✅ Set a fixed or random ad image
  const initialAdImage = adImages[Math.floor(Math.random() * adImages.length)];
  const adImageElement = document.querySelector('#overlay-ad img');
  adImageElement.src = initialAdImage;

  // ✅ Click event on the fake close button
  document.getElementById("close-btn").addEventListener("click", () => {
    const randomLink = baitLinks[Math.floor(Math.random() * baitLinks.length)];
    window.open(randomLink, "_blank");

    // (Optional) change ad image each click
    const newAdImage = adImages[Math.floor(Math.random() * adImages.length)];
    adImageElement.src = newAdImage;
  });
});