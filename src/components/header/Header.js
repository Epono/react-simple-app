import './Header.css';

export const Header = () => {

    return (
        <div className="header-root">
            <div>Hello World!</div>
            <div className="header-right">
                <a href="" className="header-item">Our story</a>
                <a href="" className="header-item">Membership</a>
                <a href="" className="header-item">Write</a>
                <a href="" className="header-item">Sign in</a>
                <a href="" className="header-item header-item-highlighted">Get started</a>
            </div>
        </div>
    )
}
