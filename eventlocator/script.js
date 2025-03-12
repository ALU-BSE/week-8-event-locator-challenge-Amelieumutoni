document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { name: "Music Festival", date: "2025-04-15", location: "City Park", category: "Music", description: "Enjoy a day full of live music and fun!" },
        { name: "Tech Conference", date: "2025-05-10", location: "Tech Hub", category: "Tech", description: "Learn about the latest advancements in technology." },
        { name: "Art Exhibition", date: "2025-06-20", location: "Art Gallery", category: "Art", description: "Explore creative artworks from local artists." },
        { name: "Marathon", date: "2025-07-05", location: "Downtown", category: "Sports", description: "Join the annual city marathon and challenge yourself!" }
    ];

    const eventList = document.getElementById("eventList");
    const searchInput = document.getElementById("search");
    const dateFilter = document.getElementById("dateFilter");
    const categoryFilter = document.getElementById("categoryFilter");

    function displayEvents(filteredEvents) {
        eventList.innerHTML = "";
        filteredEvents.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("col-md-4");
            eventCard.innerHTML = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text"><strong>Date:</strong> ${event.date}</p>
                        <p class="card-text"><strong>Location:</strong> ${event.location}</p>
                        <p class="card-text">${event.description}</p>
                    </div>
                </div>
            `;
            eventList.appendChild(eventCard);
        });
    }

    function filterEvents() {
        const searchValue = searchInput.value.toLowerCase();
        const dateValue = dateFilter.value;
        const categoryValue = categoryFilter.value;
        const filteredEvents = events.filter(event => {
            return (
                (searchValue === "" || event.name.toLowerCase().includes(searchValue)) &&
                (dateValue === "" || event.date === dateValue) &&
                (categoryValue === "" || event.category === categoryValue)
            );
        });
        displayEvents(filteredEvents);
    }

    searchInput.addEventListener("input", filterEvents);
    dateFilter.addEventListener("change", filterEvents);
    categoryFilter.addEventListener("change", filterEvents);

    displayEvents(events);
});
