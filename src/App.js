import React from 'react';
import List from './List';
import store from './store';
import './app.css'

class App extends React.Component {

 state = {
   'store':store
 }

  render() {
    const { store } = this.state
  return (
    <main className="App">
      <header className='App-Header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {store.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
            />
        ))}
        </div>
    </main>
  );
  }
}

export default App;
