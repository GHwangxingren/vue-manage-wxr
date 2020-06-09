import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import steps from "@/utils/defineSteps"; //用来存放引导的步骤

export default {
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver({
      animate: true,                    // Whether to animate or not
      opacity: 0.75,                    // Background opacity (0 means only popovers and without overlay)
      padding: 10,                      // Distance of element from around the edges
      allowClose: true,                 // Whether the click on overlay should close or not
      overlayClickNext: false,          // Whether the click on overlay should move next
      doneBtnText: '完成',              // Text on the final button
      closeBtnText: '关闭',            // Text on the close button for this step
      stageBackground: '#9900FF',       // Background color for the staged behind highlighted element
      nextBtnText: '下一步',              // Next button text for this step
      prevBtnText: '上一步',          // Previous button text for this step
      showButtons: true,               // Do not show control buttons in footer
      keyboardControl: true,            // Allow controlling through keyboard (escape to close, arrow keys to move)
      scrollIntoViewOptions: {},        // We use `scrollIntoView()` when possible, pass here the options for it if you want any
    })
  },
  methods: {
    startDriver() {
      this.driver.defineSteps(steps);
      this.driver.start();
    }
  }
}