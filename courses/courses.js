const boxWrapper = document.querySelector(".courses-wrapper");

let courseItems = [
  {
    id: 1,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Mathematics",
    description: "learn maths 101 in this course",
  },
  {
    id: 2,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Chemistry",
    description: "learn Chemistry 101 in this course",
  },
  {
    id: 3,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Chemistry",
    description: "learn Chemistry 101 in this course",
  },
  {
    id: 4,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Chemistry",
    description: "learn Chemistry 101 in this course",
  },
  {
    id: 5,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Chemistry",
    description: "learn Chemistry 101 in this course",
  },
  {
    id: 6,
    img: "../imgs/istockphoto-1931634876-612x612.jpg",
    title: "Chemistry",
    description: "learn Chemistry 101 in this course",
  },
];

courseItems.forEach(({ img, title, description }) => {
  let courseTemplate = `
<div class="box-container">
            <div class="box-image-container">
              <img class="image-cont" src=${img} alt="" />
            </div>
            <div>
              <h4>${title}</h4>
              <p>${description}</p>
            </div>
          </div>
          `;
  boxWrapper.insertAdjacentHTML("afterbegin", courseTemplate);
});