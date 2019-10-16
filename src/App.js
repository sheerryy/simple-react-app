import React from 'react';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Controls from './components/Controls';
import './App.css';
import Container from "reactstrap/es/Container";

const App = () => {
    const zerosArray = Array.from(Array(5), _ => Array(5).fill(0));
    zerosArray[2][2] = 1;
    const [grid, setGrid] = React.useState(zerosArray);

    const calculateGrid = (signal) => {
        let tempGrid = [...grid];
        let nextRow, nextColumn, currentRow, currentColumn, nextValue;

        tempGrid.forEach((row, indexRow) => {
            row.forEach((box, indexColumn) => {
                if (box > 0) {
                    currentRow = indexRow;
                    currentColumn = indexColumn;
                }
            });
        });

        nextRow = currentRow;
        nextColumn = currentColumn;

        if (signal === 'left' && tempGrid[currentRow][currentColumn] !== 2) {
            nextValue = 2;
        } else if (signal === 'left' && tempGrid[currentRow][currentColumn] === 2){
            nextColumn = currentColumn ? currentColumn - 1 : currentColumn;
            nextValue = 2;
        } else if (signal === 'right' && tempGrid[currentRow][currentColumn] !== 4) {
            nextValue = 4;
        } else if (signal === 'right' && tempGrid[currentRow][currentColumn] === 4){
            nextColumn = currentColumn < tempGrid[currentRow].length - 1 ? currentColumn + 1 : currentColumn;
            nextValue = 4;
        } else if (signal === 'up' && tempGrid[currentRow][currentColumn] !== 3) {
            nextValue = 3;
        } else if (signal === 'up' && tempGrid[currentRow][currentColumn] === 3){
            nextRow = currentRow ? currentRow - 1 : currentRow;
            nextValue = 3;
        } else if (signal === 'down' && tempGrid[currentRow][currentColumn] !== 1) {
            nextValue = 1;
        } else if (signal === 'down' && tempGrid[currentRow][currentColumn] === 1){
            nextRow = currentRow < tempGrid.length - 1 ? currentRow + 1 : currentRow;
            nextValue = 1;
        }

        tempGrid[currentRow][currentColumn] = 0;
        tempGrid[nextRow][nextColumn] = nextValue;
        setGrid(tempGrid);
    };

    return (
        <Container fluid className="App">
            <NavBar/>
            <Grid grid={grid}/>
            <Controls sendControl={calculateGrid}/>
        </Container>
    );
};

export default App;
