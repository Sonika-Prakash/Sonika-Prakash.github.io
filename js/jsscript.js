function myfunc1() {
	other2 = document.getElementById("mydropdown2");
	if (other2.classList.contains("show")) {
		other2.classList.remove("show");
	}
	other3 = document.getElementById("mydropdown3");
	if (other3.classList.contains("show")) {
		other3.classList.remove("show");
	}
	ele1 = document.getElementById("mydropdown1");
	ele1.classList.toggle("show");
}

function myfunc2() {
	other1 = document.getElementById("mydropdown1");
	if (other1.classList.contains("show")) {
		other1.classList.remove("show");
	}
	other3 = document.getElementById("mydropdown3");
	if (other3.classList.contains("show")) {
		other3.classList.remove("show");
	}
	ele2 = document.getElementById("mydropdown2");
    ele2.classList.toggle("show");
}

function myfunc3() {
	other2 = document.getElementById("mydropdown2");
	if (other2.classList.contains("show")) {
		other2.classList.remove("show");
	}
	other1 = document.getElementById("mydropdown1");
	if (other1.classList.contains("show")) {
		other1.classList.remove("show");
	}
	ele3 = document.getElementById("mydropdown3");
	ele3.classList.toggle("show");
}