import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {

  if(!exerciseVideos.length) return "Loading..."
  return (
    <Box sx={{ marginTop: {lg:"200px", xs:"20px"}}} p="20px">
      <Typography textAlign="center" variant='h4' fontWeight="bold" mb="33px">
        Watch <span style={{color:"#ff2625", textTransform:"capitalize"}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="center" flexWrap="wrap" alignItems="center"
        sx={{ 
          flexDirection: { lg: "row"},
          gap: {lg:"40px", xs:"0"}
        }}
      >
        {exerciseVideos?.slice(0, 6 ).map((item, index)=>(
          <a 
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="exercise-video"
            target="_blank"
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h6' color="#000" width="auto" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
                {item.video.title}
              </Typography>
              <Typography  variant='p' bgcolor="#03030313" p="4px" px="8px" borderRadius="10px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos