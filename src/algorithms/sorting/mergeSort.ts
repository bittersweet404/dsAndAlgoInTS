// [8,4,2,9,22,44,1,3]
//          |
//          V
// [8] [4] [2] [9] [22] [44] [1] [3]
//          |
//          V
// [4,8]    [2,9]   [22,44]     [1,3]
//          |
//          V
// [2,4,8,9]        [1,3,22,44]
//          |
//          V
// [1,2,3,4,8,9,22,44]

class MergeSort {
    constructor(input: number[]) {
        this.sort(input);
    };

    private merge(LArr: number[], RArr: number[]): number[] {
        let output: number[] = [];
        let il: number = 0;
        let ir: number = 0;
        while(il < LArr.length && ir < RArr.length) {
            if (LArr[il] < RArr[ir]) {
                output.push(LArr[il]);
                il++;
            } else {
                output.push(RArr[ir]);
                ir++;
            }
        }
        while(il < LArr.length) {
            output.push(LArr[il]);
            il++;
        }
        while(ir < RArr.length) {
            output.push(RArr[ir]);
            ir++;
        }
        return output;
    }

    private sortRec(arr: number[]) {
        let length: number = arr.length;
        if (length === 1) {
            return arr;
        }
        let mid = Math.floor(length / 2);
        let leftArr: number[] = arr.slice(0, mid);
        let rightArr: number[] = arr.slice(mid, length);
        return this.merge(this.sortRec(leftArr), this.sortRec(rightArr));
    }

    private sort(inputArr: number[]) {
        return this.sortRec(inputArr);
    }
}

let sortedArr = new MergeSort([8,4,2,9,22,44,1,3]); // output => [1,2,3,4,8,9,22,44]