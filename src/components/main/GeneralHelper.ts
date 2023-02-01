export function convertMStoMinutes(miliseconds: number): string {
   let min = Math.floor((miliseconds/1000/60) << 0);
   let sec = Math.floor((miliseconds/1000) % 60);

   let secString;
   if(sec < 10) {
        secString = "0" + sec;
   } else {
        secString = sec;
   }

   return min + ":" + secString;
}