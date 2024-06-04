<script lang="ts" setup>

</script>

<template>
  <div class="flex-1 items-center justify-center h-full bg-background ">
    <div class="px-10 md:px-6 pt-6 mx-auto max-w-4xl">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm " data-v0-t="card">
        <div class="p-6"><h2 class="text-3xl font-semibold">Contact Us</h2>
          <div class="space-y-8">
            <div class="space-y-2">
              <p class="text-zinc-500 dark:text-zinc-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="first-name"
                  >
                    First name
                  </label>
                  <input
                      id="first-name"
                      class="flex h-10 w-full rounded-md border border-input bg-textfield px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your first name"
                  />
                </div>
                <div class="space-y-2">
                  <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="last-name"
                  >
                    Last name
                  </label>
                  <input
                      id="last-name"
                      class="flex h-10 w-full rounded-md border border-input bg-textfield px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="email"
                >
                  Email
                </label>
                <input
                    id="email"
                    class="flex h-10 w-full rounded-md border border-input bg-textfield px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Pronoun
                </label>
                <button
                    aria-autocomplete="none"
                    aria-controls="radix-:R2eulafnnja:"
                    aria-expanded="false"
                    aria-label="Pronoun"
                    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-textfield px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    data-placeholder=""
                    data-state="closed"
                    dir="ltr"
                    role="combobox"
                    type="button"
                >
                  <span style="pointer-events:none">Select your pronoun</span>
                  <svg
                      aria-hidden="true"
                      class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                <select
                    aria-hidden="true"
                    style="position:absolute;border:0;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;word-wrap:normal"
                    tabindex="-1"
                >
                  <option value=""></option>
                </select>
              </div>
              <div class="space-y-2">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="message"
                >
                  Message
                </label>
                <textarea
                    id="message"
                    class="flex w-full rounded-md border border-input bg-textfield px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                    placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-button text-white"
                  type="submit"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-container {
  width: 50%;
}
</style>
