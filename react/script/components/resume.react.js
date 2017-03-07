var Resume = React.createClass({
    render: function () {
        return (
            <div>
                <a type="button" className="btn btn-default btn-lg" href="../pages/MatThompsonCV.pdf" target="_blank">
                    <span className="glyphicon glyphicon-list-alt" aria-hidden="true">&nbsp;</span>
                    {this.props.name}
                </a>
            </div>
        );}
});

ReactDOM.render(<Resume name="Resume/CV"/>, document.getElementById('root'));