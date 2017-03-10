import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
    render: function () {
        return (
            <section>
                <Updates/>
                <Navbar/>
                <Main/>
            </section>
        );
    }
});

var Main = React.createClass({
    render: function () {
        return (
            <main>
                <ResumeButton name="Resume/CV" className="btn-group"/>
            </main>
        )
    }
});

var ResumeButton = React.createClass({

    render: function () {
        return (
            <div className="wrapper">
                <a type="button" className="btn btn-info btn-lg centerButton" href="./images/resumeCV.pdf" target="_blank">
                    <Icon icon="list-alt"></Icon>
                    {this.props.name}
                </a>
            </div>
        )
    }
});

var Icon = React.createClass({
    getInitialState: function () {
        return { className: 'glyphicon glyphicon-'}
    },

    render: function () {
        return (
            <span className={this.state.className + this.props.icon} aria-hidden="true">&nbsp;</span>
        );
    }
});

var Updates = React.createClass({
    render: function () {
        return (
            <h2 className="btn btn-danger center-block updates">
                Updates in the works while I teach myself <img src="./images/react.png" className="reactImg30px"/> if I can.
            </h2>
        )
    }
});

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
                imageLink: 'https://www.linkedin.com/in/mateoenterprises',
                id: 1
            },{
                image: 'github',
                imageLink: 'https://github.com/MateoEnterprises',
                id: 2
            },{
                image: 'facebook',
                imageLink: 'https://www.facebook.com/mathew.thompson2',
                id: 3
            }
        ];

        buttonsInfo.forEach(function (key) {
            buttons.push(
                <a className="btn btn-social btnSocial" href={key.imageLink} target="_blank" key={key.id}>
                    <span className={"fa fa-2x fa-" + key.image}/>
                </a>
            )
        })
        
        return (
            <div className="floatRight">{buttons}</div>
        )
    }
});

ReactDOM.render(<Hello />, document.getElementById('root'));