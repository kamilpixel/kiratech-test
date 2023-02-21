<template>
  <div class="navbar-wrapper">
    <div class="container h-full">
      <div class="flex justify-between h-full">
        <!-- logo -->
        <div class="self-center">
          <img src="/images/logo.png" class="logo" />
        </div>
        <!-- menus desktop/mobile -->
        <div class="self-center">
          <div class="hidden md:inline-block">
            <button type="button">
              <BellIcon class="h-6 w-6 text-black mr-5" aria-hidden="true" />
            </button>
            <button type="button">
              <Cog6ToothIcon
                class="h-6 w-6 text-black mr-5"
                aria-hidden="true"
              />
            </button>
            <button type="button">
              <ArrowRightOnRectangleIcon
                class="h-6 w-6 text-black"
                aria-hidden="true"
              />
            </button>
          </div>
          <div class="md:hidden inline-block">
            <button type="button">
              <Bars3BottomRightIcon
                class="h-8 w-8 text-black"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  BellIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  Bars3BottomRightIcon,
} from '@heroicons/vue/24/outline';
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  width: 100%;
  height: 90px;
  .logo {
    width: 170px;
    height: auto;
  }
}
</style>
