class Tweet {
  avatar: string
  name: string
  user: string
  mensagem: string
  imagem: string
  date: string
  id: number

  constructor(
    avatar: string,
    name: string,
    user: string,
    mensagem: string,
    imagem: string,
    date: string,
    id: number
  ) {
    this.avatar = avatar
    this.name = name
    this.user = user
    this.mensagem = mensagem
    this.date = date
    this.imagem = imagem
    this.id = id
  }
}

export default Tweet
