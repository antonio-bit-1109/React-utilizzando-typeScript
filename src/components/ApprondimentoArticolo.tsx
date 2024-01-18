import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ObjectFetch } from "../interfaces/interfaces";

const ApprondimentoArticolo = () => {
    const [dataSecondFetch, setDataSecondFetch] = useState<ObjectFetch | null>(null);
    console.log("dataSecondFetch", dataSecondFetch);

    const params = useParams();
    console.log(params);

    const secondFetch = () => {
        fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.id}`)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setDataSecondFetch(data);
            });
    };

    useEffect(() => {
        secondFetch();
    }, []);

    return (
        <div>
            {dataSecondFetch && (
                <Container>
                    {" "}
                    <Row>
                        <Card>
                            <Card.Img variant="top" src={dataSecondFetch.image_url} />
                            <Card.Body>
                                <Card.Title>{dataSecondFetch.title}</Card.Title>
                                <Card.Text>{dataSecondFetch.summary}</Card.Text>
                                <Link to={"/"}>
                                    <Button variant="warning">Torna Indietro</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default ApprondimentoArticolo;
