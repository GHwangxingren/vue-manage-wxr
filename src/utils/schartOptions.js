export const options1 = {
  type: "bar",
  title: {
    text: "最近一周各品类销售图"
  },
  xRorate: 25,
  labels: ["周一", "周二", "周三", "周四", "周五"],
  datasets: [
    {
      label: "家电",
      data: [234, 278, 270, 190, 230]
    },
    {
      label: "百货",
      data: [164, 178, 190, 135, 160]
    },
    {
      label: "食品",
      data: [144, 198, 150, 235, 120]
    }
  ]
};
export const options2 = {
  type: "line",
  title: {
    text: "最近几个月各品类销售趋势图"
  },
  labels: ["6月", "7月", "8月", "9月", "10月"],
  datasets: [
    {
      label: "家电",
      data: [234, 278, 270, 190, 230]
    },
    {
      label: "百货",
      data: [164, 178, 150, 135, 160]
    },
    {
      label: "食品",
      data: [74, 118, 200, 235, 90]
    }
  ]
};
