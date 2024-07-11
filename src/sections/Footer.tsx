import { Box, CardContent, Link, Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

export default function Footer() {
  console.log(blue)
  return (
    <Box sx={{ color: grey[500], textAlign: 'right' }}>
      <Typography>
        Designed with ❤️ and{' '}
        <Link href="https://mui.com" target="_blank" rel="noopener">
          MUI
        </Link>
      </Typography>
      <Typography>Implemented with lot of 🩹</Typography>
      <Typography
        component={Link}
        href="https://github.com/frzyc/frzyc.github.io"
        target="_blank"
        rel="noopener"
      >
        Built with Vite, deployed on Github Pages
      </Typography>
    </Box>
  )
}
