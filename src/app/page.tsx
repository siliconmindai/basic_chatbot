"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="bg-[#D9D9D9] mx-auto h-2/4 w-full text-base/4 max-w-[415px] p-8 flex flex-col gap-8 justify-center self-center rounded-[20px]">
      <div className="h-full w-full flex flex-col gap-4 overflow-auto">
        {messages.map((message) =>
          message.role === "user" ? (
            <div
              className="bg-user-msg w-msg text-white flex self-end p-4 rounded-[20px] rounded-br-[5px]"
              key={message.id}
            >
              {message.content}
            </div>
          ) : (
            <div
              className="bg-ai-msg w-msg flex p-4 rounded-[20px] rounded-bl-[5px]"
              key={message.id}
            >
              {message.content}
            </div>
          )
        )}
      </div>

      <form
        className="flex max-w-[415px] justify-self-end"
        onSubmit={handleSubmit}
      >
        <textarea
          className="w-full border-gray-300 rounded shadow-xl p-2"
          value={input}
          placeholder="Say something"
          onChange={handleInputChange}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}
