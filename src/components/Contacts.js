import React, {Component} from 'react';

export class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {contacts: []}
    }

    refreshList() {
        fetch(process.env.REACT_APP_NKS_API + 'contacts')
            .then(response => response.json())
            .then(data => {
                this.setState({contacts: data});
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(JSON.stringify(prevState) !== JSON.stringify(this.state))
            this.refreshList()
    }

    render() {
        // TODO products или catalog оставляем?
        const {contacts} = this.state;

        return (
        )

        // return (
        //     <BootstrapTable className="mt-4" striped bordered hover size="sm">
        //         <thead>
        //         <tr>
        //             <th>TableId</th>
        //             <th>TableTitle</th>
        //             <th>Options</th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         {catalog.map(product =>
        //             <tr key={product.id}>
        //                 <td>{product.id}</td>
        //                 <td>{product.title}</td>
        //                 <td>Edit / Delete</td>
        //             </tr>)}
        //         </tbody>
        //     </BootstrapTable>

    }
}
