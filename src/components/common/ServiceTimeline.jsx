import { useState, useRef, useEffect } from "react";

function ServiceTimeline() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const timelineRef = useRef(null);

  // Timeline data - you can update these with actual opening dates
  const timelineData = [
    {
      id: 1,
      year: "2008",
      title: "M&D Care Founded",
      description:
        "Company established with focus on mental health and forensic care",
      type: "company",
    },
    {
      id: 2,
      year: "2008",
      title: "The Elms",
      description:
        "First residential care facility opens in Foelgastell, Carmarthen",
      type: "residential",
    },
    {
      id: 3,
      year: "2009",
      title: "Llys Penpant",
      description: "Residential care home opens in Morriston, Swansea",
      type: "residential",
    },
    {
      id: 4,
      year: "2009",
      title: "Rotherslade House",
      description:
        "Residential care home opens in the picturesque area of Rotherslade",
      type: "specialist",
    },
    {
      id: 5,
      year: "2009",
      title: "Forest View",
      description: "Residential care home opens in Port Talbot, Swansea",
      type: "residential",
    },
    {
      id: 6,
      year: "2011",
      title: "Croft House",
      description: "Residential care home opens in Llanelli",
      type: "specialist",
    },
    {
      id: 7,
      year: "2015",
      title: "Domiciliary Care",
      description: "Our domiciliary care service was established",
      type: "domiciliary care",
    },
    {
      id: 8,
      year: "2017",
      title: "Granville Court",
      description: "Residential care service opens in Morriston, Swansea",
      type: "specialist",
    },
    {
      id: 9,
      year: "2017",
      title: "Ebenezer Chapel",
      description: "Supported Living service opens up in Morriston, Swansea",
      type: "residential",
    },
    {
      id: 10,
      year: "2018",
      title: "Head Office",
      description: "New head office opened in Llangennech",
      type: "milestone",
    },
    {
      id: 11,
      year: "2019",
      title: "Wern Road",
      description: "Supported living service opened in Ystalyfera, Swansea",
      type: "supported living",
    },
    {
      id: 12,
      year: "2019",
      title: "Glannant",
      description: "Our first supported living service in Carmarthen",
      type: "supported living",
    },
    {
      id: 13,
      year: "2019",
      title: "Ynystawe Lodge",
      description: "Our first specialist support service, located in Swansea",
      type: "specialist",
    },
    {
      id: 14,
      year: "2019",
      title: "Crown Street",
      description: "Supported living service opens in Morriston, Swansea",
      type: "supported living",
    },
    {
      id: 15,
      year: "2020",
      title: "Thomas Street",
      description: "Supported living service opens in Thomas Street, Llanelli",
      type: "supported living",
    },
    {
      id: 16,
      year: "2021",
      title: "Ty Hiraeth",
      description: "Our second specialist service opens in Penygroes",
      type: "specialist",
    },
    {
      id: 17,
      year: "2022",
      title: "ILS",
      description: "Aquistion of Inspiration Lifestyle Services",
      type: "milestone",
    },
    {
      id: 18,
      year: "2022",
      title: "Tegfan",
      description: "12 bed specialist support service opens in Ammanford",
      type: "specialist",
    },
    {
      id: 19,
      year: "2023",
      title: "Ty Richards",
      description:
        "Specialist support. Named in honour of our colleague Mike Richards",
      type: "specialist",
    },
    {
      id: 20,
      year: "2025",
      title: "Ty Gwerthfawr",
      description: "State of the art residential service opens in Pontardawe",
      type: "residential",
    },
    {
      id: 21,
      year: "2025",
      title: "Head Office",
      description:
        "Grand opening of our new head office and training facilities",
      type: "milestone",
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "residential":
        return "border-secondary-coral/30 bg-secondary-coral/5";
      case "domiciliary care":
        return "border-brand-sky/30 bg-brand-sky/5"; // soft teal-blue tint
      case "supported living":
        return "border-brand-sand/30 bg-brand-sand/40"; // warm neutral tint
      case "specialist":
        return "border-secondary-purple/30 bg-secondary-purple/5";
      case "company":
        return "border-primary-navy/30 bg-primary-navy/5";
      case "milestone":
        return "border-primary-gold/30 bg-primary-gold/5";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  const getTypeDot = (type) => {
    switch (type) {
      case "residential":
        return "bg-secondary-coral";
      case "specialist":
        return "bg-secondary-purple";
      case "company":
        return "bg-primary-navy";
      case "milestone":
        return "bg-primary-gold";
      default:
        return "bg-gray-500";
    }
  };

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch drag functionality for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const timeline = timelineRef.current;
    if (timeline) {
      timeline.scrollLeft = 0;
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - matching your other section headers */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-navy/10 text-primary-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Timeline of <br />
            <span className="text-secondary-coral">Growth & Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From our founding in 2009 to becoming a leading care provider across
            Wales, explore the key milestones in our journey of growth and
            service expansion.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Track */}
          <div
            ref={timelineRef}
            className={`flex overflow-x-auto scrollbar-hide space-x-6 pb-8 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{ scrollBehavior: "smooth" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {timelineData.map((item, index) => (
              <div key={item.id} className="flex-shrink-0 relative group">
                {/* Timeline Card - using your standard card styling */}
                <div
                  className={`w-72 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${getTypeColor(
                    item.type
                  )}`}
                >
                  {/* Year Header */}
                  <div className="p-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary-navy">
                        {item.year}
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full ${getTypeDot(
                          item.type
                        )}`}
                      ></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-4">
                    <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-secondary-coral transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Type Badge - matching your other components */}
                    <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle scroll indicators */}
          <div className="absolute left-0 top-0 bottom-8 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-8 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Simple instruction text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Drag to explore our timeline</p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default ServiceTimeline;
