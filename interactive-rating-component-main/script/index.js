$('button').click(function (e) {
	localStorage.setItem('feedback', e.target.innerHTML.trim());
});
