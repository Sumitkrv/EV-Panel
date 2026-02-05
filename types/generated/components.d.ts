import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_sections';
  info: {
    description: 'A section for the about page with icon, title, description and image';
    displayName: 'About Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<['Target', 'Zap', 'Users', 'Award']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Target'>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactMethod extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_methods';
  info: {
    description: 'A contact method card with icon, title, and action';
    displayName: 'Contact Method';
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    detail: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      ['Mail', 'Phone', 'MessageCircle', 'MapPin']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Mail'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    description: 'Frequently asked question with answer';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    description: 'A USP feature with icon, title, description';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    gradient: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'from-emerald-500/20 to-teal-500/20'>;
    iconSvg: Schema.Attribute.Text;
    stat: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_items';
  info: {
    description: 'A gallery image with title and category';
    displayName: 'Gallery Item';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    color: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'from-blue-500/20 to-cyan-500/20'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_slides';
  info: {
    description: 'A hero carousel slide with image and product info';
    displayName: 'Hero Slide';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    specs: Schema.Attribute.JSON;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProductCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_products';
  info: {
    description: 'Product information for homepage showcase';
    displayName: 'Product Card';
  };
  attributes: {
    acceleration: Schema.Attribute.String & Schema.Attribute.Required;
    gradient: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'from-blue-500/20 to-cyan-500/20'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    range: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    tagline: Schema.Attribute.String & Schema.Attribute.Required;
    topSpeed: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-section': SharedAboutSection;
      'shared.contact-method': SharedContactMethod;
      'shared.faq-item': SharedFaqItem;
      'shared.feature': SharedFeature;
      'shared.gallery-item': SharedGalleryItem;
      'shared.hero-slide': SharedHeroSlide;
      'shared.media': SharedMedia;
      'shared.product-card': SharedProductCard;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
