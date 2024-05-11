import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

form.addEventListener("input", handleUinpet)
const formData = {
    email: "",
    message: "" 
}
function handleUinpet(event) {
    const key = event.target.name
    formData[key] = event.target.value;
    console.log(formData);
}

function populateText() {
    const data = JSON.parse(localStorage.getItem());
    if (!data) {
        return;
    }
    const { email, message } = form.elements;
    email.value = data.email;
    message.value = data.message;
}