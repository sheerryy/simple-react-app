import React from 'react';
import PropTypes from "prop-types";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";

const Component = ({grid}) => {

    const box = {
        height: "75px",
    };

    const renderBox = (value) => {
        const deg = `${(value - 1) * 90}deg`;
        return (
            <div className="col border" style={box}>
                {value ? <img style={{transform: `rotate(${deg})`, transition: '0.4s'}} alt="robot" height="70" width="60" src="./robot.png"/> : ''}
            </div>
        );
    };

    return (
        <div className="w-50 mx-auto m-5">
            <Container>
                {
                    grid.map((value, index) => {
                        return (
                            <Row className="align-middle">
                                {grid[index].map((value2, index2) => {
                                    return renderBox(value2)
                                })}
                            </Row>)
                    })
                }
            </Container>
        </div>
    );
};

Component.propTypes = {
    grid: PropTypes.array.isRequired,
};

Component.defaultProps = {
    grid: Array.from(Array(5), _ => Array(5).fill(0)),
};

export default Component;