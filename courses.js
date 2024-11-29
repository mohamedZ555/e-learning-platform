const videos = document.querySelector(".courses");

let video = [
  "./imgs/showVideo/child-5976951_640.jpg",
  "./imgs/showVideo/child-5976951_640.jpg",
  "./imgs/showVideo/child-5976951_640.jpg",
  "./imgs/showVideo/child-5976951_640.jpg",
  "./imgs/showVideo/child-5976951_640.jpg",
  "./imgs/showVideo/finger-2956974_640.jpg",
  "./imgs/showVideo/finger-2956974_640.jpg",
  "./imgs/showVideo/finger-2956974_640.jpg",
  "./imgs/showVideo/finger-2956974_640.jpg",
  "./imgs/showVideo/kids-5560586_640.jpg",
  "./imgs/showVideo/kids-5560586_640.jpg",
  "./imgs/showVideo/kids-5560586_640.jpg",
  "./imgs/showVideo/kindle-1867751_1280.jpg",
  "./imgs/showVideo/kindle-1867751_1280.jpg",
  "./imgs/showVideo/kindle-1867751_1280.jpg",
//   "imgs/Preview (1).png"
];

video.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Video Thumbnail";
  img.style.width = "300px"
  img.style.height = "200px" 
  videos.appendChild(img);
});