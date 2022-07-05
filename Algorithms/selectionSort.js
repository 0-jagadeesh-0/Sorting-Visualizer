let selectionSort = async () => {
    let bars = document.getElementsByClassName("bar");
    let i, j, mini;
    for (i = 0; i < len; i++) {
        await sleep(delay);
        bars[i].style.backgroundColor = "#610C63";
        mini = i;
        await sleep(delay);
        for (j = i + 1; j < len; j++) {
            bars[j].style.backgroundColor = "red";
            await sleep(delay)
            if (arr[mini] > arr[j]) {
                bars[mini].style.backgroundColor = unsorted_array_color;
                // await sleep(delay)
                mini = j;
                bars[mini].style.backgroundColor = "#610C63";

                await sleep(delay)
            }
            // bars[i].style.backgroundColor = unsorted_array_color;
            if (mini != j) {
                bars[j].style.backgroundColor = unsorted_array_color;
            }

        }
        await sleep(delay)
        swap(i, mini, bars);
        await sleep(delay)
        bars[i].style.backgroundColor = sorted_color;
    }

}