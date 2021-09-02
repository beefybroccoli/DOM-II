import { create_tag } from "./factory";

// Your code goes here
console.log("start index.js");

const div_outter = create_tag({
  type: "div",
  id: "outter",
  classArray: ["outter"],
});
const div_inner_A = create_tag({
  type: "div",
  id: "inner_A",
  classArray: ["inner_A"],
});
const div_inner_B = create_tag({
  type: "div",
  id: "innter_B",
  classArray: ["inner_B"],
});

const tag_p_a = create_tag({
  type: "p",
  textContent: "p tag a",
  id: "p_tag_a",
});
const tag_p_b = create_tag({
  type: "p",
  textContent: "p tag a",
  id: "p_tag_b",
});
div_inner_A.appendChild(tag_p_a);
div_inner_B.appendChild(tag_p_b);
[div_inner_A, div_inner_B].forEach((child) => div_outter.appendChild(child));

const first_child = document.querySelector(".home");
document.body.insertBefore(div_outter, first_child);

div_outter.addEventListener(
  "mouseover",
  (event) => {
    // console.log(event.target.id);
    console.log("(hover over grey box)");

    console.log(event.target.child);

    event.target.child.forEach((eachChild) => {
      eachChild.addEventListener("click", (child_evnet) => {
        console.log("click ", child_evnet.id);
      });
    });
  },
  false
);

/*

*/
