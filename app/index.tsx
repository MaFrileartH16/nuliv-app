import { Button, H2, YStack } from 'tamagui'

export default function HomeScreen() {
  return (
    <YStack flex={1} justify="center" items="center" gap="$4" px="$5" bg="$background">
      <H2>Home</H2>
      <Button onPress={() => {}}>Tombol Tamagui</Button>
    </YStack>
  )
}
