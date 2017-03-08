var Main = React.createClass({
    render: function () {
        return (
            <main>
                <ResumeButton name="Resume/CV" className="btn-group"/>
                <Updates/>
            </main>
        )
    }
});

var ResumeButton = React.createClass({

    render: function () {
        return (
            <div className="wrapper">
                <a type="button" className="btn btn-info btn-lg centerButton" href="../pages/MatThompsonCV.pdf" target="_blank">
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
            <h2 className="btn btn-warning center-block">
                Updates in the works
            </h2>
        )
    }
})
