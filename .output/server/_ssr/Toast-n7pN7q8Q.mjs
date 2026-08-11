import { u as uiStore } from "./router-LFebWAoY.mjs";
function showToast(message, variant = "info") {
  uiStore.pushToast({ message, variant });
}
export {
  showToast as s
};
