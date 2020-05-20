"use strict"

    console.log("cvičení 1");
    console.log("Ahoj zvědavče, baví tě JavaScript? Napiš nám na e-mail!");
    console.log("Milan Koukol, koukolmi18@gmail.com");
    console.log("------------------");
//-------------------------------------------------------------------------


    console.log("cvičení 2");
    let r = 10;
    console.log("Obvod");

    //console.log(2* (Math.PI * r))
    function calculateObvod(r) {
      return (2 * Math.PI * r);
    }
    console.log(calculateObvod(r));
    console.log("------------------");

    console.log("Obsah");
    
    //console.log(Math.PI * Math.pow(r, 2))
    function calculateObsah(r) {
      return (Math.PI * Math.pow(r, 2));
    }
    console.log(calculateObsah(r))
    console.log("------------------");
    console.log("cvičení 2 - BONUS");
    if(r <= 0) {
      console.log("Polomer je mensi nebo roven nule");
    } else if (r = NaN) {
      console.log("promenna r neni cislem");
    } else {
      console.log("promenna r je validni");
    }
    console.log("------------------");
//-------------------------------------------------------------------------

    console.log("cvičení 3");
    const cenyvyrobku = [55, 20, 15, 14, 99, 8];
    function calculateAverage(array) {
    return array.reduce((a, b) => a + b) / array.length;
    }
    console.log('Průměr před slevou = ' + calculateAverage(cenyvyrobku));
    
//-------------------------------------------------------------------------

    /*function calculatePoSleve (array) {
      return array.reduce(array*0.2);
    }*/
    let prumerPoSleve = 0;
    let soucetPoSleve = 0;
    for(let indexN = 0; indexN < cenyvyrobku.length; indexN++) {
      let array = cenyvyrobku[indexN] - (cenyvyrobku[indexN]*0.2);console.log(array);
      
      soucetPoSleve += array;
      
    }
    console.log(soucetPoSleve);
    prumerPoSleve = soucetPoSleve/cenyvyrobku.length;
    console.log('Průměr po slevě = ' + prumerPoSleve);
    console.log('Rozdíl = ' + (calculateAverage(cenyvyrobku)-prumerPoSleve));
     console.log("------------------");

//-----------------------------------------------------------------------

     //cviceni 4
     console.log('Virutální peněženka')
     const wallet = {
       owner: 'anonymous user',
       balance: 1000
     }

     wallet.insertMoney =  function (n) {
       this.balance += n;
     }
     
     wallet.insertMoney (8000);

     wallet.withdrawal = function (m) {
       if (m > this.balance) {
         console.log('nedisponibilní zůstatek');
       } else {
         this.balance -= m;
       }
     }

     wallet.withdrawal (1500);

     wallet.displayBalance = function () {
       console.log('Zůstatek v tvé peněžence je ' + this.balance + ' Kč.');
     }
     wallet.displayBalance();
     console.log('-------------------');
//----------------------------------------------------------------------
     //cviceni 5
     document.querySelector('.card-img').src = "giphy.gif";
     
     let h5 = document.querySelector('h5.card-title');
     h5.textContent = 'Milan Koukol';
     let pCard = document.querySelector('p.card-text');
     pCard.textContent = '"We sip the poison our minds pour for us and wonder why we feel so sick" - Atticus';
//----------------------------------------------------------------------
     //cviceni 6
     //let ccard = document.createElement
     let pocetKaret = cards.length;
     console.log(pocetKaret);
     let balicekKaret = document.querySelector('.balicek-karet');
     for (let i = 1; i < 5; i++) {
      let randomCislo = Math.floor(Math.random() * pocetKaret);
      let vytvorit = document.createElement('img');
      vytvorit.src = cards[randomCislo].image_url;
      balicekKaret.appendChild(vytvorit);
      
     }
//----------------------------------------------------------------------
     //cviceni 7
     let rec = document.querySelector('.kryti');
     rec.addEventListener('click', ()=>{
       
       if (rec.style.opacity == 0) {
         rec.style.opacity = 1;
       } else {
         rec.style.opacity = '0';
       }
     })
     //-----------------------------------------------------
//cviceni 8
     let list = document.querySelector('.denicek');
     let button = document.querySelector('.odeslatZaznam');
     
     button.addEventListener('click', ()=>{
       if(!document.querySelector('.zaznam').value == '') {

       let paragraph = document.createElement('p');
       paragraph.textContent = document.querySelector('.zaznam').value;
       list.appendChild(paragraph);
       }
     })
