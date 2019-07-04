/* eslint-disable react/no-unused-state */
import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

export const { Consumer: LocaleConsumer, Provider: LocaleProvider } = createContext();

export default class localeContext extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  state = {
    locale: '',
    onLocaleChange: val => this.setState({ locale: val })
  };

  render() {
    const { children } = this.props;
    return <LocaleProvider value={this.state}>{children}</LocaleProvider>;
  }
}
