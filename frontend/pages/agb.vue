<script lang="ts" setup>
definePageMeta({
  layout: 'none'
})
</script>

<template>
  <section class="py-12 justify-between bg-background">
    <div class=" px-4 md:px-6 justify-between flex-1 h-full w-full mx-auto max-w-3xl bg-background">
      <div class="prose prose-stone space-y-6 bg-background">
        <h1 class="text-2xl font-bold underline">
          Terms and Conditions
        </h1>
        <p>
          Welcome to our Bakery Data Analysis service. By accessing or using our service, you agree to be bound by these terms and conditions and our
          privacy policy.
        </p>
        <h2 class="text-xl font-bold">
          1. Introduction
        </h2>
        <p>
          These terms and conditions govern your use of our Bakery Data Analysis service. By accessing or using our service, you agree to be bound by
          these terms and conditions. If you do not agree to these terms and conditions, you should not use our service.</p>
        <h2 class="text-xl font-bold">
          2. Service Description</h2>
        <p>Our Bakery Data Analysis service provides bakeries with data-driven insights to help them make informed decisions, optimize
          operations, and drive growth. We analyze sales data, customer information, and other relevant metrics to provide our clients with actionable
          insights.</p>
        <h2 class="text-xl font-bold">
          3. User Responsibilities
        </h2>
        <p>
          As a user of our service, you are responsible for providing accurate and up-to-date information about your bakery. You also agree to use our
          service in a manner that does not violate any applicable laws or regulations.</p>
        <h2 class="text-xl font-bold">
          4. Intellectual Property</h2>
        <p>All content and materials on our service, including but not limited to text, graphics, logos, and software, are the property
          of our company or our licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
        <h2 class="text-xl font-bold">
          5. Limitation of Liability
        </h2>
        <p>
          We will not be liable for any indirect, special, incidental, or consequential damages arising out of or related to your use of our service.
          Our total liability to you for any claims related to our service will not exceed the amount you have paid us for the service.</p>
        <h2 class="text-xl font-bold">
          6. Termination</h2>
        <p>We reserve the right to terminate your access to our service at any time for any reason, including if we reasonably believe
          that you have violated these terms and conditions.
        </p>
        <h2 class="text-xl font-bold">
          7. Governing Law</h2>
        <p>These terms and conditions shall be governed by and construed in accordance with the laws of the state in which our company is
          headquartered.
        </p>
          <d-input-ref-button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors h-10 px-4 py-5 bg-button text-white" to="dashboard">
            Accept
          </d-input-ref-button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
