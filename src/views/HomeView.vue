<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <main>
   <h1>Hi vue3</h1>
   <div> {{ t('message.hello') }}</div>
  </main>
</template>
