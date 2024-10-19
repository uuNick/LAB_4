import React from 'react';
import Header from './components/Header/Header';
import Main_section from './components/Main_section/Main_section';

function App() {
  const links = [
    { href: '/home', text: 'Каталог' },
    { href: '/about', text: 'Скидки' },
  ];

  return (
    <div>
      <Header links={links} />
      <main>
        <Main_section />
      </main>
    </div>
  );
}

export default App;
