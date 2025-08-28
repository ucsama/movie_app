import React from 'react'
import {Tabs} from 'expo-router'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="Index"
                options={{
                    title: 'Home',
                    headerShown: false
                }}
            />
        </Tabs>
    )
}
export default _layout