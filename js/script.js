var popup = document.querySelector(".feedback-modal-wrapper");
var link = document.querySelector(".feedback-form-btn");
var catalogItem = document.querySelectorAll(".catalog-item");

if (popup != null) {
    close = popup.querySelector(".close");
}
if (link != null & popup != null) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("feedback-modal-wrapper-show");
    });
    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("feedback-modal-wrapper-show");
    });
}
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("feedback-modal-wrapper-show")) {
            popup.classList.remove("feedback-modal-wrapper-show");
        }
    }
});
[].forEach.call(catalogItem, function(event) {
    event.addEventListener("mouseover", ver, !0);
    event.addEventListener("mouseout", out, !0);
    function ver() {
        event.classList.add("catalog-item-index");
    }
    function out() {
        event.classList.contains("catalog-item-index");
        event.classList.remove("catalog-item-index");
    }
})
