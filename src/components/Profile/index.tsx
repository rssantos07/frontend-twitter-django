import ProfilePage from '../../components/ProfilePage'

type Props = {
  profile: Data[]
}

const Profile = ({ profile }: Props) => {
  return (
    <>
      {profile.map((p, id) => (
        <ProfilePage
          key={id}
          bio={p.token_data.bio}
          id={p.users.id}
          username={p.users.username}
          email={p.users.email}
          full_name={p.token_data.full_name}
          image={p.token_data.image}
          verified={p.token_data.verified}
        />
      ))}
    </>
  )
}

export default Profile
