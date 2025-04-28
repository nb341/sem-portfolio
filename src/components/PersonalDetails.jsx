import React from "react";
import { Box, Image, Link, Text, VStack, Flex } from "@chakra-ui/react";
import {MdEmail} from "react-icons/md";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import profile from '../assets/turing_profile.jpg';
import Card from "./Card";
// The default icon size is 1em (16px)

// const iconSize = {
//     fontSize: "18px"
// }

export default function PersonalDetails(){
    return(
        <Card padding={'23px'}>
            <VStack>
                    <Image
                        width={'367px'}
                        height={'359px'}
                        objectFit='cover'
                        src={profile}
                        alt='Meeeeeeeeeeeeeeeeee'
                        borderRadius={'lg'}
                    />
                    <Box alignSelf={'start'}>
                        <Text align={'left'} fontWeight={600} fontSize={'24px'} color={'pink.600'}>Narindra Balkissoon</Text>
                        <Text fontSize={'18px'} color={'pink.400'}>Software Developer</Text>
                    </Box>
                    <VStack width={'100%'} paddingTop={3} spacing={0} color={'yellow.200'}>
                        <Text fontSize={'18px'} alignSelf={'start'} padding={0} >  <Flex><Box color={'pink.600'} as={'span'}><MdEmail style={{paddingRight: "2px", fontSize: "28px"}} /></Box>narindra_balkissoon@outlook.com</Flex></Text>
                        <Link alignSelf={'start'} fontSize={'18px'} padding={0} href='https://www.linkedin.com/in/narindra-balkissoon/'>
                            <Flex> <Text as={'span'} color={'pink.600'}><AiFillLinkedin style={{paddingRight: "2px", fontSize: "28px"}} /></Text> LinkedIn</Flex>
                        </Link>
                        <Link alignSelf={'start'} fontSize={'18px' } padding={0} href='https://github.com/nb341' isExternal>
                            <Flex><Text as={'span'} color={'pink.600'}><AiFillGithub style={{paddingRight: "2px", fontSize: "28px"}} /></Text> GitHub</Flex>
                        </Link>
                    </VStack>
                    <Text alignSelf={'start'} paddingTop={3} color={'yellow.200'}> 
                        I am a high analytical and driven software developer, who currently specializes in web technologies with a focus on frontend development.
                        My current development stack includes Django, React.js, Chakra-UI, Redux, PostgreSQL and Docker. 
                    </Text>
                </VStack>
        </Card>
    )
}
