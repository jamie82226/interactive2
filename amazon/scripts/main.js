console.log('hi')

let textField = document.querySelector('#textField')

console.log(textField)


textField.addEventListener('keypress',function(event){
	if(event.key === 'Enter'){
		console.log('done did an enter')

		window.scrollBy(0,window.innerHeight * 1.1)


	}
})

let dropDowns = document.querySelectorAll('.dropdown')



for(let counter = 0; counter < dropDowns.length; counter++){
	dropDowns[counter].addEventListener('mouseenter',function(){
		this.classList.add('beenHovered')

	})	

}


let leftdropDowns = document.querySelectorAll('.l-dropdown')



for(let counter = 0; counter < leftdropDowns.length; counter++){
	leftdropDowns[counter].addEventListener('mouseenter',function(){
		this.classList.add('l-beenHovered')

	})
}