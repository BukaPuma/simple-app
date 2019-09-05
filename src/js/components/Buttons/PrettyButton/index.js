import BaseButton from '../BaseButton'

export default class PrettyButton extends BaseButton {
    constructor(containerId, value, className) {
        super(containerId, value) //возвращает конструктор родительского класса
        this.className = className
    }
    render() {
        const btn = document.createElement('button')
        btn.innerText = this.value ? this.value : ''
        btn.classList.add(this.className)
        this.container.appendChild(btn)
    }
}