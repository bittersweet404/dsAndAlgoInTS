class QuickSort {
    constructor(input: number[]) {
        this.quick(input);
    }

    private swap(arr: number[], index1: number, index2: number) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    private partition(arr: number[], lIndex: number, rIndex: number): number {
        let pivot = arr[Math.floor((lIndex + rIndex) / 2)];
        
        while(lIndex <= rIndex) {
            // move the left pointer to the right if 
            // value at the left pointer is LESS THAN PIVOT
            // keep moving till the condition meets
            while(arr[lIndex] < pivot) {
                lIndex++;
            }

            // move the right pointer to the left if
            // value at the right pointer is GREATER THAN PIVOT
            // keep moving till the condition meets
            while(arr[rIndex] > pivot) {
                rIndex--;
            }
            if (lIndex <= rIndex) {
                this.swap(arr, lIndex, rIndex);
                lIndex++;
                rIndex--;
            }
            return lIndex;
        }
    }

    private quickRec(arr: number[], leftPointer: number, rightPointer: number): number[] {
        let index: number;
        if (arr.length > 1) {
            index = this.partition(arr, leftPointer, rightPointer);

            if (leftPointer < index - 1) {
                return this.quickRec(arr, leftPointer, (index - 1));
            }

            if (index < rightPointer) {
                return this.quickRec(arr, index, rightPointer);
            }
        }
        return arr;
    }

    private quick(arr: number[]): number[] {
        let leftPoint: number = 0;
        let rightPoint: number = arr.length - 1;
        return this.quickRec(arr, leftPoint, rightPoint);
    }
}

// let sortedArr = new QuickSort([8,4,2,9,22,44,1,3]); // output => [1,2,3,4,8,9,22,44]