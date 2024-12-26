import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="container">
      <div className="py-md-5 py-4">
        <h1
          className="fw-bolder fs-h1 animoson-h1-banner"
          data-aos="fade-right"
        >
          Welcome to Bangldesh !
        </h1>
        <h4 className="fw-bolder ">
          An unspoled land wehere youll hardly meet another tourist
        </h4>
        {/* animison data aos */}
        <p className="lh-base" data-aos="fade-left">
          Bangladesh's tourist attractions include historical monuments,
          resorts, beaches, picnic spots, forests and tribal people, wildlife of
          various species. Activities for tourists include angling, water
          skiing, river cruising, hiking, rowing, yachting, and sea
          bathing.[1][2] In the northern part, comprising the Rajshahi division,
          there are archaeological sites, including the temple city Puthia in
          Rajshahi; the largest and most ancient archaeological site,
          <br />
          <br />
          Mahasthangarh in Bogra; the single largest Buddhist monastery,
          Paharpur in Naogaon; the most ornamental terracota Hindu temple,
          Kantaji Temple, and many rajbaris or palaces of old zamindars. In the
          south-eastern part, which is the Chittagong Division, there are
          natural and hilly areas like Chittagong Hill Tracts, along with sandy
          sea beaches. The most notable beach, in Cox's Bazar, is a contender
          for the title of longest unbroken sandy sea beach in the world.[3]
        </p>
      </div>
    </div>
  );
};

export default Banner;
