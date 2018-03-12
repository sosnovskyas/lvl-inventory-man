import * as React from 'react';
import {connect} from 'react-redux';

interface IGoodsItemProps {
  match: any;
}

class GoodsItem extends React.Component<IGoodsItemProps> {
  constructor(props: any) {
    super(props);
    console.log('GoodsItem', props.match.params.key);
  }

  public render(): React.ReactElement<{ key: string }> {
    return (
      <React.Fragment>
        <h1>QWE - {this.props.match.params.key}</h1>
      </React.Fragment>
    )
  }

}

export const ConnectedGoodsItem = connect()(GoodsItem);