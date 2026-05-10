const places = [
    {
        name: "Gwalior Fort",
        year: "8th Century",
        address: "Fort Campus, Gwalior, MP 474001",
        img: "assets/images/fort.jpg",
        history: "Gwalior Fort ko 'Gibraltar of India' kaha jata hai. Ise 8th century mein Raja Suraj Sen ne banwaya tha. Ye kila ek unchi pahadi par sthit hai aur yahan se poore Gwalior ka nazara dikhta hai. Isme Man Singh Palace aur Gujari Mahal jaise shandaar smarak hain."
    },
    {
        name: "Jai Vilas Palace",
        year: "1874",
        address: "Lashkar, Gwalior, MP 474009",
        img: "assets/images/jai-vilas.jpg",
        history: "Maharaja Jayajirao Scindia dwara nirmit ye mahal European architecture ka adbhut namuna hai. Iske Durbar Hall mein duniya ke do sabse bhari jhoomar (chandeliers) hain aur dining table par chandi ki train khana parosti hai."
    },
    {
        name: "Baijataal",
        year: "1850",
        address: "Moti Mahal Rd, Lashkar, Gwalior, MP 474007",
        img: "assets/images/baijataal.jpg",
        history: "Baijataal ka nirman Maharani Baijabai Scindia ne karwaya tha. Ye ek oval-shaped taal hai jahan ab ek floating stage hai. Ye cultural programs aur boating ke liye Gwalior ki sabse pasandida jagah hai."
    },
    {
        name: "Scindia Chhatri",
        year: "1817",
        address: "Chhatri Bazar, Gwalior, MP 474001",
        img: "assets/images/scindia-chhatri.jpg",
        history: "Ye Scindia rajvansh ke rajaon ke shandaar smarak hain. Inki bariki se ki gayi nakshedari aur sundar bagiche ise ek shant aur aitihasik sthal banate hain. Har chhatri apne aap mein ek kahani bayan karti hai."
    },
    {
        name: "Gurudwara Data Bandi Chhor",
        year: "17th Century",
        address: "Gwalior Fort, Gwalior, MP 474001",
        img: "assets/images/gurudwara.jpg",
        history: "Ye Gurudwara 6th Sikh Guru, Guru Hargobind Sahib Ji ki yaad mein bana hai. Unhone yahin se 52 Rajput rajaon ko Jahangir ki qaid se azad karwaya tha, isiliye ise 'Data Bandi Chhor' kaha jata hai."
    },
    {
        name: "MLB College Gwalior",
        year: "1887",
        address: "Lalitpur Colony, Gwalior, MP 474009",
        img: "assets/images/college.jpg",
        history: "Maharani Laxmi Bai College Gwalior ki shaan hai. Iski vishal building Victorian style mein bani hai. Bharat ke purva Pradhan Mantri Atal Bihari Vajpayee ji ne yahin se apni padhai poori ki thi."
    },
    {
        name: "Sun Temple",
        year: "1988",
        address: "Residency Rd, Morar, Gwalior, MP 474006",
        img: "assets/images/sun-temple.jpg",
        history: "G.D. Birla dwara banwaya gaya ye mandir Konark ke Sun Temple ki tarah dikhta hai. Lal patthar aur safed marble se bana ye mandir ek vishal rath ke akar ka hai jise 7 ghode kheench rahe hain."
    },
    {
        name: "Sas-Bahu Temple",
        year: "11th Century",
        address: "Fort Campus, Gwalior Fort, MP 474001",
        img: "assets/images/sas-bahu.jpg",
        history: "Ise Raja Mahipala ne banwaya tha. Ye mandir bhagwan Vishnu (Sahastrabahu) ko samarpit hai. Iski deewaron par ki gayi stone-carving duniya bhar ke tourists ko hairan kar deti hai."
    },
    {
        name: "Tansen Tomb",
        year: "Mughal Era",
        address: "Tansen Nagar, Gwalior, MP 474002",
        img: "assets/images/tansen.jpg",
        history: "Sangeet Samrat Tansen ka maqbara Mughal architecture ka behtareen namuna hai. Yahan har saal mahan sangeetkar jut-te hain. Kaha jata hai ki yahan ke neem ke patte khane se gala saaf hota hai."
    },
    {
        name: "Gopachal Parvat",
        year: "7th-15th Century",
        address: "Phoolbagh Rd, Gwalior, MP 474002",
        img: "assets/images/gopachal.webp",
        history: "Yahan pahadon ko kaat kar Jain Tirthankaraon ki vishal moortiyan banayi gayi hain. Sabse mukhya moorti bhagwan Parshvanath ki hai jo 42 feet unchi hai. Ye sthal Jain dharm ka ek bada kendra hai."
    },
    {
        name: "Teli Ka Mandir",
        year: "9th Century",
        address: "Gwalior Fort Campus, MP 474001",
        img: "assets/images/teli-ka-mandir.webp",
        history: "Ye kile ka sabse uncha mandir hai. Iska architecture North aur South Indian (Dravidian) styles ka mishran hai. Ye bhagwan Vishnu ko samarpit tha lekin baad mein ise Shiv mandir bana diya gaya."
    },
    {
        name: "Tigra Dam",
        year: "1916",
        address: "Tigra Reservoir, Gwalior, MP 474001",
        img: "assets/images/tigra-dam.jpg",
        history: "Sank nadi par bana ye bandh Gwalior ki lifline hai. Ye boating, picnic aur adventure sports ke liye sabse pasandida spot hai. Shaam ke waqt yahan ka nazara bahut hi sukoon dene wala hota hai."
    }
];

const container = document.getElementById('placesContainer');

function loadPlaces() {
    container.innerHTML = "";
    places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${place.img}" alt="${place.name}" onerror="this.src='https://via.placeholder.com/400x250?text=Gwalior+Explore'">
            </div>
            <div class="card-content">
                <h3>${place.name}</h3>
                <p><strong>Established:</strong> ${place.year}</p>
                <p class="address">📍 ${place.address}</p>
                <button class="view-btn" onclick="showHistory('${place.name}')">View History</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function showHistory(name) {
    const place = places.find(p => p.name === name);
    alert("📜 HISTORY OF " + place.name.toUpperCase() + ":\n\n" + place.history + "\n\n📍 Address: " + place.address);
}

loadPlaces();