let selectionSort = async () => {
    let i, j, mini;
    for (i = 0; i < len; i++) {
        await sleep(delay);
        setBarColor(i, selected_color);
        mini = i;
        await sleep(delay);
        for (j = i + 1; j < len; j++) {
            setBarColor(j, compare_color);
            await sleep(delay)
            if (arr[mini] > arr[j]) {
                setBarColor(mini, unsorted_array_color);

                mini = j;
                setBarColor(mini, selected_color);

                await sleep(delay)
            }
            if (mini != j) {
                setBarColor(j, unsorted_array_color);
            }

        }
        await sleep(delay)
        swap(i, mini, bars);
        await sleep(delay)
        setBarColor(i, sorted_color);
    }

}