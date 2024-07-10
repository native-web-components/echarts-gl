import BaseComponent from "./BaseComponent";
import 'echarts'
import 'echarts-gl'
class WebComponent extends BaseComponent {
  constructor() {
    super();
  }
  render() {
    super.render();
    this.shadowRoot!.innerHTML = `<wc-echarts></wc-echarts>`;
  }
  getEchartsClass() {
    return (this.shadowRoot!.firstChild as any).getEchartsClass();
  }
  getEchartsInstance() {
    return (this.shadowRoot!.firstChild as any).getEchartsInstance();
  }
  getEchartsOptions() {
    return (this.shadowRoot!.firstChild as any).getEchartsOptions();
  }
  setOptions(options: any, notMerge?: boolean, lazyUpdate?: boolean) {
    return (this.shadowRoot!.firstChild as any).setOptions(options, notMerge, lazyUpdate);
  }
}

const define = (name: string, options?: ElementDefinitionOptions) => {
  customElements.define(name, WebComponent, options);
};

export { define };
export default WebComponent;
