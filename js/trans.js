;[...document.querySelectorAll('a')].forEach((item, index) => {
	item.addEventListener('click', e => {
		let foo = document.querySelectorAll('.block_content')
		for (var i = 0; i < foo.length; i++) {
			if (foo[i].classList.contains('active')) {
				foo[i].classList.remove('active')
			} else {
				foo[index].classList.add('active')
			}
		}
	})
})
