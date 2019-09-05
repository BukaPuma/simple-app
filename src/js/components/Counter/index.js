export default class Counter{
    constructor(container) {
        this.count = 0 
        this.timer = null        
        this.buildView(container)
     
    }

    buildView(container){
        const display = document.createElement('h3')
        display.classList.add('counter__display')
        const row = document.createElement('div')
        row.classList.add('counter__row')
        

        const btnPlus = document.createElement('button')
        btnPlus.classList.add('counter__btn')
        btnPlus.innerText ='UP'
        btnPlus.addEventListener('click', () => {this.plus(display)}) //чтобы вызывать функции плюс и минумс

        const btnMinus = document.createElement('button')
        btnMinus.classList.add('counter__btn')
        btnMinus.innerText = 'DOWN'
        btnMinus.addEventListener('click', () => {this.minus(display)})

        const btnStart = document.createElement('button')
        btnStart.classList.add('counter__btn')
        btnStart.innerText = 'START'
        btnStart.addEventListener('click', () => {this.timerStart(display)} )

        const btnStop = document.createElement('button')
        btnStop.classList.add('counter__btn')
        btnStop.innerText = 'STOP'
        btnStop.addEventListener('click', () => {this.timerStop()})



        row.appendChild(btnPlus)
        row.appendChild(btnMinus)
        row.appendChild(btnStart)
        row.appendChild(btnStop)
        container.appendChild(display)
        container.appendChild(row)


    }
    
    plus(display) {
        this.count++
        display.innerText = this.count

    }

    minus(display) {
        this.count--
        display.innerText = this.count
    }

    timerStart(display) {
        this.timer = setInterval(() => { 
            this.count++
            display.innerText = this.count
        }, 1000)
    }

    timerStop() {
        clearInterval(this.timer)
        this.timer = null
    }

    
}