const Site1 = document.querySelector('#Site1') // so children can be added
// to it
const CandyTop = document.createElement('div'),
LoginDiv = document.createElement('div'),
CandyBottom = document.createElement('div')
/*child of Site1 and contains passInput and passBtn */
CandyTop.className = 'candy'
CandyBottom.className = 'candy'
CandyTop.style.cssText = 'display: flex; justify-content: space-evenly; height: 200px; width: 800px;'
CandyBottom.style.cssText = 'display: flex; justify-content: space-evenly; height: 200px; width: 800px;'
LoginDiv.className = 'login'
LoginDiv.style.cssText = 'display: flex; flex-direction: column; border: 1px solid black; height: 200px; width: 200px; justify-content: space-evenly; align-items: center;'
const LoginText = document.createElement('div')
LoginText.textContent = 'hello world'
LoginText.style.cssText = 'font-size: 20px;'
Site1.appendChild(CandyTop)
Site1.appendChild(LoginDiv)
LoginDiv.appendChild(LoginText)//loginText = child of Login div
Site1.appendChild(CandyBottom)
function DisplayCandy() {
    let i = 1
    while (i <= 3) {
        const Pics = document.createElement('img')
        Pics.src = `candy/candy${i}.png`
        Pics.style.height = '200px'
        Pics.style.width = '220px'
        CandyTop.appendChild(Pics)
        i++
    }
}
DisplayCandy()
function DisplayCookies() {
    let j = 1
    while (j <= 3) {
        const Pics1 = document.createElement('img')
        Pics1.src = `candy/cookies${j}.png`
        Pics1.style.height = '200px'
        Pics1.style.width = '220px'
        CandyBottom.appendChild(Pics1)
        j++
    }
}
DisplayCookies()