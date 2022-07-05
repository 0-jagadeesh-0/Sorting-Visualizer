
let merge = async (start, mid, end) => {
    await sleep(delay)
    let leftSize = mid - start + 1;
    let rightSize = end - mid;
    let leftSubarray = [];
    let rightSubarray = [];
    for (let p = 0; p < leftSize; p++) {
        leftSubarray.push(arr[start + p])
        setBarColor(start + p, "crimson");
    }
    for (let p = 0; p < rightSize; p++) {

        rightSubarray.push(arr[mid + 1 + p]);
        setBarColor(mid + 1 + p, "yellow");
    }
    let i = 0;
    let j = 0;
    let k = start;

    while (i < leftSize && j < rightSize) {


        if (leftSubarray[i] < rightSubarray[j]) {
            await sleep(delay);
            arr[k] = leftSubarray[i++];
            setBarHeight(k, arr[k]);
            setBarColor(k, "deepblue");
        }
        else {
            await sleep(delay);
            arr[k] = rightSubarray[j++];
            setBarHeight(k, arr[k]);
            setBarColor(k, "deepblue");
        }
        k++;

    }
    while (i < leftSize) {
        await sleep(delay);

        arr[k] = leftSubarray[i++];
        setBarHeight(k, arr[k]);
        setBarColor(k, "deepblue");
        k++;
    }
    while (j < rightSize) {
        await sleep(delay);
        arr[k] = rightSubarray[j++];
        setBarHeight(k, arr[k]);
        setBarColor(k, "deepblue");
        k++;
    }
    await sleep(delay);
    if (start == 0 && end == len - 1) {
        for (let m = start; m <= end; m++) {
            await sleep(delay);
            setBarColor(m, sorted_color);
        }
    }
    else {
        for (let m = start; m <= end; m++) {
            await sleep(delay);
            setBarColor(m, unsorted_array_color);
        }
    }
}



let mergeSort = async (start, end) => {

    if (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        await mergeSort(start, mid);
        await mergeSort(mid + 1, end);
        await merge(start, mid, end);
    }

}