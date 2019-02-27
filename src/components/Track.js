import React from 'react';


const Track = ({source, target, getTrackProps}) => {
  return (
    <div className="trackStyle" style={{left: `${source.percent}%`, width: `${target.percent - source.percent}%`}} {...getTrackProps()}/>
  );
}

export default Track;
