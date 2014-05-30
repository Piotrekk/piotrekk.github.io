$(document).ready(function(){

	var TicTacApp = {};

	// Set these variales in order to count scores
	var wins = 0;
	var loses = 0;
	var ties = 0;	

	// Main newGame function
	TicTacApp.newGame = function(){
		// Reset/remove 'X' nad 'O' on the board
		$('.icon-cancel-1').removeClass('box-visible');
		$('.icon-circle-empty').removeClass('box-visible');

		// Count scores
		$('#wins-counter').html(wins);
		$('#loses-counter').html(loses);
		$('#ties-counter').html(ties);

		// Set empty arrays in order to store used box values
		selected = [];
		opponent = [];
		
		// Set a tie variable to check if a game ends with the tie
		tie = 1;

		// Set boxes by its id
		boxes = [
			document.getElementById('one'),
			document.getElementById('two'),
			document.getElementById('three'),
			document.getElementById('four'),
			document.getElementById('five'),
			document.getElementById('six'),
			document.getElementById('seven'),
			document.getElementById('eight'),
			document.getElementById('nine')
		]

		// Set first O as 'computer' first choice
		var firstO = boxes[Math.floor(Math.random() * boxes.length)];
		opponent.push($(firstO).attr('value'));
		$(firstO).children('.icon-circle-empty').addClass('box-visible');

		// Remove 'O' from boxes[] array
		if (boxes.indexOf(firstO) != -1) {
			boxes.splice(boxes.indexOf(firstO), 1);
		}

		// Click event on each box
		$('.box').click(function(){
			var y = boxes.indexOf(this);

			// Check if clicked box exists in boxes[] array
			if (y != -1) {
				// Actions for X:

				// Push value of clicked box to selected[] array in order to check the winner
				selected.push($(this).attr('value'));

				// Show X on the game board
				$(this).children('.icon-cancel-1').addClass('box-visible');

				// Remove clicked box from boxes[] array
				var y = boxes.indexOf(this);
				if (y != -1) {
					boxes.splice(y, 1);
				}
				
				// Set 'S' variables as indexes of selected[] array to check if it exist
				var Sa = selected.indexOf('A')
				var Sb = selected.indexOf('B')
				var Sc = selected.indexOf('C')
				var Sd = selected.indexOf('D')
				var Se = selected.indexOf('E')
				var Sf = selected.indexOf('F')
				var Sg = selected.indexOf('G')
				var Sh = selected.indexOf('H')
				var Si = selected.indexOf('I')

				// Check if human is the winner
				if ((Sa != -1 && Sb != -1 && Sc != -1) || (Sd != -1 && Se != -1 && Sf != -1) || (Sg != -1 && Sh != -1 && Si != -1) || (Sa != -1 && Sd != -1 && Sg != -1) || (Sb != -1 && Se != -1 && Sh != -1) || (Sc != -1 && Sf != -1 && Si != -1) || (Sa != -1 && Se != -1 && Si != -1) || (Sc != -1 && Se != -1 && Sg != -1)) {
		 			// Reset opponent[] array
		 			opponent = [];
		 			// Change a tie variable to check if It's a tie
		 			tie = 2;

		 			// Add 1 win
		 			wins += 1;

		 			// Display who wins
		 			$('.winner').html("You win!");

		 			// Display 'end' section as the end of a game
					$('#end-mask').addClass('box-visible');

					// New Game button (in end-game section)
					$('#end-start').click(function(){
						$('#end-mask').removeClass('box-visible');
						TicTacApp.newGame();
					});
				} else if (tie == 1 && boxes.length == 0 ){ // Check a tie
					// Add 1 tie
					ties += 1;

					//Display who wins
					$('.winner').html("No one wins! It's a tie!");

					// Display 'end' section as the end of a game
					$('#end-mask').addClass('box-visible');

					// New Game button (in end-game section)
					$('#end-start').click(function(){
						$('#end-mask').removeClass('box-visible');
						TicTacApp.newGame();
					});
				}

				//Actions for O:

				// Set random box as a 'computer' choice
				var randomBox = boxes[Math.floor(Math.random() * boxes.length)];
				opponent.push($(randomBox).attr('value'));
				$(randomBox).find('.icon-circle-empty').addClass('box-visible');

				// Remove the random box from boxes[] array
				var zy = boxes.indexOf(randomBox);
				if (zy != -1) {
					boxes.splice(zy, 1);
				}

				// Set 'O' variables as indexes of opponent[] array to check if it exist
				var Oa = opponent.indexOf('A')
				var Ob = opponent.indexOf('B')
				var Oc = opponent.indexOf('C')
				var Od = opponent.indexOf('D')
				var Oe = opponent.indexOf('E')
				var Of = opponent.indexOf('F')
				var Og = opponent.indexOf('G')
				var Oh = opponent.indexOf('H')
				var Oi = opponent.indexOf('I')

				// Check if 'computer' is the winner
				if ((Oa != -1 && Ob != -1 && Oc != -1) || (Od != -1 && Oe != -1 && Of != -1) || (Og != -1 && Oh != -1 && Oi != -1) || (Oa != -1 && Od != -1 && Og != -1) || (Ob != -1 && Oe != -1 && Oh != -1) || (Oc != -1 && Of != -1 && Oi != -1) || (Oa != -1 && Oe != -1 && Oi != -1) || (Oc != -1 && Oe != -1 && Og != -1)) {
		 			// Reset selected[] array
		 			selected = [];

		 			// Change a tie variable to check if It's a tie
		 			tie = 3;

		 			// Add 1 lose
		 			loses += 1;

		 			// Display who wins
		 			$('.winner').html("Mr. JS wins!");

		 			// Display 'end' section as the end of a game
					$('#end-mask').addClass('box-visible');

					// New Game button (in end-game section)
					$('#end-start').click(function(){
						$('#end-mask').removeClass('box-visible');
		 				TicTacApp.newGame();
					});
				} else if (tie == 1 && boxes.length == 0){ // Check a tie
					// Add 1 tie
					ties += 1;

					// Display who wins
					$('.winner').html("No one wins! It's a tie!");

					// Display 'end' section as the end of a game
					$('#end-mask').addClass('box-visible');

					// New Game button (in end-game section)
					$('#end-start').click(function(){
						$('#end-mask').removeClass('box-visible');
						TicTacApp.newGame();
					});
				}
			} else {
				return false;
			}
			
			// Sort both arrays
			selected.sort();
			opponent.sort();
		});
	}
	
	// New Game button
	$('.start-game-button').click(function(){
		$('#main-game').transition({display: 'block'});
		 $('#init-mask').addClass('notvisible');
		 TicTacApp.newGame();
	});
});