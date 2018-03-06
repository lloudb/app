import Logo from 'Logo.jsx'

class Head extends React.Component {
    render () {
        return (
            <Logo/>
        )
    }
}

class Menu extends React.Component {
    render () {
        return (
            <div></div>
        )
    }
}

class MenuItem extends React.Component {
    render () {
        return (
            <div></div>
        )
    }
}
ReactDOM.render (
    <Head />,
    document.querySelector('#head')
)
