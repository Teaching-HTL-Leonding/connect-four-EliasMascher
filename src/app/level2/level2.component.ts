import { Component } from '@angular/core';

@Component({
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css'],
})
export class Level2Component {
  public currentPlayerIndex = 1;
  public boardContent!: number[][];
  private currentWinnerIx: number = 0;

  constructor(){
    this.restart();

  }

  public drop(colIx: number) {
    console.log("drop")
    if(this.currentWinnerIx === 0)
    {
      if(this.dropCoinAtCol(colIx))
      {
        this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
      }

      this.currentWinnerIx = this.getWinnerIndex();
    }
    console.log(this.boardContent)
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

  public getStyle(col:number, row:number): string{
    if(this.boardContent[row][col] !== 0){
      return `occupied-${this.boardContent[row][col]}`;
    }
    return "";
  }

  public restart():void{
    this.boardContent = [
      [0, 0, 0, 0,],
      [0, 0, 0, 0,],
      [0, 0, 0, 0,],
      [0, 0, 0, 0,]
    ];
    this.currentWinnerIx = 0;
  }

  public getWinnerIndex():number{
    //rows
    for(let row = 0; row < 4; row ++)
    {
      if(this.boardContent[row][0] !== 0 && this.boardContent[row][0] === this.boardContent[row][1] && this.boardContent[row][0] === this.boardContent[row][2] && this.boardContent[row][0] === this.boardContent[row][3])
      {
        return this.boardContent[row][0];
      }
    }
    //cols
    for(let col = 0; col < 4; col ++)
    {
      if(this.boardContent[0][col] !== 0 && this.boardContent[0][col] === this.boardContent[1][col] && this.boardContent[0][col] === this.boardContent[2][col] && this.boardContent[0][col] === this.boardContent[3][col])
      {
        return this.boardContent[0][col];
      }
    }
    //diagonal
    if(this.boardContent[0][0] !== 0 && this.boardContent[0][0] === this.boardContent[1][1] && this.boardContent[0][0] === this.boardContent[2][2] && this.boardContent[0][0] === this.boardContent[3][3])
    {
      return this.boardContent[0][0];
    }
    else if(this.boardContent[0][3] !== 0 && this.boardContent[0][3] === this.boardContent[1][2] && this.boardContent[0][3] === this.boardContent[2][1] && this.boardContent[0][3] === this.boardContent[3][0])
    {
      return this.boardContent[0][3];
    }
    //no winner
    return 0;
  }


  // TODO: Complete this class by adding the appropriate code
  // At the end, this should become a working connect-four-game on a 4 x 4 board.
}
