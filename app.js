const songs = [
    {
        id: 1,
        title: "I Dont Understand",
        about: `The opening track from Post Malone’s self-titled fifth studio album "AUSTIN" is a slow track where Post Malone sings about his self-hatred, asking his significant other how he is lovable to her. He also shows throughout the track how he doesn’t want to lose her because she is everything to him.`,
        audioLink: ""
    },
    {
        id: 2,
        title: "Something Real",
        about: `This song is about Post Malone’s lifestyle being unsatisfactory. He describes having so much, yet feeling nothing. His desire to feel “Something Real” is at the core of this piece.`,
        audioLink: ""
    },
    {
        id: 3,
        title: "Chemical",
        about: `On the upbeat pop-rock tune “Chemical”, Post Malone struggles to cope with the end of a tumultuous, on-again-off-again relationship that he “can’t let go” of. He reminisces about the memories shared with a past lover and how life isn’t the same without her. This is Posty’s first release of 2023.`,
        audioLink: ""
    },
    {
        id: 4,
        title: "Novacandy",
        about: `On Novacandy, Post delves deeper into his own addictive tendencies – something the song seems to glorify. Fans have raised concerns for him in the past, like in 2019, when a viral video of his on-stage performance raised some alarms for fans.
        
In April of 2023, there were more worried fans over his extreme weight loss. Post responded to the concerns in an Instagram post, saying,   
        “I wanted to say that I’m not doing drugs, I’ve had a lot of people ask me about my weight loss and I’d suppose, performance on stage. I’m having a lot of fun performing, and have never felt healthier. I guess dad life kicked in and I decided to kick soda, and start eating better so I can be around for a long time for this little angel. Next up is smokes and brews, but I like to consider myself a patient man… lol!”
        
It’s no secret of Post’s that he enjoys smoking cigarettes and drinking heavily, but, according to him, drugs are not a part of the equation.`,
        audioLink: ""
    },
    {
        id: 5,
        title: "Mourning",
        about: `“Mourning” finds Post Malone surrounded by fake friends who only want to leech off of his status and wealth. Mourning dives into themes of alcoholism and the consequences of addiction. The song was released on May 19th, 2023, as the second single from his fifth studio album, "AUSTIN".
        
Post Malone first announced the song via his social media on May 16th, 2023, along with the album’s title. A day later, on May 17th, he shared a new snippet of the song including some scenes from the official music video.`,
        audioLink: ""
    },
    {
        id: 6,
        title: "Too Cool to Die",
        about: `“Too Cool To Die” is the sixth track from Post Malone’s fifth studio album, "AUSTIN". The song finds Post feeling good about himself, compared to other songs on the album which detail his self-hatred. Compared to the warming climate of the Earth, Post feels “too cool to die.”`,
        audioLink: ""
    },
    {
        id: 7,
        title: "Sign Me Up",
        about: "",
        audioLink: ""
    },
    {
        id: 8,
        title: "Socialite",
        about: "",
        audioLink: ""
    },
    {
        id: 9,
        title: "Overdrive",
        about: `“Overdrive” finds Post expressing how he exerts himself for the one he loves and would do anything to be worthwhile in their point of view. He could also be reaching out to his fanbase, in an attempt to show how far he would go to satisfy them.
        
The song was officially teased for the first time on July 8, 2023, on Post’s social media. Four days later, on July 12, another video was posted featuring potentially scrapped songs for the album.`,
        audioLink: ""
    },
    {
        id: 10,
        title: "Speedometer",
        about: `Post Malone on the 28th of July in an Instagram live stream: “It’s about sex, but don’t tell anyone… haha”.`,
        audioLink: ""
    },
    {
        id: 11,
        title: "Hold My Breath",
        about: `In this ballad, Post strips down all his defenses and addresses his lover. “Hold My Breath” portrays Post in his most vulnerable state, as he asks and requests for reassurance.
        
Some wondered if this song could be referring to his fiancée, with the “essential” thing being their new baby girl and his fatherhood. However, Post mentioned this song could be referring to anything that relates to the listener, which is “the beauty of music.” In his case, that was his heart.`,
        audioLink: ""
    },
    {
        id: 12,
        title: "Enough Is Enough",
        about: "",
        audioLink: ""
    },
    {
        id: 13,
        title: "Texas Tea",
        about: "",
        audioLink: ""
    },
    {
        id: 14,
        title: "Buyer Beware",
        about: "",
        audioLink: ""
    },
    {
        id: 15,
        title: "Landmine",
        about: `Post Malone stated on Instagram Live that this song was inspired by The Gorillaz. They have a song that features a full choir throughout its entirety, and he wanted to experiment doing the same thing. Post states this is his favorite song on the album.`,
        audioLink: ""
    },
    {
        id: 16,
        title: "Green Thumb",
        about: `“Green Thumb” refers to one with a natural talent for gardening. This song is about Austin Post, AKA Post Malone, dying on the inside and coping with losing a girl he loved. He uses the ‘green thumb’ as a metaphor in reference to himself as a garden.`,
        audioLink: ""
    },
    {
        id: 17,
        title: "Laugh It Off",
        about: `This song is made to address the situation that Post Malone had with a 12-year-old kid.
        
Kid came to Austin and told him: “Post Malone, you a b****”, to which he replied: “Oh, that’s rude”.
        
He tells a story in a song, that he doesn’t really care about the hate, he just “laughs it off”.

PROPOSED SUGGESTION: I highly doubt this song was to address that particular interaction. With fame comes hate, thus he is singing about hate in general and how he “laughs it off”
        
UPDATE: I think at the beginning he is addressing this situation “Your mind is made and I can’t change it
Some-ha-how, I laugh it off”
        
But towards the end of the song, he is talking to the hate in general.`,
        audioLink: ""
    },
];






const btn1 = document.querySelector('#song1');
const btn2 = document.querySelector('#song2');
const btn3 = document.querySelector('#song3');
const btn4 = document.querySelector('#song4');
const btn5 = document.querySelector('#song5');
const btn6 = document.querySelector('#song6');
const btn7 = document.querySelector('#song7');
const btn8 = document.querySelector('#song8');
const btn9 = document.querySelector('#song9');
const btn10 = document.querySelector('#song10');
const btn11 = document.querySelector('#song11');
const btn12 = document.querySelector('#song12');
const btn13 = document.querySelector('#song13');
const btn14 = document.querySelector('#song14');
const btn15 = document.querySelector('#song15');
const btn16 = document.querySelector('#song16');
const btn17 = document.querySelector('#song17');


const modal = document.querySelector('.modal');
const dialogTitle = document.getElementById("dtitle");
const dialogAbout = document.getElementById("dabout");
const closeModal = document.querySelector('#close-modal');
const minimizeModal = document.querySelector('#minimize-modal');
const dialogLyrics = document.querySelector('#dlyrics');
const audioPlayer = document.querySelector('#daudio');

songs.forEach(song => {
    song.audioLink = `audio/${song.id}.mp3`;
});


function showDialog(songId) {

    const song = songs.find(song => song.id === songId);


    if (song) {
        dialogTitle.textContent = song.title;
        dialogAbout.textContent = song.about || "No available details yet."; 
        
        audioPlayer.src = song.audioLink; 

        modal.showModal(); 
    }
}


modal.addEventListener('click', (event) => {
    if (event.target === closeModal) {
        audioPlayer.pause();
        modal.close();
    }
});

modal.addEventListener('click', (event) => {
    if (event.target === minimizeModal) {
        modal.close();
    }
});



btn1.addEventListener('click', () => showDialog(1));
btn2.addEventListener('click', () => showDialog(2));
btn3.addEventListener('click', () => showDialog(3));
btn4.addEventListener('click', () => showDialog(4));
btn5.addEventListener('click', () => showDialog(5));
btn6.addEventListener('click', () => showDialog(6));
btn7.addEventListener('click', () => showDialog(7));
btn8.addEventListener('click', () => showDialog(8));
btn9.addEventListener('click', () => showDialog(9));
btn10.addEventListener('click', () => showDialog(10));
btn11.addEventListener('click', () => showDialog(11));
btn12.addEventListener('click', () => showDialog(12));
btn13.addEventListener('click', () => showDialog(13));
btn14.addEventListener('click', () => showDialog(14));
btn15.addEventListener('click', () => showDialog(15));
btn16.addEventListener('click', () => showDialog(16));
btn17.addEventListener('click', () => showDialog(17));