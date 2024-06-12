import { MessageThreadScreen } from 'app/features/message/thread-screen'
import { Stack } from 'expo-router'
import { useTheme } from '@my/ui'

export default function Screen() {
  const theme = useTheme()

  return (
    <>
      <Stack.Screen
        options={{
          title: 'MessageThread',
          presentation: 'modal',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <MessageThreadScreen />
    </>
  )
}
