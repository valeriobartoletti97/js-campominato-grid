const btn = document.querySelector('button');


btn.addEventListener('click', function(){
    const difficulty = document.querySelector('select').value;
    /* faccio sparire la select ed il bottone */
    const gameStart = document.getElementById('game-start');
    gameStart.classList.add('d-none');
    /* numero di quadratini da generare */
    if(difficulty === '2'){
        numSquare = 81;
    } else if (difficulty === '3'){
        numSquare = 49;
    } else {
         numSquare = 100;
    };
    /* mi prendo la griglia di gioco */
    const playground = document.getElementById('playground');
    playground.classList.remove('d-none');
    playground.innerHTML= '';
    /* ciclo per stampare i quadratini */
    for(let i = 0; i < numSquare; i++){
        /* genero quadratino */
        let square = drawSquare(i,numSquare);

        /* appendo il quadratino alla griglia */
        playground.append(square);
    }
});

/* disegno quadrato */
function drawSquare(squareIndex,numSquare){
    let squareWidth = Math.sqrt(numSquare);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = square.style.width;
    square.innerHTML = squareIndex + 1;
    square.addEventListener('click',function(){
        square.classList.add('active');
        console.log(squareIndex + 1) 
    });
    return square;

}

