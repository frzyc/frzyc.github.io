import { Stack } from '@mui/material'
import { Container } from '@mui/system'
import Footer from './sections/Footer'
import GOSection from './sections/GOSection'
import HeaderSection from './sections/HeaderSection'
import YelpSection from './sections/YelpSection'
import BBSection from './sections/BBSection'
import UoTSection from './sections/UoTSection'

export default function Content() {
  return (
    <Container maxWidth="md" id="back-to-top-anchor">
      <Stack spacing={2}>
        <HeaderSection />
        <GOSection />
        <YelpSection />
        <BBSection />
        <UoTSection />
        <Footer />
      </Stack>
    </Container>
  )
}
