const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement

const searchAddressHandler = (event: Event) => {
  event.preventDefault()
  const enteredAddress = addressInput.value

  console.log(enteredAddress)
}

form.addEventListener('submit', searchAddressHandler)
