import { Navigation } from 'react-native-navigation';

import Career from './modules/career';
import News from './modules/news';
import Notification from './modules/notification';
import User from './modules/user';
import Drawer from './modules/drawer';
import Login from './modules/login';

export function registerScreens(store, Provider){
    Navigation.registerComponent('myhcmus.Career',()=>Career, store, Provider);
    Navigation.registerComponent('myhcmus.News',()=>News, store, Provider);
    Navigation.registerComponent('myhcmus.Notification',()=>Notification, store, Provider);
    Navigation.registerComponent('myhcmus.User',()=>User, store, Provider);
    Navigation.registerComponent('myhcmus.Drawer',()=>Drawer, store, Provider);
    Navigation.registerComponent('myhcmus.Login',()=>Login,store,Provider);
}