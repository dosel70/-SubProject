const button1 = document.querySelector("#DNNumnvJufGXwxch");
const button2 = document.querySelector("#y1CCiyRHyO2bisBi");
const button3 = document.querySelector("#TNMMFVmHVXXCqJHQ");
const button4 = document.querySelector("#DIrjEPUbL4meVbgz");
const button5 = document.querySelector("#H5t9mBvpH7t2240l");

const modal = document.querySelector("#confirm-modal-container");

button1.addEventListener("click", () => {
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
});

button2.addEventListener("click", () => {
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
});

button3.addEventListener("click", () => {
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
});

button4.addEventListener("click", () => {
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
});

button5.addEventListener("click", () => {
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
});

const confirmed_btn_modal = document.querySelector("#alertify-o-ok");
confirmed_btn_modal.addEventListener("click", () => {
    modal.style.display = "none";
});
