var image = document.getElementById("Author_image");
var content = document.getElementById("aboutcontent");
var mockupimage = document.getElementById("mockup_image");
var bookcontent = document.getElementById("bookcontent");
var contactimage = document.getElementById("contact_image");
var contactcontent = document.getElementById("contactcontent");
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
    if (scroll > 180 && scroll < 430) {
        image.style.display = "block";
        content.style.display = "block";
        content.style.width = scroll * 1.5 + "px";
        image.style.width = scroll * 1.5 + "px";
    }
    if (scroll > 600 && scroll < 838) {
        mockupimage.style.display = "block";
        bookcontent.style.display = "block";
        bookcontent.style.width = (scroll - 420) * 1.5 + "px";
        mockupimage.style.width = (scroll - 420) * 1.5 + "px";
    }
    if (scroll > 1200 && scroll < 1540) {
        contactimage.style.display = "block";
        contactcontent.style.display = "block";
        contactcontent.style.width = (scroll - 1120) * 1.5 + "px";
        contactimage.style.width = (scroll - 1120) * 1.5 + "px";
    }
});