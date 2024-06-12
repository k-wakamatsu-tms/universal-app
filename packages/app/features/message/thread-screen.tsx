import { YStack, Paragraph, H2 } from '@my/ui'
import { createParam } from 'solito'

type Query = { id: string }

const { useParam } = createParam<Query>()

export function MessageThreadScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const [messageId, setMessageId] = useParam('id')

  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
      <YStack gap="$4">
        <H2>Title: Message {messageId}</H2>
        <Paragraph>Message details...</Paragraph>
      </YStack>
    </YStack>
  )
}
