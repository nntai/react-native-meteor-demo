import React from 'react'
import {
    View,
    Text,
    Platform
} from 'react-native'


class Career extends React.Component {

    static navigatorButtons = {
        leftButtons: [
            {
                title: 'Menu', // for a textual button, provide the button title (label)
                id: 'sideMenu', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
                showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
                buttonColor: 'blue', // Set color for the button (can also be used in setButtons function to set different button style programatically)
                buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
                buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
            },
        ]
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    }

    onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'sideMenu') {
                if (Platform.OS == 'ios')
                    this.props.navigator.toggleDrawer({
                        slide: 'left',
                        animated: true,

                    })
            }
        }
    }


    render() {
        return (
            <View>
                <Text>Career</Text>
            </View>
        )
    }
}


export default Career;
