const places = [
    {
        name: "Gwalior Fort",
        year: "8th Century",
        address: "Fort Campus, Gwalior, MP 474001",
        img: "assets/images/fort.jpg",
        history: `Gwalior Fort ko 'Gibraltar of India' kaha jata hai. Ise 8th century mein Raja Suraj Sen ne banwaya tha. Ye kila ek unchi pahadi par sthit hai aur yahan se poore Gwalior ka nazara dikhta hai. 

Is kile ki deewarein aur nakshedari adbhut hain. Iske andar Man Singh Palace, Gujari Mahal aur Saas-Bahu mandir jaise kai aitihasik smarak hain. Is kile par Tomar, Mughal aur Scindia shasakon ne raj kiya hai. Ye kila Bharat ke sabse purane aur mazboot qilaon mein gina jata hai.`
    },
    {
        name: "Jai Vilas Palace",
        year: "1874",
        address: "Lashkar, Gwalior, MP 474009",
        img: "assets/images/jai-vilas.jpg",
        history: `Jai Vilas Palace Maharaja Jayajirao Scindia ne 1874 mein banwaya tha. Is mahal ki architecture European style (Italian, Corinthian aur Ionic) ka behtareen mishran hai. 

Iske Durbar Hall mein duniya ke do sabse bhari jhoomar (chandeliers) hain jinka wazan 3500 kg hai. Yahan ki chandi ki train jo dining table par khana parosti hai, poori duniya mein mashhoor hai. Ye mahal Scindia rajvansh ki shaan ka prateek hai.`
    },
    {
        name: "Gurudwara Data Bandi Chhor",
        year: "17th Century",
        address: "Gwalior Fort, Gwalior, MP 474001",
        img: "assets/images/gurudwara.jpg",
        history: `Ye pavan sthal Sikhon ke 6th Guru, Guru Hargobind Sahib Ji ki yaad mein banaya gaya hai. Mughal Badshah Jahangir ne unhe Gwalior qile mein qaid kiya tha. 

Jab Guru Sahib ki rihayi ka waqt aaya, toh unhone apne saath 52 Rajput rajaon ki azadi ki shart rakhi. Unhone ek 52 kaliyon wala chola pehna jise pakadkar sabhi raja azad huye. Tabhi se Guru Sahib ko 'Data Bandi Chhor' kaha jane laga.`
    },
    {
        name: "Baijataal",
        year: "1850",
        address: "Moti Mahal Rd, Lashkar, Gwalior",
        img: "assets/images/baijataal.jpg",
        history: `Baijataal ka nirman Maharani Baijabai Scindia ne 1850 mein karwaya tha. Ye ek oval-shaped taal hai jise Moti Mahal ki sundarta badhane ke liye banaya gaya tha. 

Aaj ye ek cultural complex hai jahan ek floating stage (tairta hua manch) hai. Raat ke waqt jab yahan lights jalti hain, toh iska nazara behad khoobsurat hota hai. Yahan log boating aur family ke saath ghumne aate hain.`
    },
    {
        name: "Scindia Chhatri",
        year: "1817 Onwards",
        address: "Chhatri Bazar, Gwalior, MP 474001",
        img: "assets/images/scindia-chhatri.jpg",
        history: `Scindia Chhatriyan Gwalior ke shasakon ki yaad mein banaye gaye smarak hain. Ye apni behtareen nakshedari aur gulabi-peele pattharon ke liye vishva-prasiddh hain. 

Inki architecture medieval Hindu aur Mughal style ka adbhut namuna hai. Yahan ke bagiche aur shant mahaul paryatkon ko sukoon dete hain. Har chhatri Scindia rajvansh ke itihaas ki kahani bayan karti hai.`
    },
    {
        name: "MLB College Gwalior",
        year: "1887",
        address: "Lalitpur Colony, Gwalior, MP 474009",
        img: "assets/images/college.jpg",
        history: `Maharani Laxmi Bai (MLB) Government College Gwalior ke sabse purane aur pratishthit colleges mein se ek hai. Ise Maharaja Madhav Rao Scindia ne banwaya tha. 

Iski vishal building Victorian architecture ka ek behtareen namuna hai. Bharat ke mahan neta aur purva Pradhan Mantri Atal Bihari Vajpayee ji ne bhi yahin se apni padhai poori ki thi.`
    },
    {
        name: "Sun Temple",
        year: "1988",
        address: "Residency Rd, Morar, Gwalior",
        img: "assets/images/sun-temple.jpg",
        history: `Gwalior ka Surya Mandir Konark ke prasiddh Sun Temple se prerit hai. Ise Birla parivar ne 1988 mein banwaya tha. 

Lal patthar aur safed marble se bana ye mandir ek rath (chariot) ke akar ka hai jise 7 ghode kheench rahe hain. Iski shanti aur hariyali ise dhyan aur pooja ke liye ek behtareen jagah banati hai.`
    },
    {
        name: "Sas-Bahu Temple",
        year: "1093 AD",
        address: "Gwalior Fort Campus, MP 474001",
        img: "assets/images/sas-bahu.jpg",
        history: `Ise 'Sahastra-Bahu' mandir bhi kaha jata hai, jiska matlab hai 'hazaar bhujaon wale bhagwan Vishnu'. Ise Raja Mahipala ne banwaya tha. 

Ye mandir apni adbhut stone-carving aur architecture ke liye jana jata hai. Mandir ki har deewar par devi-devtaon aur puranik kathaon ki barik nakshedari hai. Ye kile ki sabse purani imaraton mein se ek hai.`
    },
    {
        name: "Tansen Tomb",
        year: "16th Century",
        address: "Tansen Nagar, Gwalior, MP 474002",
        img: "assets/images/tansen.jpg",
        history: `Ye maqbara Akbar ke Navratno mein se ek, mahan sangeet-samrat Tansen ki yaad mein banaya gaya hai. 

Yahan har saal December mein 'Tansen Samaroh' hota hai jahan duniya bhar ke bade sangeetkar hazari dete hain. Kaha jata hai ki yahan lage neem ke ped ki patti khane se awaaz meethi ho jati hai. Ye sangeet premiyon ke liye ek teerth sthal hai.`
    },
    {
        name: "Gopachal Parvat",
        year: "7th-15th Century",
        address: "Phoolbagh Rd, Gwalior, MP 474002",
        img: "assets/images/gopachal.webp",
        history: `Gopachal Parvat par pahadon ko kaat kar Jain Tirthankaraon ki vishal moortiyan banayi gayi hain. Ye moortiyan Tomar vansh ke rajaon ke samay banayi gayi thi. 

Yahan bhagwan Parshvanath ki 42 feet unchi moorti sabse mukhya hai. Ye moorti-kala ka ek adbhut namuna hai aur Jain dharm ke logon ke liye ek bada dhyan kendra hai.`
    },
    {
        name: "Teli Ka Mandir",
        year: "9th Century",
        address: "Gwalior Fort, MP 474001",
        img: "assets/images/teli-ka-mandir.webp",
        history: `Ye Gwalior kile ka sabse uncha mandir hai (lagbhag 100 feet). Iski architecture North aur South Indian (Dravidian) style ka anokha mishran hai. 

Ise Gurjara-Pratihara samraton ke samay banaya gaya tha. Ye mandir bhagwan Vishnu ko samarpit hai. Iski unchai aur iske darwaze par bani nakshedari kile ki shaan ko aur badhati hai.`
    },
    {
        name: "Tigra Dam",
        year: "1916",
        address: "Tigra Reservoir, Gwalior, MP 474001",
        img: "assets/images/tigra-dam.jpg",
        history: `Tigra Dam Sank nadi par bana ek vishal bandh hai. Ise Gwalior shehar ko pani supply karne ke liye 1916 mein banaya gaya tha. 

Aaj ye shehar ka sabse bada picnic spot hai. Yahan boat riding aur pani ka sukoon bhara nazara tourists ko apni taraf khinchta hai. Shaam ke waqt yahan ka sunset behad khoobsurat hota hai.`
    }
];

const container = document.getElementById('placesContainer');

function loadPlaces() {
    container.innerHTML = "";
    places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'place-card';
        
        // Is line se poore card par click karne ka feature add ho gaya hai
        card.setAttribute('onclick', `openHistory('${place.name.replace(/'/g, "\\'")}')`);
        card.style.cursor = 'pointer';

        card.innerHTML = `
            <div class="card-img">
                <img src="${place.img}" alt="${place.name}" onerror="this.src='https://via.placeholder.com/400x250?text=Gwalior+Explore'">
            </div>
            <div class="card-content">
                <h3>${place.name}</h3>
                <p><strong>Est:</strong> ${place.year}</p>
                <p class="address">📍 ${place.address}</p>
                <button class="view-btn">Read History</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function openHistory(placeName) {
    const place = places.find(p => p.name === placeName);
    const modal = document.getElementById('historyModal');
    
    document.getElementById('modalImg').src = place.img;
    document.getElementById('modalTitle').innerText = place.name;
    document.getElementById('modalAddress').innerText = "📍 " + place.address;
    document.getElementById('modalFullHistory').innerText = place.history;
    
    modal.style.display = "block";
}

// Modal band karne ka logic
document.querySelector('.close-modal').onclick = function() {
    document.getElementById('historyModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('historyModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Start building the cards
loadPlaces();