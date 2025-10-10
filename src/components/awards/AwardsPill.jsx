export default function AwardPill({ item }) {
  return (
    <div className="group flex flex-col gap-3 bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-primary-navy">
          {item.year}
        </span>
        <span className="text-xs font-bold text-white bg-primary-navy/80 px-3 py-1 rounded-full">
          {item.achievement}
        </span>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl" aria-hidden>
              🏆
            </span>
          )}
        </div>
        <div className="flex-1">
          <div className="font-bold text-primary-navy leading-tight">
            {item.title}
          </div>
          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
