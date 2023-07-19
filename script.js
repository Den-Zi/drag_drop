console.log('файл подлючен')

const dragItem = document.querySelectorAll('.dragItem');
const dropZone = document.querySelectorAll('.dropZone');

dragItem.forEach(dragItem => {
    dragItem.addEventListener('dragstart', handlerDagrstart)
    dragItem.addEventListener('dragend', handlerDagrend)
    dragItem.addEventListener('drag', handlerDag)
});

dropZone.forEach(dropZone => {
    dropZone.addEventListener('dragenter', handlerDragenter)
    dropZone.addEventListener('dragleave', handlerDragleave)
    dropZone.addEventListener('dragover', handlerDragover)
    dropZone.addEventListener('drop', handlerDrop)
})

let draggedItem = null;



function handlerDagrstart (event) {
    // console.log("dragstart", this);
    this.classList.add('dragItem--active');
    draggedItem = this;

    // event.dataTransfer.setData('dragItem', this.dataset.item);
}

function handlerDagrend (event) {
    // console.log("dragend", this)
    this.classList.remove('dragItem--active');
    draggedItem = null;
}

function handlerDag () {
    // console.log('drag')
}


function handlerDragenter (event) {
    event.preventDefault();
    // console.log('Dragover')
    this.classList.add('dropZone--active');
}

function handlerDragleave (event) {
    // console.log('Dragleave')
    this.classList.remove('dropZone--active');
}

function handlerDragover (event) {
    event.preventDefault();
    // console.log('Dragover')
}

function handlerDrop (event) {
    // const dragFlag = event.dataTransfer.getData('dragItem');
    // const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);
    this.append(draggedItem);
}