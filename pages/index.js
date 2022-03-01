import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbHackthebox from '../public/images/account-hackthebox.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hai, Semuanya!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ibnu Ubaeydillah
          </Heading>
          <p>Pentester | Hackthebox Player</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/avatar.jpeg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
           Hai Saya Ibnu Ubaeydillah saya seorang Pentester sekaligus sebagai Hakcthebox Player. Situs ini berisi tulisan dan juga merupakan dokumentasi untuk saya pribadi ketika sedang 
           belajar atau membagikan sesuatu. Jika ingin menghubungi saya, silakan bisa hubungi kontak ini.
          
       <Link href="https://web.facebook.com/ibnu.ubaeydillah/" target="_blank">
                 &nbsp;@ibnuubaeydillah
            </Link>
          
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
         <BioSection>
          <BioYear>2022</BioYear>
          Freelance sebagai Bug Hunter
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Selesai program studi jurusan sistem informasi di Universitas Satya Negara Indonesia
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Selesai program studi jurusan Desain Komunikasi Visual di SMK Ponpes Manba'ul Ulum 
        </BioSection> 
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="#" target="_blank">
            Photography
          </Link>
          , Reading
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ibnuuby" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ibnuuby
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/ibnuuby_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @ibnuuby
              </Button>
            </Link>
          </ListItem>
         <ListItem>
            <Link href="https://facebook.com/ibnuubaeydillah" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @ibnuubaeydillah
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/ibnuubaeydillah/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @ibnuubaeydillah
              </Button>
            </Link>
          </ListItem>

        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/xcore13x"
            title="Xcore13X"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://app.hackthebox.com/profile/751734?fbclid=IwAR1SDOZS1H_MsksDRwggusnG-gMP-MhBFvEvoqEgjGgoR3r9TyQ4dty0KO8"
            title="Hakcthebox"
            thumbnail={thumbHackthebox}
          >
            Account Hackthebox
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
