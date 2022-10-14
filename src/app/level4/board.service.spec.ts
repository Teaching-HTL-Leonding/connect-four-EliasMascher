import { BoardService } from "./board.service";

describe('Board service',()=>{

  it('Can set pieces',() =>{
    const board = new BoardService();

    board.drop(1);
    board.drop(1);
    expect(board.boardContent[5][1]).toBe(1);
    expect(board.boardContent[4][1]).toBe(2);
  });

  it('identifies the winner in the row',()=>{
    const board = new BoardService();
    board.drop(1);
    board.drop(1);
    board.drop(2);
    board.drop(2);
    board.drop(3);
    board.drop(3);
    board.drop(4);
    expect(board.getWinnerIndex()).toBe(1);
  })

  it('identifies the winner in the col', () =>{
    const board = new BoardService();
    board.drop(1);
    board.drop(2);
    board.drop(1);
    board.drop(2);
    board.drop(1);
    board.drop(2);
    board.drop(1);
    expect(board.getWinnerIndex()).toBe(1);
  })

  it('identifies the winner diagonal',() =>{
    const board = new BoardService();
    board.drop(1); //Rot-Winning
    board.drop(2);
    board.drop(2);//Rot-Winning
    board.drop(3);
    board.drop(3);//Rot
    board.drop(2);
    board.drop(3);//Rot-Winning
    board.drop(4);
    board.drop(4);//Rot
    board.drop(4);
    board.drop(4);//Rot-Winning
    expect(board.getWinnerIndex()).toBe(1);
  })
});

