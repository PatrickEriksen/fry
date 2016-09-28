import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from 'react-native';
import Button from 'apsl-react-native-button';
// var PressMe = require('./fry.js')

var sandbox = React.createClass({



    componentWillMount: function() {
        this._animatedValue = new Animated.Value(0);
    },

    componentDidMount: function() {
        Animated.timing(this._animatedValue, {
            toValue: 100,
            duration: 1000
        }).start();
    },

    getInitialState() {
      return {
        score: 0
      }
    },

    spinFry: function() {
        console.log(5 + 6);
    },

    render: function() {
        var interpolatedRotateAnimation = this._animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: ['0deg', '360deg']
        });

      return <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.container}>
                      <Animated.Image style={[styles.box, {transform: [{rotate: interpolatedRotateAnimation}]}]} source={require('./fry.png')}/>
                </View>
                <Text style={this.fryStyle()}>
                </Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.buttonRow}>
                    {this.topButton()}
                </View>
                <View style={styles.buttonRow}>
                    {this.leftButton()}
                    {this.rightButton()}
                </View>
            </View>
        </View>
    },

    topButton: function() {
        return <Button style={[styles.myButton, styles.showImageButton]}
        onPress={this.spinFry(),() => this.setState({score: ++this.state.score})}>
            <Text style={styles.buttonText}>
                Spin Fry - {this.state.score + ' spins'}
            </Text>
        </Button>
    },

    fryStyle: function(){
        return {
            transform: [{rotate: '0 deg'}]
        }
    },

    fryAngle: function() {
        var fryAngleValue = '[{rotate: '+ "'"+this.state.score * 90 + ' deg'+"'"+'}]';
        return fryAngleValue;
    },

    leftButton: function() {
        return <Button style={[styles.myButton, styles.leftButton]}>
            <Text style={styles.buttonText}>
                Button B
            </Text>
        </Button>
    },
    rightButton: function() {
        return <Button style={[styles.myButton, styles.rightButton]}>
            <Text style={styles.buttonText}>
                Button C
            </Text>
        </Button>
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
    },
    header: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
    },
    popUp: {
        fontSize: 60
    },
    buttonRow: {
        flexDirection: 'row',
    },
    myButton :{
        alignItems: 'center',
        padding: 15,
        marginTop: 20,
        marginRight: 20,
        marginBottom: 0,
        marginLeft: 20,
        flex: 1,
        borderRadius: 5,
    },
    leftButton: {
        backgroundColor: '#707070',
        borderColor: '#707070',
        marginRight: 10,
        marginBottom: 20,
    },
    rightButton: {
        backgroundColor: '#707070',
        borderColor: '#707070',
        marginLeft: 10,
        marginBottom: 20,
    },
    buttonText : {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    showImageButton: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    hideImageButton: {
        backgroundColor: '#FF5722',
        borderColor: '#FF5722',
    },

});

AppRegistry.registerComponent('sandbox', () => sandbox);
