// Single source of truth for locales and UI strings.
// English is the default locale and serves at `/`; Turkish lives under `/tr/`.

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const ui = {
  tr: {
    "nav.projects": "Projeler",
    "nav.about": "Hakkımda",
    "nav.contact": "İletişim",
    // Pre-uppercased: the eyebrow renders in a text-transform:uppercase label,
    // and Turkish casing would turn the brand word into "TYPESCRİPT".
    "hero.role": "FULL-STACK TYPESCRIPT GELİŞTİRİCİ",
    "hero.tagline":
      "Uçtan uca web uygulamaları tasarlıyor, geliştiriyor ve yayına alıyorum — gerçek zamanlı sohbet, RAG pipeline ve çok satıcılı e-ticaret.",
    "hero.cta.work": "Seçili işler ↓",
    "hero.cta.contact": "İletişime geç →",
    "section.work": "Seçili işler",
    "section.about": "Hakkımda",
    "section.contact": "İletişim",
    "work.fullIndex": "Tüm projeler →",
    "index.title": "İndeks",
    "index.count": "{n} proje — ayrıntılı yazı için birini seçin",
    "detail.back": "← İndeks",
    "detail.live": "Canlı görüntüle ↗",
    "detail.source": "Kaynak ↗",
    "detail.previewAlt": "{name} önizlemesi",
    "contact.lead":
      "Aklınızda bir proje mi var, ya da sadece merhaba demek mi istiyorsunuz?",
    "footer.built": "Astro ile yapıldı",
    "footer.top": "Yukarı ↑",
    "meta.default":
      "Full-stack TypeScript geliştirici — üretim web uygulamaları tasarlıyor, geliştiriyor ve yayına alıyorum.",
    "meta.home":
      "Altı üretim web uygulaması — gerçek zamanlı sohbet, RAG, e-ticaret, yemek siparişi, film keşfi ve müşteri işleri.",
    "meta.index": "Altı üretim web uygulaması — ayrıntılı yazılarla tam liste.",
    "title.home": "Portfolyo",
    "notfound.title": "Sayfa bulunamadı",
    "notfound.lead":
      "Aradığınız sayfa mevcut değil ya da taşınmış. Sizi geri götürelim.",
    "notfound.home": "← Ana sayfaya dön",
    "a11y.theme": "Renk temasını değiştir",
    "a11y.switchLocale": "Switch to English",
  },
  en: {
    "nav.projects": "Index",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.role": "Full-Stack TypeScript Developer",
    "hero.tagline":
      "I design, build, and ship full-stack web apps — real-time chat, RAG pipelines, and multi-vendor e-commerce.",
    "hero.cta.work": "Selected work ↓",
    "hero.cta.contact": "Get in touch →",
    "section.work": "Selected work",
    "section.about": "About",
    "section.contact": "Contact",
    "work.fullIndex": "Full index →",
    "index.title": "Index",
    "index.count": "{n} projects — pick any for the full write-up",
    "detail.back": "← Index",
    "detail.live": "Visit live ↗",
    "detail.source": "Source ↗",
    "detail.previewAlt": "Preview of {name}",
    "contact.lead": "Have a project in mind, or just want to say hi?",
    "footer.built": "Built with Astro",
    "footer.top": "Top ↑",
    "meta.default":
      "Full-stack TypeScript developer designing, building, and shipping production web apps.",
    "meta.home":
      "Six production web apps — real-time chat, RAG document Q&A, multi-vendor e-commerce, food delivery, movie & TV discovery, and client work.",
    "meta.index":
      "Six production web apps — the full list with detailed write-ups.",
    "title.home": "Portfolio",
    "notfound.title": "Page not found",
    "notfound.lead":
      "The page you're looking for doesn't exist or has moved. Let's get you back.",
    "notfound.home": "← Back home",
    "a11y.theme": "Toggle color theme",
    "a11y.switchLocale": "Türkçeye geç",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof typeof ui.tr;

/** Normalize whatever Astro.currentLocale gives us into a known locale. */
export function asLocale(locale: string | undefined): Locale {
  return locale === "tr" ? "tr" : "en";
}

/** `const tf = t(Astro.currentLocale); tf("nav.projects")` */
export function t(locale: string | undefined) {
  const l = asLocale(locale);
  return (key: UiKey): string => ui[l][key] ?? ui.en[key];
}

/** Prefix internal paths for the non-default locale. */
export function localePath(locale: string | undefined, path: string): string {
  if (asLocale(locale) !== "tr") return path;
  return path === "/" ? "/tr/" : `/tr${path}`;
}

/** The same page's path in the other locale (slugs are shared). */
export function alternatePath(pathname: string): string {
  if (pathname === "/tr" || pathname === "/tr/") return "/";
  if (pathname.startsWith("/tr/")) return pathname.slice(3);
  return pathname === "/" ? "/tr/" : `/tr${pathname}`;
}
