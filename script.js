; (() => {
  const submitButton = document.getElementById("submit");
  const inputElement = document.getElementById("input");
  const nameCard = document.getElementById("nameCard");
  const greetingCard = document.getElementById("greeting");
  const userElement = document.getElementById("userName");
  const alternativeGreeting = document.getElementById("alternativeGreeting");
  const pictureButton = document.querySelectorAll(".pictureButton");
  const imageWrapper = document.getElementById("imageWrapper");
  const form = document.getElementById("nameCard");

  let users;
  let user;
  (() => {
    if (!localStorage.users) {
      users = ["Hejpa", "Dejpa"];
    } else {
      users = JSON.parse(localStorage.getItem("users"));
    }

  })();


  const toggleHiddens = () => {
    nameCard.classList.add("hidden");
    greetingCard.classList.remove("hidden");
  };


  inputElement.addEventListener("change", (e) => {
    user = e.target.value;
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    let capitalized = user.charAt(0).toUpperCase() + user.slice(1);
    if (users.includes(capitalized)) {
      alternativeGreeting.innerHTML = "Wait, you're no stranger.. Welcome back";
    } else {
      users.push(capitalized);
      localStorage.setItem("users", JSON.stringify(users));
    }
    toggleHiddens();
    userElement.innerHTML = capitalized;

  });

  pictureButton.forEach((button) => {
    button.addEventListener("click", () => {
      imageWrapper.classList.toggle("hidden");
    });
  });
})();
