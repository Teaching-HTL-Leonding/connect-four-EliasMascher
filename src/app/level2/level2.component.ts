import { Component } from '@angular/core';

@Component({
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css'],
})
export class Level2Component {
  public currentPlayerIndex = 1;
  private boardContent !: number[][];
  private playerNames !: string[];
  private currentWinnerIx !: number;

  constructor(){
    this.playerNames = ['','1','2'];
    this.onRestart();
  }

  public drop(colIx: number) {
    console.log(`Coin dropped in column ${colIx}`);
    for(let i = 3; i >-1;i--){
      if(this.boardContent[i][colIx]===0){
        this.boardContent[i][colIx] = this.currentPlayerIndex;
        this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
        break;
      }
    }
  }

  // TODO: Complete this class by adding the appropriate code
  // At the end, this should become a working connect-four-game on a 4 x 4 board.

  public onRestart(){
    this.boardContent = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ];

    this.currentWinnerIx = 0;
    this.currentPlayerIndex = 1;
  }
  public getPlayerName(col: number, row:number){
    return this.playerNames[this.boardContent[col][row]];
  }
  public getStyle(col :number, row:number) :string{
    if(this.boardContent[col][row] !== 0){
      return `occupied-${this.getPlayerName(col,row)}`;
    }
    return '';
  }

  public getWinnerIndex() : number{
    const board = this.boardContent;

    //Checking rows
    for(let row = 0; row < 4; row++){
      if(board[row][0] !== 0 && board[row][0]=== board[row][1] && board[row][0] === board[row][2] && board[row][0]===board[row][3]){
        return board[row][0];
      }
    }

    //Checking cols
    for(let col = 0; col < 4; col++){
      if(board[0][col] !== 0 && board[0][col]=== board[1][col] && board[0][col] === board[2][col]&& board[0][col]===board[3][col]){
        return board[0][col];
      }
    }
    //Checking diagonals
    if(board[0][0] !== 0 && board[0][0] === board[1][1] && board[0][0]=== board[2][2] && board[0][0] === board[3][3]){
      return board[0][0];
    }
    if(board[0][3] !== 0 && board[0][3] === board[1][2] && board[0][3]=== board[2][1] && board[0][3] === board[3][0]){
      return board[0][3];
    }

    return 0;
  }

}
