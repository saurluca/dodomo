<script lang="ts" setup>
</script>

<template>
  <div class="flex-1 min-h-full bg-background">
    <div class="p-8 flex-1">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-bold">Settings</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="rounded-lg bg-card border text-card-foreground shadow-sm flex flex-col justify-between" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">General</h3>
          </div>
          <div class="p-12">
            <div class="grid gap-4">
              <div class="grid grid-cols-2 items-center gap-4">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="company-name"
                >
                  Company Name
                </label>
                <input
                    id="company-name"
                    class="flex h-10 w-full rounded-md border border-input bg-textfield
                     px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value="Schnecki"
                />
              </div>
              <div class="grid grid-cols-2 items-center gap-4">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="email"
                >
                  Email
                </label>
                <input
                    id="email"
                    class="flex h-10 w-full rounded-md border border-input bg-textfield
                     px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value="info@schnecki.com"
                />
              </div>
              <div class="grid grid-cols-2 items-center gap-4">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="phone"
                >
                  Phone
                </label>
                <input
                    id="phone"
                    class="flex h-10 w-full rounded-md border border-input bg-textfield
                     px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value="+49 123 456 789"
                />
              </div>
              <div class="grid grid-cols-2 items-center gap-4">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="address"
                >
                  Address
                </label>
                <textarea
                    id="address"
                    class="flex min-h-[80px] w-full rounded-md border border-input bg-textfield
                     px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
              </textarea>
              </div>
            </div>
          </div>
          <d-input-save-button>
              Save Changes
          </d-input-save-button>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Security</h3>
          </div>
          <div class="p-6">
            <div class="grid gap-4">
              <div class="grid grid-cols-2 items-center gap-4">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="password"
                >
                  Password
                </label>
                <input
                    id="password"
                    class="flex h-10 w-full rounded-md border border-input bg-textfield
                     px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    value="********"
                />
              </div>
              <div class="grid grid-cols-2 items-center gap-4">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="two-factor"
                >
                  Two-Factor Authentication
                </label>
                <button
                    id="two-factor"
                    aria-checked="false"
                    class="inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                    data-state="unchecked"
                    role="switch"
                    type="button"
                    value="on"
                >
                <span
                    class="pointer-events-none block h-5 w-5 rounded-full bg-textfield
                     shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                    data-state="unchecked"
                ></span>
                </button>
                <input
                    aria-hidden="true"
                    style="transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0"
                    tabindex="-1"
                    type="checkbox"
                    value="on"
                />
              </div>
              <div class="grid grid-cols-2 items-center gap-4">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="session-timeout"
                >
                  Session Timeout
                </label>
                <input
                    id="session-timeout"
                    class="flex h-10 w-full rounded-md border border-input bg-textfield
                     px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    value="30"
                />
              </div>
            </div>
          </div>
          <d-input-save-button>
            Save Changes
          </d-input-save-button>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Integrations</h3>
          </div>
          <div class="p-6">
            <div class="grid gap-4">
              <div class="grid grid-cols-2 items-center gap-4">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="google-analytics"
                >
                  Google Analytics
                </label>
                <input
                    id="google-analytics"
                    class="flex h-10 w-full rounded-md border border-input bg-textfield
                     px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value="UA-123456789-1"
                />
              </div>
              <div class="grid grid-cols-2 items-center gap-4">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="facebook-pixel"
                >
                  Facebook Pixel
                </label>
                <input
                    id="facebook-pixel"
                    class="flex h-10 w-full rounded-md border border-input bg-textfield
                     px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value="12345678"
                />
              </div>
              <div class="grid grid-cols-2 items-center gap-4">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="stripe-key"
                >
                  Stripe Key
                </label>
                <input
                    id="stripe-key"
                    class="flex h-10 w-full rounded-md border border-input bg-textfield
                     px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value="sk_live_12345678"
                />
              </div>
            </div>
          </div>
          <d-input-save-button>
            Save Changes
          </d-input-save-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
