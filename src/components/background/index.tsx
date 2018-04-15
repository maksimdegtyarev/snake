import * as React from 'react';
import SC, { StyledFunction } from 'styled-components';

interface Props {
  width: number;
  height: number;
}
interface State {
  cells: Array<Array<boolean>>;
}
interface CellProps {
  width: number;
  height: number;
  active: boolean;
}
const _cell: StyledFunction<CellProps & React.HTMLProps<HTMLDivElement>> = SC.div;
const _row: StyledFunction<React.HTMLProps<HTMLDivElement>> = SC.div;
const Cell = _cell`
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  display: inline-block;
  border: 1px solid #000;
  box-sizing: border-box;
  background-color: ${p => p.active ? 'black' : 'transparent'};
`;
const Row = _row`
  font-size: 0px;
  box-sizing: border-box;
`;

export default class extends React.Component<Props, State> {
  cellWidth: number = 10;
  cellHeight: number = 10;
  size: number = 50;
  state: State;
  
  constructor(props: Props) {
    super(props);
    this.cellWidth = window.innerWidth / this.size;
    this.cellHeight = window.innerHeight / this.size;
    this.state = {
      cells: Array(this.size).fill(Array(this.size).fill(false)),
    };
  }
  render() {
    const count = Array(this.size).fill(1).map((i, j) => i + j);
    return count.map(cellH => {
      return (
        <Row key={cellH}>
          {
            count.map(cellV => {
              return <Cell key={`${cellH}_${cellV}`} width={this.cellWidth} height={this.cellHeight} active={false} />;
            })
          }
        </Row>
      );
    });
  }
}
