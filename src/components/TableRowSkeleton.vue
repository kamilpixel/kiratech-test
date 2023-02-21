<template>
  <div
    class="shadow mb-5 rounded p-4 border-2"
    v-for="(item, index) in [1, 2, 3, 4, 5]"
    :key="index"
  >
    <div class="animate-pulse flex space-x-4">
      <div class="flex-1 space-y-6 py-1">
        <div class="">
          <div class="grid grid-cols-5 gap-4">
            <div class="h-2 bg-slate-200 rounded"></div>
            <div class="h-2 bg-slate-200 rounded"></div>
            <div class="h-2 bg-slate-200 rounded"></div>
            <div class="h-2 bg-slate-200 rounded"></div>
            <div class="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
