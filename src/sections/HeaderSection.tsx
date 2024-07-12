import { GitHub, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import { Button, Link, SvgIcon, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'

const links = [
  {
    icon: <LinkedIn />,
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/frzyc/',
  },
  {
    icon: <GitHub />,
    text: 'Github',
    href: 'https://github.com/frzyc',
  },
  {
    icon: <Twitter />,
    text: 'Twitter(X)',
    href: 'https://twitter.com/frzyc',
  },
  {
    icon: <YouTube />,
    text: 'Youtube',
    href: 'https://www.youtube.com/@frzyc',
  },
  {
    icon: (
      <SvgIcon>
        <path d="M 2.136719 0 L 0.523438 4.121094 L 0.523438 20.953125 L 6.257812 20.953125 L 6.257812 24 L 9.480469 24 L 12.523438 20.953125 L 17.183594 20.953125 L 23.449219 14.6875 L 23.449219 0 Z M 21.300781 13.613281 L 17.71875 17.195312 L 11.988281 17.195312 L 8.941406 20.238281 L 8.941406 17.195312 L 4.105469 17.195312 L 4.105469 2.148438 L 21.300781 2.148438 Z M 17.71875 6.269531 L 17.71875 12.535156 L 15.570312 12.535156 L 15.570312 6.269531 Z M 11.988281 6.269531 L 11.988281 12.535156 L 9.839844 12.535156 L 9.839844 6.269531 Z M 11.988281 6.269531 " />
      </SvgIcon>
    ),
    text: 'Twitch',
    href: 'https://www.youtube.com/@frzyc',
  },
] as const
export default function HeaderSection() {
  return (
    <Box>
      <Box>
        <Typography variant="h2">Hi, I'm Fred</Typography>
        <Typography variant="h5">
          🛠️Software Engineer, 💻Full-stack Developer,{' '}
          <Tooltip arrow title="According to my mother">
            <span>👍pretty okay person</span>
          </Tooltip>
          .
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-around' }}>
        {links.map(({ icon, text, href }) => (
          <Button
            startIcon={icon}
            variant="text"
            component={Link}
            href={href}
            target="_blank"
            rel="noopener"
          >
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  )
}
