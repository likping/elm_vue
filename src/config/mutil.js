export const setStor = (name, content) => {
    if (!name) return;
    if (typeof context != "string") {
        contetn = JSON.stringify(content);

    }
    window.localStorage.setItem(name, content);
}

export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}
/**
 * 
 * @param {HTMLElement} element 
 * @param {string} attr 
 * @param {string} NumberMode 
 * 获得高度等计算值
 */
export const getNumberInStyle = (element, attr, NumberMode = "int")=>{
    let target;
    if (attr == "scrollTop") {
        target = element.scrollTop;
    } else if (element.currentStyle) {//ie
        target = element.currentStyle[attr];

    } else {
        //document.defaultView====window;
        target = document.defaultView.getComputedStyle(element, null)[attr];
    }
    return NumberMode == "float" ? parseFloat(target) : parseInt(target);
}

/**
 * 
 * @param {HTMLElement} element 
 * @param {function} callback 
 */
export const loadMore = (element, callback) => {
    let windowHeight = window.screen.height;
    let height;
    let setTop;
    let paddingBottom;
    let marginBottom;
    let requestFram;
    let oldScrollTop;
    document.body.addEventListener("scroll", () => {
        loadMore();
    }, false);
    element.addEventListener("touchstart", () => {
        height = element.offsetHeight;
        setTop = element.offsetTop;
        paddingBottom = getNumberInStyle(element, "paddingBottom");
        marginBottom = getNumberInStyle(element, "marginBottom");
    }, { passive: true })//if true, 意味着listener永远不远调用preventDefault方法
    element.addEventListener("touchmove", () => {
        loadMore();
    }, { passive: true });
    element.addEventListener('touchend', () => {
        oldScrollTop = document.body.scrollTop;
        moveEnd();
    }, { passive: true });
    const moveEnd = () => {
        //你希望执行一个动画,并且要求浏览器在下次重绘之前调用指定的回调函数更新动画
        requestFram = requestAnimationFrame(() => {
            if (document.body.scrollTop != oldScrollTop) {
                oldScrollTop = documnet.body.scrollTop;
                loadMore();
                moveEnd();
            } else {
                cancelAnimationFrame(requestFram);
               //为了防止鼠标抬起时已经渲染好数据从而导致重获取数据，应该重新获取dom高度
                height = element.offsetHeight;
                loadMore();
            }
        })
    }
    const loadMore = () => {
        if (document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
            callback();
        }
    }
}