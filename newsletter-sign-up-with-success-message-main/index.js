

document.getElementById('submit').onclick = async () =>{
   const containerEl = document.querySelector('.container__main')
   const emailEl = document.getElementById('email').value
   const successEl = document.querySelector('.success__message')
   const emailRegex = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm
   
   
    if(emailEl==""){
        document.querySelector('.mail__row')
        .className = 'mail__fail'
    }
   
    else if(emailRegex.test(emailEl)==false){
        document.querySelector('.mail__row')
        .innerHTML = `
        <div class="mail__row">  
        <p>please enter a valid email address</p>
        <div class="input__mail">
          <label>Email address</label>
            <p>email is empty</p>
        </div>    
              <input id="email" 
              placeholder="email@company.com" 
              type="email">
              
        </div>
        </form>
        `
    }

    else {
    successEl.innerHTML =
       `<div class="success">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
            <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to 
                    <strong> ${emailEl}</strong> 
                    Please open it and click the button inside 
                    to confirm your subscription.
                </p>
            <button onclick=location.reload()>
            Dismiss message</button>
        </div>`
        containerEl.classList = 'container__fail'
    }}
