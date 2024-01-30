function isWin(sizeCaro, win, boardCaro) {
    let quantity = 0;
    for(let row=0; row<sizeCaro; row++) {
        for (let col=0; col<sizeCaro; col++) {
            // Bỏ qua các ô trống:
            if (boardCaro[row][col][0] === 0)
                continue;
            else
                quantity++;

            // Xét theo chiều ngang:
            for (let inRow=0; inRow<win-1; inRow++) {
                if (col > sizeCaro-win)
                    break;
                if (boardCaro[row][col + inRow][0] !== boardCaro[row][col + inRow +1][0])
                    break;
                if (inRow===win-2)
                    return boardCaro[row][col][0];
            }

            // Xét theo chiều dọc:
            for (let inCol=0; inCol<win-1; inCol++) {
                if (row > sizeCaro-win)
                    break;
                if (boardCaro[row + inCol][col][0] !== boardCaro[row + inCol + 1][col][0])
                    break;
                if (inCol===win-2)
                    return boardCaro[row][col][0];
            }

            // Xét chéo phải xuống:
            for (let rightDown=0; rightDown<win-1; rightDown++) {
                if (row > sizeCaro-win || col > sizeCaro-win)
                    break;
                if (boardCaro[row + rightDown][col + rightDown][0] !== boardCaro[row + rightDown + 1][col + rightDown + 1][0])
                    break;
                if (rightDown===win-2)
                    return boardCaro[row][col][0];
            }

            // Xét chéo trái xuống:
            for (let leftDown=0; leftDown<win-1; leftDown++) {
                if (row > sizeCaro-win || col < sizeCaro-win+1)
                    break;
                if (boardCaro[row + leftDown][col - leftDown][0] !== boardCaro[row + leftDown + 1][col - leftDown - 1][0])
                    break;
                if (leftDown===win-2)
                    return boardCaro[row][col][0];
            }

            // Xét hòa:
            if (quantity === sizeCaro*sizeCaro)
                return 3;
        }
    }
}
export default isWin;