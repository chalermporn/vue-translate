<script setup lang="ts">
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router';

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();

// Watch for route changes to update the language
watch(
  () => route.params.lang,
  (newLang) => {
    if (newLang) {
      locale.value = newLang as string;
    }
  },
  { immediate: true }
);

// Change language and route
const changeLanguage = (lang: string) => {
  const currentPath = route.fullPath.replace(`/${route.params.lang}`, '');
  router.push(`/${lang}${currentPath}`);
};

</script>

<template>
  <div>
    <nav>
      <RouterLink :to="`/${locale}/`">Home</RouterLink>
      <RouterLink :to="`/${locale}/about`">About</RouterLink>
    </nav>
    <div>
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('th')">Thai</button>
    </div>
    <RouterView />
  </div>
</template>
