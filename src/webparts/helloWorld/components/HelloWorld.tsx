import * as React from 'react';
import styles from './HelloWorld.module.scss';
import type { IHelloWorldProps } from './IHelloWorldProps';
//import { escape } from '@microsoft/sp-lodash-subset';

import { TextField, PrimaryButton } from '@fluentui/react';

export interface IAddNumbersState {
  num1: number;
  num2: number;
  result: number | undefined;
}
export interface IAddNumbersProps {
  type:number
}
export default class HelloWorld extends React.Component<IHelloWorldProps,IAddNumbersState,IAddNumbersProps> {

  constructor(props:IHelloWorldProps) {
    // props
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: undefined
    };
  }

  private handleNum1Change = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ num1: +event.currentTarget.value });
  };

  private handleNum2Change = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ num2: +event.currentTarget.value });
  };

  private handleAddition = (): void => {
    const sum = this.state.num1 + this.state.num2;
    this.setState({ result: sum });
  };

  //IHelloWorldProps
  public render(): React.ReactElement<IAddNumbersProps> {
    // const {
    //   description,
    //   isDarkTheme,
    //   environmentMessage,
    //   hasTeamsContext,
    //   userDisplayName
    // } = this.props;
    

    return (
      <div className={styles.addNumbers}>
        <div className={styles.container}>
          {/* <div className={styles.row}>
            <div className={styles.column}> */}
              <span className={styles.title}>Add Numbers</span>
              <p className={styles.subTitle}>Enter two numbers below:</p>
              <TextField
                label="Number 1"
                type="number"
                value={this.state.num1.toString()}
                onChange={this.handleNum1Change}
              />
              <TextField
                label="Number 2"
                type="number"
                value={this.state.num2.toString()}
                onChange={this.handleNum2Change}
              />
              <PrimaryButton text="Add" onClick={this.handleAddition} />
              {this.state.result !== undefined && (
                <p className={styles.result}>Result: {this.state.result}</p>
              )}
            </div>
          </div>
      //   </div>
      // </div>










      // <section className={`${styles.helloWorld} ${hasTeamsContext ? styles.teams : ''}`}>
      //   <div className={styles.welcome}>
      //     <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
      //     <h2>Well done, {escape(userDisplayName)}!</h2>
      //     <div>{environmentMessage}</div>
      //     <div>Web part property value: <strong>{escape(description)}</strong></div>
      //   </div>
      //   <div>
      //     <h3>Welcome to SharePoint Framework!</h3>
      //     <p>
      //       The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
      //     </p>
      //     <h4>Learn more about SPFx development:</h4>
      //     <ul className={styles.links}>
      //       <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
      //       <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
      //     </ul>
      //   </div>
      // </section>
    );
  }
}
