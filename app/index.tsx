import { Button, H2, Paragraph, YStack } from 'tamagui'

export default function HomeScreen() {
    return (
        <YStack flex={1} justify="center" items="center" gap="$4" px="$5" bg="$background">
            <H2>Home</H2>
            <Paragraph opacity={0.7}>Ini satu-satunya halaman di aplikasi.</Paragraph>

            <Button onPress={() => {}}>
                Tombol Tamagui
            </Button>
        </YStack>
    )
}
