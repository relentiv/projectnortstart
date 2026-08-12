import { u as uiStore } from "./router-CPP24NZe.mjs";
function showToast(message, variant = "info") {
  uiStore.pushToast({ message, variant });
}
export {
  showToast as s
};
