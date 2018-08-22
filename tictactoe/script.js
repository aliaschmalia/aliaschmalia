
const container = document.getElementsByClassName('container')[0];
// why does it need ---> [0]?
let board = document.querySelectorAll('.box')

const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let turn = 0;

// TURN
container.onclick = function(event) {

	if(event.target != container && event.target.innerText == ''){
		if(turn % 2 == 0){
			event.target.innerHTML = 'O';
			board[event.target.id] = 'O';
			event.target.style.backgroundColor = 'grey';
		}
		else {
			event.target.innerHTML = 'X';
			board[event.target.id] = 'X';
			event.target.style.backgroundColor = 'skyblue';
		}

		// shows current state on every click
		let boardState = []
		board.forEach(function(box){boardState.push(box.innerHTML)})
		// console.log(boardState)
		
		// defines next player's turn
		turn = turn + 1;

		// check if win
		// console.log(board)
		checkWin(boardState);

	}	
}

// check status
function checkWin(boardState){
	// loop thru all the conditions
	for(let i = 0; i < wins.length; i++){
		// console.log(wins[i])
		let check = []
		for(let j=0; j < wins[i].length; j++) {

			let index = wins[i][j];
			check.push(boardState[index])
		}
		console.log('check=', check) 
		if(check[0] == 'X' && check[1] == 'X' && check[2] == 'X'){
			alert('X won!')
		}
		if(check[0] == 'O' && check[1] == 'O' && check[2] == 'O'){
			alert('O won!')
		}

		//wins[i].forEach(function(index){
			// console.log(board[index])
		//	check.push(board[index])
		//})
		// console.log(wins[i])  
	}
}





// function checkForWinners(symbol){
// 	for(var a = 0; a < winningCombinations.length; a++){
// 		if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){
// 			alert(symbol+ " WON!");
// 			playAgain();
// 		}
// 	}
// }



			// for(let i = 0; i < board.length; i++){
			// 	if(board[i] == 'X'){
			// 		window.alert('test')
			// 	}
			// }



// 	function checkPoints(board){
// 			let point = false
// 				for (let i = 0; i < board.length; i++){
// 					if(board[i]) == 'X' {
// 					point = true
// 					} 
// 				}
// 		}

// 		if(board[0] == 'X' && board[1] == 'X' && board[2] == 'X'){
// 			window.alert('X WINS!');
// 		}
// 		if(board[3] == 'X' && board[4] == 'X' && board[5] == 'X'){
// 			window.alert('X WINS!');
// 		}
// 		if(board[6] == 'X' && board[7] == 'X' && board[8] == 'X'){
// 			window.alert('X WINS!');
// 		}
// 	}

// } 

// how do you know when a user has won?
// how do you count diagonal wins?

		// board[0, 1, 2] == board[X, X, X] || board[O, O, O]
		// board[3, 4, 5] == board[X, X, X] || board[O, O, O]
		// board[6, 7, 8] == board[X, X, X] || board[O, O, O]
		// board[2, 4, 6] == board[X, X, X] || board[O, O, O]
		// board[0, 4, 8] == board[X, X, X] || board[O, O, O]
		// board[0, 3, 6] == board[X, X, X] || board[O, O, O]
		// board[2, 5, 8] == board[X, X, X] || board[O, O, O]




// how do you keep track of the board state?
// how do you keep track of whose turn it is?
// how do you know if player is selecting a valid move?


// what about ties?  