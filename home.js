"use strict";

const mainGalleryButton = document.getElementById("main-gallery-button");
const principalImgSection = document.getElementById("principal-img-section")
const galleryImageWindowSection = document.getElementById("gallery-image-window-section");
const imageWindowBase = document.getElementById("image-window-base")
const galleryWindowSection = document.getElementById("gallery-window-section");
const galleryOpenedSection = document.getElementById("gallery-opened-section");
const galleryOpenedImg = document.getElementById("gallery-opened-img");
const imageWindowExitButton = document.getElementById("image-window-exit-button");
const galleryOpenedPanelControl = document.getElementById("gallery-opened-panel-control");
const galleryBackButton = document.getElementById("gallery-back-button");
const mainGallery = document.getElementById("main-gallery");

let imgData = null;
let windowImgData = null;

principalImgSection.style.opacity = "1";

if (galleryWindowSection.style.opacity == 0) {
    galleryBackButton.addEventListener("click", () => {
        galleryWindowSection.style.top = "-100vh"
        document.documentElement.style.overflowY = "scroll"
        setTimeout(function () {
            galleryWindowSection.style.opacity = "0"
            //There you need to add the code to delete the data of the galleryOpenedSection

        }, 600)
    })
};

class Image {
    constructor(src, title, description, date, id) {
        this.src = src,
        this.title = title,
        this.description = description,
        this.date = date,
        this.id = id,
        this.windowHtml = null
    }
}

let imagesList = []

let paulaImg = new Image("../sources/starting.jpg", "Congratulations Paula!", "You Graduated as lawyer", "10/11/23", 0);
let sphereImg = new Image("../sources/starting2.jpg", "Congratulations sphere!", "You Graduated as Programmer", "11/01/23", 1);
let paulaImg2 = new Image("../sources/starting.jpg", "Congratulations Paula!", "You Graduated as lawyer", "10/11/23", 2);
let sphereImg2 = new Image("../sources/starting2.jpg", "Congratulations sphere!", "You Graduated as Programmer", "11/01/23", 3);
let paulaImg3 = new Image("../sources/starting.jpg", "Congratulations Paula!", "You Graduated as lawyer", "10/11/23", 4);
let sphereImg3 = new Image("../sources/starting2.jpg", "Congratulations sphere!", "You Graduated as Programmer", "11/01/23", 5);

imagesList.push(paulaImg, sphereImg, paulaImg2, sphereImg2, paulaImg3, sphereImg3);

imagesList.forEach(image => {
    imgData = `<div class="gallery-img-div-c">
        <img class="main-gallery-img-c" src="${image.src}" alt="Main Gallery Img">
        <button id="gallery-img-button${image.id}" class="gallery-img-button-c" onclick = galleryImgButtonClick(${image.id})><i class='bx bx-message-square'></i>Open</button>
        </div>`
    mainGallery.innerHTML += imgData
})

function galleryImgButtonClick (a) {
    for (let i = 0; i < imagesList.length; i++) {   
        if (imagesList[i].id == a) {
            imagesList[i].windowHtml = `<div class="gallery-window-img-div-c">
                <img src="${imagesList[a].src}" alt="Gallery Img">
            </div>
            <div class="gallery-window-control-panel-c">
                <i id="image-window-exit-button" class='bx bx-exit' onclick = closeImgWindow(${a})></i>
                <i class='bx bx-up-arrow-alt'></i>
                <i class='bx bx-down-arrow-alt' ></i>
            </div>
            <div class="gallery-window-content-div-c">
                <h1>${imagesList[a].title}</h1>
                <p>${imagesList[a].description}</p>
                <p>${imagesList[a].date}</p>
                <p>bla</p>
                <div class="gallery-content-buttons-div-c">
                    <button class="gallery-content-buttons-c">Hello</button>
                    <button class="gallery-content-buttons-c">bye</button>
                </div>
            </div>`
        }
    }
    galleryImageWindowSection.style.display = "flex"
    galleryImageWindowSection.style.opacity = "1"
    galleryImageWindowSection.style.top = "0"
    imageWindowBase.innerHTML = imagesList[a].windowHtml;
}

function closeImgWindow (id) {
    imagesList[id].windowHtml = null
    galleryImageWindowSection.style.top = "-200vh"
    setTimeout(() => galleryImageWindowSection.style.opacity = "0", 600)
    
}

mainGalleryButton.addEventListener("click", function () {
    galleryWindowSection.style.opacity = "1"
    galleryWindowSection.style.top = "0"
    document.documentElement.style.overflowY = "hidden"
    imagesList.forEach(image => {
        windowImgData = `<div class="gallery-opened-img-div-c">
        <img id="gallery-opened-img${image.id}" class="gallery-opened-img-c" src="${image.src}" alt="Gallery Img" onclick = galleryImgButtonClick(${image.id})>
        </div>`
    galleryOpenedSection.innerHTML += windowImgData;
        });
});