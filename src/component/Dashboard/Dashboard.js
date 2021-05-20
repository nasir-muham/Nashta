import React, { Component } from "react"
import {Pagination, Table} from "react-bootstrap"
import MainNavbar from "../navbar/MainNavbar"
import NashtaService from "../../service"

class Dashboard extends Component {
    constructor() {
        super();
        this.state ={
            page: 0,
            dataMeet: [],
        }
    }

    componentDidMount() {
        NashtaService.getData(this.state.page).then((res) => {
            console.log(res);
            this.setState({
                dataMeet: res.data.items
            })
        })
    }
    
    render(){
        let active = 1;
        let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                {number}
                </Pagination.Item>,
            );
        }

        const paginationBasic = (
            <div>
              <Pagination>{items}</Pagination>
              <br />
            </div>
          );

        // const Baris = [
        //     {no: "1", title: "Meeting", location:"Papua",date: "02-02-2021", participant:"Bupati", note:"Serius"},
        //     {no: "2", title: "Meeting masalah liburan", location:"Papua",date: "02-02-2021", participant:"Bupati", note:"Serius"},
        //     {no: "3", title: "Meeting client", location:"Papua",date: "02-02-2021", participant:"Bupati", note:"Serius"},
        //     {no: "4", title: "Meet Up Manager", location:"Papua",date: "02-02-2021", participant:"Bupati", note:"Serius"},
        //     {no: "5", title: "Ceo", location:"Papua",date: "02-02-2021", participant:"Bupati", note:"Serius"},
        // ]

        const Columns = (dataMeet, index) => {
            return(
                <tr key={index}>
                    <td>{dataMeet.id}</td>
                    <td>{dataMeet.title}</td>
                    <td>{dataMeet.location}</td>
                    <td>{dataMeet.date}</td>
                    <td>{dataMeet.participant}</td>
                    <td>{dataMeet.note}</td>
                </tr>
            )
        }

        return(
            <di>
                <MainNavbar />
                <Table striped bordered hover size="sm" style={{marginTop: 50, width:1150, marginLeft:100}}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Participant</th>
                        <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dataMeet.map(Columns)}
                    </tbody>
                    <div style={{marginTop:20}}>{paginationBasic}</div>
                </Table>
            </di>
        )
    }
}
export default Dashboard;