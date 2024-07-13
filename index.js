const districts = [
  {
    name: "Agra",
    description:
      "Known for the Taj Mahal, one of the wonders of the world, Agra is a city rich in Mughal architecture and history.",
  },
  {
    name: "Aligarh",
    description:
      "Famous for its lock industry, Aligarh is a cultural hub with a blend of historical monuments and modern amenities.",
  },
  {
    name: "Allahabad (Prayagraj)",
    description:
      "Renamed Prayagraj, it is a sacred city at the confluence of the Ganges, Yamuna, and mythical Saraswati rivers.",
  },
  {
    name: "Ambedkar Nagar",
    description:
      "Named after Dr. B.R. Ambedkar, this district is known for its agricultural productivity and cultural heritage.",
  },
  {
    name: "Amethi",
    description:
      "Known for being a political stronghold, Amethi boasts of rural charm and a growing industrial landscape.",
  },
  {
    name: "Amroha (J.P. Nagar)",
    description:
      "Formerly J.P. Nagar, Amroha is famous for its mangoes and handicrafts, reflecting rich cultural heritage.",
  },
  {
    name: "Auraiya",
    description:
      "Auraiya is an industrial town with a mix of agriculture and manufacturing, contributing to Uttar Pradesh's economy.",
  },
  {
    name: "Azamgarh",
    description:
      "Known as the 'Land of Sufi Saints', Azamgarh has a rich cultural heritage and historical significance.",
  },
  {
    name: "Baghpat",
    description:
      "Baghpat is known for its sugarcane production and historical monuments, showcasing the region's heritage.",
  },
  {
    name: "Bahraich",
    description:
      "Bahraich is famous for its wildlife sanctuaries and historical sites, attracting tourists interested in nature and history.",
  },
  {
    name: "Ballia",
    description:
      "Located on the banks of the Ganges, Ballia is known for its religious and cultural significance.",
  },
  {
    name: "Balrampur",
    description:
      "Balrampur is famous for its temples, historical sites, and the Dudhwa National Park, making it a tourist hotspot.",
  },
  {
    name: "Banda",
    description:
      "Banda is known for its forts and temples, reflecting the region's rich history and cultural heritage.",
  },
  {
    name: "Barabanki",
    description:
      "Barabanki is known for its sugar industry, historical monuments, and religious significance.",
  },
  {
    name: "Bareilly",
    description:
      "Bareilly is a bustling city known for its jhumka, zari, and embroidery industries, along with its rich cultural heritage.",
  },
  {
    name: "Basti",
    description:
      "Basti is known for its religious diversity and historical significance, with temples and shrines attracting devotees.",
  },
  {
    name: "Bhadohi",
    description:
      "Bhadohi is famous for its carpet industry, producing world-class carpets and rugs that are exported globally.",
  },
  {
    name: "Bijnor",
    description:
      "Bijnor is known for its sugar mills, mango orchards, and historical sites, offering a blend of agriculture and heritage.",
  },
  {
    name: "Budaun",
    description:
      "Budaun is known for its mosques, temples, and historical significance, reflecting its rich cultural heritage.",
  },
  {
    name: "Bulandshahr",
    description:
      "Bulandshahr is known for its historical monuments, religious sites, and agricultural productivity.",
  },
  {
    name: "Chandauli",
    description:
      "Chandauli is known for its coal mines, natural beauty, and historical temples, attracting tourists and pilgrims.",
  },
  {
    name: "Chitrakoot",
    description:
      "Chitrakoot is a town of religious and cultural importance, with mythological associations and natural beauty.",
  },
  {
    name: "Deoria",
    description:
      "Deoria is known for its agricultural productivity and historical sites, offering a glimpse into rural life in Uttar Pradesh.",
  },
  {
    name: "Etah",
    description:
      "Etah is known for its brassware industry, agricultural productivity, and historical sites.",
  },
  {
    name: "Etawah",
    description:
      "Etawah is famous for its leather industry, historical forts, and rich cultural heritage.",
  },
  {
    name: "Faizabad",
    description:
      "Faizabad is known for its historical significance, with temples and mosques reflecting its Mughal heritage.",
  },
  {
    name: "Farrukhabad",
    description:
      "Farrukhabad is known for its mango orchards, cotton textiles, and historical forts.",
  },
  {
    name: "Fatehpur",
    description:
      "Fatehpur is known for its historical monuments, temples, and cultural heritage.",
  },
  {
    name: "Firozabad",
    description:
      "Firozabad is famous for its glass industry, producing high-quality glassware and bangles.",
  },
  {
    name: "Gautam Buddha Nagar (Noida)",
    description:
      "Gautam Buddha Nagar, including Noida, is a major industrial hub and part of the National Capital Region (NCR).",
  },
  {
    name: "Ghaziabad",
    description:
      "Ghaziabad is known for its industrial growth, educational institutions, and historical sites.",
  },
  {
    name: "Ghazipur",
    description:
      "Ghazipur is known for its historical significance, especially for its role in India's struggle for independence.",
  },
  {
    name: "Gonda",
    description:
      "Gonda is known for its historical forts, temples, and natural beauty.",
  },
  {
    name: "Gorakhpur",
    description:
      "Gorakhpur is known for its religious significance, educational institutions, and historical monuments.",
  },
  {
    name: "Hamirpur",
    description:
      "Hamirpur is known for its forts, temples, and historical sites, reflecting its rich cultural heritage.",
  },
  {
    name: "Hardoi",
    description:
      "Hardoi is known for its agricultural productivity, historical sites, and cultural heritage.",
  },
  {
    name: "Hathras",
    description:
      "Hathras is known for its handicrafts, agriculture, and historical significance.",
  },
  {
    name: "Jalaun",
    description:
      "Jalaun is known for its forts, temples, and historical significance.",
  },
  {
    name: "Jaunpur",
    description:
      "Jaunpur is known for its historical monuments, mosques, and cultural heritage.",
  },
  {
    name: "Jhansi",
    description:
      "Jhansi is famous for its forts, museums, and historical significance, especially linked to Rani Lakshmi Bai.",
  },
  {
    name: "Kannauj",
    description:
      "Kannauj is known for its perfumes, historical significance, and temples.",
  },
  {
    name: "Kanpur Dehat (Ramabai Nagar)",
    description:
      "Kanpur Dehat, also known as Ramabai Nagar, is known for its agricultural productivity and historical significance.",
  },
  {
    name: "Kanpur Nagar",
    description:
      "Kanpur Nagar is known for its industrial growth, educational institutions, and historical landmarks.",
  },
  {
    name: "Kanshiram Nagar (Kasganj)",
    description:
      "Kanshiram Nagar, formerly known as Kasganj, is known for its sugarcane production and cultural diversity.",
  },
  {
    name: "Kaushambi",
    description:
      "Kaushambi is known for its archaeological sites, reflecting its ancient history and cultural heritage.",
  },
  {
    name: "Kushinagar (Padrauna)",
    description:
      "Kushinagar, also known as Padrauna, is a Buddhist pilgrimage site and known for its cultural and historical significance.",
  },
  {
    name: "Lakhimpur Kheri",
    description:
      "Lakhimpur Kheri is known for its agricultural productivity, Dudhwa National Park, and cultural diversity.",
  },
  {
    name: "Lucknow",
    description:
      "Lucknow is known for its rich cultural heritage, Nawabi cuisine, and historical monuments like Bara Imambara and Chota Imambara.",
  },
  {
    name: "Maharajganj",
    description:
      "Maharajganj is known for its historical significance, with forts and temples attracting tourists and pilgrims.",
  },
  {
    name: "Mahoba",
    description:
      "Mahoba is known for its historical forts, temples, and cultural heritage.",
  },
  {
    name: "Mainpuri",
    description:
      "Mainpuri is known for its religious diversity, historical sites, and agricultural productivity.",
  },
  {
    name: "Mathura",
    description:
      "Mathura is known for its religious significance as the birthplace of Lord Krishna and its vibrant culture.",
  },
  {
    name: "Mau",
    description:
      "Mau is known for its textile industry, agricultural productivity, and historical monuments.",
  },
  {
    name: "Meerut",
    description:
      "Meerut is known for its sports goods industry, educational institutions, and historical landmarks.",
  },
  {
    name: "Mirzapur",
    description:
      "Mirzapur is known for its carpets, brassware, and historical sites, including the iconic ghats along the Ganges.",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/96a00698329270009f7f4c9605ef8efb612a9ee867d0451badbb9a6441ebe6b3._SX1080_FMjpg_.jpg",
  },
  {
    name: "Moradabad",
    description:
      "Moradabad is known for its brassware industry, cultural diversity, and historical significance.",
  },
  {
    name: "Muzaffarnagar",
    description:
      "Muzaffarnagar is known for its sugarcane production, industrial growth, and historical sites.",
  },
  {
    name: "Pilibhit",
    description:
      "Pilibhit is known for its forests, wildlife sanctuaries, and agricultural productivity.",
  },
  {
    name: "Pratapgarh",
    description:
      "Pratapgarh is known for its historical monuments, temples, and cultural heritage.",
  },
  {
    name: "Raebareli",
    description:
      "Raebareli is known for its industrial growth, educational institutions, and historical landmarks.",
  },
  {
    name: "Rampur",
    description:
      "Rampur is known for its Rampuri chaaku (knives), cultural heritage, and historical significance.",
  },
  {
    name: "Saharanpur",
    description:
      "Saharanpur is known for its wood carving industry, botanical gardens, and historical sites.",
  },
  {
    name: "Sambhal",
    description:
      "Sambhal is known for its handicrafts, including horn and bone carving, and historical significance.",
  },
  {
    name: "Sant Kabir Nagar",
    description:
      "Sant Kabir Nagar is known for its religious significance and cultural heritage.",
  },
  {
    name: "Shahjahanpur",
    description:
      "Shahjahanpur is known for its agriculture, sugar mills, and historical monuments.",
  },
  {
    name: "Shamli",
    description:
      "Shamli is known for its sugar industry, educational institutions, and cultural diversity.",
  },
  {
    name: "Shravasti",
    description:
      "Shravasti is known for its archaeological sites, reflecting its ancient Buddhist history and cultural significance.",
  },
  {
    name: "Siddharthnagar",
    description:
      "Siddharthnagar is known for its religious sites, agricultural productivity, and cultural heritage.",
  },
  {
    name: "Sitapur",
    description:
      "Sitapur is known for its agricultural productivity, historical monuments, and cultural diversity.",
  },
  {
    name: "Sonbhadra",
    description:
      "Sonbhadra is known for its natural resources, wildlife sanctuaries, and historical significance.",
  },
  {
    name: "Sultanpur",
    description:
      "Sultanpur is known for its bird sanctuary, historical sites, and cultural heritage.",
  },
  {
    name: "Unnao",
    description:
      "Unnao is known for its archaeological sites, industrial growth, and cultural heritage.",
  },
  {
    name: "Varanasi",
    description:
      "Varanasi is known for its religious significance, cultural heritage, and the ghats along the Ganges River.",
  },
];

const districtImage = [
  "https://worldwildschooling.com/wp-content/uploads/2024/05/Strasbourg_Givaga_AdobeStock_320312981-1024x576.webp",
  "https://journeyviakerala.com/wp-content/uploads/2017/03/munnar.jpg?w=625",
  "https://assets3.thrillist.com/v1/image/1891943/828x620/crop;webp=auto;jpeg_quality=60;progressive.jpg",
  "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/how-many-cities-are-there-in-uttar-pradesh.jpg",
  "https://images.herzindagi.info/image/2021/Jul/why-should-we-travel-to-uttar-pradesh-main.jpg",
];
const districtsPerPage = 15; // Number of districts per page

function generateDistrictCards(pageNumber, filteredDistricts = districts) {
  const container = document.getElementById("districtsContainer");
  const paginationContainer = document.getElementById("paginationContainer");
  container.innerHTML = ""; // Clear existing content
  paginationContainer.innerHTML = ""; // Clear existing pagination

  // Calculate start and end indices based on pageNumber
  const startIndex = (pageNumber - 1) * districtsPerPage;
  const endIndex = startIndex + districtsPerPage;
  const paginatedDistricts = filteredDistricts.slice(startIndex, endIndex);

  paginatedDistricts.forEach((district, index) => {
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6");

    const imageIndex = index % districtImage.length;

    card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <div class="cardImageContainer">
              <img src=${
                district?.image ? district.image : districtImage[imageIndex]
              } alt="" class="cardImage"/>
            </div>
            <h5 class="card-title">${district.name}</h5>
            <div class="cardDescription">${district.description}</div>
            <div class="card-button">See More</div>
          </div>
        </div>
      `;
    const districtName = district.name.toLowerCase().replace(/ /g, "-");
    card.querySelector(
      ".card"
    ).style.backgroundImage = `url('/path/to/images/${districtName}.jpg')`;

    container.appendChild(card);
  });

  // Generate pagination links
  const totalPages = Math.ceil(filteredDistricts.length / districtsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.classList.add("page-item");
    const link = document.createElement("a");
    link.classList.add("page-link");
    link.href = "#";
    link.textContent = i;
    if (i === pageNumber) {
      li.classList.add("active");
    }
    link.addEventListener("click", () => {
      generateDistrictCards(i, filteredDistricts);
    });
    li.appendChild(link);
    paginationContainer.appendChild(li);
  }
}

document.getElementById("searchInput").addEventListener("input", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filteredDistricts = districts.filter(district => 
    district.name.toLowerCase().includes(query)
  );
  generateDistrictCards(1, filteredDistricts);
});

document.addEventListener("DOMContentLoaded", () => {
  generateDistrictCards(1); // Initial page load
});
