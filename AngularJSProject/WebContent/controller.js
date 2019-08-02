

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
var elements = document.getElementsByClassName("column");


var i;

function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}


function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}


var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
	
$(document).on('click','button#edit',function(){
	$(this).hide();
	$('button#save').show();
	$('p.test').attr('contenteditable','true').focus();
});

$(document),on('click','button#save',function(){
	$(this).hide();
	$('button#edit').show()
	var newText = $('p.test').text();
});

