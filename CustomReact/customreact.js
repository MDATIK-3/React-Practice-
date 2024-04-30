function CustomRender(reactElement, mainCotainer) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childen
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('terget', reactElement.props.terget)
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainCotainer.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        terget: '_blank'
    },
    childen: 'Click me to visit google'
}

const mainCotainer = document.getElementById('root');

CustomRender(reactElement, mainCotainer);