document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "Two years have flown by, and my love for you has",
        "only grown stronger with each passing day.",
        "You fill my life with joy, laughter, and endless love,",
        "and I'm grateful for every moment we've shared.",
        "Together, we've built a beautiful journey",
        "full of unforgettable memories and dreams.",
        "Your smile still makes my heart skip a beat,",
        "Your touch and your presence is my favorite comfort.",
        "I cherish the way we support and uplift each other,",
        "I'm excited for all that lies ahead.",
        "May our love continue to flourish and deepen,",
        "just like a fine wine with age.",
        "You are my rock, my confidant, and my forever love,",
        "I can't imagine my life without you.",
        "Here's to many more years of love, laughter, and adventures together!",
        "Happy 2nd Anniversary! Babe!",
        "I love you more than words can express",
        "Thank you for being the best part of my life.",
        "I can't wait to see what the future holds for us."
    ];

    const delay = 100; // adjust the speed here
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                const charElement = document.createElement("span"); 
                charElement.textContent = char;
                charElement.style.animation = "glow 2s ease-in-out"; 
                lyricsElement.appendChild(charElement); 

                await new Promise((resolve) => setTimeout(resolve, delay));

                
                charElement.style.animation = "";
            }

            lyricsElement.appendChild(document.createElement("br")); 

            await new Promise((resolve) => setTimeout(resolve, delay * 3));

            lyricsElement.textContent = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 3));
        }

        setTimeout(function () {
            window.location.href = "card.html"; //set here your next target html
        }, 700);
    }
    
    displayLyrics();
});
