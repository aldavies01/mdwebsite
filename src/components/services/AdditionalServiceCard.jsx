import Icon from "../common/Icon";

function AdditionalServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className="bg-secondary-light-blue/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-navy/10 transition-colors duration-300">
        {typeof service.icon === "string" ? (
          <Icon name={service.icon} className="w-8 h-8 text-primary-navy" />
        ) : (
          service.icon
        )}
      </div>

      <h3 className="text-xl font-bold text-primary-navy mb-4 group-hover:text-secondary-coral transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default AdditionalServiceCard;
