import React, { Component } from 'react';
import 'normalize.css';
import './houseitem.scss';
import * as uuid from 'uuid/v4'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 310,
    margin: 4,
    height: 380,
    padding: 0,
    display: 'flex',
    overflowY: 'auto',

  },
  media: {
    height: 100,
    width: 150,
    margin: 2
  },
  action: {
     paddingTop: 15,
   	 height: '100%',
     display: 'flex',
     flexDirection: 'column',
     overflowY: 'auto',
     justifyContent: 'flex-start'
  },
  imgwrap: {
  	display: 'flex',
  	justifyContent: 'center',
  	flexWrap: 'wrap',
  	margin: 0,
  	padding: 0,
  }, 
  house_p_m:{
  	marginTop: 5,
  },
  house_p_m_image:{
  	marginTop: 5,
  	color: "red",
  	fontWeight: 700,
  	fontSize: 20,
  	textAlign: 'center',
  },
  charter: {
  	fontWeight: 700,
  }
};


class HouseItem extends Component {

  render() {

    const {
            area,
            adress, 
            price, 
            images, 
            priceImage
          } = this.props;
          
    const { classes } = this.props;


    return (
      <Card className={classes.card}>
		    <CardActionArea className={classes.action}>
          <CardContent className={classes.imgwrap}>
						{images.length > 0 
							? images.map((imgitem) =>{
								if(images[0] == imgitem && priceImage){
										return (<CardMedia key={uuid()} className={classes.media} image={imgitem} title="house_photo"><Typography component="p" className={classes.house_p_m_image}>
	              	Price: $ {price}</Typography></CardMedia>);
								}
								return (<CardMedia key={uuid()} className={classes.media} image={imgitem} title="house_photo"/>);})
								 : null}
					< /CardContent>
          <CardContent>
          	{priceImage 
          		? null 
							: (<Typography gutterBottom variant="h5" component="h2">
	              	Price: $ {price}
	            	</Typography>)
          	}    
            <Typography component="p" className={classes.house_p_m}>
              <span className={classes.charter}>Address:</span> {adress}
            </Typography>
            {!area
            	?	null
								: (<Typography component="p" className={classes.house_p_m}>
								  <span className={classes.charter}>Square:</span> {area} sq.mt
								</Typography>) }            
          </CardContent>
        </CardActionArea>
      </Card>


    );
  }
}

HouseItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HouseItem);