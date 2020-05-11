import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from '../songsBank.scss';
import SongsBankItemDetails from './SongsBankItemDetails';
import OpenedItemDetailsContext from '../OpenedItemDetailsContext';

const SongsBankItem = ({ song }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [openedExists, setOpenedExists] = useContext(OpenedItemDetailsContext);

  const imgSrc = song?.servicesData?.lastfm?.responseData.track.album.image[1]['#text'];

  const handleOpenDetails = () => {
    if (openedExists) return;

    setIsDetailsOpen(true);
    setOpenedExists(true);
  };

  const handleCloseDetails = (e) => {
    e.stopPropagation();
    setIsDetailsOpen(false);
    setOpenedExists(false);
  };

  return (
    <div className={`box ${styles.item}`} onClick={handleOpenDetails}>
      {imgSrc && (
        <figure className="image is-64x64">
          <img src={imgSrc} alt="Album cover" />
        </figure>
      )}
      <div className={`${styles.item_inner}`}>
        <div className="has-text-weight-bold">{song.title}</div>
        <div>{song.author}</div>
      </div>
      {isDetailsOpen && <SongsBankItemDetails song={song} onClose={handleCloseDetails} />}
    </div>
  );
};

SongsBankItem.propTypes = {
  song: PropTypes.object,
};

export default SongsBankItem;