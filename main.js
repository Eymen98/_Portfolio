/* ==================menn================= */
const navMenu = document.getElementById('sidebar');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-sidebar');
	});
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-sidebar');
	});
}

/* ============SKİLLS TABS============== */
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);

		tabContent.forEach((tabContents) => {
			tabContents.classList.remove('skills__active');
		});

		target.classList.add('skills__active');

		tabs.forEach((tab) => {
			tab.classList.remove('skills__active');
		});

		tab.classList.add('skills__active');
	});
});
