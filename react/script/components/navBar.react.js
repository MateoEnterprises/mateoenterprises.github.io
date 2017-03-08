var Navbar = React.createClass({
    render: function () {
        return (
            <nav className="navbar">
                <span className="navbar-brand">Mathew Thompson</span>
                <SocialLinks/>
            </nav>
        )
    }
})

var SocialLinks = React.createClass({

    render: function () {
        var buttons = [];
        var buttonsInfo = [
            {
                image: 'linkedin',
                imageLink: 'https://www.linkedin.com/in/mateoenterprises'
            },{
                image: 'github',
                imageLink: 'https://github.com/MateoEnterprises'
            },{
                image: 'facebook',
                imageLink: 'https://www.facebook.com/mathew.thompson2'
            }
        ];

        buttonsInfo.forEach(function (key) {
            buttons.push(
                <a className="btn btn-social btnSocial" href={key.imageLink} target="_blank">
                    <span className={"fa fa-2x fa-" + key.image}/>
                </a>
            )
        })
        
        return (
            <div className="floatRight">{buttons}</div>
        )
    }
})