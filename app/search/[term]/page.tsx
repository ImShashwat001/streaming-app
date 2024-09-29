import { notFound } from 'next/navigation';

type Props = {
  params: {
    term: string;
  };
};


function SearchPage({ params: { term }} :Props) {
  if (!term) notFound();

  //API call to get the searched movies

  // API call to get the popular movies

  const termToUse = decodeURI(term);
  return (
    <div>
      <h2>{termToUse}</h2>
    </div>
  )
}

export default SearchPage;
