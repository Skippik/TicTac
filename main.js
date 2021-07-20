const area = document.querySelector('.area');


let move = 0;

area.addEventListener('click', function (e){
    
    if (move % 2 === 0) {
        e.target.innerHTML = 'X';
    } else {
        e.target.innerHTML = '0';
    }
    check();
    move++
});

function check() {
    const boxes = document.getElementsByClassName('box');
    const winCombinatoins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,4,8],
        [2,4,6],

        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]

    for(let i = 0; i < winCombinatoins.length; i++) {
        if(boxes[winCombinatoins[i][0]].innerHTML === 'X' && boxes[winCombinatoins[i][1]].innerHTML === 'X' && boxes[winCombinatoins[i][2]].innerHTML === 'X') {
            alert('Победил крестик!');
            location.reload();
        }else if (boxes[winCombinatoins[i][0]].innerHTML === '0' && boxes[winCombinatoins[i][1]].innerHTML === '0' && boxes[winCombinatoins[i][2]].innerHTML === '0') {
            alert('Победил Нолик!');
            location.reload();
        }
    } 
}