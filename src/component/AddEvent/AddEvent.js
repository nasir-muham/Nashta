import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, Row, Button } from 'react-bootstrap';
import {Meeting} from "../../assets";
import MainNavbar from "../navbar/MainNavbar"
import NashtaService from "../../service"
import "./AddEvent.css"
import swal from "sweetalert";

function AddEvent() {
    const [data, setData] = React.useState({
        title:"",
        location: "",
        participant: "",
        date: "",
        note: "",
    });

    const handleChangeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    // const [location, setLocation] = React.useState();
    // const [participant, setParticipant] = React.useState();
    // const [date, setDate] = React.useState();
    // const [note, setNote] = React.useState();
    const [image, setImage] = React.useState();

    const handleSubmitData = (event) => {
        event.preventDefault();
        NashtaService.saveDataMeeting(data.title, data.location, data.participant, data.date, data.note, image)
            .then(()=> {
                swal("Congratulations !", "Upload scan raport success!", "success");
            })
            .catch((error) =>{
                swal("Sorry !", "Upload scan raport failed!", "failed");
            })

            console.log(data.title);
            console.log(data.location);
            console.log(data.date);
            console.log(image.name);

            setData({
                title:"",
                location: "",
                participant: "",
                date: "",
                note: "",
            });

    }

    return(
        <div>
            <MainNavbar />
        <Row className="form-col-1">
            <Col style={{background:"#dfdfdf"}}>
                <Form 
                    onSubmit={handleSubmitData}
                    id="form-data"
                    style={{width: 550, marginTop:30, marginLeft:15}}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text"
                                    name="title"
                                    value={data.title}
                                    autoComplete={"off"}
                                    onChange={handleChangeData}
                                    required
                                />
                            </Form.Group>      
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text"
                                    name="location"
                                    value={data.location}
                                    autoComplete={"off"}
                                    onChange={handleChangeData}
                                    required
                                />
                            </Form.Group>      
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Participant</Form.Label>
                                <Form.Control type="text"
                                    name="participant"
                                    value={data.participant}
                                    autoComplete={"off"}
                                    onChange={handleChangeData}
                                    required
                                />
                            </Form.Group>      
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date"
                                    name="date"
                                    value={data.date}
                                    autoComplete={"off"}
                                    onChange={handleChangeData}
                                    required
                                />
                            </Form.Group>      
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <textarea name="note"
                                    value={data.note}
                             onChange={handleChangeData}
                            style={{width:550}} rows="3" placeholder="Note" required></textarea>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.File.Input 
                                onChange={(e) => {
                                    setImage(e.target.files[0])
                                }}
                                required 
                             />
                        </Col>
                    </Row>
                    <Button type="submit" style={{marginLeft:460, marginTop:5}} variant="warning"
                    >
                    SIMPAN
                    </Button>
                </Form>
            </Col>

            <Col style={{background:"#b1b1b1"}}>
                <img style={{marginTop:40}} src={Meeting} />
            </Col>
        </Row>
        </div>
    )
}

export default AddEvent;