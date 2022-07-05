let bubbleSort = async () => {
    await sleep(delay);
    let i, j;
    for (i = 0; i < len; i++) {
        await sleep(delay);
        for (j = 0; j < len - i - 1; j++) {
            await sleep(delay);
            setBarColor(j, compare_color);
            setBarColor(j + 1, compare_color);
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, bars);
            }
            await sleep(delay);
            setBarColor(j, unsorted_array_color);
            setBarColor(j + 1, unsorted_array_color);
        }
        setBarColor(len - i - 1, sorted_color);
    }
}