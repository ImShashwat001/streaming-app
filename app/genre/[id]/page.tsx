
type Props = {
  params: {
    id: string;
  }
  searchParams: {
    genre: string;
  }
}


function GenrePage({params: {id}, searchParams: {genre}}: Props) {

  return (
    <div>
      <h2>welcome to the genre with ID: {id} and name: {genre}</h2>
    </div>
  )
}

export default GenrePage
