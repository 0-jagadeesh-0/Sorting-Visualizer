let insertionSort = async () => {
    await sleep(delay);
    let i, j, key;
    for (j = 1; j < len; j++) {
        i = j - 1;
        setBarColor(i, selected_color);

        key = arr[j];
        await sleep(delay);
        setBarColor(0, sorted_color);
        while (i >= 0 && key < arr[i]) {
            setBarColor(i, compare_color);

            await sleep(delay);
            setBarColor(i, selected_color);
            setBarColor(i + 1, compare_color);
            swap(i, i + 1, bars);
            setBarColor(i + 1, sorted_color);
            await sleep(delay);
            i--;

        }
        setBarColor(j, sorted_color);
    }
}