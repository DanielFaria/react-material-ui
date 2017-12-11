import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
//import InfoIcon from 'material-ui-icons/Info';
import dataCoin from './DataCoin';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: 900,
    height: 900,
  },
});

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">Coins</Subheader>
        </GridListTile>
        {dataCoin.getCoins().map(coin => (
          <GridListTile key={coin.id}>

            <GridListTileBar
              title={coin.title}
              subtitle={<span> {coin.name}</span>}
              actionIcon={
                <IconButton>

                </IconButton>
              }
            />
            <div> Symbol: {coin.symbol}</div>
            <div> Rank: {coin.rank}</div>

          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
