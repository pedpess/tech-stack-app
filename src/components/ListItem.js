import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions/index';

class ListItem extends Component {

  render() {
    console.log(this.props);
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.id)}
      >
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>{this.props.library.title}</Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 18,
  }
};

export default connect(null, actions)(ListItem);
