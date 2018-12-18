import _ from 'lodash'
import printMe from './print'
import './styles.css'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  btn.innerHTML = 'click me'
  btn.onclick = printMe
  element.appendChild(btn)
  return element
}

document.body.appendChild(component())

// print.js 内部变更时，接受更新模块
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('update')
    printMe()
  })
}
