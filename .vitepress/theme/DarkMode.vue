<template>
    <div class="h-5 w-5 cursor-pointer" @click="toggleDark">
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
