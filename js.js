
// when click on "go back" on the footer area, the page automatically go back to the previous page loaded.
function goBack() {
    window.history.back();
  }


//press the toilet image to loop the animation.
let toilet = document.querySelector('#toiletsprite');
let choice = 0;

function flash() 
{
  if(choice < 9){
    choice ++;
  }

let image = new Image();


if(choice == 0)
{
  image = 'image/art/toilet/Matong_0.png';
}
else if (choice == 1)
{
  image = 'image/art/toilet/Matong_1.png';
}
else if (choice == 2)
{
  image = 'image/art/toilet/Matong_2.png';
}
else if (choice == 3)
{
  image = 'image/art/toilet/Matong_3.png';
}
else if (choice == 4)
{
  image = 'image/art/toilet/Matong_4.png';
}
else if (choice == 5)
{
  image = 'image/art/toilet/Matong_5.png';
}
else if (choice == 6)
{
  image = 'image/art/toilet/Matong_6.png';
}
else if (choice == 7)
{
  image = 'image/art/toilet/Matong_7.png';
}
else if (choice == 8)
{
  image = 'image/art/toilet/Matong_8.png';
}
else if (choice == 9)
{
  image = 'image/art/toilet/Matong_9.png';
  choice = 0;
}
toilet.src = image;
}



//initializing vars.
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let greeting;
let greetingText = document.getElementById('greeting');
let tellDate;
let tellDateText = document.getElementById('todaysDate');




// day & night mode.
if(hour <= 18 && hour >6)
{
const background = document.querySelector('body');
background.style.backgroundColor = 'aliceblue';
}
else{
  const background = document.querySelector('body');
  background.style.backgroundColor = 'beige';
}


//Set day of the week.
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()];
tellDate = 'Now is ' + hour + ' oclock on ' + n + '.';
tellDateText.textContent = tellDate;


//Set greeting according to time.
if (hour >= 18)
{
    greeting = '-  Good Evening  -';
}
else if (hour >= 12)
{
    greeting = '-  Good Afternoon  -';
}
else if (hour >= 0)
{
    greeting = '-  Good Morning  -';
}
else
{
    greeting = '-  Aloha  -';
}
greetingText.textContent = greeting;
