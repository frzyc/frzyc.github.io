import { Box, Link, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export default function Footer() {
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
