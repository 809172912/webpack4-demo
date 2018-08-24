import $ from "jquery";
import "./hello-component.less";

let project = {
    name: "Hello webpack"
};
$("#app").append(`<div id="hello-component">${project.name}</div>`);

function a () {
    if(project.name === "Hello webpack") {
        console.log("a");
    }
}
a();
function b () {
    console.log("b");
}
b();