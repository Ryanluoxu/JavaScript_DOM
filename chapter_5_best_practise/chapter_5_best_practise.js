/**
 * 对于页面的控制，属于 DOM
 * 对于浏览器的控制，属于 BOM
 * 
 * 1. 平稳退化
 * 2. 分离 JS
 * 3. 向后兼容（旧版本）
 * 4. 性能考虑
 * 
 * 把 行为（js） 与 结构（html） 分离开来
 */

function popUp(url){
    window.open(url,"popup","width=600, height=480");
}

/**
 * 分离 JavaScript
 * 
 * 去掉 HTML 中, onclick 事件处理函数，换成 class = "popup" 
 * 在 js 中： 
 */
function prepareLinks(){
    if (!document.getElementsByTagName) {   // 有些浏览器支持 JS，但是不支持 DOM
        return false;   // 执行之前，确保 getElementsByTagName 是可行的，否则退出。
    }
    var links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.getAttribute("class")=="popup") {
            link.onclick = function(){
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

/**
 * 为了确保 links 的完整，需要在 DOM 完全加载之后才执行
 */
window.onload = prepareLinks();

/**
 * 1. 尽量减少遍历 DOM 的次数
 * 2. 对不同类的遍历，可以考虑重构代码，建立全局变量
 * 3. html 中减少不必要的标记
 * 4. 合并脚本，精简脚本: min
 */