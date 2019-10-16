import React from 'react';
import PropTypes from "prop-types";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";

const Component = ({sendControl}) => {

    const box = {
        height: "75px",
    };

    const renderbutton = (value) => {
        return (
            <button onClick={() => sendControl(value)} className="col border text-light rounded bg-secondary " style={box}>
                {value}
            </button>
        );
    };

    return (
        <div className="w-50 mx-auto m-5">
            <Container>
                <Row>
                    {renderbutton('up')}
                </Row>
                <Row>
                    {renderbutton('left')}
                    {renderbutton('down')}
                    {renderbutton('right')}
                </Row>
            </Container>
        </div>
    );
};

Component.propTypes = {
    sendControl: PropTypes.func.isRequired,
};

export default Component;