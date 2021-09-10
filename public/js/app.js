const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locationSel = document.querySelector('#location')
const forecastSel = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (event) => {
    // Prevents auto refresh 
    event.preventDefault()

    const location = search.value

    locationSel.textContent = 'Loading...'
    forecastSel.textContent = ''
    
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                locationSel.textContent = data.error
            } else {
                locationSel.textContent = data.location
                forecastSel.textContent = data.forecast
            }
        })
    })
})