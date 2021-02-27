import React from 'react'
import HomeComponent from './stackNavs/home';

export default function MainComponent(props) {
    // return (
    //     <View>
    //         <BottomNav />
    //     </View>
    // )

    return (
        <HomeComponent time={props.time} food={props.food} />
    )
}
