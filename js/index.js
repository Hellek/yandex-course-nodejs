/*[
	'--- Привет! Я не понял однозначно что именно значит "Формат email- адреса, но только в доменах ya.ru..." что валидными считаются только адреса в этих доменных зонах? Или то что валидация должна производиться только для них? А адреса в других доменных зонах могут вообще не соответствовать стандартру и это не входит в условия задачи?',
	'--- Вот почему я не стал использовать суперсложную регулярку или библиотеку для проверки емейла https://habrahabr.ru/post/175375/',
	'--- Лучший вариант проверки емейла это подтверждение по ссылке после регистрации, только в тком случае можно убедиться что у человека есть доступ к ящику и ящик существует',
	'--- Отправка запроса на адрес в момент регистрации так себе вариант, почтовый сервис может быть не доступен в данную секунду или некоторый интервал или же там могут быть настроены определённые фильтры на подобные запросы',
	'--- имеет формат + 7(999)999- 99 - 99, тут нет опечаток? он именно с такими кривыми отступами и должен быть?'
].forEach(function(row) {
	console.info(row);
});
*/

var phoneMask = "+7 (999) 999-99-99";
var phoneMaxSum = 30;
var errorTextFIO = 'Укажите ФИО в 3 слова';
var errorTextEmail = 'В формате "some@domain.tld"';
var errorTextPhoneMask = 'Укажите телефон в формате ' + phoneMask;
var errorTextPhoneMaxSum = 'Сумма всех цифр не должна быть больше ' + phoneMaxSum;

// Маска для всех телефонных номеров
!function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function(a) { var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c); a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({ caret: function(a, b) { var c; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function() { this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()) })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b }) }, unmask: function() { return this.trigger("unmask") }, mask: function(c, g) { var h, i, j, k, l, m, n, o; if (!c && this.length > 0) { h = a(this[0]); var p = h.data(a.mask.dataName); return p ? p() : void 0 } return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function(a, b) { "?" == b ? (n-- , k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null) }), this.trigger("unmask").each(function() { function h() { if (g.completed) { for (var a = l; m >= a; a++)if (j[a] && C[a] === p(a)) return; g.completed.call(B) } } function p(a) { return g.placeholder.charAt(a < g.placeholder.length ? a : 0) } function q(a) { for (; ++a < n && !j[a];); return a } function r(a) { for (; --a >= 0 && !j[a];); return a } function s(a, b) { var c, d; if (!(0 > a)) { for (c = a, d = q(b); n > c; c++)if (j[c]) { if (!(n > d && j[c].test(C[d]))) break; C[c] = C[d], C[d] = p(d), d = q(d) } z(), B.caret(Math.max(l, a)) } } function t(a) { var b, c, d, e; for (b = a, c = p(a); n > b; b++)if (j[b]) { if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break; c = e } } function u() { var a = B.val(), b = B.caret(); if (o && o.length && o.length > a.length) { for (A(!0); b.begin > 0 && !j[b.begin - 1];)b.begin--; if (0 === b.begin) for (; b.begin < l && !j[b.begin];)b.begin++; B.caret(b.begin, b.begin) } else { for (A(!0); b.begin < n && !j[b.begin];)b.begin++; B.caret(b.begin, b.begin) } h() } function v() { A(), B.val() != E && B.change() } function w(a) { if (!B.prop("readonly")) { var b, c, e, f = a.which || a.keyCode; o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault()) } } function x(b) { if (!B.prop("readonly")) { var c, d, e, g = b.which || b.keyCode, i = B.caret(); if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) { if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) { if (t(c), C[c] = d, z(), e = q(c), f) { var k = function() { a.proxy(a.fn.caret, B, e)() }; setTimeout(k, 0) } else B.caret(e); i.begin <= m && h() } b.preventDefault() } } } function y(a, b) { var c; for (c = a; b > c && n > c; c++)j[c] && (C[c] = p(c)) } function z() { B.val(C.join("")) } function A(a) { var b, c, d, e = B.val(), f = -1; for (b = 0, d = 0; n > b; b++)if (j[b]) { for (C[b] = p(b); d++ < e.length;)if (c = e.charAt(d - 1), j[b].test(c)) { C[b] = c, f = b; break } if (d > e.length) { y(b + 1, n); break } } else C[b] === e.charAt(d) && d++ , k > b && (f = b); return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l } var B = a(this), C = a.map(c.split(""), function(a, b) { return "?" != a ? i[a] ? p(b) : a : void 0 }), D = C.join(""), E = B.val(); B.data(a.mask.dataName, function() { return a.map(C, function(a, b) { return j[b] && a != p(b) ? a : null }).join("") }), B.one("unmask", function() { B.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function() { if (!B.prop("readonly")) { clearTimeout(b); var a; E = B.val(), a = A(), b = setTimeout(function() { B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)) }, 10) } }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() { B.prop("readonly") || setTimeout(function() { var a = A(!0); B.caret(a), h() }, 0) }), e && f && B.off("input.mask").on("input.mask", u), A() }) } }) });
$("[type=tel]").mask(phoneMask, { autoclear: false });

function myForm(params) {
	this.elForm = document.getElementById(params.formID);
	this.inputs_fio = document.querySelectorAll('[type-data=fio]');
	this.inputs_email = document.querySelectorAll('[type=email]');
	this.inputs_phone = document.querySelectorAll('[type=tel]');
	this.buttons_submit = document.querySelectorAll('[type=submit]');
	this.elResultContainer = document.getElementById('resultContainer');
	this.inputs = this.elForm.querySelectorAll('input');
	this.store = {};
	let that = this;

	this.elForm.addEventListener('submit', function(e) {
		e.preventDefault();
		that.submit();
	});

	this.elForm

	/*
	Метод submit выполняет валидацию полей и отправку ajax- запроса,
	если валидация пройдена.Вызывается по клику на кнопку отправить.
	*/
	this.submit = function() {
		let isValid = this.validate().isValid;

		// Если валидация прошла успешно, кнопка отправки формы должна стать неактивной и
		// должен отправиться ajax- запрос на адрес, указанный в атрибуте action формы.*
		if (isValid) {
			that.changeSubmitButtonsAvailability(false);
			that.sendRequest();
		}
	};

	this.sendRequest = function() {
		$.ajax({
			url: that.elForm.action,
			type: 'GET',
			dataType: 'json',
			success: function (json) {
				if (json.status == 'success') { // a. {"status":"success" } – контейнеру resultContainer должен быть выставлен класс success и добавлено содержимое с текстом "Success"
					that.elResultContainer.parentNode.classList.add('success', 'green')
					that.elResultContainer.textContent = 'Success';
				} else if (json.status == 'error') { // b. {"status":"error", "reason":String } - контейнеру resultContainer должен быть выставлен класс error и добавлено содержимое с текстом из поля reason
					that.elResultContainer.parentNode.classList.add('error', 'red')
					that.elResultContainer.textContent = json.reason;
				} else if (json.status == 'progress') { // c. {"status":"progress", "timeout":Number } - контейнеру resultContainer должен быть выставлен класс progress и через timeout миллисекунд необходимо повторить запрос (логика должна повторяться, пока в ответе не вернется отличный от progress статус)
					that.elResultContainer.classList.add('progress')
					that.elResultContainer.innerHTML = '<div class="indeterminate"></div>';

					console.log('В процессе');

					setTimeout(function () {
						that.sendRequest();
					}, json.timeout);
				}
			}
		});
	};

	this.changeSubmitButtonsAvailability = function(bool) {
		for (var i = 0; i < that.buttons_submit.length; i++) {
			let el = that.buttons_submit[i];

			el.setAttribute("disabled", false);
		}
	};

	this.designInputValid = function(el) {
		el.classList.add('valid');
		el.classList.remove('error', 'invalid');
	};

	this.designInputNotValid = function(el) {
		el.classList.add('error', 'invalid')
		el.classList.remove('valid');
	};

	// У элементов с [data-type=fio] должно быть ровно три слова в value
	this.validateFIO = function() {
		for (var i = 0; i < that.inputs_fio.length; i++) {
			let el = that.inputs_fio[i];
			// "/ /" не подойдёт, т.к. пробелов может быть несколько подряд
			if (el.value.trim().split(/[ ]+/).length === 3) {
				el.nextElementSibling.setAttribute('data-success', "Отлично!");
				that.designInputValid(el);
				return true;
			} else {
				el.nextElementSibling.setAttribute('data-error', errorTextFIO);
				that.designInputNotValid(el);
				return false;
			}
		}
	};

	// Формат email- адреса, но только в доменах ya.ru, yandex.ru, yandex.ua, yandex.by, yandex.kz, yandex.com
	this.validateEmail = function() {
		for (var i = 0; i < that.inputs_email.length; i++) {
			let el = that.inputs_email[i];
			// "/ /" не подойдёт, т.к. пробелов может быть несколько подряд
			if (/.+@.+\..+/.test(el.value)) {
				el.nextElementSibling.setAttribute('data-success', 'Класс!');
				that.designInputValid(el);
				return true;
			} else {
				el.nextElementSibling.setAttribute('data-error', errorTextEmail);
				that.designInputNotValid(el);
				return false;
			}
		}
	};

	// - Телефон: Номер телефона, который начинается на + 7, и имеет формат + 7(999)999- 99 - 99. Кроме того, сумма всех цифр телефона не должна превышать 30. Например, для + 7(111)222- 33 - 11 сумма равняется 24, а для + 7(222)444- 55 - 66 сумма равняется 47.
	this.validatePhone = function() {
		for (var i = 0; i < that.inputs_phone.length; i++) {
			let el = that.inputs_phone[i];

			// "/ /" не подойдёт, т.к. пробелов может быть несколько подряд
			if (!/\+\d \(\d\d\d\) \d\d\d-\d\d-\d\d/.test(el.value)) {
				el.nextElementSibling.setAttribute('data-error', errorTextPhoneMask);
				that.designInputNotValid(el);
				return false;
			}

			const justDigitsStr = el.value.replace(/[\D*]/g, '');
			const sum = justDigitsStr.split('').reduce(function(sum, current) {
				return +sum + +current;
			}, 0);

			if (sum > phoneMaxSum) {
				el.nextElementSibling.setAttribute('data-error', errorTextPhoneMaxSum);
				that.designInputNotValid(el);
				return false;
			}

			el.nextElementSibling.setAttribute('data-success', 'Спасибо!');
			that.designInputValid(el);
			return true;
		}
	};

	// Метод validate возвращает объект с признаком результата валидации (isValid)
	// и массивом названий полей, которые не прошли валидацию (errorFields).
	this.validate = function() {
		let res = {
			isValid: true,
			errorFields: []
		};

		if (!this.validateFIO()) {
			res.isValid = false;
			res.errorFields.push(errorTextFIO);
		}

		if (!this.validateEmail()) {
			res.isValid = false;
			// говорить "сайт.домен" не грамотно, тут сделано так исходя из контекста "для простых людей"
			res.errorFields.push(errorTextEmail);
		}

		if (!this.validatePhone()) {
			res.isValid = false;
			res.errorFields.push(errorTextPhoneMaxSum);
		}

		return res;
	};

	//Метод getData возвращает объект с данными формы, где имена свойств совпадают с именами инпутов.
	this.getData = function() {
		for (var i = 0; i < that.inputs.length; i++) {
			let el = that.inputs[i];
			that.store[el.id] = el.value;
		}

		return that.store;
	};

	// Метод setData принимает объект с данными формы и устанавливает их инпутам формы.
	this.setData = function(obj) {
		let inputs = this.elForm.querySelectorAll('input');
		var changeEvent = new Event("focus"); // event for moving materializecss label

		for (incomeProperty in obj) {
			for (var i = 0; i < inputs.length; i++) {
				let existedInput = inputs[i];

				if (existedInput.id == incomeProperty) {
					existedInput.dispatchEvent(changeEvent); // event for moving materializecss label
					existedInput.value = obj[incomeProperty];
				}
			}
		}

		return that.store;
	};

	// Валидация на вводе
	for (var i = 0; i < this.inputs.length; i++) {
		let el = this.inputs[i];
		// лучше data проверять, а не все текстовые поля. Не стал делать, т.к. в рамках задачи этого нет
		if (el.getAttribute('type-data') == 'fio') {
			el.addEventListener('input', function() {
				that.validateFIO();
			});
		} else if (el.type == 'email') {
			el.addEventListener('input', function() {
				that.validateEmail();
			});
		} else if (el.type == 'tel') {
			el.addEventListener('input', function() {
				that.validatePhone();
			});
		}
	}
}

// В глобальной области видимости должен быть определен объект MyForm
var MyForm = new myForm({
	formID: 'myForm'
});
