import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Title(props) {
  return (
    <Box 
        // borderRadius={"0px 0px 10px 10px"}
        height="8vh"
        // maxH={""}
        m="auto"
        width={["90vw"]}
        background={"yellow"}
        
    >
        {props.title}
        
    </Box>
  )
}
