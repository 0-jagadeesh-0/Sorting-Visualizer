
let heapify = async (n, i) => {
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    let large = i;
    setBarColor(i, selected_color);
    if (l < n && arr[l] > arr[large]) {
        large = l;
    }
    if (r < n && arr[r] > arr[large]) {
        large = r;
    }
    setBarColor(large, compare_color);
    if (large != i) {
        await sleep(delay);
        swap(i, large, bars);
        await heapify(n, large);
    }
    setBarColor(i, sorted_color);
}

let heapSort = async () => {
    console.log(arr);
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        await heapify(len, i);
    }
    console.log(arr);
    for (let i = len - 1; i > 0; i--) {
        await sleep(delay);
        swap(0, i, bars);
        await heapify(i, 0);
    }
}