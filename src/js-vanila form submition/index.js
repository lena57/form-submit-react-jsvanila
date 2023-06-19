(()=>{
  const URL = "https://www.greatfrontend.com/api/questions/contact-form";

    const form = document.querySelector("form");
    console.log('form', form)

    form.addEventListener("submit", async(e)=>{
      e.preventDefault();
    
      if(form.action!==URL){
        alert("form action is not correct");
        return;
      }

      if(form.method.toLowerCase()!=="post"){
        alert("form method is not correct");
        return;
      }

      try{
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;
      const formSubmit = {
        name,
        email, 
        message
      };
      console.log('formSubmit', formSubmit)
      const response = await fetch(URL, 
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formSubmit)
        })
        console.log('response', response)
        const text = await response.text();
        console.log('text', text)
        alert(text);

      }catch(err){
        alert("Form submittion error!", err)
      }

      
    })
})()