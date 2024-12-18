const Site1 = document.querySelector('#Site1') // so children can be added
// to it
const LoginDiv = document.createElement('div') /*child of 
Site1 and contains passInput and passBtn */
LoginDiv.className = 'login'
LoginDiv.style.cssText = 'display: flex; flex-direction: column; border: 1px solid black; height: 200px; width: 200px; justify-content: space-evenly; align-items: center;'
const LoginText = document.createElement('div')
LoginText.textContent = 'hello world'
LoginText.style.cssText = 'font-size: 20px;'
Site1.appendChild(LoginDiv)
LoginDiv.appendChild(LoginText)//loginText = child of Login div