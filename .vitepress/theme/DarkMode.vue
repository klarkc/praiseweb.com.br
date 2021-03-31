<template>
  <div
    class="h-6 w-6 cursor-pointer"
    role="checkbox"
    :aria-checked="isDark"
    aria-label="Modo escuro"
    @click="toggleDark"
  >
    <SunIcon v-if="isDark" />
    <MoonIcon v-else />
  </div>
</template>

<script setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/outline';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
