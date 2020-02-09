class BinarySearch {
    constructor(arr: number[], valueToSearch: number) {
        this.search(arr, valueToSearch);
    }
    
    private search(arr: number[], value: number) {
        // it is always advised to sort the array firt...
        let low = 0;
        let high = arr.length - 1;
        let mid, element;

        while(low <= high) {
            mid = Math.floor((low + high) / 2);
            element = arr[mid];
            if (element < value) {
                low = mid + 1;
            } else if(element > value) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
