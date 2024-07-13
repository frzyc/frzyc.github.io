import { Box, Collapse } from '@mui/material'
import { ReactNode, useContext, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
export function TextSectionDisplayCollapse({
  children,
  disableCollapse = false,
}: {
  children: ReactNode
  disableCollapse?: boolean
}) {
  const [expanded, setExpanded] = useState(false)
  const [hover, setHover] = useState(false)
  return (
    <Box sx={{ position: 'relative' }}>
      {!expanded && (
        <Box
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            mx: 'auto',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            alignItems: 'flex-end',
            zIndex: '10',
            transition: 'transform 0.3s ease',
            transform: hover ? 'translate(0,-5px)' : undefined,
          }}
        >
          <KeyboardArrowDownIcon />
        </Box>
      )}
      <Collapse
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        collapsedSize={300}
        onClick={() => setExpanded((e) => (disableCollapse ? true : !e))}
        in={expanded}
        sx={{
          cursor: disableCollapse && expanded ? undefined : 'pointer',
          position: 'relative',
          maskImage: expanded
            ? undefined
            : 'linear-gradient(to bottom, black 0%, transparent 100%)',
          '&:hover': {
            maskImage: expanded
              ? undefined
              : 'linear-gradient(to bottom, black 50%, transparent 100%)',
          },
        }}
      >
        <div>{children}</div>
      </Collapse>
    </Box>
  )
}
