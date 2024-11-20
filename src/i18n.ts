import { createI18n } from 'vue-i18n';

const messages = {
  en: { message: { hello: 'Hello' } },
  th: { message: { hello: 'สวัสดี' } },
};

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'en', // Default language
  fallbackLocale: 'en',
  messages,
});

export default i18n;
