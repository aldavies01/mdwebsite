function FeatureList({ title, features, dotColor = "secondary-coral" }) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-primary-navy">{title}</h4>
      <div className="grid grid-cols-1 gap-2 text-sm">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-2 h-2 bg-${dotColor} rounded-full mr-3`}></div>
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureList;
