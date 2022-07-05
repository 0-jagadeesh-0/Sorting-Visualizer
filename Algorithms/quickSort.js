let partition = async (start, end) => {
    let pivot = arr[end];
    bars[end].style.backgroundColor = selected_color;

    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
        await sleep(delay)
        if (arr[j] < pivot) {
            i++;
            swap(i, j, bars);

            bars[j].style.backgroundColor = larger_element_color;
            bars[i].style.backgroundColor = smaller_element_color;
            // await sleep(delay);
        }
        else {
            bars[j].style.backgroundColor = larger_element_color
        }


    }
    await sleep(delay);
    if (i + 1 < end) {
        swap(i + 1, end, bars);
        bars[end].style.backgroundColor = larger_element_color;
        bars[i + 1].style.backgroundColor = selected_color;
    }



    for (let j = start; j <= end; j++) {

        bars[j].style.backgroundColor = unsorted_array_color;
    }

    await sleep(delay);
    return (i + 1);
}


let quickSort = async (start, end) => {

    if (start < end) {
        await sleep(delay);
        let pi = await partition(start, end);
        await quickSort(start, pi - 1);
        for (let i = start; i <= pi; i++) {
            bars[i].style.backgroundColor = sorted_color;

        }
        await quickSort(pi + 1, end);
        for (let i = pi + 1; i <= end; i++) {
            bars[i].style.backgroundColor = sorted_color;

        }
    }


}