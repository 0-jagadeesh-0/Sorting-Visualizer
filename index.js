// delay

let delay = 200;

// default array length

const default_len = 5;

// range of array size 

let min_len = 5;
let max_len = 40;

// range of array height.

let min_value = 5;
let max_value = 200;

// colors used  

let unsorted_array_color = "#2FA4FF";
let sorted_color = "#00FFAB";
let compare_color = "red";
let selected_color = "#610C63"
let larger_element_color = "white";
let smaller_element_color = "gold";

// elements

let bars_container = document.getElementById("array");
let sort_btn = document.getElementById("sort");
let size_element = document.getElementById("size");
let visualizer = document.getElementById('visualizer');
let algo_btns = document.querySelectorAll('.algo-btn');
let bars = document.getElementsByClassName("bar");
let random_btn = document.getElementById("randomize");





// declaration of empty array.

let arr = [];
let len = default_len;

let bar_width = visualizer.clientWidth / len * 3;
let selected_algo;



if (window.screen.width <= "768px") {
    bar_width = 20
}





// function to create random number 

let generateRandomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min) + 1) + min);
}

// function to create bars 

let createArrayBars = () => {
    bars_container.innerHTML = '';
    arr = [];
    bar_width = visualizer.clientWidth / (len * 3.5);
    console.log(bar_width);
    for (let i = 0; i < len; i++) {
        let val = generateRandomNumber(min_value, max_value);
        arr.push(val);
        let ele = document.createElement("div");
        ele.style.width = bar_width + "px";
        ele.classList.add("bar");
        ele.style.height = `${val}px`;
        ele.style.backgroundColor = unsorted_array_color;
        ele.style.marginLeft = "2px";
        ele.style.marginRight = "2px";
        bars_container.appendChild(ele);
    }
}


// function to swap the bar heights 

let swap = (a, b, bars) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    bars[a].style.height = `${arr[a]}px`;
    bars[b].style.height = `${arr[b]}px`;
}

// function to set bar background-color

let setBarColor = (i, color) => {
    bars[i].style.backgroundColor = color;
}

// function to set bar height

let setBarHeight = (i, height) => {
    bars[i].style.height = `${height}px`;
}

// function for delay

let sleep = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay)
    })
}


// function to disable all other elements.

let disableOthers = () => {
    console.log("disabled");
    size_element.setAttribute("disabled", "disabled");
    size_element.style.cursor = "not-allowed";
    sort_btn.setAttribute("disabled", "disabled");
    sort_btn.style.cursor = "not-allowed";
    random_btn.setAttribute("disabled", "disabled");
    random_btn.style.cursor = "not-allowed";
    algo_btns.forEach(ele => {
        ele.setAttribute("disabled", "disabled");
        ele.style.cursor = "not-allowed";
    })
}

// function to enable all other elements.

let enableOthers = () => {
    size_element.removeAttribute("disabled");
    sort_btn.removeAttribute("disabled");
    sort_btn.style.cursor = "pointer"
    random_btn.removeAttribute("disabled");
    random_btn.style.cursor = "pointer";
    algo_btns.forEach(ele => {
        ele.removeAttribute("disabled");
        ele.style.cursor = "pointer";
    })
}






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
        await selectionSort();
    }
    else if (selected_algo === "Insertion Sort") {
        disableOthers();
        await insertionSort();
    }
    else if (selected_algo === "Merge Sort") {
        disableOthers();
        await mergeSort(0, len - 1);
    }
    else if (selected_algo === "Quick Sort") {
        disableOthers();
        await quickSort(0, len - 1);
    }
    else if (selected_algo === "Heap Sort") {
        disableOthers();
        await heapSort();
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
    enableOthers();

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








