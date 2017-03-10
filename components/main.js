import React from 'react';
import ReactDOM from 'react-dom';

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

Updates = React.createClass({
    render: function () {
        return (
            <h2 className="btn btn-danger center-block updates">
                Updates in the works while I teach myself <img src="./images/react.png" className="reactImg30px"/>
            </h2>
        )
    }
});
