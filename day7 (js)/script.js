function toggleSearch() {
    var searchVisible = false;
    var searchIcon = document.getElementById("search-icon");
    var searchBar = document.getElementById("search");
    var notificationTitle = document.getElementById("notification-title");
    var barIcon = document.querySelector(".bar-icon");
    
    searchIcon.addEventListener("click", function(){
        if (!searchVisible) {
            searchBar.style.display = "block";
            notificationTitle.style.display = "none";
            barIcon.style.display = "none";
            searchVisible = true;
        } else {
            searchBar.style.display = "none";
            notificationTitle.style.display = "block";
            barIcon.style.display = "block";
            searchVisible = false;
        }
    });
    
    // Add event listener for search input
    searchBar.addEventListener('input', function() {
        addNotification(searchBar.value.toLowerCase());
    });
}

function toggleTransform() {
    let isClicked = false;
    document.querySelector('.bar-icon').addEventListener('click', function() {
        if (!isClicked) {
            document.querySelector(".right").style.transform = "translateX(90px)";
            document.querySelector(".left").style.transform = "translateX(-60px)";
            isClicked = true;
        } else {
            document.querySelector(".right").style.transform = "none";
            document.querySelector(".left").style.transform = "none";
            isClicked = false;
        }
    });
}

var notifications = [
    {time:"9:24 AM", text:"got a new notification", name:"Abrar"},
    {time:"10:11 AM", text:"got a new follower", name:"Ahmed"},
    {time:"9:24 AM", text:"got a new notification", name:"Ali"}
];

function addNotification(searchQuery) {
    var notificationContainer = document.querySelector('.notification-box');
    notificationContainer.innerHTML = '';

    var filteredNotifications = notifications.filter(notification => {
        return notification.name.toLowerCase().includes(searchQuery);
    });

    filteredNotifications.forEach(notification => {
        notificationContainer.innerHTML += `
            <div class="notification">
                <div class="circle-1"></div>
                <p id="time">${notification.time}</p>
                <div class="notification-detail">
                    <p id="text"><b id="name">${notification.name}</b> ${notification.text}</p>
                </div>
            </div>
        `;
    });
}

addNotification();
toggleSearch();
toggleTransform();
