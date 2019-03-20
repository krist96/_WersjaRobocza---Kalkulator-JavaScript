class Buttons
{
	set1 () 
	{
		show.value +=  1;
	}
	set2 () 
	{
		show.value += 2;
	}
	set3 () 
	{

		show.value += 3;
	}
	set4 () 
	{
		show.value += 4;
	}
	set5 () 
	{
		show.value  += 5;
	}
	set6 () 
	{
		show.value += 6;
	}
	set7 () 
	{
		show.value += 7;
	}
	set8 () 
	{
		show.value += 8;
	}
	set9 () 
	{
		show.value += 9;
	}
	set0 () 
	{
		show.value += 0;
	}
	setDot () 
	{
		let a = parseInt(show.value); 
		let b = '.0';
		document.getElementById("show").value = a + b;
	}
	setClear () 
	{
		show.value = "";
		outValue.value = "";
	}
	setDiv ()
	{
		tempDiv = document.getElementById("show").value;
		console.log(tempDiv);
		outValue.value = `Wynik:  ${tempDiv} / `;
		document.getElementById("show").value = '';
		tempDiv = tempDiv;
	}
	setMul ()
	{
		tempMul = show.value;
		console.log(tempMul);
		outValue.value = `${tempMul} * `;
		show.value = '';
		tempMul = tempMul;
	}
	setSub ()
	{
		tempSub = show.value;
		console.log(tempSub);
		outValue.value = `${tempSub} - `;
		show.value = '';
		tempSub = tempSub;
	}
	setAdd ()
	{
		tempAdd = show.value;
		console.log(tempAdd);
		outValue.value = `${tempAdd} + `;
		show.value = '';
		tempAdd = tempAdd;
	}
}

let buttons = new Buttons();


	let setOne = document.getElementById("setOne"),
	setTwo = document.getElementById("setTwo"),
	setThree = document.getElementById("setThree"),
	setFour = document.getElementById("setFour"),
	setFive = document.getElementById("setFive"),
	setSix = document.getElementById("setSix"),
	setSeven = document.getElementById("setSeven"),
	setEight = document.getElementById("setEight"),
	setNine = document.getElementById("setNine"),
	setZero = document.getElementById("setZero");


	let setDiv = document.getElementById("setDiv"),
	setStart = document.getElementById("setStart"),
	setMul = document.getElementById("setMul"),
	setSub = document.getElementById("setSub"),
	setAdd = document.getElementById("setAdd"),
	setDot = document.getElementById("setDot"),
	clear = document.getElementById("clear"),
	outValue = document.getElementById("outValue"),
	showValue = document.getElementById("show").value,
	show = document.getElementById("show");

	setOne.addEventListener("click", buttons.set1);	
	setTwo.addEventListener("click", buttons.set2);
	setThree.addEventListener("click", buttons.set3);
	setFour.addEventListener("click", buttons.set4);
	setFive.addEventListener("click", buttons.set5);
	setSix.addEventListener("click", buttons.set6);
	setSeven.addEventListener("click", buttons.set7);
	setEight.addEventListener("click", buttons.set8);
	setNine.addEventListener("click", buttons.set9);
	setZero.addEventListener("click", buttons.set0);
	setDot.addEventListener("click", buttons.setDot);
	clear.addEventListener("click", buttons.setClear);

	let tempDiv = 0, tempMul = 0, tempSub = 0, tempAdd = 0;

	setDiv.addEventListener("click", buttons.setDiv);
	setMul.addEventListener("click", buttons.setMul);
	setSub.addEventListener("click", buttons.setSub);
	setAdd.addEventListener("click", buttons.setAdd);


	setStart.addEventListener("click", () => {
		console.log(tempDiv);
		if(tempDiv !== 0)
		{
			let seccound = show.value;
			let resault = (tempDiv / seccound);
			show.value = resault;
			outValue.value += `${seccound} = ${resault}`;
			tempDiv = 0;
		} 
		else if(tempMul !== 0) 
		{
			let seccound = show.value;
			let resault = (tempMul * seccound);
			show.value = resault;
			outValue.value += `${seccound} = ${resault}`;
			tempMul = 0;
		}
		else if(tempSub !== 0)
		{
			let seccound = show.value;
			let resault = (tempSub - seccound);
			show.value = resault;
			outValue.value += `${seccound} = ${resault}`;
			tempSub = 0;
		}
		else if(tempAdd !== 0)
		{
			let seccound = show.value;
			let resault =  (parseInt(tempAdd) + parseInt(seccound));
			show.value = resault;
			outValue.value += `${seccound} = ${resault}`;
			tempAdd = 0;
		}
	})