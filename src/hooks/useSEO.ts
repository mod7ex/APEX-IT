import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  lang?: string;
}

export function useSEO({ title, description }: SEOProps = {}) {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || 'fr';

  useEffect(() => {
    // Determine dynamic title and description
    const baseTitle = "APEX-IT Solutions";
    const localizedSubtitle = currentLang === 'fr' 
      ? "Infrastructures Intelligentes, Sécurité & Logiciels" 
      : "Smart Infrastructure, Security & Software";

    const finalTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | ${localizedSubtitle}`;
    const finalDescription = description || t('hero.tagline');

    // Update title
    document.title = finalTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', finalDescription);

    // Update html lang attribute
    document.documentElement.lang = currentLang;

    // Update OpenGraph tag titles & desc
    const ogTags = [
      { property: 'og:title', content: finalTitle },
      { property: 'og:description', content: finalDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: baseTitle },
      { property: 'og:locale', content: currentLang === 'fr' ? 'fr_FR' : 'en_US' }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

  }, [title, description, currentLang, t]);
}
