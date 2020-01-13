function createRecentEvent(title, discription, img) {
    let event = document.createElement('div');
    let parent = document.querySelector('.events-section');
    event.setAttribute('class', 'event');
    event.innerHTML = '<div class="event-img" ><img src="' + img + '" alt=""></div><div class="about-event"><h1>' + title + '</h1><p>' + discription + '</p></div>';
    parent.insertBefore(event, parent.firstChild);
}
function createEvent(title, discription, img) {
    let event = document.createElement('div');
    let parent = document.querySelector('.old-events');
    event.setAttribute('class', 'event');
    event.innerHTML = '<div class="event-img" ><img src="' + img + '" alt=""></div><div class="about-event"><h1>' + title + '</h1><p>' + discription + '</p></div>';
    parent.appendChild(event);
}
const call = () => {
    fetch('https://cia.atria.edu/api/v2/events/?format=json', {
        method: 'get'
    }).then(response => response.json())
        .then(jsonData => console.log(jsonData[0]));
};
const makeEvent = () => {

};
const getEvents = () => {

};
//call()
let n = 10;

for (let i = 0; i < n; i++) {
    if (i === 0) createRecentEvent('Test title', 'test disription test disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disription', 'https://blog.printsome.com/wp-content/uploads/big-events-vs-small-events.jpg');
    else createEvent('Test title', 'test disription test disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disriptiontest disription', 'https://blog.printsome.com/wp-content/uploads/big-events-vs-small-events.jpg');
}
