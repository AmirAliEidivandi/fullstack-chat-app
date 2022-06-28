import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer, ChannelListContainer } from "./components";

const apiKey = "tx2u45cfq5eu";
const client = StreamChat.getInstance(apiKey);

function App() {
    return (
        <div className="app_wrappere">
            <Chat client={client} theme="team light">
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    );
}

export default App;
