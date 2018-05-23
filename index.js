document.addEventListener("DOMContentLoaded", function(event) {

  const validateText = (id, pattern) => {
    document.getElementById(`${id}`).addEventListener('blur', function(e) {
      const element = e.target;
      if (pattern.test(element.value)) {
        element.setCustomValidity('');
        element.classList.add('valid');
      } else {
        element.setCustomValidity('Invalid');
        element.classList.add('invalid');
      }
    })
  }

  validateText('fullname', /^(([A-Z]?[a-z]*)\s)*([A-Z][a-z]*)$/)
  validateText('email', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  validateText('phone', /^(\+?\d{0,3}\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/);
  validateText('address', /\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./);
  validateText('country', /^([A-Z][a-z]+)(\s[A-Z][a-z]*)*$/);
  validateText('state', /^([A-Z][a-z]+)(\s[A-Z][a-z]*)*$/);
  validateText('city', /^([A-Z][a-z]+)(\s[A-Z][a-z]*)*$/);
  validateText('zipcode', /\d{4,8}/);

  document.getElementById(`email2`).addEventListener('blur', function(e) {
    const value = document.getElementById(`email`);
    if (e.target.value === value) {
      e.target.setCustomValidity('');
      e.target.classList.add('valid');
    } else {
      e.target.setCustomValidity('Invalid');
      e.target.classList.add('invalid');
    }
  })

  const checkBox = document.querySelectorAll(".checkboxDiv");
  for (let element of checkBox) {
    element.addEventListener("click", function(event) {
      const count = Array.from(element.children).reduce(function(acc, e) {
        if (e.children[0].checked === true)
          acc++;
        console.log(acc)
        return acc;
      }, 0);
      (count === 0)
        ? element.querySelector('input').setCustomValidity("Please check one option")
        : element.querySelector('input').setCustomValidity("")
    });
  }
});
