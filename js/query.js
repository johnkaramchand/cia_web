function eventCreate(title,discription,date,img){
    let event=document.createElement('div');
    let parent=document.querySelector('.events-section');
    event.setAttribute('class','event');
    event.innerHTML = '<div class="title-discription"><h1 class="event-title" >'+title+'</h1><p class="event-discription">'+discription+'</p></div><img src="'+img+'" alt=""><div class="event-date"><h1>'+date+'</h1></div>'
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

for(let i=0;i<20;i++){
    eventCreate('Test title', 'test discription', '1st Jan', 'https://blog.printsome.com/wp-content/uploads/big-events-vs-small-events.jpg');
}
