// src/components/ServiceDetail.jsx
import MediaCard from "../common/MediaCard";
import Icon from "../common/Icon";

function ServiceDetail({ service, index }) {
  const isAlt = index % 2 === 1;

  const MediaBlock = () => {
    // 1) Video via MediaCard
    if (service?.media?.type === "video" && service?.media?.src) {
      return (
        <MediaCard
          title={service.media.title || service.title}
          description={service.media.description}
          poster={service.media.poster || "/images/stock/stock-1.png"}
          src={service.media.src}
          provider={service.media.provider || "file"}
          autoPlayOnOpen
          className="shadow-xl"
        />
      );
    }

    // 2) Gallery (2–4 images)
    if (Array.isArray(service?.gallery) && service.gallery.length > 0) {
      const imgs = service.gallery.slice(0, 4);
      return (
        <div className="grid grid-cols-2 gap-3 h-96 lg:h-[500px]">
          {imgs.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 && imgs.length > 2 ? "row-span-2" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${service.title} ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      );
    }

    // 3) Single image
    if (service?.image) {
      return (
        <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={`${service.title} image`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent" />
        </div>
      );
    }

    // 4) Fallback placeholder (your original)
    return (
      <div
        className={`h-96 lg:h-[500px] ${service.bgColor}/10 rounded-2xl flex items-center justify-center relative overflow-hidden`}
      >
        <div className={`absolute inset-0 ${service.bgColor}/20`}></div>
        <div className="relative text-center text-gray-500">
          <svg
            className="w-20 h-20 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
            />
          </svg>
          <p className="text-lg font-medium">{service.title} Image</p>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        isAlt ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      {/* TEXT */}
      <div className={isAlt ? "lg:col-start-2" : ""}>
        <div className={`inline-block ${service.bgColor} p-4 rounded-2xl mb-6`}>
          {typeof service.icon === "string" ? (
            <Icon name={service.icon} className="w-6 h-6 text-white" />
          ) : (
            service.icon
          )}
        </div>

        <h2 className="text-4xl font-bold text-primary-navy mb-2">
          {service.title}
        </h2>
        {service.subtitle && (
          <p className="text-primary-navy/70 font-semibold mb-2">
            {service.subtitle}
          </p>
        )}

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* FEATURES */}
        {Array.isArray(service.features) && service.features.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <div
                  className={`w-2 h-2 ${service.bgColor} rounded-full mt-2 mr-3 flex-shrink-0`}
                ></div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* STATS */}
        {Array.isArray(service.stats) && service.stats.length > 0 && (
          <div className="grid grid-cols-3 gap-6 mb-8">
            {service.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className={`text-2xl font-bold ${service.textColor}`}>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {service.link && (
          <a
            href={service.link}
            className={`inline-flex items-center ${service.bgColor} text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            Learn More About {service.title}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>

      {/* MEDIA */}
      <div className={isAlt ? "lg:col-start-1" : ""}>
        <MediaBlock />
      </div>
    </div>
  );
}

export default ServiceDetail;
