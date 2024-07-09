import {
  GitHub,
  Link as LinkIcon,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Link,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material'
import { Box, Container } from '@mui/system'
import goimg from './go.png'

const links = [
  {
    icon: <LinkedIn />,
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fredzyc/',
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
export default function Content() {
  return (
    <Container maxWidth="md">
      <Stack spacing={2}>
        <Box>
          <Typography variant="h1">Hi, I'm Fred</Typography>
          <Typography variant="h4">
            Software Engineer, Full-stack Dev,{' '}
            <Tooltip arrow title="According to my mother">
              <span>pretty okay person</span>
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

        <Card elevation={6}>
          <CardHeader
            title="Genshin Optimizer"
            action={
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="Typescript" />
                <Chip label="React" />
                <Chip label="Material UI" />
              </Box>
            }
          />
          <CardActionArea
            component={Link}
            href="https://frzyc.github.io/genshin-optimizer/"
            target="_blank"
            rel="noopener"
          >
            <CardContent>
              <Box>
                <CardMedia component="img" image={goimg} />
                <Typography>
                  A utility website for Genshin Impact, that allows you to build
                  you characters, the way you play them.
                </Typography>
                <Typography>
                  <ul>
                    <li>Inventory Tracking</li>
                    <li>Screenshot scanner</li>
                    <li>Roll value tracker</li>
                    <li>Damage matching</li>
                    <li>Build generation algorithm</li>
                  </ul>
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              startIcon={<LinkIcon />}
              component={Link}
              href="https://frzyc.github.io/genshin-optimizer/"
              target="_blank"
              rel="noopener"
            >
              Link
            </Button>
            <Button
              size="small"
              startIcon={<GitHub />}
              component={Link}
              href="https://github.com/frzyc/genshin-optimizer"
              target="_blank"
              rel="noopener"
            >
              Github
            </Button>
            <Button
              size="small"
              startIcon={
                <SvgIcon>
                  <path d="M21,23l-4.378-3.406L17,21H5c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h14c1.105,0,2,0.895,2,2V23z M16.29,8.57	c0,0-1.23-0.95-2.68-1.06l-0.3,0.61C12.86,8.04,12.4,7.98,12,7.98c-0.41,0-0.88,0.06-1.31,0.14l-0.3-0.61	C8.87,7.66,7.71,8.57,7.71,8.57s-1.37,1.98-1.6,5.84C7.49,15.99,9.59,16,9.59,16l0.43-0.58c-0.44-0.15-0.82-0.35-1.21-0.65	l0.09-0.24c0.72,0.33,1.65,0.53,3.1,0.53s2.38-0.2,3.1-0.53l0.09,0.24c-0.39,0.3-0.77,0.5-1.21,0.65L14.41,16	c0,0,2.1-0.01,3.48-1.59C17.66,10.55,16.29,8.57,16.29,8.57z M10,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C10.94,12.85,10.52,13.38,10,13.38z M14,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C14.94,12.85,14.52,13.38,14,13.38z" />
                </SvgIcon>
              }
              component={Link}
              href="https://discord.gg/CXUbQXyfUs"
              target="_blank"
              rel="noopener"
            >
              Discord
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  )
}
