<script lang="ts" setup>
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} - PBS` : "Polished By Sam";
  },
});
const isOpen = ref(false);
function drawer() {
  isOpen.value = !isOpen.value;
}
watch(isOpen, function handler(isOpen) {
  if (process.client) {
    if (isOpen) document.body.style.setProperty("overflow", "hidden");
    else document.body.style.removeProperty("overflow");
  }
});
onMounted(() => {
  document.addEventListener("keydown", e => {
    if (e.key === "Enter" && isOpen.value) isOpen.value = !isOpen.value;
  });
});
</script>

<template>
  <div class="w-full min-h-full h-screen flex flex-col bg-secondary">
    <header class="mt-20 mx-10 lg:mx-40 lg:mt-20 lg:mb-40">
      <nav class="">
        <div class="flex items-top justify-between">
          <div>
            <!-- Header Logos -->
            <img src="/img/PBS.svg" alt="PBS" class="w-48 lg:w-64" />
            <img
              src="/img/POLISHED-BY-SAM.svg"
              alt="Polished By Sam"
              class="w-96 lg:w-2/3 mt-5 mb-20"
            />
          </div>
          <!-- Mobile Menu Button -->
          <div class="lg:hidden">
            <button @click="drawer">
              <font-awesome-icon
                :icon="['fas', 'bars']"
                class="text-primary w-16 h-16"
              />
            </button>
          </div>

          <!-- Navbar -->
          <div class="hidden lg:block font-poiret subpixel-antialiased">
            <ul class="flex space-x-8 text-3xl uppercase text-primary">
              <div class="flex items-center">
                <NuxtLink to="/" class="pb-2 hover:font-bold"> Home </NuxtLink>
              </div>
              <div class="flex items-center">
                <NuxtLink to="/about" class="hover:font-bold pb-2">
                  About
                </NuxtLink>
              </div>
              <div class="flex items-center">
                <NuxtLink
                  to="https://www.fresha.com/book-now/polished-by-sam-ggw4i4ty/all-offer?id=854408&pId=803345"
                  target="_blank"
                  rel="noopener"
                  class="hover:font-bold pb-2"
                >
                  Book
                </NuxtLink>
              </div>
            </ul>
          </div>
          <!-- Mobile Menu Transition background -->
          <transition
            enter-class="opacity-0"
            enter-active-class="ease-out transition-medium"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-active-class="ease-out transition-medium"
            leave-to-class="opacity-0"
          >
            <div
              @keydown.esc="isOpen = false"
              v-show="isOpen"
              class="z-10 fixed inset-0 transition-opacity"
            >
              <div
                @click="isOpen = false"
                class="absolute inset-0 bg-black opacity-50"
                tabindex="0"
              ></div>
            </div>
          </transition>
          <!-- Drawer Menu -->
          <aside
            class="p-5 transform top-0 right-0 left-0 w-80 bg-secondary fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
            :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
          >
            <div class="close">
              <button
                class="absolute top-0 right-0 mt-4 mr-4"
                @click="isOpen = false"
              >
                <font-awesome-icon
                  :icon="['fas', 'xmark']"
                  class="text-primary h-12 w12"
                />
              </button>
            </div>
            <span @click="isOpen = false" class="flex w-full items-center p-4">
              <div><img src="/img/PBS.svg" alt="PBS" class="w-48" /></div>
            </span>
            <ul
              class="divide-y divide-primary font-poiret subpixel-antialiased text-primary uppercase text-5xl mt-20"
            >
              <div class="flex items-center">
                <NuxtLink
                  to="/"
                  @click="isOpen = false"
                  class="my-4 inline-block"
                >
                  Home</NuxtLink
                >
              </div>

              <div class="flex items-center">
                <NuxtLink
                  to="/about"
                  @click="isOpen = false"
                  class="my-4 inline-block"
                >
                  About</NuxtLink
                >
              </div>
              <div class="flex items-center">
                <NuxtLink
                  to="https://www.fresha.com/book-now/polished-by-sam-ggw4i4ty/all-offer?id=854408&pId=803345"
                  target="_blank"
                  rel="noopener"
                  @click="isOpen = false"
                  class="my-4 inline-block"
                >
                  Book</NuxtLink
                >
              </div>
            </ul>
            <div class="follow mt-12">
              <p
                class="font-poiret subpixel-antialiased uppercase text-primary text-5xl"
              >
                follow us
              </p>
              <div class="social flex space-x-5 mt-4">
                <a href="#">
                  <font-awesome-icon
                    :icon="['fab', 'facebook']"
                    class="text-primary h-16 w-16"
                  />
                </a>
                <a href="#">
                  <font-awesome-icon
                    :icon="['fab', 'instagram']"
                    class="text-primary h-16 w-16"
                  />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </nav>
    </header>
    <main class="mb-auto flex flex-col">
      <slot />
    </main>
    <footer class="hidden bg-primary text-secondary">
      <div class="container mx-20">
        <div class="">
          <h3>WhatsApp:</h3>
        </div>
        <div class="">
          <h3>Book:</h3>
        </div>
      </div>
    </footer>
  </div>
</template>
