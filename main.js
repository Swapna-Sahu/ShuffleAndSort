function shuffleCell() {
    let parent = document.getElementById("cells");
    let children = parent.children;
    toSort = Array.prototype.slice.call(children, 0);
    for (let i = 8; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        var temp = toSort[i];
        toSort[i] = toSort[j];
        toSort[j]= temp;
    }
    parent.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        parent.appendChild(toSort[i]);
    }
}

function sortCells() {
    let parent = document.getElementById("cells");
    let children = parent.children;
    toSort = Array.prototype.slice.call(children, 0);
    toSort.sort(function(a, b) {
        let aord = a.id;
        let bord = b.id;
        return aord - bord;
    });
    parent.innerHTML = "";
    for(let i = 0, l = toSort.length; i < l; i++) {
        parent.appendChild(toSort[i]);
    }
}

