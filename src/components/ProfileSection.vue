<template>
  <div class="profile-wrapper pb-7">
    <div class="full-bg"></div>
    <div class="container pt-10">
      <div class="w-full lg:w-9/12 2xl:w-6/12">
        <div class="grid grid-cols-3 md:gap-3 md:grid-cols-[154px_180px_1fr]">
          <!-- profile image -->
          <div class="col-span-3 md:col-span-1 position-relative">
            <div class="flex justify-center md:justify-start">
              <img src="/images/avatar.png" class="img-avatar" />
            </div>
          </div>
          <!-- profile name & last login -->
          <div
            class="col-span-3 text-center md:text-left mt-2 md:mt-0 md:col-span-1 pt-0 md:pt-7 text-gray-700 md:text-white"
          >
            <p class="text-2xl font-bold">John Doe</p>
            <p>Last online: 2 Days ago</p>
          </div>
          <!-- profile buttons -->
          <div class="col-span-3 mt-2 md:mt-0 md:col-span-1 pt-0 md:pt-8">
            <div class="flex align-middle">
              <!-- button send message -->
              <button
                type="button"
                class="w-1/2 group relative flex justify-center rounded-md border border-transparent bg-teal-950 md:bg-white hover:md:bg-teal-950 py-2 px-4 text-sm font-medium text-white md:text-teal-950 hover:md:text-white focus:ring-2 focus:ring-teal-950 focus:ring-offset-2 mr-2 hover:md:border-white"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <PaperAirplaneIcon
                    class="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>
                <span class="pl-5">Send Message</span>
              </button>

              <!-- button add friend -->
              <button
                type="button"
                class="w-1/2 group relative flex justify-center rounded-md border border-teal-950 md:border-white hover:bg-teal-950 md:hover:bg-white py-2 px-4 text-sm font-medium text-teal-950 hover:text-teal-950 md:text-white focus:ring-2 focus:ring-teal-950 focus:ring-offset-2"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <PlusIcon
                    class="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>
                <span class="pl-5">Add Friend</span>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PlusIcon, PaperAirplaneIcon } from '@heroicons/vue/24/solid';
</script>

<style lang="scss" scoped>
.profile-wrapper {
  position: relative;
  .full-bg {
    position: absolute;
    width: 100%;
    height: 154px;
    background-color: theme('colors.teal.950');
    z-index: -1;
  }
  .img-avatar {
    height: auto;
    width: 148px;
  }
}
</style>
