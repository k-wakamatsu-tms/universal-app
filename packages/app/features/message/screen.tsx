import {
  Separator,
  SwitchThemeButton,
  SwitchRouterButton,
  XStack,
  YStack,
  YGroup,
  ListItem,
} from '@my/ui'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'

export function MessageScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/message'

  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
      <XStack
        pos="absolute"
        w="100%"
        t="$6"
        gap="$6"
        jc="center"
        fw="wrap"
        $sm={{ pos: 'relative', t: 0 }}
      >
        {Platform.OS === 'web' && (
          <>
            <SwitchRouterButton pagesMode={pagesMode} />
            <SwitchThemeButton />
          </>
        )}
      </XStack>

      <YStack gap="$4">
        {/* 仮のデータでリストを表示 */}
        {[1, 2, 3].map((messageId) => {
          const linkProps = useLink({
            href: `${linkTarget}/${messageId}`,
          })

          return (
            <ListItem
              key={messageId}
              title={`Message ${messageId}`}
              subTitle="This is a summary of the message."
              {...linkProps}
            />
          )
        })}
      </YStack>
    </YStack>
  )
}
