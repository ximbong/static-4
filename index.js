document.addEventListener("DOMContentLoaded", function(event) {

  const validateText = (id, pattern) => {
    document.getElementById(`${id}`).addEventListener('blur', function(e) {
      const element = e.target;
      console.log(element.value)
      if (pattern.test(element.value)) {
        element.setCustomValidity('');
        element.classList.add('valid');
      } else {
        element.setCustomValidity('123 alo');
        element.classList.add('invalid');
      }
    })
  }

  validateText('fullname', /^(([A-Z]?[a-z]*)\s)*([A-Z][a-z]*)$/)
  validateText('email', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  validateText('phone', /^(\+?\d{0,3}\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/);
  validateText('address', /\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./);
  validateText('country', /[a-zA-Z\s]+/);
  validateText('state', /[a-zA-Z\s]+/);
  validateText('city', /[a-zA-Z\s]+/);
  validateText('zipcode', /\d{4,8}/);

  document.getElementById(`email2`).addEventListener('blur', function(e) {
    const value = document.getElementById(`email`);
    if (e.target.value === value) {
      e.target.setCustomValidity('');
      e.target.classList.add('valid');
    } else {
      e.target.setCustomValidity('123 alo');
      e.target.classList.add('invalid');
    }
  })
});
