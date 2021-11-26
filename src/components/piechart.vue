<template>
  <div class="dougnut chart-container" ref="chartdiv">{{ fir }}</div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
// import mainApi from '../apis/mainApi'
// import dashboardApi from '../../apis/dashboard/dashboard-api'
am4core.addLicense('CH1234567')
am4core.useTheme(am4themesAnimated)

export default {
  name: 'doughnut-chart',
  data () {
    return {
      chart: null,
      // fir: [
      //     {
      //         country: 'Service Member',
      //         litres: 3
      //     },
      //     {
      //         country: 'Command Staff',
      //         litres: 5
      //     },
      //     {
      //         country: 'Training Team',
      //         litres: 2
      //     }
      // ]
    }
  },
  props: {
    fir: {
      type: Array,
      default: () => []
    },
    legend: {
      type: String,
      default: () => 'circle',
      validator: val => ['square', 'circle'].includes(val)
    }
  },
  created() {
    //   this.countsGet()
  },
  methods: {
    //   countsGet() {
    //     mainApi.getCountsService().then((response) => {
    //         this.fir[0].country = 'Service Member'
    //         this.fir[0].litres = response.data.totalSize
    //     })
    //     mainApi.getCountsCommand().then((response) => {
    //         this.fir[1].country = 'Command Staff'
    //         this.fir[1].litres = response.data.totalSize
    //     })
    //     mainApi.getCountsTraining().then((response) => {
    //         this.fir[2].country = 'Training Team'
    //         this.fir[2].litres = response.data.totalSize
    //     })
    //   },
  },
  mounted () {
    // this.countsGet()
    const container = am4core.create(this.$refs.chartdiv, am4core.Container)
    container.width = am4core.percent(100)
    container.height = am4core.percent(100)
    container.layout = 'horizontal'

    // Create sub-containers
    const legendContainer = container.createChild(am4core.Container)
    legendContainer.layout = 'absolute' // Layout of legend container should be absolute so that legends can be centered using the legends align property
    legendContainer.width = am4core.percent(50)
    legendContainer.height = am4core.percent(100)

    const chart = container.createChild(am4charts.PieChart)
    chart.width = am4core.percent(50)
    chart.height = am4core.percent(100)
    chart.responsive.enabled = true
    this.chart = chart
    chart.data = this.fir
    // Legend
    chart.legend = new am4charts.Legend()
    chart.legend.position = 'left' // This is to keep each legend on its own line
    chart.legend.parent = legendContainer
    chart.legend.fontSize = 12
    chart.legend.labels.template.wrap = true
    chart.legend.labels.template.truncate = false
    chart.legend.labels.template.fill = am4core.color('rgba(255, 255, 255, 0.75)')
    chart.legend.valueLabels.template.fill = am4core.color('rgba(255, 255, 255, 0.75)')

    chart.legend.valign = 'middle'
    chart.legend.maxHeight = 100
    chart.legend.scrollable = true
    chart.legend.contentAlign = 'left'

    const marker = chart.legend.markers.template.children.getIndex(0)
    marker.cornerRadius(12, 12, 12, 12)
    marker.strokeWidth = 2
    marker.stroke = am4core.color('#ccc')
    // marker.strokeOpacity = 1

    const markerTemplate = chart.legend.markers.template
    markerTemplate.width = 10
    markerTemplate.height = 10

    // Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries())
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.propertyFields.fill = 'color'

    // to disable arrows
    pieSeries.labels.template.disabled = true
    pieSeries.ticks.template.disabled = true

    // to print values instead of percent
    pieSeries.legendSettings.valueText = '({value})'

    if (!this.isPie) {
    // Let's cut a hole in our Pie chart the size of 40% the radius
      chart.innerRadius = am4core.percent(50)
      // label in center
      const label = pieSeries.createChild(am4core.Label)
      label.text = '{values.value.sum}'
      label.horizontalCenter = 'middle'
      label.verticalCenter = 'middle'
      label.fontSize = 20
      label.fill = am4core.color('#3BAFDA')
    }

    function am4themesMyTheme (target) {
      if (target instanceof am4core.ColorSet) {
        target.list = [
          am4core.color('#6DF002'),
          am4core.color('#1AC9E6'),
          am4core.color('#1DE4BD'),
          am4core.color('#176BA0'),
          am4core.color('#142459')
          // am4core.color('#19AADE')
        ]
      }
    }

    am4core.useTheme(am4themesMyTheme)
  },

  beforeDestroy () {
    if (this.chart) {
      this.chart.dispose()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
