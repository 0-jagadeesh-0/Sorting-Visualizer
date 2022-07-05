let insertionSort = async () => {
    let bars = document.getElementsByClassName("bar");
    await sleep(delay);
    let i, j, key;
    for (j = 1; j < len; j++) {
        i = j - 1;
        await sleep(delay);
        bars[j].style.backgroundColor = selected_color;
        key = arr[j];


        await sleep(delay);
        while (i >= 0 && key < arr[i]) {
            await sleep(delay);
            bars[i].style.backgroundColor = compare_color;
            bars[i + 1].style.backgroundColor = selected_color;
            await sleep(delay);
            swap(i, i + 1, bars);

            bars[i].style.backgroundColor = sorted_color;
            bars[i + 1].style.backgroundColor = sorted_color;
            i--;

        }
        bars[j].style.backgroundColor = sorted_color;
    }
}