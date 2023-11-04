document.addEventListener('DOMContentLoaded', () => {
    const otpInputs = document.querySelectorAll('.otp-input');
    const otpDisplay = document.querySelector('.otp-display');
    const otpHidden = document.querySelector('.otp-hidden');
    const submitButton = document.getElementById('submitOTP');
  
    function updateSubmitButton() {
      const otpText = Array.from(otpInputs).map(input => input.value).join('');
      if (otpText.length === 4) {
        submitButton.classList.add('active');
      } else {
        submitButton.classList.remove('active');
      }
    }
  
    otpInputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        if (input.value.length === 1) { // Only allow one character per input
          if (index < otpInputs.length - 1) {
            otpInputs[index + 1].removeAttribute('disabled');
            otpInputs[index + 1].focus();
          } else {
            let otpText = Array.from(otpInputs).map(input => input.value).join('');
            otpDisplay.textContent = otpText;
            otpHidden.value = otpText;
            updateSubmitButton(); // Check if all characters are entered
          }
        } else if (input.value.length > 1) {
          input.value = input.value.slice(0, 1); // Only keep the first character
        } else if (input.value.length === 0 && index > 0) {
          otpInputs[index - 1].removeAttribute('disabled');
          otpInputs[index - 1].focus();
        }
  
        updateSubmitButton(); // Check if all characters are entered
      });
    });
  
    otpInputs[0].removeAttribute('disabled'); // Enable the first input by default
  
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission for this example
      let otpText = otpHidden.value;
      let displayElement = document.querySelector('.submitted-otp');
  
      if (otpText.length === 4) {
        displayElement.textContent = otpText;
        displayElement.style.color = 'red';
      }
    });
  });
  
  window.addEventListener("load", () => otpInputs[0].focus());
  