function customrender(reactElement , container ) {
    const DomElement = document.createElement( 
        reactElement.type
    )
    DomElement.innerHTML= reactElement.children
    DomElement.setAttribute('href' , reactElement.props.href)
    DomElement.setAttribute('target' , reactElement.props.target)

    container.appendChild(DomElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https:google.com',
        target: '_blank'
    },
    children: 'click me to visit google '
}

 const MainContainer = document.querySelector("#root")

 customrender(reactElement , MainContainer)

 