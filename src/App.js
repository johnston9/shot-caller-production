import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ChatCreateForm from "./pages/chat/ChatCreateForm";
import ChatPage from "./pages/chat/ChatPage";
import ChatsPage from "./pages/chat/ChatsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ChatEditForm from "./pages/chat/ChatEditForm";

function App() {
  const currentUser = useCurrentUser()
  const profile_id = currentUser?.profile_id || '';

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Landing Page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm/> } />
          <Route exact path="/chat/create" render={() => <ChatCreateForm />} />
          <Route exact path="/chat/edit/:id" render={() => <ChatEditForm />} />
          <Route 
            exact 
            path="/chat" 
            render={() => (
              <ChatsPage
              message="No results found."
              />
            ) } />
          {/* Feed chat*/}
          <Route 
            exact 
            path="/feed" 
            render={() => (
              <ChatsPage
              filter={`owner__followed__owner__profile=${profile_id}&`}
              message="No results found. Adjust the search keyword or follow a user."
              />
            ) } />
          {/* Liked chat*/}
          <Route 
            exact 
            path="/liked" 
            render={() => (
              <ChatsPage
              filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              message="No results found. Adjust the search keyword or like a chat."
              />
            ) } />
          <Route exact path="/chat/:id" render={() => <ChatPage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;