'use strict';
document.addEventListener('DOMContentLoaded', () => {
	var priceList = [
		{
			pageviews: "10K",
			price: 8
		},
		{
			pageviews: "50K",
			price: 12
		},
		{
			pageviews: "100K",
			price: 16
		},
		{
			pageviews: "500K",
			price: 24
		},
		{
			pageviews: "1M",
			price: 36
		}
	];
	var rangeSlider = document.getElementById('price-input');
	var rangeSlilderBtn = document.querySelectot
	var discountToggle = document.getElementById('yearly-billing');
	var pageviews = document.getElementsByClassName('pageviews').item(0);
	var priceElement = document.getElementById('price-value');
	var updatePrice = () => {
		var monthlyPrice = priceList[rangeSlider.value];
		pageviews.innerText = `${monthlyPrice.pageviews} Pageviews`;
		var price = discountToggle.checked ? monthlyPrice.price * 0.75 : monthlyPrice.price;
		priceElement.innerText = `$${price}.00`;
		rangeSlider.style.background = `
			linear-gradient(
				to right,
				var(--soft_cyan) 0%,
				var(--soft_cyan) ${rangeSlider.value / 4 *100}%,
				var(--light_gray_blue) 25%,
				var(--light_gray_blue) 100%
			)
		`;
	}
	
	discountToggle.addEventListener('change', () => {
		updatePrice();
	});
	rangeSlider.addEventListener('change', () => {
		updatePrice();
	});
	rangeSlider.addEventListener('input', () => {
		updatePrice();
	});
});

