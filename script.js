const firstName = document.getElementById("name")
const lastName = document.getElementById("last-name")
const phoneNumber = document.getElementById("phone-number")
const button = document.getElementById("button")
const allInputFields = document.querySelectorAll("input")
const message = document.getElementById("message")

button.addEventListener("click", () => {
    message.innerText = "Poruka poslana, bićete kontaktirani!"
})

button.disabled = true

allInputFields.forEach(function(element) {
    element.addEventListener("input", () => {
        if (firstName.value.length > 1 && lastName.value.length > 1 && phoneNumber.value.length > 4) {
            button.disabled = false
        } else {
            button.disabled = true
    }}); 
    }
);
