var Body = React.createClass({
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

ReactDOM.render(<Body/>, document.getElementById('root'));