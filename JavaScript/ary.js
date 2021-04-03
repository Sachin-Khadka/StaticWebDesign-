function additem(){
	var key = Math.floor(Math.random()*1000)
		
			var uNamme = document.getElementById('user').value;
			var Password = document.getElementById('pass').value;
			var cPassword = document.getElementById('conpass').value;
			var number = document.getElementById('mobileNumber').value;
			var Email = document.getElementById('emails').value;
			var str = [uNamme, cPassword,number,Email]
			var ob = JSON.stringify(str)
			localStorage.setItem(key,ob)
		}

		
		var div = document.getElementById('nepl')
		for(var i=0;i<localStorage.length;i++){
		var str = localStorage.getItem(localStorage.key(i))
		var ob = JSON.parse(str)
		var r = document.createElement('tr')
		 disp.appendChild(r);
		 for(var j=0;j<ob.length;j++){
		var z = document.createElement('td')
		 z.innerHTML = ob[j]
		nepl.appendChild(z)
		}
		}