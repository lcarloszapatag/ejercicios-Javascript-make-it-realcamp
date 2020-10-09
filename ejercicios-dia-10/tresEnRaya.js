  const triqui = (board) => {
  //function triqui(board){
        if(board[0][1] === board[1][1] && board[1][1] === board[2][1]){
            return true
        } 
        else if(board[0][0] === board[1][0] && board[1][0] === board[2][0]){
            return true
        }
        else if(board[0][2] === board[1][2] && board[1][2] === board[2][2]){
            return true
        }
        else if(board[0][0] === board[0][1] && board[0][1] === board[0][2]){
            return true
        }
        else if(board[1][0] === board[1][1] && board[1][1] === board[1][2]){
            return true
        }
        else if(board[2][0] === board[2][1] && board[2][1] === board[2][2]){
            return true
        }
        else if(board[0][0] === board[1][1] && board[1][1] === board[2][2]){
            return true
        }
        else if(board[0][2] === board[1][1] && board[1][1] === board[2][0]){
            return true
        }
        else{
            return false
        }
    }


    // código de prueba
const b1 = [
  ["X", "O", "-"],
  ["O", "O", "X"],
  ["-", "O", "X"]
]
console.log(triqui(b1)) // true

const b2 = [
  ["X", "X", "-"],
  ["O", "O", "X"],
  ["-", "O", "X"]
]
console.log(triqui(b2)) // false