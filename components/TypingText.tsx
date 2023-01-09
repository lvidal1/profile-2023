import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export const TypingText = () => {
    return (
        <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
                'Show me the code',
                1000,
                'Show me the design',
                1000,
                'Show me the web',
                1000,
                'Show me the API ',
                1000,
                'Show me the DB',
                1000,
            ]}
            speed={45} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
            cursor={true}
        />

    )
}
