import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PincoPallino } from "../redux/store/store";
import {
    setObjArray,
    /*   setevents,
    seturl,
    setupdated_at,
    settitle,
    setsummary,
    setpublished_at,
    setnews_site,
    setLaunches,
    setImage_url,
    setid,
    setFeatured, */
} from "../redux/reducers/stateReducers";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MainComponent: React.FC = () => {
    const dispatch = useDispatch();
    const myObj = useSelector((state: PincoPallino) => state.queryState.ObjArray); // Specifica il tipo dello stato radice
    console.log("mioOggettoVUOTO POI FETCHATO", myObj);

    useEffect(() => {
        fetchData();
    }, []);

    // Usa useDispatch se hai bisogno di dispatchare azioni
    // const dispatch = useDispatch();
    const fetchData = () => {
        const options = {
            method: "GET",
            headers: {},
        };
        fetch("https://api.spaceflightnewsapi.net/v4/articles", options)
            .then((response) => {
                if (!response.ok) {
                    if (response.status > 400 && response.status < 500) {
                        if (response.status === 429) {
                            throw new Error("429 INFAME PER TE TANTE COSE BRUTTE");
                        } else {
                            throw new Error("STAI CAPPELLANDO , RIGUARDA QUELLO CHE HAI SCRITTO");
                        }
                    }
                    if (response.status > 500 && response.status < 600) {
                        throw new Error("SERVER SPOMPATO, NON FUNZIA??");
                    }
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                console.log(data);
                dispatch(setObjArray(data.results));
            });
    };

    return (
        <div>
            {myObj && (
                <Container>
                    {" "}
                    <Row>
                        {myObj.map((element) => (
                            <Col sm={12} md={8} lg={6} xl={4} key={element.id}>
                                <Card className="my-5">
                                    <img src={element.image_url} alt="immagine" />
                                    <Card.Body>
                                        <Card.Title>{element.title}</Card.Title>
                                        <Card.Text>{element.summary}</Card.Text>
                                        <Link to={`/approfondimenti/${element.id}`}>
                                            {" "}
                                            <Button variant="primary">Approfondimenti</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default MainComponent;
