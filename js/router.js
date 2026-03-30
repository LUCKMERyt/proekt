// Функция отправки запроса по id
async function id_to_server(id) {
	let url = `http://localhost/myserver/?id=${id}`
	let response = await fetch(url, {
		method: 'GET',
		headers: { Accept: 'application/json' },
	})

	let param = await response.json()
    console.log(param)

	obj_dom.innerHTML = param[0].text
	obj_dom.classList.add('active')


}




document.addEventListener("DOMContentLoaded", function () {
    get_data_form();
});
