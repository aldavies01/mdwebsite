function ValueProposition({ icon, title, description }) {
  return (
    <div className="flex items-start">
      <div className="bg-secondary-coral/20 p-3 rounded-xl mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-primary-navy mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ValueProposition;
