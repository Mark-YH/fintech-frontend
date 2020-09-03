<template>
  <b-container fluid="lg">
    <div class="row justify-content-center align-items-center">
      <b-row align-h="center">
        <b-col md="5" class="mt-2 row" align-self="center">
          <ParamForm/>
        </b-col>
        <b-col md="7">
          <StockChart/>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import ParamForm from "@/components/ParamForm/RecommendForm";
import StockChart from "@/components/StockChart";

export default {
  name: "Recommendation",
  components: {
    ParamForm,
    StockChart,
  }
}
</script>

<style scoped>

</style>