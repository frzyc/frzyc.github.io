import {
  Card,
  CardActions,
  CardHeader,
  Chip,
  Divider,
  SvgIcon,
  Typography,
} from '@mui/material'

export default function YelpSection() {
  return (
    <Card elevation={6}>
      <CardHeader
        avatar={
          <SvgIcon>
            <path
              color="#FF1A1A"
              d="M 3.457031 11.554688 C 3.074219 12.179688 2.914062 14.144531 3.046875 15.453125 C 3.09375 15.882812 3.167969 16.242188 3.28125 16.457031 C 3.433594 16.753906 3.691406 16.929688 3.984375 16.941406 C 4.175781 16.949219 4.292969 16.917969 7.839844 15.757812 C 7.839844 15.757812 9.414062 15.25 9.421875 15.246094 C 9.8125 15.144531 10.078125 14.777344 10.105469 14.308594 C 10.128906 13.828125 9.882812 13.402344 9.480469 13.25 C 9.480469 13.25 8.371094 12.789062 8.367188 12.789062 C 4.558594 11.191406 4.386719 11.128906 4.195312 11.125 C 3.902344 11.117188 3.640625 11.265625 3.457031 11.554688 Z M 11.984375 23.453125 C 12.042969 23.269531 12.050781 23.144531 12.0625 19.359375 C 12.0625 19.359375 12.070312 17.6875 12.070312 17.671875 C 12.097656 17.261719 11.835938 16.890625 11.40625 16.722656 C 10.96875 16.550781 10.496094 16.65625 10.230469 16.992188 C 10.230469 16.992188 9.453125 17.929688 9.449219 17.929688 C 6.777344 21.117188 6.667969 21.261719 6.601562 21.453125 C 6.5625 21.5625 6.546875 21.679688 6.5625 21.800781 C 6.578125 21.96875 6.652344 22.136719 6.777344 22.289062 C 7.394531 23.039062 10.363281 24.148438 11.3125 23.984375 C 11.640625 23.921875 11.878906 23.734375 11.984375 23.453125 Z M 18.003906 22.136719 C 18.898438 21.773438 20.851562 19.25 20.988281 18.277344 C 21.035156 17.941406 20.933594 17.648438 20.703125 17.464844 C 20.554688 17.347656 20.4375 17.304688 16.894531 16.121094 C 16.894531 16.121094 15.339844 15.601562 15.320312 15.589844 C 14.945312 15.441406 14.515625 15.578125 14.226562 15.941406 C 13.925781 16.3125 13.878906 16.800781 14.117188 17.171875 L 14.746094 18.207031 C 16.847656 21.679688 17.007812 21.925781 17.160156 22.042969 C 17.394531 22.230469 17.691406 22.261719 18.003906 22.136719 Z M 16.171875 13.199219 C 20.199219 12.207031 20.355469 12.15625 20.515625 12.050781 C 20.757812 11.882812 20.882812 11.605469 20.859375 11.261719 C 20.859375 11.25 20.863281 11.242188 20.859375 11.230469 C 20.757812 10.226562 19.023438 7.609375 18.171875 7.1875 C 17.867188 7.039062 17.566406 7.050781 17.316406 7.21875 C 17.160156 7.324219 17.042969 7.480469 14.886719 10.472656 C 14.886719 10.472656 13.914062 11.824219 13.902344 11.835938 C 13.644531 12.152344 13.644531 12.609375 13.890625 13 C 14.152344 13.402344 14.589844 13.597656 14.996094 13.484375 C 14.996094 13.484375 14.976562 13.515625 14.972656 13.519531 C 15.171875 13.441406 15.527344 13.355469 16.171875 13.199219 Z M 12.128906 9.820312 C 12.0625 8.199219 11.582031 0.980469 11.523438 0.644531 C 11.441406 0.339844 11.210938 0.125 10.875 0.0390625 C 9.847656 -0.222656 5.917969 0.898438 5.1875 1.660156 C 4.957031 1.910156 4.867188 2.214844 4.9375 2.484375 C 5.050781 2.726562 9.921875 10.507812 9.921875 10.507812 C 10.640625 11.691406 11.230469 11.507812 11.421875 11.449219 C 11.613281 11.386719 12.195312 11.203125 12.128906 9.820312 Z M 12.128906 9.820312 "
            />
          </SvgIcon>
        }
        title="Yelp - Remote"
        subheader="Full-stack engineer"
        action={<Chip label="2023 Jan - 2024 Feb" />}
      />
      <Divider />
      {/* <CardContent> */}
      <Typography sx={{ mr: 2 }}>
        <ul>
          <li>
            Conducted SEO experiments and implemented metadata frameworks,
            resulting in measurable improvements in organic traffic and enhanced
            online visibility in search results.
          </li>
          <li>
            Developed and maintained backend microservices and frontend monorepo
            using React, TypeScript, and Python, and implemented data pipelines
            with GraphQL.
          </li>
          <li>
            Engineered solutions to optimize structured data and internal links,
            leading to verified enhancements in site traffic.
          </li>
          <li>
            Utilized experimentation logging pipeline to dark launch complex
            code refactors of SEO systems, ensuring logic parity and verifying
            performance improvements.
          </li>
          <li>
            Led the design of a logging system to gather data from search-engine
            crawled pages, aiding in the optimization of the SEO graph for
            internal links.
          </li>
        </ul>
      </Typography>
      {/* </CardContent> */}
      <Divider />
      <CardActions>
        <Chip label="Search Engine optimization (SEO)" />
        <Chip label="Typescript" />
        <Chip label="Python" />
        <Chip label="React" />
        <Chip label="Sever-side-rendering" />
        <Chip label="GraphQL" />
      </CardActions>
    </Card>
  )
}
