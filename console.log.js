/**
 * Created by tanglijin on 2017/4/17.
 */

(function () {
    var console = {};
    console.log = function(output){
        $('#console').append(output+'<br/>');
    };
})();