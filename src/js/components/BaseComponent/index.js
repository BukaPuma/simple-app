export default class BaseComponent {
    /*компонету сразу не отрисовываем */
    constructor(){
        this.component = null;
    }

    createComponent() {
        
    }
    render(container) {
        container.appendChild(this.component)
    }
}