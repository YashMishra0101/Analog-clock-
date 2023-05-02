const sec_hand=document.querySelector('[data-sec-hand]')
const min_hand=document.querySelector('[data-min-hand]')
const hour_hand=document.querySelector('[data-hour-hand]')

setInterval(()=>{
   const date=new Date()
     const sec = date.getSeconds();
     const min = date.getMinutes();
     const hour= date.getHours();

     const sec_rotate=6 * sec ;
     const min_rotate=6 * min ;
     const hour_rotate=30 * hour + min/2;

     sec_hand.style.transform=`rotate(${sec_rotate}deg)`;
     min_hand.style.transform=`rotate(${min_rotate}deg)`;
     hour_hand.style.transform=`rotate(${hour_rotate}deg)`;
},1000)


  
