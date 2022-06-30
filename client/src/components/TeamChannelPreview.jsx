import React from "react";
import { useChatContext, Avatar } from "stream-chat-react";

const TeamChannelPreview = ({ channel, type }) => {
    const { channel: activeChannel, client } = useChatContext();

    const ChannelPreview = () => <p className="channel-preview__item"># {channel?.data?.name || channel?.data?.id}</p>;

    const DirectPreview = () => (
        const members = Object.values(channel.state.members).filter(({user}) => user.id !== client.userID)
    )

    return <div>TeamChannelPreview</div>;
};

export default TeamChannelPreview;
