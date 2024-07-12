import { GitHub, Link as LinkIcon } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useRef, useState } from 'react'
import home from './goimg/home.png'
import stats from './goimg/stats.png'
import up from './goimg/up.png'

function Gallery() {
  const [scrollX, setScrollX] = useState(0)
  const scrollTimer = useRef(0)
  useEffect(() => {
    scrollTimer.current = setInterval(() => {
      handleScroll()
    }, 3000)
    return () => clearInterval(scrollTimer.current)
  }, [])

  const handleScroll = () => {
    const container = document.getElementById('galleryContainer')
    if (!container) return
    const imgWidth = container.clientWidth
    const width = container.scrollWidth - imgWidth
    const newPosition = Math.min(scrollX + imgWidth, width)
    if (newPosition === scrollX) setScrollX(0)
    else setScrollX(newPosition)
  }

  return (
    <CardActionArea
      onClick={() => {
        handleScroll()
        clearInterval(scrollTimer.current)
      }}
    >
      <Box
        id="galleryContainer"
        sx={{
          display: 'flex',
          transform: `translateX(-${scrollX}px)`,
          transition: 'transform 0.5s ease',
        }}
      >
        <Box component="img" src={home} sx={{ width: '100%' }} />
        <Box component="img" src={stats} sx={{ width: '100%' }} />
        <Box component="img" src={up} sx={{ width: '100%' }} />
      </Box>
    </CardActionArea>
  )
}
export default function GOSection() {
  return (
    <Card elevation={6}>
      <CardHeader
        title="Creator and Lead Dev of Genshin Optimizer"
        action={<Chip label="2024 Dec - present" />}
      />
      <Gallery />
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
        <Stack spacing={1}>
          <Typography variant="h5">
            🚀 From Passion Project to Community Hub 🎮
          </Typography>
          <Typography>
            In late 2020, driven by an engineering itch 🛠️ and a desire to
            tackle the some unforgiving RNG challenges of Genshin Impact, I
            started Genshin Optimizer(GO). What began as a personal project
            quickly resonated with many players facing similar frustrations.
            Within just a few months, the tool attracted a dedicated user base.
          </Typography>
          <Typography>
            Over time, GO has grown significantly. Within a year or two, it
            became the go-to resource for players aiming to maximize their
            Genshin Impact accounts. This growth fostered a tight-knit community
            of theory-crafters and programmers, all united by a shared passion
            for the game.
          </Typography>
          <Typography>
            Today, GO boasts nearly <strong>1 million monthly views</strong> and
            around <strong>30,000 daily active users</strong>. Our Discord
            community has expanded to <strong>over 14,000 members</strong>📈.
            Additionally, I established a broader community of developers
            focused on creating tools and websites for Genshin Impact and other
            related games, now numbering in the hundreds.
          </Typography>
          <Typography>
            What started as a solo endeavor has evolved into a collaborative
            project, requiring me to grow into the roles of Project Manager and
            Lead Developer. I now oversee a diverse team of developers across
            various disciplines and time zones. This expansion has enabled us to
            extend our reach and apply our solutions to other games.
          </Typography>
          <Typography>
            <Box
              component="ul"
              sx={{ display: 'flex', flexDirection: 'column', gap: 1, ml: -2 }}
            >
              <li>
                <strong>💡Team Management</strong>: Coordinating a global team
                of developers to continuously enhance Genshin Optimizer and
                explore new gaming tools.
              </li>
              <li>
                <strong>🎨UI/UX Design Collaboration</strong>: Working with
                community designers on Figma to refine and iterate on user
                interface and user experience designs .
              </li>
              <li>
                <strong>👨‍💻Developer Onboarding</strong>: Creating a welcoming
                environment for amateur developers to contribute through
                self-contained open-source projects, fostering growth and
                learning.
              </li>
              <li>
                <strong>🫂Community Partnerships</strong>: Establishing
                relationships with game research communities to gather feedback
                and scope new features, thereby enhancing the theory-crafting
                workflow.
              </li>
              <li>
                <strong>📹Content Creation</strong>: Producing YouTube tutorials
                and feature showcases for Genshin Optimizer, scripting, voicing,
                and editing videos to guide users and highlight new
                functionalities.
              </li>
              <li>
                <strong>🎙️Podcast Hosting</strong>: Running a Twitch podcast
                with other community developers to promote collaboration and
                inspire others to start coding.
              </li>
            </Box>
          </Typography>
          <Typography>
            Genshin Optimizer has truly become a cornerstone of the Genshin
            Impact community, and I am excited to see where we can take it next.
            Our journey is far from over, and with the continued support and
            creativity of our community, the possibilities are endless
          </Typography>
        </Stack>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="h5">
          🎥 TL;DR: The Story of Genshin Optimizer
        </Typography>

        <Typography>
          I made a video detailing the history and development of the project.
          Check it out below!
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
      <CardContent>
        <Typography variant="h5">🛠️ Features of Genshin Optimizer</Typography>
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

      <Divider />
    </Card>
  )
}
