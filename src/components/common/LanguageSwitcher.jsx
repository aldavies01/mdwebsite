import { useTranslation } from "react-i18next";
import { useEffect, useMemo } from "react";

export default function LanguageSwitcher({ className = "" }) {
  const { i18n } = useTranslation();

  const current = i18n.resolvedLanguage || i18n.language || "en";
  const options = useMemo(
    () => [
      { code: "en", label: "EN", sr: "English" },
      { code: "cy", label: "CY", sr: "Cymraeg" },
    ],
    []
  );

  useEffect(() => {
    // ensure <html lang="..."> stays in sync
    document.documentElement.lang = current;
  }, [current]);

  const switchTo = (lng) => {
    if (lng === current) return;
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Language"
        className="
          relative inline-flex items-center 
          rounded-full border border-white/25 
          bg-white/10 backdrop-blur
          p-1
          shadow-sm
        "
      >
        {options.map((opt) => {
          const active = opt.code === current;
          return (
            <button
              key={opt.code}
              role="tab"
              aria-selected={active}
              aria-controls={`lang-panel-${opt.code}`}
              onClick={() => switchTo(opt.code)}
              className={[
                "relative px-3 md:px-3.5 py-1.5 text-sm font-medium transition-all",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60 focus-visible:ring-offset-primary-navy",
                active
                  ? "text-primary-navy bg-white rounded-full shadow"
                  : "text-white/90 hover:text-white",
              ].join(" ")}
            >
              <span aria-hidden="true">{opt.label}</span>
              <span className="sr-only">{opt.sr}</span>
            </button>
          );
        })}
      </div>

      {/* Visually hidden panels for a11y completeness (optional) */}
      {options.map((opt) => (
        <span key={opt.code} id={`lang-panel-${opt.code}`} hidden />
      ))}
    </div>
  );
}
