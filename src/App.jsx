import { useEffect, useRef, useState } from 'react';
import { fetchImageUrls, fetchBreeds } from './api';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute Dog Images</h1>
        </div>
      </div>
    </header>
  );
}

function Main() {
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    fetchImageUrls('shiba').then(urls => {
      setUrls(urls)
    });
  }, []);

  function reloadImages(breed) {
    fetchImageUrls(breed).then((urls) => {
      setUrls(urls);
    });
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { breed } = event.target.elements;
    props.onFormSubmit(breed.value);
  }

  const selected = useRef(null);

  function handleChange() {
    props.onFormSubmit(selected.current.value);
  }

  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchBreeds().then(breeds => {
      setOptions(breeds);
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="breed" defaultValue="shiba" onChange={handleChange} ref={selected}>
                <option hidden>shiba</option>
                {options.map(breed => {
                  return (
                    <option key={breed} value={breed}>{breed}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-dark">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Gallery(props) {
  const { urls } = props;

  if (urls == null) {
    return <Loading />;
  }

  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map(url => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="cute dog!" />
        </figure>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Dog images are retrieved from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
      </div>
    </footer>
  );
}

export default App;
