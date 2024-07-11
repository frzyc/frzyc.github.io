import {
  Card,
  CardActions,
  CardHeader,
  Chip,
  Divider,
  SvgIcon,
  Typography,
} from '@mui/material'

export default function BBSection() {
  return (
    <Card elevation={6}>
      <CardHeader
        avatar={
          <SvgIcon>
            <path
              color="#FFFFFF"
              d="M 8.4375 16.03125 L 7.613281 19.929688 L 10.6875 19.929688 C 13.039062 19.929688 13.753906 18.777344 13.753906 17.734375 C 13.753906 16.96875 13.320312 16.03125 11.398438 16.03125 Z M 16.769531 13.621094 L 15.957031 17.511719 L 19.03125 17.511719 C 21.371094 17.511719 22.09375 16.414062 22.09375 15.316406 C 22.09375 14.550781 21.652344 13.621094 19.742188 13.621094 Z M 9.589844 9.9375 L 8.71875 13.835938 L 11.785156 13.835938 C 14.191406 13.835938 14.914062 12.683594 14.914062 11.644531 C 14.914062 10.875 14.472656 9.9375 12.554688 9.9375 L 9.582031 9.9375 Z M 1.578125 9.9375 L 0.753906 13.835938 L 3.828125 13.835938 C 6.234375 13.835938 6.902344 12.683594 6.902344 11.644531 C 6.902344 10.875 6.460938 9.9375 4.539062 9.9375 Z M 17.921875 7.527344 L 17.050781 11.429688 L 20.125 11.429688 C 22.535156 11.429688 23.246094 10.332031 23.246094 9.234375 C 23.246094 8.464844 22.808594 7.527344 20.902344 7.527344 Z M 10.632812 4.070312 L 9.808594 7.96875 L 12.882812 7.96875 C 15.28125 7.96875 15.957031 6.816406 15.957031 5.777344 C 15.957031 5.007812 15.515625 4.070312 13.59375 4.070312 Z M 2.675781 4.070312 L 1.847656 7.96875 L 4.921875 7.96875 C 7.285156 7.96875 7.996094 6.816406 7.996094 5.777344 C 7.996094 5.007812 7.558594 4.070312 5.636719 4.070312 Z M 2.675781 4.070312 "
            />
          </SvgIcon>
        }
        title="Blackberry(RIM) - Ottawa"
        subheader="Software Developer"
        action={<Chip label="2017 May - 2022 Dec" />}
      />
      <Divider />
      <Typography sx={{ mr: 2 }}>
        <ul>
          <li>
            Contributed to the design and implementation process of the IVY
            vehicle software platform (C++, QNX)
          </li>
          <li>
            Designed the test suite for end-to-end automated testing of the IVY
            software. (Python, Pytest)
          </li>
          <li>
            Designed & implemented tech stack solution for a cloud-based vehicle
            fleet management console. (React, elasticSearch, express, docker)
          </li>
          <li>
            Wrote IPC benchmarks and analyzed results towards QNX performance
            testing. (C/C++)
          </li>
          <li>
            Instrumented AOSP platform for device diagnostics; maintained
            telemetry Android App. (Java, Kotlin, C++)
          </li>
        </ul>
      </Typography>
      <Divider />
      <CardActions>
        <Chip label="QNX" />
        <Chip label="C++" />
        <Chip label="Python" />
        <Chip label="Firmware" />
        <Chip label="AOSP" />
        <Chip label="Full-stack Development" />
      </CardActions>
    </Card>
  )
}
