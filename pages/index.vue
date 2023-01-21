<script lang="ts" setup>
definePageMeta({
  layout: "construction",
});
</script>

<template>
  <section>
    <h1 class="text-primary text-5xl lg:text-7xl mb-12 md:mb-24 lg:mb-28">
      Website is <br />
      <span class="uppercase">UNDER CONSTRUCTION</span>
    </h1>
    <div
      class="grid grid-cols-1 md:mb-16 lg:mb-24 xl:grid-cols-2 xl:gap-20 xl:mb-32"
    >
      <div id="text-col">
        <p class="tracking-wide text-2xl md:text-3xl md:mb-24">
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
      <div id="image-col " class="grid grid-flow-col">
        <div
          class="row-start-1 row-span-6 col-span-2 justify-self-end self-start"
        >
          <img
            src="/img/UC_Image.svg"
            alt="construction sign"
            class="w-32 md:w-64 lg:w-80 xl:w-96"
          />
        </div>
        <div class="col-span-2"></div>
        <div
          class="row-start-3 row-span-3 col-span-2 justify-self-start self-end"
        >
          <img
            src="/img/Pink-cone.svg"
            alt="construction cone"
            class="w-20 md:w-32 lg:w-44 xl:w-56"
          />
        </div>
        <div class=""></div>
      </div>
    </div>
  </section>
  <section class="max-w-6xl">
    <p class="tracking-wide text-2xl py-3 md:py-8 lg:py-12">
      If you would like to hear about upcoming offers, services and new
      products, please consider subscribing to my mailing list. No spam ever,
      just info!
    </p>
    <form @submit.prevent>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-4">
        <input
          type="text"
          placeholder="First"
          class="p-3 rounded-full text-xl"
        />
        <input
          type="text"
          placeholder="Last"
          class="p-3 rounded-full text-xl"
        />
        <input
          type="email"
          placeholder="Email"
          class="p-3 rounded-full text-xl"
        />
        <button
          class="rounded-full px-12 py-3 bg-gradient-to-r from-[#ff64cf] to-[#FEBC94] text-2xl text-white"
        >
          Subscribe
        </button>
      </div>
    </form>
    <p class="text-sm text-primary">
      By submitting your info you are giving me permission to store your data
      for the purpose of sending discount codes or news about new products and
      services and upcoming offers to your inbox. Your data will never be sold
      or given to a third party. You can request to unsubscribe by emailing me
      with the subject: Unsubscribe.
    </p>
  </section>
</template>
