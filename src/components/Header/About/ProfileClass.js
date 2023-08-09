import React from "react";

class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        console.log('constructor');
    }

    componentDidMount(){
        console.log('comppppp did mount')
    }

    render() {

        console.log('render');
        return (
            <>
                <h1>Profile Class Comp</h1>
                <p>{this.props.name}</p>
                <p>{this.state.count}</p>
                <button className="px-2 py-1 bg-gray-400 rounded"
                    onClick={this.setState({
                        // count: this.state.count+1
                    })}
                >
                    Count ++
                </button>



            </>
        )
    }
}


export default ProfileClass