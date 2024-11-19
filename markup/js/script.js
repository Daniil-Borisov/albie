const swiper = new Swiper('.testimonials .swiper', {
	// Optional parameters
	spaceBetween: 20,
	slidesPerView: 1,
	grid: {
		rows: 2,
		fill: 'row',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 2,
			grid: {
				rows: 1,
				fill: 'row',
			},
		},
	},
});

function togglePasswordVisibility(clickedElement) {
	const inputWrapper = clickedElement.parentNode;
	const passwordInput = inputWrapper.querySelector('input');
	if (passwordInput.type === 'password') {
		passwordInput.type = 'text';
	} else {
		passwordInput.type = 'password';
	}
}

function switchInputAndTab(event) {
	// Получаем все элементы input и tab
	var inputs = document.querySelectorAll('.search-input .input-wrapper input');
	var tabs = document.querySelectorAll('.search-input__tabs a');

	// Удаляем классы visible и tab-active со всех элементов
	inputs.forEach(function (input) {
		input.classList.remove('visible');
	});
	tabs.forEach(function (tab) {
		tab.classList.remove('tab-active');
	});

	// Добавляем класс tab-active к активной вкладке
	var activeTab = event.currentTarget;
	if (activeTab) {
		activeTab.classList.add('tab-active');
	}

	// Получаем связанный инпут с помощью атрибута data-input
	var inputClass = activeTab.getAttribute('data-input');
	var activeInput = document.querySelector('.' + inputClass);

	// Добавляем класс visible к активному элементу input
	if (activeInput) {
		activeInput.classList.add('visible');
	}
}

var select = document?.querySelector('.select');
if (select) {
	var selectList = select.querySelector('.select-list');
	var selectText = select.querySelector('span');
	var selectIcon = select.querySelector('.select-arrow');

	select.addEventListener('click', function (event) {
		selectList.classList.toggle('visible');
		selectIcon.classList.toggle('rotate');
	});
	selectList.querySelectorAll('.select-list__item').forEach(function (item) {
		item.addEventListener('click', function (event) {
			selectText.textContent = this.querySelector('span').textContent;
			select.querySelector('.icon').src = this.querySelector('img').src;
			// selectList.classList.toggle('visible');
		});
	});
}

document
	?.querySelector('.quest .start-quest .btn')
	?.addEventListener('click', function (event) {
		event.preventDefault();

		var quests = document.querySelectorAll('.quest__item');
		var currentActiveQuest = 0;
		var startBtn = document.querySelector('.start-quest .btn');
		var nextBtn = document.querySelector('.quest .submit-btn');
		var indicator = document.querySelector('.quest__indicator');
		var width = 100 / quests.length;
		indicator.style.width = currentActiveQuest * width + '%';

		quests.forEach(function (quest, index) {
			if (quest.classList.contains('active')) {
				currentActiveQuest = index;
			}
		});

		if (currentActiveQuest === 0) {
			startBtn.classList.remove('btn__active');
			nextBtn.classList.add('btn__active');
			quests[currentActiveQuest].classList.remove('active');
			quests[currentActiveQuest + 1].classList.add('active');

			return;
		}
	});

document
	.querySelector('.quest .submit-btn')
	?.addEventListener('click', function (event) {
		event.preventDefault();

		var quests = document.querySelectorAll('.quest__item');
		var currentActiveQuest;
		var startBtn = document.querySelector('.start-quest .btn');
		var nextBtn = document.querySelector('.quest .submit-btn');
		var indicator = document.querySelector('.quest__indicator');
		var width = 100 / quests.length;
		indicator.style.width = (currentActiveQuest + 1) * width + '%';

		quests.forEach(function (quest, index) {
			if (quest.classList.contains('active')) {
				currentActiveQuest = index;
			}
		});

		if (
			nextBtn.classList.contains('btn__active') &&
			currentActiveQuest < quests.length - 1
		) {
			event.preventDefault();
			quests[currentActiveQuest].classList.remove('active');
			quests[currentActiveQuest + 1].classList.add('active');
			indicator.style.width = currentActiveQuest * width + '%';
		} else {
			document.querySelector('form').submit();
		}
	});
