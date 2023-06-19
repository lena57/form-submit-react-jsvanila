const URL='https://www.greatfrontend.com/api/questions/contact-form';

export default async function submitForm(e){
  e.preventDefault();
  const form = e.target;
  console.log('form', form)

  if(form.action!==URL){
    alert('form acton is not correct');
    return;
  }
  if(form.method.toLowerCase()!=='post'){
    alert('form method is not correct');
    return;
  }

  try{
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const formSubmit={
      name, email, message
    }
    console.log('formSubmit', formSubmit)

    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formSubmit),
    })
    console.log('response', res);
    const text = await res.text();
    console.log('text', text);
    alert(text)
  }
  catch(err){
    alert('form submition error', err);
  }
}