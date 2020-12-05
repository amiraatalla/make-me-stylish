var changebtn = document.getElementById("changStyle");
changebtn.addEventListener('click', changeStyle);

var tagname = document.getElementById('tagname');
var tagcolor = document.getElementById('tagcolor');
var tagbackground = document.getElementById('tagbackground');


function changeStyle() {

    var tstyle = { color: tagcolor.value, background: tagbackground.value };

    var tags = document.getElementsByTagName(tagname.value);

    for (let i = 0; i < tags.length; i++) {

        for (k in tstyle) {
            tags[i].style[k] = tstyle[k];
        }
    }
}

