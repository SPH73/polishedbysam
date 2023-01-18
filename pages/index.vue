<script lang="ts" setup>
definePageMeta({
  layout: "construction",
});
</script>

<template>
  <section class="mx-10 lg:mx-40">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
      <div class="flex flex-col justify-evenly gap-y-8 lg:gap-y-16">
        <div>
          <h1 class="text-primary text-5xl lg:text-7xl">
            Website is <br />
            <span class="uppercase">UNDER CONSTRUCTION</span>
          </h1>
        </div>
        <div>
          <p class="tracking-wide text-3xl">
            My mobile nail service is still available; please contact me via
            FaceBook:
            <NuxtLink
              target="_blank"
              rel="noopener"
              to="https://www.facebook.com/profile.php?id=100089587508498"
            >
              <span class="font-bold cursor-pointer"
                >@polishedbysam
              </span></NuxtLink
            >
            or WhatsApp:
            <NuxtLink
              target="_blank"
              rel="noopener"
              to="https://api.whatsapp.com/send?phone=447379385222"
              ><span class="font-bold cursor-pointer"
                >07379 385222</span
              ></NuxtLink
            >
          </p>
        </div>
        <div>
          <p class="tracking-wide text-3xl">
            If you would like to hear about upcoming offers, services and new
            products, please consider subscribing to my mailing list. No spam
            ever, just info!
          </p>
        </div>
        <div>
          <button
            class="rounded-full px-16 py-4 bg-gradient-to-r from-[#ff64cf] to-[#FEBC94] text-3xl text-white"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div class="hidden lg:block relative mb-36">
        <img src="/img/UC_Image.svg" alt="" class="absolute left-1/3 h-5/6" />
        <img
          src="/img/Pink-cone.svg"
          alt=""
          class="absolute top-2/3 left-2/3 h-1/2"
        />
      </div>
      <div class="lg:hidden relative px-8">
        <img
          src="/img/UC_Image.svg"
          alt="construction sign"
          class="absolute top-10 left-24 w-52"
        />
        <img
          src="/img/Pink-cone.svg"
          alt="construction cone"
          class="absolute top-40 left-72 w-28"
        />
      </div>
    </div>
  </section>
</template>
