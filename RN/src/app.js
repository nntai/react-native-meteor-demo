
import React,{Component} from 'react';
import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';
import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();
registerScreens(store, Provider); // this is where you register all of your app's screens

import {Icons} from './Omni';

const navigatorStyle = {
    statusBarColor: 'black',
    statusBarTextColorScheme: 'light',

    navigationBarColor: 'black',
    navBarBackgroundColor: 'black',
    navBarTextColor: 'white',
    navBarButtonColor: 'green',

    tabBarButtonColor: 'gray',
    tabBarSelectedButtonColor: 'red',
    tabBarBackgroundColor: 'white',

    topBarElevationShadowEnabled: false,
    navBarHideOnScroll: true,
    tabBarHidden: true,
    drawUnderTabBar: true
};

class App extends Component {
    constructor(props) {
        super(props);
        this.startApp('after-login');
        store.subscribe(this.onStoreUpdate.bind(this));
    }

    onStoreUpdate() {
        const {root} = store.getState().app;
        console.log('on store')
        console.log(root);

        if (this.currentRoot != root) {
            this.currentRoot = root;
            this.startApp(root);
        }
    }


    startApp(root) {
        console.log('start app')

        switch (root) {
            //login success
            case 'after-login':
                Navigation.startTabBasedApp({
                    tabs: [
                        {
                            label: 'news',
                            icon: Icons.home,
                            selectedIcon: Icons.home_On,
                            screen: 'myhcmus.News', // this is a registered name for a screen
                            title: 'News'
                        },
                        {
                            label: 'career',
                            icon: Icons.home,
                            selectedIcon: Icons.home_On,
                            screen: 'myhcmus.Career', // this is a registered name for a screen
                            title: 'Career',

                        },
                        {
                            label: 'notification',
                            icon: Icons.home,
                            selectedIcon: Icons.home_On,
                            screen: 'myhcmus.Notification', // this is a registered name for a screen
                            title: 'Notification',

                        },
                        {
                            label: 'user',
                            icon: Icons.home,
                            selectedIcon: Icons.home_On,
                            screen: 'myhcmus.User', // this is a registered name for a screen
                            title: 'User',
                        },
                    ],
                    navigatorStyle: navigatorStyle,

                    appStyle: {
                        orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
                    },
                    drawer: {
                        left: {
                            screen: 'myhcmus.Drawer'
                        }
                    }
                });
                break;
            //login:
            case 'login':
                Navigation.startSingleScreenApp({
                    screen: {
                        screen: 'myhcmus.Login', // unique ID registered with Navigation.registerScreen
                        title: 'Login', // title of the screen as appears in the nav bar (optional)
                        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
                    },
                })
                break;
            //don't know
            default:
                console.log('dont know...')

        }
    }

}

export default App;
