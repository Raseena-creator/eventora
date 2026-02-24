const form = document.getElementById("eventform");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const eventInput = document.getElementById("event");
const dateInput = document.getElementById("event-date");
const messageInput = document.getElementById("message");

const result = document.getElementById("result");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const eventError = document.getElementById("eventError");
const dateError = document.getElementById("dateError");
const messageError = document.getElementById("messageError");



//Resuable Error Functions
function showError(element,message) {
	element.textContent = message;
}

function clearError(element){
	element.textContent ="";
}


//Name Validation
function validateName(){
	const value = nameInput.value.trim();
	const pattern = /^[A-Za-z\s]+$/;

	if (!pattern.test(value)) {
		showError(nameError, "Only letters and spaces allowed.");
		return false;
	}

	clearError(nameError);
	return true;
}


//Phone Validation
function validatePhone(){
	const value = phoneInput.value.trim();
	const pattern = /^[0-9]{10}$/;

	if (!pattern.test(value)) {
		showError(phoneError,"Enter valid 10-digit phone number.");
		return false;
	}

	clearError(phoneError);
	return true;
}



//Email Validation
function validateEmail(){
	const value = emailInput.value.trim();
	const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!pattern.test(value)) {
		showError(emailError, "Enter valid email.");
		return false;
	}

	clearError(emailError);
	return true;
}



//Event Type(select) Validation
function validateEvent() {
	const value = eventInput.value;

	if (value === "") {
		showError(eventError,"Please select event type.");
		return false;
	}

	clearError(eventError);
	return true;
}



//Date Validation
function validateDate(){
	const value = dateInput.value;

	if (value ==="") {
		showError(dateError, "Please select a date.");
		return false;
	}

	clearError(dateError);
	return true;
}



//Message Validation
function validatemessage() {
	const value = messageInput.value.trim();


	if (value.length < 10) {
		showError(messageError, "Message must be at least 10 characters.");
		return false;
	} 
	clearError(messageError);
	return true;
}



//Master Validation
function validateForm(){
	return(
	   validateName() &&
	   validatePhone() &&
	   validateEmail() &&
	   validateEvent() &&
	   validateDate() &&
	   validatemessage()
		);
}



//Submit Event
form.addEventListener("submit", function(e){
	e.preventDefault();

	result.textContent ="";

	if (validateForm()) {
		result.textContent = "Form submitted successfully!";
		result.style.color = "green";
	} else {
		result.textContent = "Please fix the errors.";
		result.style.color = "red";
	}
});