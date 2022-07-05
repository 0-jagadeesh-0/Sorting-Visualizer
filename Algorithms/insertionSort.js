let insertionSort = async () => {
    let bars = document.getElementsByClassName("bar");
    await sleep(delay);
    let i, j, key;
    for (j = 1; j < len; j++) {
        i = j - 1;
        setBarColor(i, selected_color);
        key = arr[j];
        await sleep(delay);
        while (i >= 0 && key < arr[i]) {
            setBarColor(i, compare_color);
            setBarColor(i + 1, selected_color);
            await sleep(delay);
            swap(i, i + 1, bars);
            setBarColor(i, sorted_color);
            setBarColor(i + 1, sorted_color);
            await sleep(delay);
            i--;

        }
        setBarColor(j, sorted_color);
    }
}