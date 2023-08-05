var a, b;

	function A() {
		a = prompt('Nhap A')
	}
    function B() {
		b = prompt('Nhap B')
	}
	function KQ() {
		if(a == 0) {
			if(b == 0) {
				alert('PTVSN')
			} else {
				alert('PTVN')
			}
		} else {
			x = -b/a
			alert(x)
		}
    }