var Body = React.createClass({
    render: function () {
        return (
            <section>
                <Navbar/>
                <Main/>
            </section>
        );
    }
});

ReactDOM.render(<Body/>, document.getElementById('root'));