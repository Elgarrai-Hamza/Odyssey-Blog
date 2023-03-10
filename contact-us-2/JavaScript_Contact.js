//change nav style
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
   })



//validation
   const form = document.getElementById('form');
   const username = document.getElementById('username');
   const email = document.getElementById('email');
   const message = document.getElementById('message');
   
   
   form.addEventListener('submit', e => {
       e.preventDefault();
       
       checkInputs();
   });
   
   function checkInputs() {
       // trim to remove the whitespaces
       const usernameValue = username.value.trim();
       const emailValue = email.value.trim();
       const messageValue = message.value.trim();
       
       
       if(usernameValue === '') {
           setErrorFor(username, 'Fullname cannot be blank');
       } else {
           setSuccessFor(username);
       }
       
       if(emailValue === '') {
           setErrorFor(email, 'Email cannot be blank');
       } else if (!isEmail(emailValue)) {
           setErrorFor(email, 'Not a valid email');
       } else {
           setSuccessFor(email);
       }
       
       if(messageValue === '') {
           setErrorFor(message, 'Message cannot be blank');
       } else {
           setSuccessFor(message);
       }
       
 
   }
   
   function setErrorFor(input, message) {
       const formControl = input.parentElement;
       const small = formControl.querySelector('small');
       formControl.className = 'form-control error';
       small.innerText = message;
   }
   
   function setSuccessFor(input) {
       const formControl = input.parentElement;
       formControl.className = 'form-control success';
   }
       
   function isEmail(email) {
       return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   }




   function alertmessage(){
	if(!checkInputs()){
		alert("Fill All the Blanks First")

	}
	
		
	
}
   