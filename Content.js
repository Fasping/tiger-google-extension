let tigersImages = [
  "https://cdn.anime-planet.com/characters/primary/gon-beastars-1-190x266.jpg?t=1626039827",
  "https://cdn.anime-planet.com/characters/primary/bill-beastars-1-190x266.jpg?t=1626014925",
  "https://www.worldwildlife.org/species/tiger",
  "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_Walking_Madhya_Pradesh_India/story_full_width/9ghsu6o0ow_Medium_WW246778.jpg",
  "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_mother_and_cubs_Ranthambhore_national_park_India/story_full_width/objzha7dm_Medium_WW251528.jpg",
  "https://cdn.anime-planet.com/characters/primary/tiger-man-1-190x266.jpg?t=1626042642",
  "https://files.worldwildlife.org/wwfcmsprod/images/Tigers_playing_in_Bandhavgarh_national_park/story_full_width/2d0j28qcmz_Medium_WW250761.jpg",
  "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_365210634.jpg",
  "https://a-z-animals.com/media/2021/10/slumbering-little-tiger-picture-id472298390.jpg",
  "https://imgix.ranker.com/user_node_img/50073/1001452478/original/eskales-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150",
  "https://imgix.ranker.com/user_node_img/50073/1001452482/original/tama-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150",
  "",
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  const randomImg = Math.floor(Math.random() * tigersImages.length);
  imgs[i].src = tigersImages[randomImg];
}
