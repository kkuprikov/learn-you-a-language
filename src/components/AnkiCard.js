import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const AnkiCard = ({cardname, visible, suggestedCards, setSuggestedCards}) => {
  if (visible) {
    return (
      <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardHeader
            action={
              <IconButton aria-label="settings" 
                onClick={() => {
                  setSuggestedCards({
                    ...suggestedCards,
                    [cardname]: !visible
                  })
                }}>
                <CloseOutlinedIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {cardname}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
          
        </Card>
      </Box>
      </>
    )
  }
}

export default AnkiCard;