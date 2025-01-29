const cards = document.querySelectorAll(".pic-price");

cards.forEach(card =>{
	card.addEventListener('click',() =>{
		card.classList.toggle("clicked");
	});
});	


document.getElementById("submitOrder").addEventListener('click', ()=>{
	const selectedItems = [];
	let totalAmount = 0;


	cards.forEach(card =>{
		if(card.classList.contains('clicked')){
			const ItemName = card.querySelector('h1').innerText;
			const ItemPrice = card.querySelector('h2').innerText;

			const price = parseFloat(ItemPrice.replace('₱', '').replace(',', ''));
		
			selectedItems.push({name: ItemName, price: price});

			totalAmount += price;
		}
	});

	localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
	localStorage.setItem('totalAmount', totalAmount);

	window.location.href = "receipt.html";
});

