;(() => {
  const submitButton = document.getElementById("submit")
  const inputElement = document.getElementById("input")
  const nameCard = document.getElementById("nameCard")
  const greetingCard = document.getElementById("greeting")
  const userElement = document.getElementById("userName")
  const alternativeGreeting = document.getElementById("alternativeGreeting")
  const pictureButton = document.querySelectorAll(".pictureButton")
  const imageWrapper = document.getElementById("imageWrapper")
  let user

  const setUserToDOM = () => {
    userElement.innerHTML = user
  }
  const toggleHiddens = () => {
    nameCard.classList.add("hidden")
    greetingCard.classList.remove("hidden")
  }
  const checkLocalStorage = (() => {
    if (localStorage.user) {
      user = localStorage.getItem("user")
      setUserToDOM()
      toggleHiddens()
      alternativeGreeting.innerHTML = "Nice to see you again"
    }
  })()

  const setUserToLocalStorage = () => {
    localStorage.setItem("user", user)
    setUserToDOM()
    toggleHiddens()
  }

  submitButton.addEventListener("click", () => {
    if (user.length > 0) {
      setUserToLocalStorage()
    }
  })

  inputElement.addEventListener("keyup", (e) => {
    user = e.target.value
    if (e.key === "Enter") {
      setUserToLocalStorage()
    }
  })
  pictureButton.forEach((button) => {
    button.addEventListener("click", () => {
      imageWrapper.classList.toggle("hidden")
    })
  })
})()
