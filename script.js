// Function to change message text content
function changeMessage() {
    const message = document.getElementById("dynamicMessage");
    message.textContent = "Thank you for interacting with us at KABABA TECHCARE SOLUTIONS!";
}

// Function to toggle background color of a section
function toggleStyle() {
    const section = document.getElementById("styleToggle");
    section.classList.toggle("highlighted");
}

// Function to add a new service to the list
function addService() {
    const serviceList = document.getElementById("serviceList");
    const newItem = document.createElement("li");
    newItem.textContent = "Custom Software Development"; // You can randomize this if needed
    serviceList.appendChild(newItem);
}

// Function to remove the last service from the list
function removeService() {
    const serviceList = document.getElementById("serviceList");
    if (serviceList.lastElementChild) {
        serviceList.removeChild(serviceList.lastElementChild);
    }
}
