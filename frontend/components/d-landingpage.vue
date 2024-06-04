<script lang="ts" setup>

import BoxSvg from "assets/icons/box-svg.vue";
</script>

<template>
  <div class="h-full bg-sidebar">
    <header class="px-4 lg:px-6 h-14 flex items-center bg-header text-white ">
      <d-input-ref-button :to="'/dashboard'" class="text-2xl font-bold" name="Databites">
        <box-svg/>
      </d-input-ref-button>
      <nav class="ml-auto flex gap-4 sm:gap-6">
        <router-link class="text-sm font-medium hover:underline underline-offset-4" to="">
          Features
        </router-link>
        <router-link class="text-sm font-medium hover:underline underline-offset-4" to="">
          Pricing
        </router-link>
        <router-link class="text-sm font-medium hover:underline underline-offset-4" to="">
          About
        </router-link>
        <router-link class="text-sm font-medium hover:underline underline-offset-4" to="contact">
          Contact
        </router-link>
      </nav>
    </header>
    <section class="flex justify-center items-center py-60">
      <div class="container px-30 md:px-6">
        <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-8">
              <h1 class="text-3xl font-bold tracking-tighter text-[#F9F9F9] sm:text-5xl xl:text-6xl/none">
                Unlock the Power of Data for Your Bakery
              </h1>
              <p class="max-w-[600px] text-[#F0F0F0] md:text-xl">
                Our data analysis solutions help bakeries optimize their operations, reduce costs, and increase
                profitability. Get tailored insights to take your business to the next level.
              </p>
            </div>
            <div class="w-full max-w-sm space-y-2">
              <form class="flex space-x-2">
                <input
                    class="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1 bg-[#F9F9F9] text-[#333333] dark:bg-[#333333] dark:text-[#F9F9F9]"
                    placeholder="Enter your email"
                    type="email"
                />
                <router-link
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#00C48C] text-[#F9F9F9] hover:bg-[#00A375] dark:bg-[#00C48C] dark:text-[#1A1A1A] dark:hover:bg-[#00E6A8]"
                    to="dashboard"
                >
                  Get Started
                </router-link>
              </form>
              <p class="text-xs text-[#F0F0F0]">
                Sign up to get tailored data insights for your bakery.
                <router-link class="underline underline-offset-2" to="agb">
                  Terms and Conditions
                </router-link>
              </p>
            </div>
          </div>
          <div class="relative">
            <img
                alt="Bakery Data Analysis"
                class="mx-auto  overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="923"
                src="/public/landing.png"
                width="1442"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
