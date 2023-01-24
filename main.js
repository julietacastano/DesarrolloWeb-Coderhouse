function SendMail(e) {
  e.preventDefault()
    console.log('Hasta aca1')
    
    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    console.log('Hasta aca2')
  
    const serviceID = "service_rc0v7wg";
    const templateID = "template_4lfr4wh";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }