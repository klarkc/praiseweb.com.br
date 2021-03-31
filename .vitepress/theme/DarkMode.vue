<template>
    <div class="h-6 w-6 cursor-pointer" @click="toggleDark" role="checkbox" :aria-checked="isDark" aria-label="Modo escuro">
        <SunIcon v-if="isDark" />
        <MoonIcon v-else />
    </div>
</template>

<script setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/outline'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
