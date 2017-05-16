// Javascript Document
var expanded;

/*function expand_menu_f() {
	if (expanded != 1) {
		expanded = 1;
		document.getElementById('expandable').style.display = 'block';
		document.getElementById('menu_text').innerHTML = 'Close menu';
	} else {
		expanded = 0;
		document.getElementById('expandable').style.display = 'none';
		document.getElementById('menu_text').innerHTML = 'Menu';
	}
}*/
window.onclick = function(event) {
    if (event.target == document.getElementById('main')) {
        expanded = 1;
		document.getElementById('expandable').style.display = 'block';
		document.getElementById('menu_text').innerHTML = 'Close menu';
	} else {
		expanded = 0;
		document.getElementById('expandable').style.display = 'none';
		document.getElementById('menu_text').innerHTML = 'Menu';
	}
}