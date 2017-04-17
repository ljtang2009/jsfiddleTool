/**
 * Created by tanglijin on 2017/4/17.
 */

setTimeout(function () {
    //异步，等待0.5秒，输出A
    postMessage("A");
}, 500);