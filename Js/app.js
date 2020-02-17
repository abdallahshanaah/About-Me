      var visitor= prompt("what is your name ?")
      var vs= visitor.toLocaleUpperCase();
      //vs is the visitor with uppercase function 
      console.log("the visitor name "+vs);
      alert("hello "+ vs+" Welcome in my website"+" i will ask you sample 5 questions are you ready ");
      alert('pls answer with yes/no ');


      var phone = prompt("do you like iphone(yes)or samsung(no)? ");
      console.log("the 1 answer "+phone);
      var ph=phone.toLocaleLowerCase();
      //ph is the phone with lowercase function 
      console.log(ph);
      while ((ph != 'y')&&(ph != 'yes')&&(ph != 'n')&&(ph != 'no')){
        ph = prompt('sorry you answer is wrong "+"\"Do you like iphone(yes)or samsung(no)?\"')
        ph=ph.toLocaleLowerCase();
        console.log("the 1 answer "+ph);
      }
      if ((ph == 'yes')||(ph == 'y'))
      {
      alert("iphone is my favorite too :)");
      }
      else if ((ph == 'no')||(ph == 'n')){
        alert('that nice by i like iphone more hahah :( ');
      }

      
      var marriage = prompt('Are you married ?');
      console.log("the 2 answer "+marriage);
      var ma = marriage.toLowerCase();
      // ma the marriage with lowercase function 
       console.log(ma);
       while ((ma != 'y')&&(ma != 'yes')&&(ma != 'n')&&(ma != 'no')){
          ma = prompt(' sorry you answer is wrong "+"\"Are you married ?\"')
          ma = ma.toLowerCase();
          console.log("the 2 answer "+ma);
       }
      if ((ma == 'yes')||(ma == 'y'))
      {
      alert("that nice i hope you have happy family ");
      }
      else if ((ma == 'no')||(ma == 'n')){
        alert('me to single live is good hahah ');
      }

      

      var travel= prompt (" Did you like to travel ? ");
      console.log("the 3 answer "+travel);
      var tr =travel.toLocaleLowerCase();
      // tr the travel with lowercase function 
       console.log(tr);
       while ((tr != 'y')&&(tr != 'yes')&&(tr != 'n')&&(tr != 'no')){
          tr = prompt(' sorry you answer is wrong "+"\" Did you like to travel ? \"')
          tr =tr.toLocaleLowerCase();
          console.log("the 3 answer "+tr);
       }
      if ((tr == 'yes')||(tr == 'y')){
      alert(" that cool i would to go all over the world ");
      }
      else if ((tr == 'no')||(tr == 'n')){
        alert('oh i think you most try it ');
      }
      


      var read= prompt (" Did you like to read ? ");
      console.log("the 4 awnser "+read);
      var re =read.toLocaleLowerCase();
      // re the read with lowercase function 
      console.log(re);
       while ((re != 'y')&&(re != 'yes')&&(re != 'n')&&(re != 'no')){
          re = prompt(' sorry you answer is wrong "+"\" Did you like to read ?\"')
          re =re.toLocaleLowerCase();
          console.log("the 4 answer "+re);
       }
      if ((re == 'yes')||(re == 'y')){
      alert("that amazing try Agatha Christie book ");
      }
      else if ((re == 'no')||(re == 'n')){
        alert('i hope you did not waste you time so hahah  ');
      }
      
      
      
        var tec= prompt ("Did you like technology ? ");
        console.log("the 5 awnser "+t);
        var t =tec.toLocaleLowerCase();
        // t the tec with lowercase function 
        console.log(t);
         while ((t != 'y')&&(t != 'yes')&&(t != 'n')&&(t != 'no')){
            t = prompt(' sorry you answer is wrong "+"\" Did you like technology ?\"')
            t =t.toLocaleLowerCase();
            console.log("the 5 answer "+tec);
         }
        if ((t == 'yes')||(t == 'y')){

        alert("that amazing go learn some code language so you can be involve ");
        }
        else if ((t == 'no')||(t == 'n')){
          alert('sorry but go die ');
        }
       alert("thank you "+visitor+" for giving me some of your time hope you have good day ");
      