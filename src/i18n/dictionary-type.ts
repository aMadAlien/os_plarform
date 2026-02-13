export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    courses: string;
    aboutUs: string;
    wantToEarn: string;
    learningFromPractitioners: string;
    selectTraining: string;
  };
  hero: {
    forBeginners: string;
    onlineIncome: string;
    title: string;
    subtitlePrefix: string;
    subtitleAmount: string;
    chooseCourse: string;
    freeConsultation: string;
    features: { title: string; icon: string }[];
    startedFromZero: string;
  };
  courses: {
    sectionTitle: string;
    sectionSubtitle: string;
    detailsButton: string;
    cantDecide: string;
    takeTest: string;
    categories: { id: string; title: string }[];
    items: {
      id: string;
      title: string;
      description: string;
      tags: string[];
      video?: string;
      img?: string;
    }[];
  };
  explaner: {
    sectionTitle: string;
    selectTraining: string;
    items: {
      titleParts: string[];
      descriptionParts: string[];
      image: string;
    }[];
  };
  studyWays: {
    sectionTitle: string;
    tabs: {
      id: string;
      category: string;
      title: string;
      descriptionParts: string[];
      img?: string;
      video?: string;
    }[];
    cards: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  team: {
    sectionTitle: string;
    subtitle: string;
    videoText: string;
    learnMore: string;
  };
  reviews: {
    label: string;
    title: string;
  };
  form: {
    title: string;
    description: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    telegramPlaceholder: string;
    agreeWith: string;
    offer: string;
    and: string;
    privacyPolicy: string;
    submit: string;
  };
  warranty: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  slogan: {
    line1: string;
    line2: string;
    button: string;
  };
  faq: { title: string; text: string }[];
  formModal: {
    contactUs: string;
    needMoreInfo: string;
    benefits: string[];
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    telegramLabel: string;
    telegramPlaceholder: string;
    submitButton: string;
    disclaimerPrefix: string;
    termsOfUse: string;
    privacyPolicy: string;
    cookiePolicy: string;
    and: string;
  };
  phoneInput: {
    searchCountry: string;
    nothingFound: string;
  };
  footer: {
    coursesTitle: string;
    payCourse: string;
    contactsTitle: string;
    instagramText: string;
    navigation: {
      title: string;
      list: { title: string; to: string }[];
    }[];
  };
  languageSwitcher: {
    uk: string;
    en: string;
  };
  validation: {
    required: string;
    invalidPhone: string;
  };
  error: {
    title: string;
    tryAgain: string;
  };
  notFound: {
    title: string;
    message: string;
  };
}
