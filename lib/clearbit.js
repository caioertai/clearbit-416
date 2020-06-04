// Set code params and select needed elements
const baseURL = "https://person.clearbit.com/v1";
const authorizationKey = "Bearer sk_33883e2b8b3066b2216f3dd4aa063ee0";
const clearbitForm = document.querySelector("#clearbitForm");
const clearbitEmail = document.querySelector("#clearbitEmail");

// Define functions
const displayEmailInfo = (data) => {
  const nameDisplay = document.querySelector("#userName");
  const emailDisplay = document.querySelector("#userEmail");
  const bioDisplay = document.querySelector("#userBio");
  const locationDisplay = document.querySelector("#userLocation");

  nameDisplay.innerText = data.name.fullName;
  emailDisplay.innerText = data.email;
  bioDisplay.innerText = data.bio;
  locationDisplay.innerText = data.location;
};

const fetchAndDisplayEmailInfo = (email) => {
  const url = `${baseURL}/people/email/${email}`;
  fetch(url, {
    headers: {
      Authorization: authorizationKey
    }
  })
    .then((response) => response.json())
    .then(displayEmailInfo);
};

const handleClearbitForm = (event) => {
  event.preventDefault();
  const userInput = clearbitEmail.value;
  fetchAndDisplayEmailInfo(userInput);
};

// Assign behaviours
clearbitForm.addEventListener("submit", handleClearbitForm);
