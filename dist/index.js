"use strict";
var tv = document.getElementById('televisao');
const onOff = document.querySelector('.onOff');
const home = document.querySelector('.home');
const netflix = document.querySelector('.netflix');
const before = document.querySelector('#before');
const next = document.querySelector('#next');
function tvOnOff() {
    if (tv.className == "on") {
        tv.src = "./img/off.jpg";
        tv.className = "off";
    }
    else {
        tv.src = "./img/galo640x360.gif";
        tv.className = "on";
    }
}
function Home() {
    tv.src = "./img/home.jpg";
}
function Netflix() {
    tv.src = "./img/netflx.jpg";
}
function Next() {
    if (tv.className == "on") {
        tv.src = "./img/heman-dance.gif";
    }
}
function Before() {
    if (tv.className == "on") {
        tv.src = "./img/galo640x360.gif";
    }
}
onOff.addEventListener('click', tvOnOff);
home.addEventListener('click', Home);
netflix.addEventListener('click', Netflix);
next.addEventListener('click', Next);
before.addEventListener('click', Before);
