import * as React from 'react';
import SC, { StyledFunction } from 'styled-components';

interface Props {
  width: number;
  height: number;
}
const _cell: StyledFunction<Props & React.HTMLProps<HTMLDivElement>> = SC.div;
const _row: StyledFunction<React.HTMLProps<HTMLDivElement>> = SC.div;
const Cell = _cell`
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  display: inline-block;
  border: 1px solid #000;
  box-sizing: border-box;
`;
const Row = _row`
  font-size: 0px;
  box-sizing: border-box;
`;

export default class extends React.Component {
  cellWidth: number = 10;
  cellHeight: number = 10;
  size: number = 10;
  
  constructor(props: Props) {
    super(props);
    this.size = 100;
    this.cellWidth = window.innerWidth / this.size;
    this.cellHeight = window.innerHeight / this.size;
  }
  render() {
    const count = Array(this.size).fill(1).map((i, j) => i + j);
    return count.map(cellH => {
      return (
        <Row key={cellH}>
          {
            count.map(cellV => {
              return <Cell key={`${cellH}_${cellV}`} width={this.cellWidth} height={this.cellHeight} />;
            })
          }
        </Row>
      );
    });
  }
}
