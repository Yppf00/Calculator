let display = document.getElementById('display')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let divine = document.getElementById('divine')
let multiply = document.getElementById('multiply')
let clear = document.getElementById('clear')
let equals = document.getElementById('equals')
let decimal = document.getElementById('decimal')
let lb = document.getElementById('lb')
let rb = document.getElementById('rb')
let delete1 = document.getElementById('delete1')
let numbers = document.getElementsByClassName('numbers')
for (let i = 0; i < numbers.length; i++) {
   numbers[i].addEventListener('click', function (e) {
      let number = parseInt(e.target.innerText)
      display.innerText += number
   })
}
plus.addEventListener('click', () => {
   display.innerText += '+'
})
minus.addEventListener('click', () => {
   display.innerText += '-'
})
divine.addEventListener('click', () => {
   display.innerText += '/'
})
multiply.addEventListener('click', () => {
   display.innerText += '*'
})
clear.addEventListener('click', () => {
   display.innerText = ''
})
lb.addEventListener('click', () => {
   display.innerText += '('
})
rb.addEventListener('click', () => {
   display.innerText += ')'
})
decimal.addEventListener('click', () => {
   display.innerText += '.'
})
delete1.addEventListener('click', () => {
   display.innerText = display.innerText.slice(0, -1);
})
equals.addEventListener('click', () => {
   display.innerText = eval(display.innerText)
   if (isNaN(display.innerText)) {
      display.innerText = 'Error'
   }
})