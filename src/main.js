// 请求style —— onload and onerror
// getCss.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open('get', '/style.css')
//     request.onload = () => {
//         let style = document.createElement('style')
//         style.textContent = request.response
//         document.head.appendChild(style)
//         alert('请求成功style.css')
//     }
//     request.onerror = () => {
//         console.log('失败')
//     }
//     request.send()
// }

// 请求style
getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let style = document.createElement('style')
            style.textContent = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}

// 请求js

getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/index.js')
    request.onreadystatechange
}