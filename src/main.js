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
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let script = document.createElement('script')
            script.textContent = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}

// 请求html
getHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/add.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let div = document.createElement('div')
            div.innerHTML = request.response
            getHtml.appendChild(div)
        }
    }
    request.send()
}

// 请求Xml
getXml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/add2.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let xml = request.responseXML
            let text = xml.getElementsByTagName('warning')[0].textContent
            console.log(text.trim()) // trim() 去除多余的空字符
        }
    }
    request.send()
}

// 请求json
getJson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/test.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let obj = JSON.parse(request.response)
            console.log(obj)
            console.log(JSON.stringify(obj))
        }
    }
    request.send()
}