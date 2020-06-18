import Clipboard from "clipboard";
import { Message } from "element-ui";

const clipboardSuccess = () => {
  Message({
    message: "复制成功",
    type: "success",
    duration: 1500
  });
};

const clipboardError = () => {
  Message({
    message: "复功失败",
    type: "fail",
    duration: 1500
  });
};

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  });

  clipboard.on("success", () => {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    clipboardError();
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
