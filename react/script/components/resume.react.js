var Resume = React.createClass({
    render: function () {
        return (
            <div>
                <a type="button" className="btn btn-default btn-lg" href="../pages/MatThompsonCV.pdf" target="_blank">
                    {/*<span className="glyphicon glyphicon-list-alt" aria-hidden="true">&nbsp;</span>*/}
                    <Icon icon="list-alt"></Icon>
                    {this.props.name}
                </a>
            </div>
        );
    }
});

var Icon = React.createClass({
    setInitState: function () {
        return { classNames: 'glyphicon glyphicon-'}
    },

    render: function () {
        return (
            <span className={"glyphicon glyphicon-" + this.props.icon} aria-hidden="true">&nbsp;</span>
        );
    }
});

ReactDOM.render(<Resume name="Resume/CV"/>, document.getElementById('root'));