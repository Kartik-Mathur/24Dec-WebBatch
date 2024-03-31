window.onscroll = throttle((ev) => {
    console.log("Scrolled")
    console.log(window.scrollX, window.scrollY)
    if(window.scrollY>900){
        document.querySelector('.get-started').classList.add('green');
    }
    else{
        document.querySelector('.get-started').classList.remove('green');
    }
}, 100);


function throttle(fun, t) {
    let id;
    bool = false;
    return function (ev) {
        if (!bool) {
            bool = true;
            fun(ev);
            id = setTimeout(() => {
                bool = false;
            }, t);
        }
    }
}

function debounce(fun, t) {
    let id;
    return function () {
        clearTimeout(id);
        id = setTimeout(() => {
            fun();
        }, t);
        // console.log("Scrolled")
    }
}

