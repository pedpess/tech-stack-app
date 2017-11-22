import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions/index';

class ListItem extends Component {

  renderDescription() {
    if (this.props.expanded) {
      return (
        <Text>{this.props.library.description}</Text>
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.id)}
      >
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>{this.props.library.title}</Text>
          </CardItem>
          {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {

  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
