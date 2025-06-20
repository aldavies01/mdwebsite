import { useCallback, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
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
    },
    {
      lat: 51.799989,
      lng: -4.047584,
      name: "Ty Richards",
      description: "Specialist Service",
      address: "Ty Hiraeth, Bryn Road, Penygroes, SA14 7PW",
    },
    {
      lat: 51.67795,
      lng: -4.16716,
      name: "Croft House",
      description: "Residential Service",
      address: "89, Queen Victoria Road, Llanelli, SA15 2TR",
    },
    {
      lat: 51.57092,
      lng: -4.0079,
      name: "Rothersalde Bay",
      description: "Residential Service",
      address: "25/27 Rotherslade Road, Langland, Swansea, SA3 4QW",
    },
    {
      lat: 51.813505,
      lng: -4.109135,
      name: "The Elms",
      description: "Residential Service",
      address: "The Elms, Heol Y Capel, Cross Hands, Llanelli, SA14 7EW",
    },
    {
      lat: 51.663865,
      lng: -3.926833,
      name: "Granville Court",
      description: "Residential Service",
      address: "44 Slate Street, Morriston, Swansea, SA6 8AY",
    },
    {
      lat: 51.79804,
      lng: -3.99303,
      name: "Tegfan",
      description: "Specialist Service",
      address: "Arthur Street, Ammanford, SA18 2DR",
    },
    {
      lat: 51.68226,
      lng: -3.90591,
      name: "Ynystawe Lodge",
      description: "Specialist Service",
      address: "Pard Rd, Ynysforgan, Swansea, SA6 5AP",
    },
    {
      lat: 51.99263,
      lng: -4.2658,
      name: "Gelynnen",
      description: "Residential Service",
      address: "8 Golwg yr Ogof, Pencader, SA39 9HS",
    },
    {
      lat: 51.74761,
      lng: -4.27792,
      name: "Ty Pin Coed",
      description: "Residential Service",
      address: "Ty Pin Coed, Kidwelly, SA17 4RA",
    },
    {
      lat: 52.1476,
      lng: -4.38367,
      name: "Ceiriosen Bren",
      description: "Residential Service",
      address: "Efail Fach, Plwmp, Llandysul, SA44 6HS",
    },
  ];

  const filteredLocations = locations.filter(
    (location) => filterValue === "All" || location.description === filterValue
  );

  return (
    <div className="relative h-full rounded-2xl overflow-hidden bg-gray-100">
      {/* Desktop Panel Toggle Button */}
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="hidden md:block absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        {isPanelOpen ? (
          <svg
            className="w-6 h-6 text-primary-navy"
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
            className="w-6 h-6 text-primary-navy"
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

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="md:hidden absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <svg
          className="w-5 h-5 text-primary-navy"
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
      </button>

      {/* Backdrop for mobile */}
      {isPanelOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[15]"
          onClick={() => setIsPanelOpen(false)}
        />
      )}

      {/* Filter Panel */}
      <div
        className={`absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 transition-all duration-300 ${
          isPanelOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 md:opacity-100 md:translate-x-0"
        } w-80 max-w-[calc(100vw-2rem)]`}
      >
        <div className="p-4 md:p-6">
          {/* Close button for mobile */}
          <button
            onClick={() => setIsPanelOpen(false)}
            className="md:hidden absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1"
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

          <h3 className="text-lg md:text-xl font-bold text-primary-navy mb-3 md:mb-4 pr-8 md:pr-0">
            Filter Services
          </h3>

          <div className="space-y-3 md:space-y-4">
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                Service Type
              </label>
              <select
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-white p-2 md:p-3 text-sm md:text-base text-gray-900 focus:border-primary-navy focus:ring-0 focus:outline-none transition-colors duration-200 appearance-none cursor-pointer"
              >
                <option value="All">All Services</option>
                <option value="Specialist Service">Specialist Service</option>
                <option value="Residential Service">Residential Service</option>
              </select>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                Search Location
              </label>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter postcode or city"
                className="w-full rounded-lg md:rounded-xl border-2 border-gray-200 bg-white p-2 md:p-3 text-sm md:text-base text-gray-900 placeholder-gray-400 focus:border-primary-navy focus:ring-0 focus:outline-none transition-colors duration-200"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-primary-navy to-secondary-teal text-white rounded-lg md:rounded-xl p-2 md:p-3 text-sm md:text-base font-semibold hover:from-primary-navy/90 hover:to-secondary-teal/90 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl">
              Search Location
            </button>
          </div>

          {/* Results Counter */}
          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600">
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
      <LoadScript googleMapsApiKey="AIzaSyA3Bbm9kAQfZdR1DLhI4YCuhnt-JKZME7s">
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
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
              onCloseClick={() => setSelectedMarker(null)}
              options={{
                pixelOffset: new window.google.maps.Size(0, -10),
                disableAutoPan: false,
                maxWidth: 300,
              }}
            >
              <div className="relative">
                {/* Custom close button */}
                <button
                  onClick={() => setSelectedMarker(null)}
                  className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white rounded-full p-1 shadow-md transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4 text-gray-600"
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

                <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  {/* Header with service type badge */}
                  <div
                    className={`px-4 py-3 ${
                      selectedMarker.description === "Specialist Service"
                        ? "bg-secondary-coral"
                        : "bg-secondary-teal"
                    } text-white`}
                  >
                    <div className="flex items-center justify-between pr-6">
                      <span className="text-sm font-semibold uppercase tracking-wide">
                        {selectedMarker.description}
                      </span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-primary-navy mb-2 leading-tight pr-6">
                      {selectedMarker.name}
                    </h3>

                    <div className="flex items-start mb-3">
                      <svg
                        className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0"
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
                      <p className="text-gray-600 text-sm leading-relaxed pr-6">
                        {selectedMarker.address}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 bg-primary-navy text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary-navy/90 transition-colors duration-200 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7"
                          />
                        </svg>
                        Directions
                      </button>
                      <button className="flex-1 bg-gray-100 text-primary-navy py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default ServiceMap;
