import React from 'react'
import styles from "../styles/components/Introduction.module.scss"

export const Introduction = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.scope}>

                </div>
                <div className={styles.speech}>
                    <div className='text-left text-xs  text-gray-400'>Introduce</div>
                    <h4 className='text-left text-3xl md:text-4xl md:leading-snug'>Hello, I'm Leonardo Vidal</h4>
                    <div className='text-left text-lg md:text-xl italic'>Great power comes with great responsability</div>
                    <p className='text-left text-sm leading-loose text-gray-400'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </p>
                </div>
            </div>
        </section>
    )
}
