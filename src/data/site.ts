// Single source of truth for the site owner. Edit these to make it yours.
// Localized copy (role, tagline, UI strings) lives in src/i18n/ui.ts.

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  /** Your name — shown in the header, hero, and footer. */
  name: string;
  /** Contact email (used for the mailto link). */
  email: string;
  /** Social / external profile links. */
  socials: SocialLink[];
}

export const site: SiteConfig = {
  name: "Olbios",
  email: "olbios88@gmail.com",
  socials: [{ label: "GitHub", href: "https://github.com/Olbioss" }],
};
