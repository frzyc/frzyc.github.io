import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography,
} from '@mui/material'
import solink from './solink.png'

export default function SolinkSection() {
  return (
    <Card elevation={6}>
      <CardHeader
        avatar={<img src={solink} alt="Solink" width={24} height={24} />}
        title="Solnk - Hybrid"
        subheader="Senior Full-stack engineer"
        action={<Chip label="2025 Apr - 2026 May" />}
      />
      <Divider />
      <CardContent>
        During my time at Solink, I contributed significantly to the development
        of the flagship React Native application, driving architecture,
        performance, and code quality.
      </CardContent>
      <Typography sx={{ mr: 2, mt: -2 }}>
        <Box
          component="ul"
          sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
        >
          <li>
            <strong>👨‍💻 Tech lead and driving architecture</strong>: Tech Lead
            for flagship React Native application (iOS, Android), driving
            architecture, performance, and code quality.
          </li>
          <li>
            <strong>🎥 CCTV Video streaming</strong>: Built and optimized video
            streaming systems using HLS and WebRTC, improving playback
            reliability and latency.
          </li>
          <li>
            <strong>📚 Full-stack development</strong>: Developed full-stack
            features with React, TypeScript, and backend services for real-time
            video workflows.
          </li>
          <li>
            <strong>🗣️ Sprint master</strong>: Led sprint execution for the
            primary web platform, coordinating cross-team delivery and
            priorities..
          </li>
          <li>
            <strong>🔍 Issue triaging</strong>: Triaged issues across the
            end-to-end video pipeline, identifying systemic failure points and
            driving architectural improvements to increase reliability.
          </li>
          <li>
            <strong>🤖 AI-assisted development</strong>: Introduced AI-assisted
            development workflows (structured context, reusable triage “skills”,
            collaboration and review processes) to improve development velocity
            while maintaining strict code quality and review standards.
          </li>
        </Box>
      </Typography>
      <Divider />
      <CardActions>
        <Chip label="React Native" />
        <Chip label="React" />
        <Chip label="CCTV" />
        <Chip label="HLS" />
        <Chip label="WebRTC" />
        <Chip label="Full-stack Development" />
      </CardActions>
    </Card>
  )
}
