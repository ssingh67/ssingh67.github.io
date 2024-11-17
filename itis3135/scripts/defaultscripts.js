
function greetUser() {
    const userName = document.getElementById("user-name").value;
    const userMood = document.getElementById("user-mood").value;
    const companyName = "Sunny Sparrow";
    const greetingMessage = `The ${companyName} welcomes you, ${userName}! We're glad you are feeling ${userMood}!`;
    document.getElementById("greeting-message").innerText = greetingMessage;
}

function identifyPolygon() {
    let favoriteNumber = parseFloat(document.getElementById("favorite-number").value);
    favoriteNumber = Math.abs(Math.round(favoriteNumber));

    const polygons = {
        3: "Triangle",
        4: "Quadrilateral",
        5: "Pentagon",
        6: "Hexagon",
        7: "Heptagon",
        8: "Octagon",
        9: "Nonagon",
        10: "Decagon"
    };

    const polygonName = polygons[favoriteNumber] || "an Invalid Polygon";
    alert(`The polygon with ${favoriteNumber} sides is called ${polygonName}.`);
}


function recommendDailyActivity() {
    const activities = [
        "Reading a storybook together",
        "Organizing an art-and-crafts session",
        "Playing hide and seek",
        "Gardening with the children",
        "Building a block tower"
    ];
    const activity = activities[Math.floor(Math.random() * activities.length)];
    alert(`Today's recommended activity: ${activity}`);
}

function suggestHealthySnack() {
    const snacks = [
        "Apple slices with peanut butter",
        "Carrot sticks and hummus",
        "Cheese cubes and whole-grain crackers",
        "Yogurt with fresh berries",
        "Banana slices with almond butter"
    ];
    const snack = snacks[Math.floor(Math.random() * snacks.length)];
    alert(`Try this healthy snack: ${snack}`);
}

function inspireWithQuote() {
    const quotes = [
        "Children are great imitators. So give them something great to imitate.",
        "Play is the highest form of research. – Albert Einstein",
        "The best way to make children good is to make them happy. – Oscar Wilde",
        "It is easier to build strong children than to repair broken adults. – Frederick Douglass",
        "Every child is an artist. The problem is how to remain an artist once we grow up. – Pablo Picasso"
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(`Inspiration: "${quote}"`);
}

function shareDaycareTip() {
    const tips = [
        "Always keep an emergency contact list updated.",
        "Use visual schedules to help children understand their day.",
        "Encourage outdoor play daily.",
        "Label everything for better organization.",
        "Practice patience and positive reinforcement"
    ];
    const tip = tips[Math.floor(Math.random() * tips.length)];
    alert(`Daycare Tip: ${tip}`);
}

function generateRandomChildActivity() {
    const activities = [
        "Sing a nursery rhyme",
        "Color in a coloring book",
        "Play a sorting game",
        "Watch an educational video",
        "Do a simple science experiment"
    ];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    alert(`Here's a random activity: ${randomActivity}`);
}


function displayDateTime() {
    const now = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };
    document.getElementById("date-time").innerText = `Today is ${now.toLocaleDateString("en-US", options)}`;
}


function attachEventListeners() {
    document.getElementById("greet-btn").addEventListener("click", greetUser);
    document.getElementById("polygon-btn").addEventListener("click", identifyPolygon);
    document.getElementById("activity-btn").addEventListener("click", recommendDailyActivity);
    document.getElementById("snack-btn").addEventListener("click", suggestHealthySnack);
    document.getElementById("quote-btn").addEventListener("click", inspireWithQuote);
    document.getElementById("tip-btn").addEventListener("click", shareDaycareTip);
    document.getElementById("random-btn").addEventListener("click", generateRandomChildActivity);
}


window.onload = function initializePage() {
    displayDateTime();
    attachEventListeners();
};
