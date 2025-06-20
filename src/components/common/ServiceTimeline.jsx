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
      year: "2009",
      title: "M&D Care Founded",
      description:
        "Company established with focus on mental health and forensic care",
      type: "company",
    },
    {
      id: 2,
      year: "2016",
      title: "Ty Hiraeth",
      description:
        "First specialist residential care facility opens in Penygroes",
      type: "specialist",
    },
    {
      id: 3,
      year: "2017",
      title: "Granville Court",
      description: "Residential care home opens in Morriston, Swansea",
      type: "residential",
    },
    {
      id: 4,
      year: "2017",
      title: "Tegfan",
      description: "Specialist autism support facility opens in Ammanford",
      type: "specialist",
    },
    {
      id: 5,
      year: "2018",
      title: "Croft House",
      description: "Residential care home opens in Llanelli",
      type: "residential",
    },
    {
      id: 6,
      year: "2018",
      title: "Ty Richards",
      description: "Second specialist facility opens in Penygroes",
      type: "specialist",
    },
    {
      id: 7,
      year: "2019",
      title: "The Elms",
      description: "Residential care home opens in Cross Hands",
      type: "residential",
    },
    {
      id: 8,
      year: "2019",
      title: "Ynystawe Lodge",
      description: "Specialist facility opens in Swansea",
      type: "specialist",
    },
    {
      id: 9,
      year: "2019",
      title: "Ty Pin Coed",
      description: "Residential care home opens in Kidwelly",
      type: "residential",
    },
    {
      id: 10,
      year: "2020",
      title: "Rothersalde Bay",
      description: "Seaside residential care home opens in Langland",
      type: "residential",
    },
    {
      id: 11,
      year: "2020",
      title: "Ceiriosen Bren",
      description: "Rural residential care home opens in Llandysul",
      type: "residential",
    },
    {
      id: 12,
      year: "2021",
      title: "Gelynnen",
      description: "Residential care home opens in Pencader",
      type: "residential",
    },
    {
      id: 13,
      year: "2022",
      title: "Expansion Phase",
      description: "Reached 200+ individuals supported across Wales",
      type: "milestone",
    },
    {
      id: 14,
      year: "2024",
      title: "Present Day",
      description:
        "650+ team members supporting 214+ individuals across 11 locations",
      type: "milestone",
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "residential":
        return "border-secondary-coral/30 bg-secondary-coral/5";
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
