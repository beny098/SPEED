import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="body">
        <body>
          <header className="App-header">
            <p>SPEED Database</p>
          </header>
          <div class="submit">
            <header className="submitTitle">
              <p>Add Publication</p>
            </header>

            <form>
              <label class="textBox">
                Title:
                <div></div>
                <input type="text" class="textField" name="title" />
              </label>
              <p></p>
              <label>
                Author(s):
                <div></div>
                <input type="text" class="textField" name="title" />
              </label>
              <p></p>
              <label>
                Journal Name:
                <div></div>
                <input type="text" class="textField" name="title" />
              </label>
              <p></p>
              <label>
                Publication Year:
                <div></div>
                <input type="text" class="textField" name="title" />
              </label>
              <p></p>
              <label>
                Volume:
                <div></div>
                <input type="text" class="textField" name="title" />
              </label>
              <p></p>
              <label>
                Number:
                <div></div>
                <input type="text" class="textField" name="title" />
              </label>
              <p></p>
              <label>
                Pages:
                <div></div>
                <input type="text" class="textField" name="title" />
              </label>
              <p></p>
              <label>
                DOI:
                <div></div>
                <input type="text" class="textField" name="title" />
              </label>
              <p></p>
              <input type="submit" />
            </form>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;
