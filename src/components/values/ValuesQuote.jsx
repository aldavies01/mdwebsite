// src/components/values/ValuesQuote.jsx
import Icon from "../common/Icon";

export default function ValuesQuote({
  badge = "Values in Practice",
  titleTop = "Values in",
  titleEmph = "Daily Action",
  quote = `These values aren't just aspirations - they're how we actually work every day. Whether we're supporting someone with their morning routine or celebrating a personal achievement, our values guide every interaction.`,
  person = {
    name: "Nia Murphy",
    role: "Director of HR",
    imageUrl: "/images/team/nia.jpg",
  },
}) {
  return (
    <section className="py-16 bg-gradient-to-br from-secondary-light-blue/30 via-secondary-coral/20 to-secondary-teal/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-coral/20 text-secondary-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
            {titleTop} <br />
            <span className="text-secondary-coral">{titleEmph}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="text-8xl text-secondary-coral/30 font-serif leading-none mb-6">
            "
          </div>

          <blockquote className="text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-8 font-semibold">
            {quote}
          </blockquote>

          <div className="flex items-center justify-center">
            <div className="w-20 h-20 bg-secondary-coral/20 rounded-full flex items-center justify-center mr-6 overflow-hidden">
              {person.imageUrl ? (
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log("Image failed to load:", person.imageUrl);
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <Icon name="user" className="w-10 h-10 text-secondary-coral" />
              )}
            </div>
            <div>
              <div className="font-bold text-primary-navy text-xl">
                {person.name}
              </div>
              <div className="text-secondary-coral font-semibold">
                {person.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
