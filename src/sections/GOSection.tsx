import { GitHub, Link as LinkIcon } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  Link,
  SvgIcon,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import goimg from './go.png'
import { TextSectionDisplayCollapse } from '../components/TextSectionCollapse'

export default function GOSection() {
  return (
    <Card elevation={6}>
      <CardHeader
        title="Creator and Lead Dev of Genshin Optimizer"
        action={<Chip label="2024 Dec - present" />}
      />
      <CardActionArea
        component={Link}
        href="https://frzyc.github.io/genshin-optimizer/"
        target="_blank"
        rel="noopener"
      >
        <CardMedia component="img" image={goimg} />
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
          sx={{ mr: 'auto' }}
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
        <Chip label="Open-source" avatar={<GitHub />} />
        <Chip label="Typescript" />
        <Chip label="React" />
        <Chip label="Material UI" />
      </CardActions>
      <Divider />
      <CardContent>
        <Typography>
          The most over-engineered utility website for{' '}
          <Link
            href="https://genshin.hoyoverse.com/"
            target="_blank"
            rel="noopener"
          >
            Genshin Impact
          </Link>
          , that allows you to build you characters, the way you play them.
        </Typography>
        <Typography>📋 Inventory Tracking and management</Typography>
        <Typography>📷 Custom screenshot scanner using Tesseract.js</Typography>
        <Typography>🌲 A abstract-Syntax-Tree based formula system</Typography>
        <Typography>
          📈 Full damage matching, with generated formulas to explain every
          single number
        </Typography>
        <Typography>
          🔀 Build generation algorithm that can go through hundreds of
          thousands of possible builds to help players find their best builds,
          using their own inventory availability.
        </Typography>
        <Typography>
          🔮 Predictive damage model that can calculate which gear to upgrade to
          yield the highest chance to increase damage
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="h5">The story of Genshin Optimizer</Typography>

        <Typography>
          A Video detailing of the history and development of the project:
        </Typography>
        <Box>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/D7fKDlop-7w?si=Wr1jQ_m-IiwX8Vgd"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  )
}
