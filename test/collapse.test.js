import Tabs from "../src/tabs";

const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在 Collapse', () => {
        expect(Collapse).to.be.ok
    })
    describe('props',() => {
        it('selected',() => {
            const div = document.createElement('div')
            div.innerHTML = `
            <s-collapse selected="1">
                <s-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                </s-collapse-item>
                <s-collapse-item title="反馈 Feedback" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                </s-collapse-item>
                <s-collapse-item title="效率 Efficiency" name="3">
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                </s-collapse-item>
            </s-collapse>
            `
            const vm = new Vue({
                el: div
            })
        })
        it('single',() => {
            const div = document.createElement('div')
            div.innerHTML = `
            <s-collapse selected="1" single>
                <s-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                </s-collapse-item>
                <s-collapse-item title="反馈 Feedback" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                </s-collapse-item>
                <s-collapse-item title="效率 Efficiency" name="3">
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                </s-collapse-item>
            </s-collapse>
            `

            const vm = new Vue({
                el: div
            })

        })
    })
})
