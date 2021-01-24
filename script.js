;(() => {
  let user
  const submitButton = document.getElementById("submit")
  const inputElement = document.getElementById("input")
  const nameCard = document.getElementById("nameCard")
  const greetingCard = document.getElementById("greeting")
  const userElement = document.getElementById("userName")
  const alternativeGreeting = document.getElementById("alternativeGreeting")
  const pictureButton = document.querySelectorAll(".pictureButton")
  const imageWrapper = document.getElementById("imageWrapper")

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

  submitButton.addEventListener("click", () => {
    if (user.length > 0) {
      localStorage.setItem("user", user)
      setUserToDOM()
      toggleHiddens()
    }
  })

  inputElement.addEventListener("input", (e) => {
    user = e.target.value
    return user
  })
  pictureButton.forEach((button) => {
    button.addEventListener("click", () => {
      imageWrapper.classList.toggle("hidden")
    })
  })
})()
