const form = document.getElementById('form')
const emailInput = document.getElementById('email')
const newsletter = document.querySelector('.newsletter-container')
const subscribe = document.querySelector('#form button')
const postSubscription = document.querySelector('.success-subscription')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  subHandleClick(event)
})

const getUserEmail = (event) => {
  const userEmail = event.target.value
  const isEmailInvalid = userEmail === '' || !checkEmail(userEmail)
  const previousElement = emailInput.previousElementSibling.lastElementChild
  const postSubParagraph = postSubscription.querySelector('p')
  
  if (isEmailInvalid) {
    emailInput.classList.add('error-input')
    previousElement.classList.add('error-message')
    previousElement.textContent = 'Valid email required'
  } else {
    setInterval(() => {
      newsletter.style.display = 'none'
      postSubscription.style.display = 'flex'
      postSubParagraph.textContent = `
        A confirmation email has been sent to ${userEmail}. Please open it and click the button inside to confirm your subscription.
      `
    }, 1000)
  }
}

const subHandleClick = (event) => {
  event.preventDefault()

  getUserEmail(event)
}

const checkEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

subscribe.addEventListener('click', subHandleClick)
