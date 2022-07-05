let partition = async (start, end) => {
    let pivot = arr[end];
    bars[end].style.backgroundColor = "red";
    await sleep(delay)
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {

        if (arr[j] < pivot) {
            i++;
            bars[i].style.backgroundColor = "gold"
            await sleep(delay)
            bars[j].style.backgroundColor = "grey"
            swap(i, j, bars);
            await sleep(delay);


        }
        // else {
        //     bars[j].style.backgroundColor = sorted_color
        // }
        bars[i + 1].style.backgroundColor = unsorted_array_color
        bars[j].style.backgroundColor = unsorted_array_color
    }
    swap(i + 1, end, bars);
    // bars[i].style.backgroundColor = sorted_color;
    bars[i + 1].style.backgroundColor = sorted_color;

    await sleep(delay);

    // bars[end].style.backgroundColor = unsorted_array_color;
    await sleep(delay);
    return (i + 1);
}


let quickSort = async (start, end) => {

    if (start <= end) {
        await sleep(delay);
        let pi = await partition(start, end);
        await quickSort(start, pi - 1);
        await quickSort(pi + 1, end);
    }


}