import {
  Separator,
  SwitchThemeButton,
  SwitchRouterButton,
  XStack,
  YStack,
  YGroup,
  ListItem,
} from '@my/ui'
import { ChevronRight, Star } from '@tamagui/lucide-icons'
import { Platform } from 'react-native'

export function SettingScreen({ pagesMode = false }: { pagesMode?: boolean }) {
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
        <YGroup alignSelf="center" bordered separator={<Separator />}>
          <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title="Account"
              subTitle="Manage your account settings."
              icon={Star}
              iconAfter={ChevronRight}
            />
          </YGroup.Item>
          <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title="Test"
              subTitle="Manage your account settings."
              icon={Star}
              iconAfter={ChevronRight}
            />
          </YGroup.Item>
        </YGroup>
      </YStack>
    </YStack>
  )
}
