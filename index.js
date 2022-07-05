const default_len = 5;
let min_len = 5;
let max_len = 40;
let min_value = 5;
let max_value = 200;
let bars_container = document.getElementById("array");
let sort_btn = document.getElementById("sort");
let size_element = document.getElementById("size");
let len = default_len;
let arr = [];
let delay = 400;
let visualizer = document.getElementById('visualizer');
let bar_width = visualizer.clientWidth / len * 3;
console.log(bar_width);
let selected_algo;

let algo_btns = document.querySelectorAll('.algo-btn');

if (window.screen.width <= "768px") {
    bar_width = 20
}


// let unsorted_array_color = "#1363DF";

let unsorted_array_color = "#2FA4FF";
let sorted_color = "#00FFAB";
// let sorted_color = "#3E7C17"
let compare_color = "red";

let selected_color = "#610C63"





let generateRandomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min) + 1) + min);
}

let createArrayBars = () => {
    bars_container.innerHTML = '';
    arr = [];
    bar_width = visualizer.clientWidth / (len * 3.5);
    console.log(bar_width);
    for (let i = 0; i < len; i++) {
        let val = generateRandomNumber(min_value, max_value);
        // console.log(val);
        arr.push(val);
        let ele = document.createElement("div");
        ele.style.width = bar_width + "px";
        ele.id = "bar" + i;
        ele.classList.add("bar");
        ele.style.height = `${val}px`;
        ele.style.backgroundColor = unsorted_array_color;
        ele.style.marginLeft = "2px";
        ele.style.marginRight = "2px";
        bars_container.appendChild(ele);
    }
}


let swap = (a, b, bars) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    bars[a].style.height = `${arr[a]}px`;
    bars[b].style.height = `${arr[b]}px`;
}

let sleep = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay)
    })
}

let disableOthers = () => {
    console.log("disabled");
    size_element.setAttribute("disabled", "disabled");
    size_element.style.cursor = "not-allowed";
    sort_btn.setAttribute("disabled", "disabled");
    sort_btn.style.cursor = "not-allowed";
    document.getElementById("randomize").setAttribute("disabled", "disabled");
    document.getElementById("randomize").style.cursor = "not-allowed";
    document.querySelectorAll('.algo-btn').forEach(ele => {
        ele.setAttribute("disabled", "disabled");
        ele.style.cursor = "not-allowed";
    })
}

let enable = () => {
    size_element.removeAttribute("disabled");
    document.getElementById("sort").removeAttribute("disabled");
    sort_btn.style.cursor = "pointer"
    document.getElementById("randomize").removeAttribute("disabled");
    document.getElementById("randomize").style.cursor = "pointer";
    document.querySelectorAll('.algo-btn').forEach(ele => {
        ele.removeAttribute("disabled");
        ele.style.cursor = "pointer";
    })
}


let setHeight = () => {
    let ele = document.getElementById('array');
    console.log(ele);
}




let bars = document.getElementsByClassName("bar");

document.addEventListener('DOMContentLoaded', () => {

    size_element.setAttribute('value', default_len)
    size_element.setAttribute('min', min_len);
    size_element.setAttribute('max', max_len);


    createArrayBars();
    document.getElementById("randomize").addEventListener("click", () => {
        createArrayBars();
    })

})

sort_btn.addEventListener("click", async () => {

    if (selected_algo === "Bubble Sort") {
        disableOthers();
        await bubbleSort();
    }
    else if (selected_algo === "Selection Sort") {
        disableOthers();
        await selectionSort()
    }
    else if (selected_algo === "Insertion Sort") {
        disableOthers();
        await insertionSort();
    }
    else if (selected_algo === "Merge Sort") {
        disableOthers();
        await mergeSort(0, len - 1, bars);
    }
    else if (selected_algo === "Quick Sort") {
        disableOthers();
        await quickSort(0, len - 1);
    }
    else if (selected_algo === "Heap Sort") {

    }
    else {
        disableOthers();
        let elem = document.createElement("div");
        elem.innerText = "Select One algorithm to sort."
        document.querySelector(".select-container").appendChild(elem);
        setTimeout(() => {
            document.querySelector(".select-container").removeChild(elem);
            enable();
        }, 3000)
    }
    enable();

})

size_element.addEventListener("change", () => {
    len = size_element.value;
    createArrayBars();
})


algo_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (document.querySelector('.active')) {
            document.querySelector('.active').classList.remove("active");
        }
        selected_algo = btn.innerText;
        console.log(selected_algo);
        btn.classList.add("active");
    })
})








