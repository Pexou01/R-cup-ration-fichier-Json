
const pwd = document.querySelector('#password');
const mail = document.querySelector('#email');
//  verification du chant saisie avec contrinte du @ par utilisateur dans email avec le code couleur
mail.addEventListener('input', ({ target: { value } }) => {
if (value.length === 0)
  mail.style.borderColor = 'black';
else if (!value.includes('@'))
 mail.style.borderColor = 'red';
  else
    mail.style.borderColor = 'green';
});
//  verification du chant saisie  avec contrinte de  minimum 8 caractaire par utilisateur dans mot de pass avec le code couleur
  pwd.addEventListener('input', ({ target: { value } }) => {
    if (value.length === 0)
      pwd.style.borderColor = 'black';
    else if (value.length < 8)
        pwd.style.borderColor = 'red';
        else
          pwd.style.borderColor = 'green';
  });
