const form = document.getElementById('form')
const emailInput = document.getElementById('email')
const newsletter = document.querySelector('.newsletter-container')
const subscribe = document.querySelector('#form button')
const postSubscription = document.querySelector('.success-subscription')

form.addEventListener('submit', (event) => event.preventDefault())

const subHandleClick = (event) => {
  event.preventDefault()

  // Get the user's email from email input field
  const userEmail = emailInput.value

  // Check if the user's email is invalid or not
  const isEmailInvalid = userEmail === '' || !checkEmail(userEmail)

  // Get the previous element `span` from `emailInput`
  const previousElement = emailInput.previousElementSibling.lastElementChild

  // Get the paragraph element from the `postSubscripton` div
  const postSubParagraph = postSubscription.querySelector('p')
  
  if (isEmailInvalid) {
    emailInput.classList.add('error-input')
    previousElement.classList.add('error-message')
    previousElement.textContent = 'Valid email required'
  } else {
    emailInput.classList.remove('error-input')
    previousElement.classList.remove('error-message')
    previousElement.textContent = ''
    setInterval(() => {
      newsletter.style.display = 'none'
      postSubscription.style.display = 'flex'
      postSubParagraph.textContent = `
        A confirmation email has been sent to ${userEmail}. 
        Please open it and click the button inside to confirm your subscription.
      `
    }, 1000)
  }
}

// Function responsible for validating the user's email
const checkEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

subscribe.addEventListener('click', subHandleClick)
