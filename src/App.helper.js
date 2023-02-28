export const getLocalizedSteps = localization => ([
  localization.accountInformation,
  localization.personalDetails,
  localization.payment,
  localization.complete,
]);

const RTL_LANGUAGES = ['ar'];

export const isRTL = language => RTL_LANGUAGES.includes(language);