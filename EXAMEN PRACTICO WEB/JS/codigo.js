function suma(){
    let texto1 ;
    let texto2;
    let i=1;
    let acierto =0;
    while(i<=5){
        num1 = Math.floor(Math.random()*10);
        num2 = Math.floor(Math.random()*10);
        res=num1+num2;
        let respuesta=prompt('cuanto es la suma de : '+num1+"+"+num2);
        if(respuesta==res){
            document.getElementById("resp2").innerHTML= 'texto1 ';
            texto1=("LA RESPUESTA ES CORRECTA ")
            acierto++;
        }
        else{
            texto1=("LA RESPUESTA ES INCORRECTA  :(")
        }
        document.getElementById("resp2").innerHTML=texto1;
        document.getElementById("num1").innerHTML=res;
        texto2='llevas '+acierto.toString()+' aciertos'
        document.getElementById("cont").innerHTML=texto2;
        i++;
    }
}
function resta(){
    let texto1 ;
    let texto2 ;
    let i=1;
    let acierto =0;
    
    while(i<=10){
        num1 = Math.floor(Math.random()*20);
        num2 = Math.floor(Math.random()*10);
        res=num1-num2;
        let respuesta= prompt('cuanto es la resta de : '+num1+"-"+num2);
        if(respuesta==res){
            document.getElementById("resp2").innerHTML= 'texto1 ';
            texto1=("LA RESPUESTA ES CORRECTA ")
            acierto++;
        }
        else{
            texto1=("LA RESPUESTA ES INCORRECTA  :(")
        }
        document.getElementById("resp2").innerHTML=texto1;
        document.getElementById("num1").innerHTML=res;
        texto2='llevas '+acierto.toString()+' aciertos'
        document.getElementById("cont").innerHTML=texto2;
        i++;
    }
}
function multiplicacion(){
    let texto1 ;
    let texto2 ;
    let i=1;
    let acierto =0;
    while(i<=15){
        num1 = Math.floor(Math.random()*30);
        num2 = Math.floor(Math.random()*30);
        res=num1*num2;
        let respuesta= prompt('cuanto es la multiplicacion de : '+num1+"x"+num2);
        if(respuesta==res){
            document.getElementById("resp2").innerHTML= 'texto1 ';
            texto1=("LA RESPUESTA ES CORRECTA ")
            acierto++;
        }
        else{
            texto1=("LA RESPUESTA ES INCORRECTA  :(")
        }
        document.getElementById("resp2").innerHTML=texto1;
        document.getElementById("num1").innerHTML=res;
        texto2='llevas '+acierto.toString()+' aciertos'
        document.getElementById("cont").innerHTML=texto2;
        i++;
    }
}

function division(){
    let texto1 ;
    let texto2 ;
    let i=2;
    let acierto =0;
    while(i<=15){
        num1 = Math.floor(Math.random()*50);
        num2 = Math.floor(Math.random()*30);
        
        let res = num1/parseInt(num2);
        let respuesta= prompt('cuanto es la multiplicacion de : '+num1+"/"+num2);
        if(respuesta==res){
            document.getElementById("resp2").innerHTML= 'texto1 ';
            texto1=("LA RESPUESTA ES CORRECTA ")
            acierto++;
        }
        else{
            texto1=("LA RESPUESTA ES INCORRECTA  :(")
        }
        document.getElementById("resp2").innerHTML=texto1;
        document.getElementById("num1").innerHTML=res;
        texto2='llevas '+acierto.toString()+' aciertos'
        document.getElementById("cont").innerHTML=texto2;
        i++;
    }
}

