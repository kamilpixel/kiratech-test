<template>
  <div>
    <NavbarSection />
    <ProfileSection />
    <div class="container">
      <section class="mb-5">
        <p class="text-gray-400">Filter by Gender</p>

        <div class="mt-4 space-y-4 text-gray-600">
          <div class="flex">
            <div class="flex items-center mr-4 cursor-pointer">
              <input
                id="radio1"
                type="radio"
                class="form-radio text-teal-950"
                value="all"
                v-model="filter.gender"
                :disabled="isLoading"
              />
              <label
                for="radio1"
                class="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
              >
                All
              </label>
            </div>
            <div class="flex items-center mr-4">
              <input
                id="radio2"
                type="radio"
                class="form-radio text-teal-950 cursor-pointer"
                value="male"
                v-model="filter.gender"
                :disabled="isLoading"
              />
              <label
                for="radio2"
                class="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
              >
                Male
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="radio3"
                type="radio"
                class="form-radio text-teal-950 cursor-pointer"
                value="female"
                v-model="filter.gender"
                :disabled="isLoading"
              />
              <label
                for="radio3"
                class="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
              >
                Female
              </label>
            </div>
          </div>
        </div>
      </section>

      <section>
        <!-- loading skeleton -->
        <div v-if="isLoading">
          <TableRowSkeleton />
        </div>
        <!-- display list -->
        <div v-else>
          <div class="overflow-auto lg:overflow-visible w-full">
            <table class="table border-separate w-full custom-table">
              <thead class="text-gray-400">
                <tr>
                  <th class="p-3 text-left font-medium">Date</th>
                  <th class="p-3 text-left font-medium">Name</th>
                  <th class="p-3 text-left font-medium">Gender</th>
                  <th class="p-3 text-left font-medium">Country</th>
                  <th class="p-3 text-right font-medium">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-gray-600 shadow"
                  v-for="(user, index) in userList"
                  :key="index"
                  @click="onClickList(user)"
                >
                  <td class="p-3">{{ formatDate(user.registered.date) }}</td>
                  <td class="p-3 font-medium">
                    <p class="user-name">
                      {{ `${user.name.first} ${user.name.last}` }}
                    </p>
                  </td>
                  <td class="p-3">{{ user.gender }}</td>
                  <td class="p-3">{{ user.location.country }}</td>
                  <td class="p-3 text-right">{{ user.email }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- bottom navigation -->
        <div class="flex justify-center pt-5 pb-11">
          <!-- button refresh -->
          <button
            type="button"
            class="group relative flex justify-center rounded-md border border-transparent bg-teal-400 hover:bg-teal-600 py-2 px-4 text-sm font-medium text-white focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 mr-2"
            @click="onClickRefresh"
            :disabled="isLoading"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <ArrowPathIcon class="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <span class="pl-5">Refresh</span>
          </button>
          <!-- button prev -->
          <button
            type="button"
            class="rounded-md border border-transparent bg-teal-400 hover:bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 mr-2"
            @click="onClickPrev"
            :disabled="isLoading"
          >
            Previous
          </button>
          <!-- button next -->
          <button
            type="button"
            class="rounded-md border border-transparent bg-teal-400 hover:bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            @click="onClickNext"
            :disabled="isLoading"
          >
            Next
          </button>
        </div>
      </section>
    </div>
    <!-- popup -->
    <TransitionRoot as="template" :show="openModal">
      <Dialog as="div" class="relative z-10" @close="openModal = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg"
              >
                <div class="p-7">
                  <div class="flex justify-between">
                    <p class="text-2xl font-bold mb-3">
                      {{ modalDetails.fullName }}
                    </p>
                    <button type="button" class="" @click="openModal = false">
                      <XMarkIcon
                        class="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div>
                    <table class="border-separate border-spacing-y-2">
                      <tbody>
                        <tr>
                          <td class="text-gray-400">Date</td>
                          <td>{{ formatDate(modalDetails.date) }}</td>
                        </tr>
                        <tr>
                          <td class="text-gray-400">Status</td>
                          <td>Inactive</td>
                        </tr>
                        <tr>
                          <td class="text-gray-400">Gender</td>
                          <td>{{ modalDetails.gender }}</td>
                        </tr>
                        <tr>
                          <td class="text-gray-400 pr-2">Country</td>
                          <td>{{ modalDetails.country }}</td>
                        </tr>
                        <tr>
                          <td class="text-gray-400">Email</td>
                          <td>{{ modalDetails.email }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch } from 'vue';
import { useUserStore } from '@/stores/user';
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { XMarkIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';
import NavbarSection from '@/components/NavbarSection.vue';
import ProfileSection from '@/components/ProfileSection.vue';
import TableRowSkeleton from '@/components/TableRowSkeleton.vue';
import { inject } from 'vue';

const $dayjs: any = inject('dayjs');
const user = useUserStore();
const userList:any = ref([]);
const isLoading = ref(false);
const currentPage = ref(1);
const filter = reactive({
  gender: 'all',
});

const fetchUser = async () => {
  isLoading.value = true;
  const result = await user.getUser(currentPage.value, filter.gender);
  userList.value = result.data.results;
  isLoading.value = false;
};

const onClickRefresh = () => {
  filter.gender = 'all';
  currentPage.value = 1;
  fetchUser();
};

const onClickPrev = () => {
  currentPage.value--;
  if (currentPage.value === 0) {
    currentPage.value = 1;
  }
  fetchUser();
};

const onClickNext = () => {
  currentPage.value++;
  fetchUser();
};

const openModal = ref(false);
type List = {
  name: any;
  gender: any;
  registered: any;
  location: any;
  email: any;
};
const modalDetails = reactive<{
  fullName: string;
  gender: string;
  date: Date;
  country: string;
  email: string;
}>({
  fullName: '',
  gender: '',
  date: new Date(),
  country: '',
  email: '',
});

const onClickList = (list: List) => {
  modalDetails.fullName = `${list.name.first} ${list.name.last}`;
  modalDetails.date = new Date(list.registered.date);
  modalDetails.gender = list.gender;
  modalDetails.country = list.location.country;
  modalDetails.email = list.email;
  openModal.value = true;
};

const formatDate = (date: Date) => {
  return $dayjs(date).format('DD MMM YYYY');
};

onMounted(() => {
  fetchUser();
});

watch(filter, () => {
  currentPage.value = 1;
  fetchUser();
});
</script>

<style lang="scss" scoped>
$gray-color: theme('colors.gray.200');
$prime-color: theme('colors.teal.400');
.custom-table {
  border-spacing: 0 1em;

  tr {
    border-radius: 0.5em;
    cursor: pointer;

    td {
      border: 1px solid $gray-color;
      border-right: none;
      border-left: none;
      padding: 1em 0 1em 0;
    }

    td:first-child {
      border-right: none;
      padding-left: 1em;
      border-left: 1px solid $gray-color;
    }

    td:last-child {
      border-left: none;
      padding-right: 1em;
      border-right: 1px solid $gray-color;
    }
  }

  tr:hover {
    .user-name {
      color: $prime-color;
    }

    td {
      border: 1px solid $prime-color;
      border-right: none;
      border-left: none;
    }

    td:first-child {
      border-left: 1px solid $prime-color;
    }

    td:last-child {
      border-right: 1px solid $prime-color;
    }
  }

  tr td:last-child,
  tr th:last-child {
    border-radius: 0 0.5em 0.5em 0;
  }

  tr td:first-child,
  tr th:first-child {
    border-radius: 0.5em 0 0 0.5em;
  }
}
</style>
