const React = {
    createElement
}

const ReactDOM = {
    render
}

/**
 *
 * @param {String} tag
 * @param {Object} attr
 * @param  {Array} children
 * @return {Object:vdom}
 */
function createElement(tag, attr, ...children) {
    return {
        attributes: attr,
        children: children,
        key: undefined,
        nodeName: tag
    }
}

const element = (
    <div className="title">
        hello{`jk`}
        <span className="content" style={{ color: 'red' }}>
            world
        </span>
        <p>hiahia</p>
        <div>
            <img src="###" title="image test" />
        </div>
    </div>
)

console.log(element)

/**
 *
 * @param {Object} vdom 虚拟DOM
 * @param {HTMLDivElement} container 插入位点
 */
function render(vdom, container) {
    //组件逻辑
    if (typeof vdom.nodeName === 'function') {
        let component, returnVdom
        if (vdom.nodeName.prototype.render) {
            component = new vdom.nodeName()
            returnVdom = component.render()
        } else {
            returnVdom = vdom.nodeName() // 无状态组件 const A = () => <div> component A </div>
        }
        console.log(returnVdom)
        render(returnVdom, container)
        return
    }

    if (typeof vdom === 'string' || typeof vdom === 'number') {
        textOrNum = document.createTextNode(vdom)
        container.appendChild(textOrNum)
        return
    }
    const root = document.createElement(vdom.nodeName)
    console.log(vdom)
    if (vdom.attributes) {
        for (let [attr, value] of Object.entries(vdom.attributes)) {
            setAttr(root, attr, value)
        }
    }
    vdom.children.map(vdomChild => render(vdomChild, root))
    container.appendChild(root)
}
/**
 *
 * @param {*} dom 操作元素
 * @param {*} attr 操作元素属性
 * @param {*} value 操作元素值
 */
function setAttr(dom, attr, value) {
    if (attr === 'className') {
        attr = 'class'
    }
    dom.setAttribute(attr, value)
}

//ReactDOM.render(element, document.getElementById('root'))

const ComponentA = () => <div className="componentA">Component A</div>
const ComponentB = () => (
    <div>
        <ComponentA />
        <ComponentA />
        kjskldfj
    </div>
)

console.log(<ComponentB />)

ReactDOM.render(<ComponentB />, document.getElementById('root'))
