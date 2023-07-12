
     
      
      
      function startCountDown(countDown){

        let now = new Date().getTime();
       
        //find the difference between countDown and now
        let difference = countDown - now;

        //calculating days, hours, minutes and seconds
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hrs = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const output =`days:${days} hours:${hrs}  minutes:${minutes} Seconds:${seconds}`

        console.log(output)

      }

      

      startCountDown(new Date("july 25, 2023 11:50:50").getTime())
     
        
        
       
         
