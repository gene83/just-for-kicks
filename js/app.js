// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
const getDetails = document.getElementById('details');
getDetails.addEventListener('click', alertBox);
function alertBox() {
   alert ('Not Available in Hawaii');
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
const getName1 = document.getElementById('name1');
const getDescrip1 = document.getElementById('descrip1');
getName1.addEventListener('mouseover', showDescr);
getName1.addEventListener('mouseout', showDescr);
getDescrip1.style.display = 'none';
function showDescr() {
    if (getDescrip1.style.display === 'none') {
        getDescrip1.style.display = 'block';
    } else {
        getDescrip1.style.display = 'none';
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'
const getName2 = document.getElementById('name2');
const getDescrip2 = document.createElement('div');
getDescrip2.innerHTML = 'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan\'s 1987-88 NBA season.'
getName2.appendChild(getDescrip2);
getDescrip2.style.display = 'none';
getName2.addEventListener('click', showDescrip2);
function showDescrip2() {
    if (getDescrip2.style.display === 'none') {
        getDescrip2.style.display = 'block';
    } else {
        getDescrip2.style.display = 'none';
    }
}

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 


//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
const getThumbs = document.getElementsByClassName('fa-thumbs-up');
for (let i = 0; i < getThumbs.length; i++) {
    getThumbs[i].addEventListener('click', addCounter);
}
function addCounter() {
    if(this.childNodes.length === 0) {
    let getCounter = document.createElement('div');
    getCounter.className = 'counter';
    getCounter.innerHTML = 1;
    this.appendChild(getCounter);
    } else {
        this.childNodes[0].textContent++
    }
}
//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.
const getPrice4 = document.getElementById('price4');
const getInc4Button = document.getElementById('increase').childNodes[0];

getInc4Button.addEventListener('click', incrementPrice4)

function incrementPrice4() {
   getPrice4.childNodes[0].textContent++
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan V shoe each time the icon is clicked on.
const getPrice5 = document.getElementById('price5');
const getInc5Button = document.getElementById('decrease').childNodes[0];

getInc5Button.addEventListener('click', incrementPrice5)

function incrementPrice5() {
   getPrice5.childNodes[0].textContent--
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 
const getImg6 = document.getElementsByClassName('block3')[1].childNodes[0];
getImg6.addEventListener('mouseover', changeColorway);
getImg6.addEventListener('mouseout', changeColorway);

function changeColorway() {
    if (getImg6.src === "https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg") {
    getImg6.src = 'https://www.flightclub.com/media/catalog/product/6/3/63611742997-air-jordan-11-retro-concord-2011-release-white-black-dark-concord-011518_1.jpg';
    } else {
    getImg6.src = "https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg";
    }
}

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.
const getImg7 = document.getElementsByClassName('block1')[2].childNodes[0];
getImg7.addEventListener('click', incSize);
function incSize() {
    if (getImg7.style.height === '250px') {
        getImg7.style.height = '375px';
        getImg7.style.width = '375px';
    } else {
        getImg7.style.height = '250px';
        getImg7.style.width = '250px';
    }
}
//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.
const getPlus = document.getElementById('oneUp');
const getMinus = document.getElementById('oneDown');
let getPrice8 = document.getElementById('price8');

getPlus.addEventListener('click', incPrice8);
getMinus.addEventListener('click', decPrice8);

function incPrice8() {
    getPrice8.childNodes[0].textContent++;
}

function decPrice8() {
    getPrice8.childNodes[0].textContent--;
}

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
const getImg9 = document.getElementsByClassName('block3')[2].childNodes[0];
getImg9.addEventListener('click', getMeme);
function getMeme() {
    getImg9.src = 'https://media.golfdigest.com/photos/59c3ae97d879884a19cb3799/master/w_768,c_limit/170921-jordan-crying.png'
}