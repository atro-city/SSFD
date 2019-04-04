/**
 * @format
 */
import {useState} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View} from 'react-native';
import { Alert,  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
