(function(){
	let movil = document.getElementById('movil');
	let menu = document.getElementById('principal');
	
	movil.addEventListener('click', function(){
		menu.style.display = menu.style.display == 'flex'? 'none' : 'flex';
	});
})();