import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  });

const Rshow = ({rdata}) => {

    const classes = useStyles();


    return (
        <div>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={rdata.recipe.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {rdata.recipe.label}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {rdata.recipe.ingredientLines.map((item,idx)=>{return <p key={idx}>{item}</p>})}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            
        </div>
    )
}

export default Rshow
