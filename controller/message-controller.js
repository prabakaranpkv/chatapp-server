import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

//new message
export const newMessage = async (request, response) => {
  const newMessages = new Message(request.body);
  try {
    await newMessages.save();
    await Conversation.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });
    console.log(request.body.conversationId);
    response.status(200).json("Message sent successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

//get message

export const getMessage = async (request, response) => {
  try {
    const messages = await Message.find({ conversationId: request.params.id });

    response.status(200).json(messages);
  } catch (error) {
    response.status(500).json(error);
  }
};
