class ShadowDom extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    
    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'wrapper')

    const style = document.createElement('style')
    style.textContent = `
      .wrapper {
        width: 100px;
        height: 100px;
        background-color: blue;
      }
    `
    
    shadow.appendChild(style)
    shadow.appendChild(wrapper)
  }
}

customElements.define('shadow-dom', ShadowDom)