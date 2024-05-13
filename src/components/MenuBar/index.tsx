import {
  Container,
  HomeIcon,
  Logo,
  Topside,
  MenuButtom,
  NotificationIcon,
  MessageIcon,
  FavoriteIcon,
  UserIcon,
  TweetarButton,
  Bottomside,
  Avatar,
  ExitIcon,
  Profile,
  Modal,
  Icon,
  Form,
  Content,
  IconClose,
  InputGroup,
  Test,
  Choose,
  ButtonPost,
  AvatarPost,
  ModalContent
} from './styles'

import logo from '../../assets/images/icons8-twitter-48.svg'
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebase'
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/tweets'
import Imagem from '../../assets/images/image.svg'

const MenuBar = () => {
  const dispatch = useDispatch()
  const [mensagem, setMensagem] = useState('')
  const [avatar, setAvatar] = useState(
    'https://media.istockphoto.com/id/1018159014/pt/foto/smiling-workman-posing-with-crossed-arms-in-auto-mechanic-shop.jpg?s=2048x2048&w=is&k=20&c=88Ht0fGgwlRG1HQqAa3siZE2kaPJTGGbzy9omZJOHew='
  )
  const [name, setName] = useState('Rodrigo')
  const [user, setUser] = useState('rssantos')
  const [imagem, setImagem] = useState(
    'https://cdn.pixabay.com/photo/2023/10/26/08/24/autumn-8342089_1280.jpg'
  )
  const [date, setDate] = useState('')

  const navigate = useNavigate()

  const cadastrarTweet = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(cadastrar({ avatar, name, user, mensagem, imagem, date }))
    navigate('/layout')
    setMensagem('')
    setImagem('')
  }

  const [signOut] = useSignOut(auth)

  const [modalOn, setModalOn] = useState(false)

  return (
    <>
      <Container>
        <Topside>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <MenuButtom className="active">
            <HomeIcon className="active" />
            <span>Página Inicial</span>
          </MenuButtom>
          <MenuButtom>
            <NotificationIcon />
            <span>Notificações</span>
          </MenuButtom>
          <MenuButtom>
            <MessageIcon />
            <span>Mensagens</span>
          </MenuButtom>
          <MenuButtom>
            <FavoriteIcon />
            <span>Favoritados</span>
          </MenuButtom>
          <MenuButtom>
            <UserIcon />
            <span>Perfil</span>
          </MenuButtom>
          <TweetarButton
            title="Tweetar"
            type="button"
            onClick={() => setModalOn(true)}
          >
            Postar
          </TweetarButton>
        </Topside>
        <Bottomside>
          <Avatar />
          <Profile>
            <h2>Rodrigo Santos</h2>
            <h2>@rodrigosantoss</h2>
          </Profile>
          <ExitIcon
            onClick={async () => {
              const success = await signOut()
              if (success) {
                ;[signOut(), navigate('/')]
              }
            }}
          />
        </Bottomside>
      </Container>
      <Modal className={modalOn ? 'is-visible' : ''}>
        <ModalContent>
          <Icon>
            <IconClose onClick={() => setModalOn(false)} />
          </Icon>
          <Form as="form" onSubmit={cadastrarTweet}>
            <Content>
              <AvatarPost />
              <InputGroup>
                <textarea
                  rows={8}
                  cols={80}
                  placeholder="O que está acontecendo?"
                  value={mensagem}
                  onChange={(evento) => setMensagem(evento.target.value)}
                />
              </InputGroup>
            </Content>
            <Test>
              <Choose>
                <label>
                  <input type="file" name="image" />
                  <img src={Imagem} alt="imagm" />
                </label>
              </Choose>

              <ButtonPost
                type="submit"
                title="postar"
                onClick={() => setModalOn(false)}
              >
                Postar
              </ButtonPost>
            </Test>
          </Form>
        </ModalContent>

        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default MenuBar
