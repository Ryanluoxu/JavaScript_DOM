/**
 * 当点击图片链接时，保留在当前窗口。 
 * 
 * 做法：
 * 1. 增加一个占位符，预留预览区域
 * 2. 拦截点击后的网页行为: onclick = "return false;"
 * 3. 替换占位符成点击的图片：替换 src
 * 
 * 事件处理函数：onclick = "showPicture(this);"
 * 
 * 4. 同时显示对应的 title 属性。
 */

function showPicture(whichPicture){
    var picHref = whichPicture.getAttribute("href");
    document.getElementById("placeHolder").setAttribute("src",picHref);
    var text = whichPicture.getAttribute("title");
    document.getElementById("description").firstChild.nodeValue = text;
}

function countBodyChildren(){
    var childrenNumber = document.getElementsByTagName("body")[0].childNodes.length;
    alert(childrenNumber);
}

window.onload = countBodyChildren();