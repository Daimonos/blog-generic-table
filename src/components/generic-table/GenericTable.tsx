import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from '@material-ui/core';
import './GenericTable.css';

interface IHeaders {
  title: string;
  key: string;
  width?: string;
}

interface IProps {
  items: Object[];
  headers: IHeaders[];
  enableSelect: Boolean;
  rowHander?: () => void;
}

export default class GenericTable extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  renderHeader = () => {
    const { enableSelect } = this.props;
    return <TableHead>
      <TableRow>
        {enableSelect && <TableCell className="head"><Checkbox /></TableCell>}
        {this.props.headers.map(h => <TableCell className="head" key={h.key}>{h.title}</TableCell>)}
      </TableRow>
    </TableHead>
  }

  renderColgroup = () => {
    const { headers } = this.props;
    return <colgroup>
      {headers.map(h => {
        let styles: any = {}
        if (h.width) {
          styles.width = h.width;
        }
        return <col key={h.key} style={styles} />;
      })}
    </colgroup>
  }

  renderBody = () => {
    const { items } = this.props;
    return <TableBody>
      {items.map(this.renderItem)}
    </TableBody>
  }

  renderItem = (item: any, index: number) => {
    const { headers, enableSelect } = this.props;
    return <TableRow key={index}>
      {enableSelect && <TableCell><Checkbox /></TableCell>}
      {headers.map(h => {
        return <TableCell key={h.key}> {this.getKeyValueFromObject(item, h.key)}</TableCell>
      })}
    </TableRow>
  }

  /**
   * Extracts the value of a key path from an object
   * https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key/6491621
   * @param o Any object
   * @param s The Key path in the form of some.key
   */
  getKeyValueFromObject(o: any, s: string) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }

  render() {
    return <Table>
      {this.renderColgroup()}
      {this.renderHeader()}
      {this.renderBody()}
    </Table>
  }
}