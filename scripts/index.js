window.onload = function(){
	var sc = document.getElementById('screen');
	var nums = document.getElementsByClassName('hui');
	var equl = document.getElementById('equl');
	var zhengfu = document.getElementById('zhengfu');
	var aprator = document.getElementsByClassName('lan');
	var pingfang=document.getElementById('pingfang');
	var lifang=document.getElementById('lifang');
	var fuyi=document.getElementById('fuyi');
	var c=document.getElementById('c');
	var jiecheng=document.getElementById('jiecheng');
	var kaifang=document.getElementById('kaifang');
	var sin=document.getElementById('sin');
	var cos=document.getElementById('cos');
	var tan=document.getElementById('tan');
	var ln=document.getElementById('ln');
	var sinh=document.getElementById('sinh');
	var cosh=document.getElementById('cosh');
	var tanh=document.getElementById('tanh');
	var eN=document.getElementById('eN');
	var pai=document.getElementById('pai');
	var rand=document.getElementById('rand');
    var firstNumber = '',secondNumber = '',yunsuanfuhao = '';
    c.onclick = function(){
    	window.location.reload();
    }
	for (var i = 0; i < aprator.length; i++) {
		aprator[i].onclick = function(){
			yunsuanfuhao = this.innerHTML;
			if (yunsuanfuhao =='c') {window.location.reload();};
		}
	}
	for (var i = 0; i < nums.length; i++) {
		nums[i].onclick = function(){
			if (this.innerHTML=='.'&&sc.innerHTML.indexOf('.')!=-1) {return;};
			if (!yunsuanfuhao) {
				firstNumber += this.innerHTML;
				sc.innerHTML =firstNumber;
				pai.onclick=function(){firstNumber=Math.PI;}
				zhengfu.onclick=function(){firstNumber*=-1; sc.innerHTML=firstNumber;}
				fuyi.onclick=function(){sc.innerHTML=1/firstNumber;}
				pingfang.onclick=function(){sc.innerHTML=Math.pow(firstNumber,2);}
				lifang.onclick=function(){sc.innerHTML=Math.pow(firstNumber,3);}
				kaifang.onclick=function(){sc.innerHTML=Math.sqrt(firstNumber);}
				sin.onclick=function(){sc.innerHTML=Math.sin(firstNumber*Math.PI/180);}
				cos.onclick=function(){sc.innerHTML=Math.cos(firstNumber*Math.PI/180);}
				tan.onclick=function(){sc.innerHTML=Math.tan(firstNumber*Math.PI/180);}
				eN.onclick=function(){sc.innerHTML=Math.pow(Math.E,firstNumber);}
				ln.onclick=function(){sc.innerHTML=Math.log(Number(firstNumber))/Math.log(Math.E);}
				sinh.onclick=function(){sc.innerHTML=Math.sinh(Number(firstNumber));}
				cosh.onclick=function(){sc.innerHTML=Math.cosh(Number(firstNumber));}
				tanh.onclick=function(){sc.innerHTML=Math.tanh(Number(firstNumber));}
				jiecheng.onclick=function(){
					var Jie=1;
					for(var i=firstNumber;i>1;i--){Jie=Jie*i;}
					sc.innerHTML=Jie;
				}
				
			}else{
				secondNumber += this.innerHTML;
				sc.innerHTML =secondNumber;
				if(yunsuanfuhao=='+'){
					firstNumber=Number(firstNumber)+Number(secondNumber);			
					secondNumber='';
				}
				if(yunsuanfuhao=='-'){
					firstNumber=Number(firstNumber)-Number(secondNumber);			
					secondNumber='';
				}
				if(yunsuanfuhao=='×'){
					firstNumber=Number(firstNumber)*Number(secondNumber);			
					secondNumber='';
				}
				if(yunsuanfuhao=='÷'){
					firstNumber=Number(firstNumber)/Number(secondNumber);			
					secondNumber='';
				}

				zhengfu.onclick = function(){
					secondNumber*=-1;
					sc.innerHTML =secondNumber;					
				};
			}
		};
	}
	rand.onclick=function(){sc.innerHTML=Math.random();}
	equl.onclick = function(){
		if (yunsuanfuhao=='+') {
			sc.innerHTML= Number(firstNumber) + Number(secondNumber);
		}
		if (yunsuanfuhao=='-') {
			sc.innerHTML= Number(firstNumber) - Number(secondNumber);
		}
		if (yunsuanfuhao=='×') {
			sc.innerHTML= Number(firstNumber);
		}
		if (yunsuanfuhao=='÷') {
			sc.innerHTML= Number(firstNumber);
		}
		if(yunsuanfuhao=='%'){
			sc.innerHTML=Number(firstNumber)%Number(secondNumber);			
		}
		if(yunsuanfuhao=='yⁿ'){
			sc.innerHTML=Math.pow(Number(firstNumber),Number(secondNumber));			
		}
		if(yunsuanfuhao=='log'){
			sc.innerHTML=Math.log(Number(secondNumber))/Math.log(Number(firstNumber));			
		}
		if(yunsuanfuhao=='EE'){
			sc.innerHTML=Number(firstNumber)*Math.pow(10,Number(secondNumber));	
		}
		if(yunsuanfuhao=='ⁿ√y'){
			sc.innerHTML=Math.pow(Number(firstNumber),1/Number(secondNumber));	
		}
		firstNumber=sc.innerHTML;secondNumber=yunsuanfuhao='';
	};
}
