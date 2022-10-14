import { Component } from '@angular/core';
import { Level2Component } from '../level2/level2.component';

@Component({
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css'],
})
export class Level3Component extends Level2Component {
  // TODO: Complete this class by adding the appropriate code.
  // Try to avoid copying the code from level 2. Find a different solution
  // for reusing the existing logic.



  public override restart():void{
    this.boardContent = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
  }

  public getStyles(): string[][] {
    const rows = 6;
    const cols = 7;

    const result: string[][] = [];
    for (let row = 0; row < rows; row++) {
      result.push([]);
      for (let col = 0; col < cols; col++) {
        result[row][col] = this.getStyle(col, row);
      }
    }

    return result;
  }

  public override getWinnerIndex():number{
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
