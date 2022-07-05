
let merge = async (start, mid, end, bars) => {
    await sleep(delay)
    let leftSize = mid - start + 1;
    let rightSize = end - mid;
    let leftSubarray = [];
    let rightSubarray = [];
    for (let p = 0; p < leftSize; p++) {
        leftSubarray.push(arr[start + p])

        bars[start + p].style.backgroundColor = "crimson";
    }
    for (let p = 0; p < rightSize; p++) {

        rightSubarray.push(arr[mid + 1 + p]);
        bars[mid + 1 + p].style.backgroundColor = "gold";
    }
    let i = 0;
    let j = 0;
    let k = start;

    while (i < leftSize && j < rightSize) {


        if (leftSubarray[i] < rightSubarray[j]) {
            await sleep(delay);
            arr[k] = leftSubarray[i++];
            bars[k].style.height = `${arr[k]}px`
            bars[k].style.backgroundColor = "blue"
        }
        else {
            await sleep(delay);
            arr[k] = rightSubarray[j++];
            bars[k].style.height = `${arr[k]}px`
            bars[k].style.backgroundColor = "blue"
        }
        k++;

    }
    while (i < leftSize) {
        await sleep(delay);

        arr[k] = leftSubarray[i++];
        bars[k].style.height = `${arr[k]}px`
        bars[k].style.backgroundColor = "blue"
        k++;
    }
    while (j < rightSize) {
        await sleep(delay);
        arr[k] = rightSubarray[j++];
        bars[k].style.height = `${arr[k]}px`
        bars[k].style.backgroundColor = "blue"
        k++;
    }
    await sleep(delay);
    if (start == 0 && end == len - 1) {
        for (let m = start; m <= end; m++) {
            await sleep(delay);
            bars[m].style.backgroundColor = sorted_color;
        }
    }
    else {
        for (let m = start; m <= end; m++) {
            await sleep(delay);
            bars[m].style.backgroundColor = unsorted_array_color;
        }
    }
}



let mergeSort = async (start, end, bars) => {
    console.log(arr);

    if (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        await mergeSort(start, mid, bars);
        await mergeSort(mid + 1, end, bars);
        await merge(start, mid, end, bars);
    }
    console.log(arr);
}