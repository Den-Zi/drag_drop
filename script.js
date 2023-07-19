console.log('файл подлючен')

const dragItem = document.querySelectorAll('.dragItem');
const dropZone = document.querySelectorAll('.dropZone');

let draggedItem = null;
let droppedItem = null; // переменная над которой соверешн сброс 

dragItem.forEach(dragItem => {
    dragItem.addEventListener('dragstart', handlerDagrstart);
    dragItem.addEventListener('dragend', handlerDagrend);
    dragItem.addEventListener('drag', handlerDag);
    dragItem.addEventListener('dragenter', () => {   //Прослушка над элементом 
        if (dragItem !== droppedItem) { // если сбрасывание происходит нед над самим объектом будем его запоминать
            droppedItem = dragItem;
        }
    });
    dragItem.addEventListener('dragleave', () => {
        droppedItem = null;
    });

});

dropZone.forEach(dropZone => {
    dropZone.addEventListener('dragenter', handlerDragenter)
    dropZone.addEventListener('dragleave', handlerDragleave)
    dropZone.addEventListener('dragover', handlerDragover)
    dropZone.addEventListener('drop', handlerDrop)
})





function handlerDagrstart(event) {
    // console.log("dragstart", this);
    this.classList.add('dragItem--active');
    draggedItem = this;

    // event.dataTransfer.setData('dragItem', this.dataset.item);
}

function handlerDagrend(event) {
    // console.log("dragend", this)
    this.classList.remove('dragItem--active');
    draggedItem = null;
}

function handlerDag() {
    // console.log('drag')
}


function handlerDragenter(event) {
    event.preventDefault();
    // console.log('Dragover')
    this.classList.add('dropZone--active');
}

function handlerDragleave(event) {
    // console.log('Dragleave')
    this.classList.remove('dropZone--active');
}

function handlerDragover(event) {
    event.preventDefault();
    // console.log('Dragover')
}

function handlerDrop(event) {
    // const dragFlag = event.dataTransfer.getData('dragItem');
    // const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);
    if (droppedItem) {
        if (droppedItem.parentElement === draggedItem.parentElement) {
            // console.log('Общий родительский элемент')
            const children = Array.from(droppedItem.parentElement.children);
            const draggedIndex = children.indexOf(draggedItem);
            const droppedIndex = children.indexOf(droppedItem);

            if (draggedIndex > droppedIndex) {
                draggedItem.parentElement.insertBefore(draggedItem, droppedItem);
            } else {
                draggedItem.parentElement.insertBefore(draggedItem, droppedItem.nextElementSibling);
            };
        }
    } else {
        this.append(draggedItem);
    }
    dropZone.forEach((x) => x.classList.remove('dropZone--active'));
}