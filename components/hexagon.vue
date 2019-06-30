<template>
  <svg
    class="hexagon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 447.9 502.33"
    :style="{ height: `${height}px` }"
    :height="height"
  >
    <title>Asset 1</title>
    <g>
      <g>
        <path
          class="path"
          stroke="#d3810f"
          stroke-width="10"
          stroke-miterlimit="0"
          fill="transparent"
          d="M447.89,365.69l-4-84.42-6.34-134-1.46-30.9a2.12,2.12,0,0,0-1.05-1.83l-75.54-39-120-61.92L221.67,4.43C219.09,3.1,216.25,1,213.46.2c-2.25-.68-3.4.53-5.27,1.73l-12.67,8.14L87.26,79.6c-28.26,18.14-56.72,36-84.8,54.45-.47.31-.94.6-1.41.9a2.18,2.18,0,0,0-1,1.84L2.47,189l5,105.53L11.36,377c.14,3-.77,9,1.79,11.08,1.48,1.19,3.75,1.93,5.44,2.8l11.18,5.78,82,42.32,90.34,46.61,27.09,14c3,1.53,5.58,3.88,8.7,2.09,18.75-10.79,36.63-23.53,54.83-35.22l90.08-57.84,60.89-39.11,3.11-2c2.3-1.48.17-5.16-2.15-3.67l-71.11,45.67L260.69,482l-26,16.71h2.14L161.7,460,42.48,398.46,15,384.28l1.06,1.84-4-84.43-6.34-134L4.25,136.79l-1,1.83L74.32,93,187.21,20.46l26-16.71h-2.15L286.19,42.5,405.42,104,432.9,118.2l-1-1.84,4,84.43,6.34,134,1.46,30.89C443.77,368.42,448,368.43,447.89,365.69Z"
        />
      </g>
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: '200'
    }
  }
}
</script>

<style lang="scss" scoped>
.hexagon {
  position: absolute;
}
.path {
  stroke-dasharray: 300;
  animation: dash 30s linear infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 5000;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
