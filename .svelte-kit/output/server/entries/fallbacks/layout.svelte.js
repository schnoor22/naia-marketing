import { _ as slot } from "../../chunks/index.js";
function Layout($$renderer, $$props) {
  $$renderer.push(`<!--[-->`);
  slot($$renderer, $$props, "default", {}, null);
  $$renderer.push(`<!--]-->`);
}
export {
  Layout as default
};
