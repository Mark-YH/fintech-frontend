<template>
  <b-container fluid="lg">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="MA-param-form">
      <b-form-row class="mb-2">
        <b-col cols="12">
          <v-select :options="my_options" label="title" v-model="form.symbol">
            <template slot="option" slot-scope="option">
              <img :src="option.cardImage"/>
              {{ option.title }}
            </template>
          </v-select>
        </b-col>
      </b-form-row>
      <b-form-row class="mb-2">
        <b-col cols="6">
          訓練起始日期
        </b-col>
        <b-col cols="6">
          訓練截止日期
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="6">
          <b-form-datepicker
              id="training_start"
              v-model="form.start"
              class="mb-2"
              :state="date1State"
              required></b-form-datepicker>
        </b-col>
        <b-col cols="6">
          <b-form-datepicker
              id="training_end"
              v-model="form.end"
              class="mb-2"
              :state="date2State"
              required></b-form-datepicker>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="6">
          <b-button class="mb-2" type="submit" variant="secondary">Recommend</b-button>
        </b-col>
        <b-col cols="6">
          <b-button class="mb-2" type="reset" variant="danger">Reset</b-button>
        </b-col>
      </b-form-row>
    </b-form>
  </b-container>
</template>

<script>
import {mapActions} from 'vuex'
import axios from "axios";

export default {
  name: "RecommendForm",
  data() {
    return {
      form: {
        symbol: null,
        start: '', // first day of the training period
        end: '' // last day of the training period
      },
      show: true,
      my_options: []
    }
  }, mounted() {
    axios.get('http://127.0.0.1:8000/api/stock/list/').then((response) => {
      // axios.get('https://fintech-114.herokuapp.com/api/stock/list/').then((response) => {
      response.data['stock list'].forEach(it =>
          this.my_options.push({title: it, cardImage: '../../assets/logo.png'})
      )
    }).catch(function (error) {
      console.log(error);
    })
  },
  computed: {
    date1State() {
      if (this.form.start === '')
        return null

      const date1 = new Date(this.form.start)
      const date2 = new Date(this.form.end)
      if (date1.getDay() === 0 || date1.getDay() === 6 || date1.getTime() === date2.getTime())
        return false

      return true
    },
    date2State() {
      if (this.form.end === '')
        return null

      const date1 = new Date(this.form.start)
      const date2 = new Date(this.form.end)
      if (date2.getDay() === 0 || date2.getDay() === 6 || date1.getTime() === date2.getTime())
        return false

      return true
    }
  },
  updated() {
    this.$nextTick(() => {
      if (this.form.start !== '' && this.form.end !== '') {
        const date1 = new Date(this.form.start)
        const date2 = new Date(this.form.end)
        if (date1 > date2) {
          this.form.start = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate()
          this.form.end = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate()
        }
      }
    })
  },
  methods: {
    ...mapActions([
      'actionRecommendMA',
      'actionChartLoading'
    ]),
    onSubmit(evt) {
      evt.preventDefault()
      this.actionRecommendMA(this.form)
      this.actionChartLoading(true)
    }
    ,
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.start = ''
      this.form.end = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
