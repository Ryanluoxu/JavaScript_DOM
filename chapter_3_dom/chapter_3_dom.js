/**
 * 浏览器提供了网页的 地图（DOM），我们用 JS 去读这张地图。
 */

// # Node
/**
 * 节点有三个类型：元素，文本，属性。
 * 每个节点，都是一个对象。
 */

// ## element node: <body><p><ul> -> 组成结构
// ## text node: <p> hello world..</p> 
// ## attribute node - 对包含在元素里的东西做出描述：<p title="greeting"> hello..</p>

// ## CSS
/**
 * 如果为 body 元素定义了颜色，body元素内所有元素都自动获得此设定。
 * 
 * 为了把某一个元素和其他元素区分开来，使用 class 或者 id 属性
 * 
 * ### class：
 * .special {
 *     font-style: italic;
 * }
 * 
 * ### id:
 * #purchases {
 *     border: 1px solid white;
 * }
 */

var tmp;

// ## 获取元素 get element
// ### by id
tmp = typeof document.getElementById("purchases"); // object

// ### by tag name
tmp = document.getElementsByTagName("li");    // return an array
for (let i = 0; i < tmp.length; i++) {
    const element = tmp[i];
}

// id=purchases 的元素包含多少个列表项
tmp = document.getElementById("purchases").getElementsByTagName("*").length; // 3

// ### by class name
document.getElementsByClassName("sale");
document.getElementsByClassName("sale important") // 多个类名
document.getElementsByClassName("important sale") // 效果一样


// # 获取和设置属性 (Attribute)
/**
 * DOM 的工作模式：先加载文档的静态内容，再动态刷新，动态刷新不影响静态内容。
 */
tmp = document.getElementsByTagName("p");
for (let i = 0; i < tmp.length; i++) {
    const element = tmp[i];
    var theAttribute = element.getAttribute("title");   // <p title="reminder"></p>
    if (theAttribute) { // 等价于 theAttribute != null 
        // alert(theAttribute);        
    }
}

// set attribute
tmp = document.getElementById("purchases");
tmp.setAttribute("title","a list of goods");




