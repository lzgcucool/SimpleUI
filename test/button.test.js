const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在 Button', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'search'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#icon-search')
        vm.$destroy()
    })
    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'search',
                loading: true
            }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
        vm.$destroy()
    })
    it('可以设置type', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                type:'success'
            }
        }).$mount()
        const useElement = vm.$el
        expect(useElement.classList.contains('s-button--success')).to.be.true;
    })
    it('可以设置size',() => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                type:'mini'
            }
        }).$mount()
        const useElement = vm.$el
        expect(useElement.classList.contains('s-button--mini')).to.be.true;
    })
    it('icon 默认的 order 是 1', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    })
    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'search',
            }
        }).$mount()
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
    })
})
