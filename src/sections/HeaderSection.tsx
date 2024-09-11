import { GitHub, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import {
  Button,
  keyframes,
  Link,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useRef, useState } from 'react'

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
        <Typography variant="h1" sx={{ my: 2 }}>
          Hi, I'm <Name />
        </Typography>
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

const backspaceSpeed = 200
const typingSpeed = 300
const initialText = 'frzyc'
const newText = 'Fred'
function Name() {
  const [displayText, setDisplayText] = useState(initialText)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    let timer = 0

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1))
        }, backspaceSpeed)
      } else {
        setIsDeleting(false)
      }
    } else {
      if (displayText.length < newText.length) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev + newText[displayText.length])
        }, typingSpeed)
      } else {
        timer = setTimeout(() => {
          setShowCursor(false)
        }, 1500)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, newText, typingSpeed, backspaceSpeed])

  useEffect(() => {
    const cursorTimer = setTimeout(() => {
      setShowCursor(true)
    }, 1500)
    const timer = setTimeout(() => {
      setIsDeleting(true)
    }, 3000)
    return () => {
      clearTimeout(timer)
      clearTimeout(cursorTimer)
    }
  }, [initialText])

  return (
    <>
      <strong>{displayText}</strong>
      {showCursor && <TextCursor />}
    </>
  )
}

function TextCursor() {
  return (
    <Box
      component="span"
      sx={{
        ml: 1,
        borderRight: '2px solid white',
        animation: 'blinking 1s steps(1, end) infinite',
        '@keyframes blinking': {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
          '100%': { borderColor: 'transparent' },
        },
      }}
    />
  )
}
