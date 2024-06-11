import * as S from './styles'

import logo from '../../assets/images/icons8-twitter-48.svg'

import { useState } from 'react'

import { useCreatePostMutation, useLogoutMutation } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'

type Props = {
  profile: Data[]
}

const MenuBar = ({ profile }: Props) => {
  const [modalOn, setModalOn] = useState(false)
  const navigate = useNavigate()
  const [mensagem, setMensagem] = useState('')
  const [imagem, setImagem] = useState<File | null>(null)
  const [createPost, { isSuccess }] = useCreatePostMutation()
  const [logout] = useLogoutMutation()

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('mensagem', mensagem)
    if (imagem) {
      formData.append('imagem', imagem)
    }

    // Exibir os dados do FormData no console
    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    try {
      console.log('Enviando dados:', formData) // Adiciona esta linha para verificar os dados do FormData
      await createPost(formData).unwrap()
      if (isSuccess) {
        setMensagem('')
        setImagem(null)
        console.log('Post criado com sucesso')
      }
    } catch (error) {
      console.error('Erro ao criar post:', error) // Adiciona esta linha para imprimir a mensagem de erro
    }
  }

  const handleLogout = async () => {
    try {
      await logout().unwrap()
      navigate('/')
    } catch (error) {
      // Lidar com erros (opcional)
      console.error('Erro ao fazer logout:', error)
    }
  }
  return (
    <>
      <S.Container>
        <S.Topside>
          <S.Logo>
            <img src={logo} alt="" />
          </S.Logo>
          <S.MenuButtom className="active">
            <S.HomeIcon className="active" />
            <span>Página Inicial</span>
          </S.MenuButtom>
          <S.MenuButtom>
            <S.NotificationIcon />
            <span>Notificações</span>
          </S.MenuButtom>
          <S.MenuButtom>
            <S.MessageIcon />
            <span>Mensagens</span>
          </S.MenuButtom>
          <S.MenuButtom>
            <S.FavoriteIcon />
            <span>Favoritados</span>
          </S.MenuButtom>
          <S.MenuButtom>
            <S.UserIcon />
            <span>Perfil</span>
          </S.MenuButtom>
          <S.TweetarButton
            title="Tweetar"
            type="button"
            onClick={() => setModalOn(true)}
          >
            Postar
          </S.TweetarButton>
          {createPortal(
            <S.TweetarButton2
              title="Tweetar"
              type="button"
              onClick={() => setModalOn(true)}
            >
              +
            </S.TweetarButton2>,
            document.body // Renderiza o botão no body (nível mais alto)
          )}
        </S.Topside>
        <S.Bottomside>
          <S.Avatar>
            {profile.map((img, index) => (
              <div key={index}>
                <img
                  src={
                    'https://rssantos07.pythonanywhere.com/' +
                    img.token_data.image
                  }
                />
              </div>
            ))}
          </S.Avatar>
          <S.Profile>
            {profile.map((item, index) => (
              <div key={index}>
                <h2>{item.token_data.full_name}</h2>
                <h2>{item.users.email}</h2>
              </div>
            ))}
          </S.Profile>
          <S.ExitIcon onClick={handleLogout}></S.ExitIcon>
        </S.Bottomside>
      </S.Container>
      <S.Modal className={modalOn ? 'is-visible' : ''}>
        <S.ModalContent>
          <S.Icon>
            <S.IconClose onClick={() => setModalOn(false)} />
          </S.Icon>
          <S.Form as="form" onSubmit={handleSubmit}>
            <S.Content>
              <S.AvatarPost>
                {profile.map((img, index) => (
                  <div key={index}>
                    <img
                      src={
                        'https://rssantos07.pythonanywhere.com/' +
                        img.token_data.image
                      }
                    />
                  </div>
                ))}
              </S.AvatarPost>
              <S.InputGroup>
                <textarea
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Digite sua mensagem..."
                />
              </S.InputGroup>
            </S.Content>
            <S.ImagePost>
              <S.Choose>
                <label>
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => setImagem(e.target.files?.[0] || null)}
                  />
                </label>
              </S.Choose>

              <S.ButtonPost
                type="submit"
                title="postar"
                onClick={() => setModalOn(false)}
              >
                Postar
              </S.ButtonPost>
            </S.ImagePost>
          </S.Form>
        </S.ModalContent>

        <div className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default MenuBar
