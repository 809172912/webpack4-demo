import $ from "jquery";
import _ from "lodash";
import "./loadsh-array.less";

let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

$("#app").append(`<div>${_.chunk(array, 3)[0]}</div>`);
