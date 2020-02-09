(function () {
    const events = [
        [{
            title: 'Check-In Of Hackers Will Start',
            from: '9am',
        },
        {
            title: 'Opening Ceremony Inauguration',
            from: '9:30am',
        },
        {
            title: 'Keynote Session From MLH Representative',
            from: '10am'
        },
        {
            title: 'Keynote Session From non MLH Representative',
            from: '10:30am'
        },
        {
            title: 'CIA talk',
            from: '11:15am'
        },
        {
            title: 'Hack Begins!',
            d: 'Domain experts would provide mentorship at the Hack- All time. Mentors would be interacting with the participants for any technical doubts that they have in there project and with many fun mini-events.',
            from: '12pm',
            to: '1:30pm',
        },
        {
            title: 'Workshop on Introduction to Github',
            from: '2pm',
        },
        {
            title: 'Workshop on App Deployment with AWS',
            from: '3pm',
            to: '4pm'
        },
        {
            title: 'Snack And Beverages Break.',
            to: '6pm'

        },
        {
            title: 'Fireside Chat.',
            to: '6:30pm'
        },
        {
            title: 'Hack Continues!',
            to: '9pm',
            d: 'Hack Continues in its course with many raffle rounds and many fun mini-events.',
        },
        {
            title: 'Dinner Break',
            to: '10pm'
        },
        {
            title: 'Review 1',
            from: '12am',
            to: '1am',
            d: 'Progress will be noted, and the further plan of action will be recorded.'
        }
        ],
        [
            {
                title: ' Presentation Preparation',
                from: '10am',
                to: '10:30am',
                d: 'The top 10 teams will prepare the final presentation to present in front of the whole panel and students.',
            },
            {
                title: 'Review 3 - The Final Presentation',
                from: '11:30am',
            },
            {
                title: 'Winners Announcement',
                from: '3pm',
                to: '4pm',
                d: 'The winner will be announced of all domains, and the Hackathon will be concluded with the valedictory ceremony.'
            }
        ]
    ]
    var day1 = document.querySelector('.day1');
    var day2 = document.querySelector('.day2');
    events.forEach((day, ii) => {
        day.forEach((event, i) => {
            let from;
            let to;
            let d;
            try {
                if (event.from) from = event.from;
                else from = day[i - 1].to;


                if (event.to) to = event.to;
                else to = day[i + 1].from;


                if (event.d) d = event.d;

                else d = ' ';
            } catch (error) {
                console.log('its fine')
            }

            let card = document.createElement('div');
            card.setAttribute('class', 'schedule-card');
            card.innerHTML = `<div class="card-content">
                        <h3>${event.title}</h3>
                        <p>${from} to ${to}</p>
                        <p>${d}</p>
                    </div>`;
            if (ii) {
                day2.appendChild(card);
            } else {
                day1.appendChild(card);
            }
        })
    });
    document.querySelector('#phone a').setAttribute('href', 'tel:' + document.querySelector('#phone a').innerText);

    document.querySelectorAll('img').forEach(img => {
        img.onload = () => {
            img.style.opacity = 1;
        }
        setTimeout(() => {
            img.style.opacity = 1;
        }, 1000);
        if (img.getAttribute('data-src')) img.src = img.getAttribute('data-src');
    });

})();
