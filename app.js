
const numInput = document.getElementById('number-input');
const displayLengthEl = document.getElementById('display-length-element');
const displayVolumeEl = document.getElementById('display-volume-element');
const displayMassEl = document.getElementById('display-mass-element');

numInput.addEventListener('input', function() {
    numInputValue = parseFloat(numInput.value);
    console.log(numInputValue)

    //////////////// LENGTH /////////////////////////////////////
    // meters to feet (formula = meter * 3.281 foot)
    let metersToFeet = (numInputValue * 3.281).toFixed(3);
    //  feet to meters(formula = foot / 3.281 foot)
    let feetToMeters = (numInputValue / 3.281).toFixed(3);
    // display Length
    displayLengthEl.textContent = `
        ${numInputValue} meters = ${metersToFeet} feet | 
        ${numInputValue} feet = ${feetToMeters} meters
        `;

    //////////////// VOLUME /////////////////////////////////////
    // liters to gallons (formula = liter / 4.546)
    let litersToGallons = (numInputValue / 4.546).toFixed(3);
    // gallons to liters (formula = gallon * 4.546)
    let gallonsToLiters = (numInputValue * 4.546).toFixed(3);
    // display Volume
    displayVolumeEl.textContent = `
        ${numInputValue} liters = ${litersToGallons} gallons | 
        ${numInputValue} gallons = ${gallonsToLiters} liters
        `;

    //////////////// MASS /////////////////////////////////////

    // kilos to pounds (formula = kilo * 2.205)
    let kilosToPounds = (numInputValue * 2.205 ).toFixed(3);
    // pounds to kilos (formula = kilo / 2.205)
    let PoundsToKilos  = (numInputValue / 2.205).toFixed(3);

    displayMassEl.textContent = `
    ${numInputValue} kilos = ${kilosToPounds} pounds | 
    ${numInputValue} Pounds = ${PoundsToKilos} kilos
    `;
})