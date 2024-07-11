import { School } from '@mui/icons-material'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  SvgIcon,
  Typography,
} from '@mui/material'

export default function UoTSection() {
  return (
    <Card elevation={6}>
      <CardHeader
        avatar={<School />}
        title="University of Toronto"
        subheader=""
        action={<Chip label="2012 Sept - 2017 Apr" />}
      />
      <Divider />
      <CardContent>
        <Typography>Bachelor of Applied Science</Typography>
        <Typography>Minor in Engineering Business</Typography>
      </CardContent>
    </Card>
  )
}
