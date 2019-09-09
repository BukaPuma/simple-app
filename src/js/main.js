import Domworker from './DomWorker'

import TitleComponent from './components/TitleComponent'
import ListComponent from './components/ListComponent'
import CenterComponent from './components/CenterComponent'

const names = ['Harry', 'Rohn', 'Jiny', 'Germiona']
Domworker.mount(new TitleComponent('Pro'), 
document.getElementById('title'))

Domworker.mount(new ListComponent(names), 
document.getElementById('list')
)

Domworker.mount(
    new CenterComponent(
        new ListComponent(names)
        ), 
    document.getElementById('center')
)

const btn = document.createElement('button')
btn.innerText = 'Click'


Domworker.mount(new CenterComponent(btn), 
document.getElementById('center_second')
)

const brush = {
    createComponent: function() {console.log('Я создатель')},


    render : function(canvas) {
        canvas.style.width = '250px'
        canvas.style.height = '250px'
        canvas.style.backgroundColor = this.color
    },

    setColor: function(color) {
        this.color = color
        return this
    }


}

Domworker.mount(
    brush.setColor('red'),
    document.getElementById('other')
)



