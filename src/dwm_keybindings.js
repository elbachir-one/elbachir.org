const input = document.getElementById('filter');
const tbody = document.querySelector('#bindings tbody');
input.addEventListener('input', ()=>{
	const q = input.value.trim().toLowerCase();
	for(const tr of tbody.querySelectorAll('tr')){
		const text = tr.textContent.toLowerCase();
		tr.style.display = q && !text.includes(q) ? 'none' : '';
	}
});
window.addEventListener('keydown', e=>{
	if(e.key === '/' && document.activeElement !== input){ e.preventDefault(); input.focus(); input.select(); }
});
