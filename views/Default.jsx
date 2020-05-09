const React = require('react');

class Default extends React.Component{
    render(){
        return(
                <html>
                    <head>
                        <meta charSet="UTF-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>

                        <link rel="stylesheet" href="/css/style.css"/>
                    <title>{this.props.title}</title>
                    <link rel="icon" href="/img/gd-favicon.png"></link>
                    </head>
                    <body className="container">
                        {this.props.children}
                    </body>
                </html>
        )
    }
}

//  Export
module.exports = Default;