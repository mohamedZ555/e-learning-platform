const boxWrapper = document.querySelector(".courses-wrapper");

let courseItems = [
  {
    id: 1,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Mathematics",
    description: "learn maths 101  ",
  },
  {
    id: 2,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "physics",
    description: "learn physics 101  ",
  },
  {
    id: 3,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Mathematics",
    description: "learn Mathematics 101  ",
  },
  {
    id: 4,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Django",
    description: "learn django 101  ",
  },
  {
    id: 5,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Stupidity",
    description: "learn how to be stupid 101  ",
  },
  {
    id: 6,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Learn",
    description: "learn how to learn 101  ",
  },
];

courseItems.forEach(({ img, title, description }) => {
  let courseTemplate = `
<div class="box-container">
<div class='box-inner-wrapper'>
            <div class="box-image-container">
              <img class="image-cont" src=${img} alt="" />
            </div>
            <div class="box-text-container ">
              <h4>${title}</h4>
              <p>${description}</p>
            </div>
          </div>
     </div>
          `;
  boxWrapper.insertAdjacentHTML("beforeend", courseTemplate);
});

window.onscroll = function () {
  myScrollFunction();
};

function myScrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").classList.add("animateHeader");
  } else {
    document.getElementById("header").classList.remove("animateHeader");
  }
}
