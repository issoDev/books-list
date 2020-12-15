import React from 'react'
import { View } from 'react-native'

import { styles } from '../../styles/styles'
import CircleButton from './CircleButton'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <CircleButton 
        title="❌"
      />
    </View>
  )
}
