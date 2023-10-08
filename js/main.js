var count = 0;
var items = $('.slider-item');
var max = items.length - 1;

$(function() {
	$('.logo-s > a').on('click', function(event) {
	  event.preventDefault();
	  
	  var sc = $(this).attr('href'),
		  dn = $(sc).offset().top;
	  
	  $('html, body').animate({scrollTop: dn}, 1000);
	});

	$('input[type="radio"]').on("change", function() {
		if ($(this).attr("class") === "n1") {
			$('.calculator input[name="sizeB"], .calculator input[name="sizeC"]').attr("disabled", "disabled");
		}

		if ($(this).attr("class") === "n2") {
			$('.calculator input[name="sizeB"]').attr("disabled", false);
			$('.calculator input[name="sizeC"]').attr("disabled", "disabled");
		}

		if ($(this).attr("class") === "n3" || $(this).attr("class") === "n4") {
			$('.calculator input[name="sizeB"]').attr("disabled", false);
			$('.calculator input[name="sizeC"]').attr("disabled", false);
		}

		if ($(this).attr("class") === "m_n1") {
			$('.calculator-modal input[name="sizeB"], .calculator-modal input[name="sizeC"]').attr("disabled", "disabled");
		}

		if ($(this).attr("class") === "m_n2") {
			$('.calculator-modal input[name="sizeB"]').attr("disabled", false);
			$('.calculator-modal input[name="sizeC"]').attr("disabled", "disabled");
		}

		if ($(this).attr("class") === "m_n3" || $(this).attr("class") === "n4") {
			$('.calculator-modal input[name="sizeB"]').attr("disabled", false);
			$('.calculator-modal input[name="sizeC"]').attr("disabled", false);
		}
	});

	var size1 = false;
	var size2 = false;

	$('.calculator input[type="checkbox"]').on("change", function() {
		if(!size1) {
			$('.calculator .sizes > input[placeholder]').attr("disabled", "disabled");
			size1 = true;
		}
		else {
			size1 = false;
			$('.calculator .sizes > input[placeholder]').attr("disabled", false);
		}
	});

	$('.calculator-modal input[type="checkbox"]').on("change", function() {
		if(!size2) {
			$('.calculator-modal .sizes > input[placeholder]').attr("disabled", "disabled");
			size2 = true;
		}
		else {
			size2 = false;
			$('.calculator-modal .sizes > input[placeholder]').attr("disabled", false);
		}
	});

	$('.slider-item .item_number')[count].innerHTML = `№ ${count + 1}`;
	$('.slider-item .count')[count].innerHTML = `<span class="red">${count + 1}</span> /${max + 1}`;

	$('.prev').on("click", function() {
		count--;
		
		if(count < 0) {
			count = 0;
		}
	});

	$('.next').on("click", function() {
		count++;

		if(count > max) {
			count = max;
		}
	});

	$('.prev, .next').on("click", function() {
		$('.slider-item').removeClass('active');
		items[count].classList.add('active');
		$('.slider-item .item_number')[count].innerHTML = `№ ${count + 1}`;
		$('.slider-item .count')[count].innerHTML = `<span class="red">${count + 1}</span> /${max + 1}`;
	});
  });