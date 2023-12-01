import App from "@/App.vue";
import { shallowMount } from "@vue/test-utils";

describe("App.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBeTruthy();
  });
});
