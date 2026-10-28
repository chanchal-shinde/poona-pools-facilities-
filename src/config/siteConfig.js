
export const siteConfig = {
  // Business Branding
  organizationName: 'Poona Pools Facilities',
  tagline: 'Professional Swimming Pool Construction, Filtration & Maintenance Solutions',
  shortDescription: 'From custom swimming pool engineering and reinforced construction to filtration and routine maintenance, Poona Pools Facilities provides tailored solutions designed around your space.',

  // Leadership / Owner Information
  // (Easily editable owner information: name, designation, and experience)
  owner: {
    name: 'Sunil Shinde',
    designation: 'CEO',
    experience: '12+ Years'
  },
  establishedYear: '2017',

  // Contact Details
  contact: {
    // Phone number for clickable tel: links
    phone: '+91 99231 76194',
    displayPhone: '+91 99231 76194',

    // WhatsApp number (Digits only with country code, e.g., '919876543210')
    whatsapp: '919923176194',

    // Default prefilled message when a customer clicks WhatsApp
    whatsappPrefilledMessage: 'Hello Poona Pools Facilities, I am interested in your swimming pool services. Could you please share more details and arrange a consultation?',

    // Email address
    email: '[BUSINESS EMAIL]',

    // Physical business address
    address: '[BUSINESS ADDRESS]',
    cityState: 'Pune, Maharashtra, India',

    // Google Maps Embed URL
    // To set up your map: Go to Google Maps -> Search your business -> Click Share -> Embed a map -> Copy the 'src' URL inside the iframe
    googleMapsEmbedUrl: '', // Leave empty to display the clean location placeholder card
    locationSummary: 'Serving Pune, Pimpri-Chinchwad, and surrounding regions in Maharashtra.'
  },

  // Key Statistics (Displayed on Homepage & About Page)
  // Use clear placeholders until authentic figures are provided
  statistics: [
    {
      label: 'Years of Experience',
      value: '12+',
      suffix: '',
      description: 'Dedicated focus on swimming pool construction & technical maintenance'
    },
    {
      label: 'Projects Completed',
      value: '150+',
      suffix: '',
      description: 'Residential, luxury, and commercial pool installations'
    },
    {
      label: 'Services Offered',
      value: '10+',
      suffix: '',
      description: 'Comprehensive end-to-end swimming pool facility solutions'
    },
    {
      label: 'Customer Satisfaction',
      value: '100%',
      suffix: '',
      description: 'Committed to rigorous craftsmanship and long-term water safety'
    }
  ],

  // Core Company Mission, Vision, and Commitment
  missionVision: {
    mission: 'To construct and maintain superior swimming pool facilities with uncompromising structural integrity, energy-efficient filtration, and bespoke architectural aesthetics tailored to each client.',
    vision: 'To be the most trusted and technically proficient swimming pool engineering and maintenance organization in the region, recognized for transparent craftsmanship and exceptional client service.',
    commitment: 'We commit to using premium commercial-grade materials, precision waterproofing techniques, and prompt post-handover maintenance support so your swimming pool remains pristine, hygienic, and enjoyable for decades.'
  },

  // Why Choose Us Pillars
  whyChooseUs: [
    {
      title: 'Quality Workmanship',
      description: 'Engineered concrete shells, premium coping stones, and durable mosaic finishes built to withstand high water pressure and weather extremes.'
    },
    {
      title: 'Professional Service',
      description: 'Direct communication, transparent milestones, and professional execution from initial excavation to final water balancing.'
    },
    {
      title: 'Tailored Solutions',
      description: 'Custom dimensions, depths, and architectural pool layouts configured specifically to your land topography and lifestyle.'
    },
    {
      title: 'Attention to Detail',
      description: 'Meticulous plumbing, multi-stage filtration plumbing, leak-free waterproofing membranes, and polished aesthetic tiling.'
    },
    {
      title: 'Reliable Support',
      description: 'Dependable routine maintenance, chemical testing, equipment servicing, and prompt technical support whenever you need assistance.'
    }
  ]
};

/**
 * Helper to build valid WhatsApp click-to-chat URL
 * @param {string} customMessage Optional message override
 * @returns {string} Fully formed WhatsApp link
 */
export function getWhatsAppLink(customMessage) {
  const number = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  const message = encodeURIComponent(customMessage || siteConfig.contact.whatsappPrefilledMessage);

  // If the number is still a placeholder, provide a fallback alert link or direct wa.me
  if (!number || number.includes('[') || number.length < 5) {
    return `https://wa.me/?text=${message}`;
  }
  return `https://wa.me/${number}?text=${message}`;
}

/**
 * Helper to get clean telephone link
 * @returns {string} tel: link
 */
export function getPhoneLink() {
  const cleanPhone = siteConfig.contact.phone.replace(/[^0-9+]/g, '');
  if (!cleanPhone || cleanPhone.includes('[')) {
    return 'tel:';
  }
  return `tel:${cleanPhone}`;
}
