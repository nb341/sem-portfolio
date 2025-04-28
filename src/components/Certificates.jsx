import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import Card from "./Card";

const Item = ({title, name, link})=>(
    <Box marginY={'32px'}>
            <Text fontSize={'18px'} fontWeight={'600'} color={'yellow.200'}>
                {title}
            </Text>
            <Text fontSize={'16px'} fontWeight={'500'} color={'pink.400'}>
                <Link href={link} isExternal>{name}</Link>
            </Text>

    </Box>
    )

export default function Certificates(){
    return(
            <Card padding={'32px'}>
                <Text fontSize={'24px'} fontWeight={'500'} color={'pink.400'}>Certificates</Text>
                <Item title={'HackerRank'} name={'Problem Solving'} link={'https://www.hackerrank.com/certificates/1b4ebe603655'}/>
                <Item title={'HackerRank'} name={'C++'} link={'https://www.hackerrank.com/certificates/5d98e12759a2'}/>
            </Card>
    )
}
