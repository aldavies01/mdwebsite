import { useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 51.691819,
  lng: -4.086685,
};

const mapOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  zoomControl: true,
  styles: [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#C9EBFC" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }],
    },
  ],
};

// --- helpers (pure) ---
function getServiceColor(type) {
  switch (type) {
    case "Residential Service":
      return "bg-secondary-coral";
    case "Specialist Service":
      return "bg-secondary-purple";
    default:
      return "bg-primary-navy";
  }
}

function getCQCColor(rating) {
  switch ((rating || "").toLowerCase()) {
    case "outstanding":
      return "text-green-600 bg-green-50 border-green-200";
    case "good":
      return "text-blue-600 bg-blue-50 border-blue-200";
    case "requires improvement":
      return "text-orange-600 bg-orange-50 border-orange-200";
    default:
      return "text-gray-600 bg-gray-50 border-gray-200";
  }
}

function getLocationImage(loc) {
  return loc?.image && typeof loc.image === "string" ? loc.image : null;
}

function matchesSearch(loc, q) {
  const term = (q || "").trim().toLowerCase();
  if (!term) return true;
  const haystack = [
    loc.name,
    loc.address,
    loc.description,
    ...(loc.services || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(term);
}

function ServiceMap() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [filterValue, setFilterValue] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const locations = [
    {
      lat: 51.799942,
      lng: -4.048533,
      name: "Ty Hiraeth",
      description: "Specialist Service",
      address: "Ty Hiraeth, Bryn Road, Penygroes, SA14 7PW",
      phone: "01792 885126",
      email: "ty.hiraeth@mdcare.co.uk",
      capacity: "8 residents",
      ciwRating: "Outstanding",
      rating: 4.9,
      services: ["Behavioral Support", "24/7 Care", "Medical Oversight"],
      image: "/images/specialist/Ty Hiraeth.png",
      imageAlt: "Ty Hiraeth exterior",
    },
    {
      lat: 51.799989,
      lng: -4.047584,
      name: "Ty Richards",
      description: "Specialist Service",
      address: "Ty Richards, Bryn Road, Penygroes, SA14 7PW",
      phone: "01792 885126",
      email: "ty.richards@mdcare.co.uk",
      capacity: "6 residents",
      ciwRating: "Outstanding",
      rating: 4.8,
      services: ["Specialist Care", "Therapy", "Crisis Support"],
      image: "/images/specialist/Ty Richards.jpg",
      imageAlt: "Ty Richards exterior",
    },
    {
      lat: 51.67795,
      lng: -4.16716,
      name: "Croft House",
      description: "Residential Service",
      address: "89, Queen Victoria Road, Llanelli, SA15 2TR",
      phone: "01792 885126",
      email: "croft.house@mdcare.co.uk",
      capacity: "12 residents",
      ciwRating: "Good",
      rating: 4.7,
      services: ["Residential Care", "Activities", "24/7 Support"],
      image: "/images/residential/croft-house-1.png",
      imageAlt: "Croft House exterior",
    },
    {
      lat: 51.57092,
      lng: -4.0079,
      name: "Rothersalde Bay",
      description: "Residential Service",
      address: "25/27 Rotherslade Road, Langland, Swansea, SA3 4QW",
      phone: "01792 885126",
      email: "rotherslade@mdcare.co.uk",
      capacity: "15 residents",
      ciwRating: "Outstanding",
      rating: 4.9,
      services: ["Residential Care", "Seaside Location", "Community Access"],
      image: "/images/residential/rotherslade.jpg",
      imageAlt: "Rotherslade House exterior",
    },
    {
      lat: 51.813505,
      lng: -4.109135,
      name: "The Elms",
      description: "Residential Service",
      address: "The Elms, Heol Y Capel, Cross Hands, Llanelli, SA14 7EW",
      phone: "01792 885126",
      email: "the.elms@mdcare.co.uk",
      capacity: "10 residents",
      ciwRating: "Good",
      rating: 4.6,
      services: ["Residential Care", "Garden Therapy", "Social Activities"],
      image: "/images/residential/The Elms.png",
      imageAlt: "The Elms exterior",
    },
    {
      lat: 51.663865,
      lng: -3.926833,
      name: "Granville Court",
      description: "Residential Service",
      address: "44 Slate Street, Morriston, Swansea, SA6 8AY",
      phone: "01792 885126",
      email: "granville@mdcare.co.uk",
      capacity: "14 residents",
      ciwRating: "Outstanding",
      rating: 4.8,
      services: ["Residential Care", "Urban Location", "Transport Links"],
      image: "/images/residential/granville.jpg",
      imageAlt: "Granville Court exterior",
    },
    {
      lat: 51.79804,
      lng: -3.99303,
      name: "Tegfan",
      description: "Specialist Service",
      address: "Arthur Street, Ammanford, SA18 2DR",
      phone: "01792 885126",
      email: "tegfan@mdcare.co.uk",
      capacity: "6 residents",
      ciwRating: "Outstanding",
      rating: 4.9,
      services: ["Specialist Care", "Behavioral Support", "Individual Support"],
      image: "/images/specialist/tegfan.png",
      imageAlt: "The Elms exterior",
    },
    {
      lat: 51.68226,
      lng: -3.90591,
      name: "Ynystawe Lodge",
      description: "Specialist Service",
      address: "Pard Rd, Ynysforgan, Swansea, SA6 5AP",
      phone: "01792 885126",
      email: "ynystawe@mdcare.co.uk",
      capacity: "8 residents",
      ciwRating: "Good",
      rating: 4.7,
      services: ["Specialist Care", "Secure Environment", "Therapy Programs"],
      image: "/images/specialist/ynystawe.png",
      imageAlt: "Gelynnen exterior",
    },
    {
      lat: 51.99263,
      lng: -4.2658,
      name: "Gelynnen",
      description: "Residential Service",
      address: "8 Golwg yr Ogof, Pencader, SA39 9HS",
      phone: "01792 885126",
      email: "gelynnen@mdcare.co.uk",
      capacity: "12 residents",
      ciwRating: "Good",
      rating: 4.6,
      services: ["Residential Care", "Rural Setting", "Community Integration"],
      image: "/images/residential/Gelynnen.jpg",
      imageAlt: "Gelynnen exterior",
    },
    {
      lat: 51.74761,
      lng: -4.27792,
      name: "Ty Pin Coed",
      description: "Residential Service",
      address: "Ty Pin Coed, Kidwelly, SA17 4RA",
      phone: "01792 885126",
      email: "typincoed@mdcare.co.uk",
      capacity: "10 residents",
      ciwRating: "Outstanding",
      rating: 4.8,
      services: ["Residential Care", "Historic Town", "Peaceful Location"],
      image: "/images/residential/ty-pin-coed.jpg",
      imageAlt: "Ty Pin Coed exterior",
    },
    {
      lat: 51.72346620555966,
      lng: -3.8308954438953893,
      name: "Ty Gwerthfawr",
      description: "Residential Service",
      address: "Ty Gwerthfawr, Gellinudd Pontardawe, Swansea, SA8 3DX",
      phone: "01792 885126",
      email: "typincoed@mdcare.co.uk",
      capacity: "10 residents",
      ciwRating: "Outstanding",
      rating: 4.8,
      services: ["Residential Care", "Historic Town", "Peaceful Location"],
      image: "/images/residential/Ty Gwerthfawr.jpeg",
      imageAlt: "Ty Gwerthfawr exterior",
    },
    {
      lat: 51.670181673284155,
      lng: -3.952861245072533,
      name: "Llys Penpant",
      description: "Residential Service",
      address: "7/9 Llys Penpant, Morriston, Swansea, SA6 6DA",
      phone: "01792 885126",
      email: "typincoed@mdcare.co.uk",
      capacity: "10 residents",
      ciwRating: "Outstanding",
      rating: 4.8,
      services: ["Residential Care", "Historic Town", "Peaceful Location"],
      image: "/images/residential/llys.jpg",
      imageAlt: "Llys Penpant exterior",
    },
    {
      lat: 52.1476,
      lng: -4.38367,
      name: "Ceiriosen Bren",
      description: "Residential Service",
      address: "Efail Fach, Plwmp, Llandysul, SA44 6HS",
      phone: "01792 885126",
      email: "ceiriosen@mdcare.co.uk",
      capacity: "8 residents",
      ciwRating: "Good",
      rating: 4.7,
      services: ["Residential Care", "Countryside", "Traditional Values"],
      image: "/images/residential/Ceiriosen.jpg",
      imageAlt: "Ceiriosen Bren exterior",
    },
    {
      lat: 51.66315382110868,
      lng: -3.925104206430877,
      name: "Crown Street",
      description: "Supported Living",
      address: "Morriston, Swansea",
      phone: "01792 885126",
      email: "ceiriosen@mdcare.co.uk",
      capacity: "8 residents",
      ciwRating: "Good",
      rating: 4.7,
      services: ["Supported Living", "City Links"],
    },
    {
      lat: 51.68459481105756,
      lng: -4.1607046027415855,
      name: "Thomas Street",
      description: "Supported Living",
      address: "Thomas Street, Llanelli",
      phone: "01792 885126",
      email: "thomasst@mdcare.co.uk",
      capacity: "8 residents",
      ciwRating: "Good",
      services: ["Supported Living", "Excellent Transport Links"],
    },
    {
      lat: 51.6813674646923,
      lng: -4.155510045071976,
      name: "Wern Road",
      description: "Supported Living",
      address: "Wern Road, Llanelli",
      phone: "01792 885126",
      email: "thomasst@mdcare.co.uk",
      capacity: "8 residents",
      ciwRating: "Good",
      services: ["Supported Living", "Excellent Transport Links"],
    },
    {
      lat: 51.70925246848322,
      lng: -3.83003356226431,
      name: "Primrose Lane",
      description: "Supported Living",
      address: "Primrose, Rhos",
      phone: "01792 885126",
      email: "thomasst@mdcare.co.uk",
      capacity: "8 residents",
      ciwRating: "Good",
      services: ["Supported Living", "Excellent Transport Links"],
    },
    {
      lat: 51.85889412088829,
      lng: -4.315047758558872,
      name: "Glannant Road",
      description: "Supported Living",
      address: "Glannant Road, Carmarthen",
      phone: "01792 885126",
      email: "thomasst@mdcare.co.uk",
      capacity: "8 residents",
      ciwRating: "Good",
      services: ["Supported Living", "Excellent Transport Links"],
    },
    {
      lat: 51.62608238982786,
      lng: -3.9436084935447173,
      name: "Ebenezer Chapel",
      description: "Supported Living",
      address: "Ebenezer, Swansea",
      phone: "01792 885126",
      email: "thomasst@mdcare.co.uk",
      capacity: "8 residents",
      ciwRating: "Good",
      services: ["Supported Living", "Excellent Transport Links"],
    },
    {
      lat: 51.805145512501625,
      lng: -3.9180532407736792,
      name: "Glanamman Apartments",
      description: "Supported Living",
      address: "Glannant Road, Carmarthen",
      phone: "01792 885126",
      email: "thomasst@mdcare.co.uk",
      capacity: "8 residents",
      ciwRating: "Good",
      services: ["Supported Living", "Excellent Transport Links"],
    },
  ];

  // memoize filtering for perf + correctness
  const filteredLocations = useMemo(() => {
    return locations.filter((loc) => {
      const typeOk = filterValue === "All" || loc.description === filterValue;
      const searchOk = matchesSearch(loc, searchValue);
      return typeOk && searchOk;
    });
  }, [locations, filterValue, searchValue]);

  // close popup if it gets filtered out
  useEffect(() => {
    if (!selectedMarker) return;
    const stillVisible = filteredLocations.some(
      (l) => l.name === selectedMarker.name
    );
    if (!stillVisible) setSelectedMarker(null);
  }, [filteredLocations, selectedMarker]);

  const handleGetDirections = (location) => {
    const address = encodeURIComponent(location.address);
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${address}`,
      "_blank"
    );
  };

  const handleContact = (location) => {
    window.open(`tel:${location.phone}`, "_self");
  };

  return (
    <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
      {/* Toggle Button */}
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="absolute top-3 sm:top-4 left-3 sm:left-4 md:right-4 md:left-auto z-20 bg-white/95 backdrop-blur-sm rounded-full p-2.5 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isPanelOpen ? (
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary-navy"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary-navy"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
            />
          </svg>
        )}
      </button>

      {/* Mobile Backdrop */}
      {isPanelOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[15]"
          onClick={() => setIsPanelOpen(false)}
        />
      )}

      {/* Filter Panel */}
      <div
        className={`absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl border border-white/20 transition-all duration-300 ${
          isPanelOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 md:opacity-100 md:translate-x-0"
        } w-[calc(100vw-1.5rem)] sm:w-80 max-w-sm`}
      >
        <div className="p-4 sm:p-6">
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsPanelOpen(false)}
            className="md:hidden absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h3 className="text-lg sm:text-xl font-bold text-primary-navy mb-4 pr-8 md:pr-0">
            Find Services
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Type
              </label>
              <select
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="w-full rounded-lg border-2 border-gray-200 bg-white p-3 text-sm text-gray-900 focus:border-primary-navy focus:ring-0 focus:outline-none transition-colors duration-200 appearance-none cursor-pointer"
              >
                <option value="All">All Services</option>
                <option value="Specialist Service">Specialist Service</option>
                <option value="Residential Service">Residential Service</option>
                <option value="Supported Living">Supported Living</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Location
              </label>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter postcode, city, or service name"
                className="w-full rounded-lg border-2 border-gray-200 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-navy focus:ring-0 focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Keep live filtering; use button to clear */}
            <button
              onClick={() => setSearchValue("")}
              className="w-full bg-gradient-to-r from-primary-navy to-secondary-teal text-white rounded-lg p-3 text-sm font-semibold hover:from-primary-navy/90 hover:to-secondary-teal/90 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Clear Search
            </button>
          </div>

          {/* Results Counter */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold text-primary-navy">
                {filteredLocations.length}
              </span>{" "}
              of {locations.length} locations
            </p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={9}
          options={mapOptions}
        >
          {filteredLocations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => setSelectedMarker(location)}
            />
          ))}

          {selectedMarker && (
            <OverlayView
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              getPixelPositionOffset={(width, height) => ({
                x: -(width / 2),
                y: -(height + 10),
              })}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-72 sm:w-80 max-w-[calc(100vw-2rem)] relative">
                {/* Header: image if provided, else gradient fallback */}
                {getLocationImage(selectedMarker) ? (
                  <div className="relative h-24 sm:h-28 lg:h-32">
                    <img
                      src={getLocationImage(selectedMarker)}
                      alt={
                        selectedMarker.imageAlt ||
                        `${selectedMarker.name} photo`
                      }
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-white/85 text-gray-900 border border-white">
                        {selectedMarker.description}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedMarker(null)}
                      className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/85 hover:bg-white text-gray-700 rounded-full p-1.5 sm:p-2 transition-colors duration-200 border border-white"
                      aria-label="Close"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div
                    className={`relative h-20 sm:h-24 lg:h-32 ${getServiceColor(
                      selectedMarker.description
                    )} bg-gradient-to-br from-current to-current/80`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/80">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mx-auto mb-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-5 4h4"
                          />
                        </svg>
                        <p className="text-xs hidden sm:block">Facility</p>
                      </div>
                    </div>
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30">
                        {selectedMarker.description}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedMarker(null)}
                      className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-1.5 sm:p-2 transition-all duration-200 border border-white/30"
                      aria-label="Close"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Content */}
                <div className="p-3 sm:p-4">
                  <div className="mb-2 sm:mb-3">
                    <h3 className="font-bold text-base sm:text-lg text-primary-navy mb-1 leading-tight">
                      {selectedMarker.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">
                        {selectedMarker.capacity}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-2 sm:mb-3">
                    <svg
                      className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {selectedMarker.address}
                    </p>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 sm:mb-2">
                      Services
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {selectedMarker.services
                        .slice(
                          0,
                          typeof window !== "undefined" &&
                            window.innerWidth < 640
                            ? 2
                            : 3
                        )
                        .map((service, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                          >
                            {service}
                          </span>
                        ))}
                      {selectedMarker.services.length >
                        (typeof window !== "undefined" &&
                        window.innerWidth < 640
                          ? 2
                          : 3) && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                          +
                          {selectedMarker.services.length -
                            (typeof window !== "undefined" &&
                            window.innerWidth < 640
                              ? 2
                              : 3)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-1.5 sm:gap-2">
                    <button
                      onClick={() => handleGetDirections(selectedMarker)}
                      className="flex-1 bg-primary-navy text-white py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg font-medium text-xs sm:text-sm hover:bg-primary-navy/90 transition-colors duration-200 flex items-center justify-center gap-1 shadow-md hover:shadow-lg touch-manipulation"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      <span className="hidden xs:inline">Directions</span>
                      <span className="xs:hidden">Dir</span>
                    </button>
                    <button
                      onClick={() => handleContact(selectedMarker)}
                      className="flex-1 bg-white border-2 border-gray-200 text-primary-navy py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-50 hover:border-primary-navy transition-all duration-200 flex items-center justify-center gap-1 shadow-md hover:shadow-lg touch-manipulation"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Call
                    </button>
                  </div>
                </div>

                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
                </div>
              </div>
            </OverlayView>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default ServiceMap;
