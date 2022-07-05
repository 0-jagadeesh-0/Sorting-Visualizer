let bubbleSort = async () => {
    let bars = document.getElementsByClassName("bar");
    await sleep(delay);
    let i, j;
    for (i = 0; i < len; i++) {

        await sleep(delay);
        for (j = 0; j < len - i - 1; j++) {
            // let bars = document.getElementsByClassName("bar");
            await sleep(delay);
            bars[j].style.backgroundColor = compare_color;
            bars[j + 1].style.backgroundColor = compare_color;

            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, bars);
            }
            await sleep(delay);
            bars[j].style.backgroundColor = unsorted_array_color;
            bars[j + 1].style.backgroundColor = unsorted_array_color;

            // await sleep(delay)
        }
        bars[len - i - 1].style.backgroundColor = sorted_color;
    }
}