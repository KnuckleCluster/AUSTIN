/**
 * AUSTIN — track data
 * -----------------------------------------------------------------------
 * `spotifyId` is intentionally blank. This app never bundles or links
 * directly to audio files — it plays tracks through Spotify's official
 * embed player, which requires a track ID.
 *
 * To fill one in: open the track on open.spotify.com → the "..." menu →
 * Share → Copy embed link. You'll get something like
 *   https://open.spotify.com/embed/track/4bXKMPPWv1WYgt7g0Hx1cW
 * Copy just the id at the end (the part after the last "/") into the
 * `spotifyId` field below. Leave it blank and the app will show search
 * links instead — nothing breaks either way.
 * -----------------------------------------------------------------------
 */

const TRACKS = [
  {
    id: 1,
    mile: "01",
    title: "Don't Understand",
    length: "3:03",
    meaning: `The album opens on a confession, not a chorus. Over a slow, spare arrangement, Post asks how anyone could love him back, running through his own worst self-assessments to a partner who keeps choosing him anyway. It sets the emotional register for the whole record: a famous, wealthy man convinced he's the hardest person in the room to stay with.`,
    spotifyId: "",
  },
  {
    id: 2,
    mile: "02",
    title: "Something Real",
    length: "3:25",
    meaning: `A wide-open, choir-backed track about having everything and still feeling hollow. It's less a love song and more a search song — for a feeling that hasn't shown up yet despite every material reason it should have. This was the first preview fans got of the album, and it set the tone: bigger, more live-sounding, less studio-polished than his earlier work.`,
    spotifyId: "",
  },
  {
    id: 3,
    mile: "03",
    title: "Chemical",
    length: "3:04",
    meaning: `The lead single, and the clearest pivot toward the album's pop-rock sound. It's about a relationship that's ended but won't let go — the specific ache of missing someone your logic has already moved past. Released as a standalone single months ahead of the album, it doubled as the first real signal that Austin wouldn't sound like Twelve Carat Toothache.`,
    spotifyId: "",
  },
  {
    id: 4,
    mile: "04",
    title: "Novacandy",
    length: "3:17",
    meaning: `A darker, more self-aware track about leaning on habits that feel good in the moment and terrible in hindsight. It arrived alongside real public concern about Post's health and appearance, which he addressed directly online — saying the changes people were noticing came from cutting soda and eating better, not from anything more troubling. The song doesn't resolve that tension; it mostly just sits in it.`,
    spotifyId: "",
  },
  {
    id: 5,
    mile: "05",
    title: "Mourning",
    length: "2:28",
    meaning: `The second single, and one of the record's more pointed songs — about the specific loneliness of being surrounded by people who are there for the lifestyle, not for you. It's less about losing a person and more about losing the ability to tell who's real. Post announced both the song and the album's title on the same day, which is part of why it carries extra weight as a statement of intent.`,
    spotifyId: "",
  },
  {
    id: 6,
    mile: "06",
    title: "Too Cool to Die",
    length: "3:25",
    meaning: `A rare moment of swagger on an otherwise self-critical album. Where most of Austin turns the microscope inward, this track leans into invincibility — a little reckless, a little funny, using the warming climate as a backdrop for feeling untouchable. It functions as a pressure release between the heavier songs around it.`,
    spotifyId: "",
  },
  {
    id: 7,
    mile: "07",
    title: "Sign Me Up",
    length: "3:19",
    meaning: `One of two tracks co-produced with Max Martin and Rami Yacoub, and it shows — this is the most straightforwardly hook-driven song on the record. Thematically it's a commitment song, using the idea of "signing up" for something as a stand-in for choosing a relationship fully, without the usual hedging.`,
    spotifyId: "",
  },
  {
    id: 8,
    mile: "08",
    title: "Socialite",
    length: "3:20",
    meaning: `A skeptical look at the culture around fame and status — the version of a person that gets curated for a room rather than lived. It reads as Post pushing back against a lifestyle he's technically part of, watching it from just outside himself.`,
    spotifyId: "",
  },
  {
    id: 9,
    mile: "09",
    title: "Overdrive",
    length: "2:28",
    meaning: `The third single. It's about pushing past a reasonable limit for someone else's sake — running yourself into the ground to prove you're worth keeping around. It can read as being about a partner, but it lands just as easily as a note to his fanbase, about how far he'd go to not let people down.`,
    spotifyId: "",
  },
  {
    id: 10,
    mile: "10",
    title: "Speedometer",
    length: "2:42",
    meaning: `Short, loose, and the most straightforwardly physical song on the record. Post described it himself in an Instagram livestream in about as many words as the title implies — it's not trying to be complicated.`,
    spotifyId: "",
  },
  {
    id: 11,
    mile: "11",
    title: "Hold My Breath",
    length: "3:29",
    meaning: `The most stripped-down, vulnerable ballad on the album — Post has said the "essential" thing he's holding his breath for is intentionally left open, so it can mean whatever it needs to for whoever's listening. Fans have connected it to becoming a father around this period, though he's framed that as one reading among many, not the definitive one.`,
    spotifyId: "",
  },
  {
    id: 12,
    mile: "12",
    title: "Enough Is Enough",
    length: "2:45",
    meaning: `The album's fourth and final single, released a few weeks after the record itself. It's the breaking-point song — less about the relationship or situation in question, more about the moment you stop negotiating with yourself over whether to leave it.`,
    spotifyId: "",
  },
  {
    id: 13,
    mile: "13",
    title: "Texas Tea",
    length: "2:20",
    meaning: `The shortest track on the album and one of its loosest — a nod to Post's Texas roots, with "Texas tea" doing double duty as old slang for crude oil and as a wink toward whiskey. It's less a statement song than a breather, closer to a sketch than a centerpiece.`,
    spotifyId: "",
  },
  {
    id: 14,
    mile: "14",
    title: "Buyer Beware",
    length: "2:53",
    meaning: `A caution dressed up as a song title — "buyer beware" as a stand-in for going into something, a relationship or an opportunity, with eyes open about the risk. It sits in the same emotional neighborhood as "Chemical" and "Mourning": trust that's been tested enough to come with a disclaimer.`,
    spotifyId: "",
  },
  {
    id: 15,
    mile: "15",
    title: "Landmine",
    length: "3:04",
    meaning: `Post has named this his favorite song on the album, and pointed to Gorillaz as the reference point — specifically their use of a full choir across an entire track, which he wanted to try for himself. The result is the most sonically ambitious moment on Austin, built around scale rather than a hook.`,
    spotifyId: "",
  },
  {
    id: 16,
    mile: "16",
    title: "Green Thumb",
    length: "2:39",
    meaning: `A quieter track built around a single extended metaphor: a "green thumb" as a talent for growing things, turned inward to describe someone who's good at tending everyone else's life but is quietly wilting in their own. It's a song about losing someone while still going through the motions of taking care of things.`,
    spotifyId: "",
  },
  {
    id: 17,
    mile: "17",
    title: "Laugh It Off",
    length: "4:06",
    meaning: `The closer, and the album's answer to public criticism in general. Post has pointed to a specific, minor confrontation with a young heckler as a jumping-off point, but the song broadens quickly — it's about the general cost of being a public target, and choosing not to let it land. Whatever the exact spark, the closing move of the record is to shrug the noise off rather than answer it.`,
    spotifyId: "",
  },
];
