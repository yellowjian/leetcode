/**
 * 一个是判断  当前数的行列和小块不能重复数字, 不断的拿数字去试一下, 如果不行需要进行回溯然后进行下一个数字的测试。
 * 直到最后存在结果集即可
 */

class Solution {
public:
    bool isValid(vector<vector<char>>& board, int row, int col, char c) {
        for(int i=0;i<9;i++) {
            if(board[row][i] == c) return false;
            if(board[i][col] == c) return false;
            if(board[(row / 3) * 3 + (i / 3)][(col / 3) * 3 + (i % 3)] == c) return false;
        }
        return true;
    }
    bool solve(vector<vector<char>>& board, int row, int col) {
        if(row == 9) {
            return true;
        }
        if(col == 9) return solve(board, row + 1, 0);
        if(board[row][col] != '.') {
            return solve(board, row, col + 1);
        }
        for(int i=1;i<=9;i++) {
            char c = '0'+i;
            if(!isValid(board, row, col, c)){
                continue;
            }
            board[row][col] = c;
            if(solve(board, row, col + 1)) {
               return true;
            }
            board[row][col] = '.';
        }
        return false;
    }
    void solveSudoku(vector<vector<char>>& board) {
        solve(board, 0, 0);
    }
};