import { Injectable } from '@angular/core';

/**
 * Logic for a connect-four-board.
 */
@Injectable({
  providedIn: 'root',
})
export class BoardService {
  // TODO: Add the required code here

  public currentPlayerIndex = 1;
  public boardContent!: number[][];
  public currentWinnerIx: number = 0;

  constructor(){
    this.restart();

  }
  public restart():void{
    this.boardContent = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
  }

  public drop(colIx: number) {
    if(this.currentWinnerIx === 0)
    {
      if(this.dropCoinAtCol(colIx))
      {
        this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
      }

      this.currentWinnerIx = this.getWinnerIndex();
    }
  }

  private dropCoinAtCol(colIx: number):boolean{
    console.log("dropCoinAtCol")
    for(let i = this.boardContent.length - 1; i >= 0; i--)
    {
      if(this.boardContent[i][colIx] == 0)
      {
        this.boardContent[i][colIx] = this.currentPlayerIndex;
        return true;
      }
    }
    return false;
  }

  public getWinnerIndex():number{
    //go through board
    for(let row = 0; row < this.boardContent.length; row++)
    {
      for(let col = 0; col < this.boardContent[row].length; col++)
      {
        if(this.boardContent[row][col] !== 0)
        {
          //check to the right, down, and 2 diagonals, left down, right down
          // down
          if(this.boardContent[row][col] !== 0 && row + 3 < this.boardContent.length && this.boardContent[row][col] === this.boardContent[row + 1][col] && this.boardContent[row][col] === this.boardContent[row + 2][col] && this.boardContent[row][col] === this.boardContent[row + 3][col])
          {
            return this.boardContent[row][col];
          }
          // right
          if(this.boardContent[row][col] !== 0 && col + 3 < this.boardContent[row].length && this.boardContent[row][col] === this.boardContent[row][col + 1] && this.boardContent[row][col] === this.boardContent[row][col + 2] && this.boardContent[row][col] === this.boardContent[row][col + 3])
          {
            return this.boardContent[row][col];
          }
          // left down
          if(this.boardContent[row][col] !== 0 && col - 3 >= 0 && row + 3 < this.boardContent.length && this.boardContent[row][col] === this.boardContent[row + 1][col - 1] && this.boardContent[row][col] === this.boardContent[row + 2][col - 2] && this.boardContent[row][col] === this.boardContent[row + 3][col - 3])
          {
            return this.boardContent[row][col];
          }
          // right down
          if(this.boardContent[row][col] !== 0 && col + 3 < this.boardContent[row].length && row + 3 < this.boardContent.length && this.boardContent[row][col] === this.boardContent[row + 1][col + 1] && this.boardContent[row][col] === this.boardContent[row + 2][col + 2] && this.boardContent[row][col] === this.boardContent[row + 3][col + 3])
          {
            return this.boardContent[row][col];
          }
        }

      }
    }
    return 0;
  }

}
