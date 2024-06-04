<script lang="ts" setup>
import ScorecardsSvg from "assets/icons/scorecards-svg.vue";
import DashboardSvg from "assets/icons/dashboard-svg.vue";
import AnalyticsSvg from "assets/icons/analytics-svg.vue";
import CustomersSvg from "assets/icons/workflow-svg.vue";
import SettingsSvg from "assets/icons/settings-svg.vue";
import TableSvg from "assets/icons/table-svg.vue";
import ExperimentalSvg from "assets/icons/experimental.vue";
</script>

<template>
    <div class="bg-sidebar text-white p-4 flex-col justify-between hidden md:flex">
      <nav class="space-y-2 mt-1">
        <d-input-ref-button :to="'/dashboard'" name="Dashboard">
          <dashboard-svg/>
        </d-input-ref-button>
        <d-input-ref-button :to="'/analytics'" name="Analytics">
          <analytics-svg/>
        </d-input-ref-button>
        <d-input-ref-button :to="'/scorecards'" name="Scorecards">
          <table-svg/>
        </d-input-ref-button>
        <d-input-ref-button :to="'/workflow'" name="Workflow">
          <scorecards-svg/>
        </d-input-ref-button>
        <d-input-ref-button :to="'/experimental'" name="Experimental">
          <experimental-svg/>
        </d-input-ref-button>
        </nav>
      <nav class="space-y-4">
        <d-input-ref-button :to="'/settings'" name="Settings">
          <settings-svg/>
        </d-input-ref-button>
        <d-input-ref-button :to="'/contact'" name="Contact">
          <customers-svg/>
        </d-input-ref-button>
      </nav>
    </div>
</template>

<style scoped>

</style>
