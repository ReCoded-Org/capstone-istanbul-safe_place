import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import womanBot from "./images/woman.svg";
import womanSeeksHelp from "./images/womanSeeksHelp.svg";
import "./index.scss";

const ChatBotSettings = () => {
  const theme = {
    background: "#FFFEFC",
    fontFamily: "Roboto",
    headerBgColor: "#FFBFB5",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#C8D7C2",
    botFontColor: "#fff",
    userBubbleColor: "#FFBFB5",
    userFontColor: "#fff",
  };

  const GoToSearhHelpPage = () => {
    window.open("http://localhost:3001/seekhelp");
    return <p>Redirecting to Search Help page</p>;
  };

  const steps = [
    {
      id: "1",
      message: "Hello! How can we help you?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "Immidiate help", trigger: "3" },
        { value: 2, label: "Find specialists / shelter", trigger: "4" },
        // Two options below will be working after these pages are ready
        { value: 3, label: "Read our blog", trigger: "5" },
        { value: 4, label: "Check job / training opportunities", trigger: "6" },
      ],
    },
    {
      id: "3",
      component: (
        <div>
          <p>
            Please call <a href="tel:+1123-456-7890">123-456-7890</a> to get an
            immidiate help
          </p>
        </div>
      ),
      asMessage: true,
      trigger: 1,
    },
    {
      id: "4",
      component: <GoToSearhHelpPage />,
      asMessage: true,
      trigger: 1,
    },
    {
      id: "5",
      message: "Read our blog",
      trigger: 1,
    },
    {
      id: "6",
      message: "Check job / training opportunities ",
      trigger: 1,
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Find help"
          steps={steps}
          floating={true}
          botAvatar={womanBot}
          userAvatar={womanSeeksHelp}
        />
      </ThemeProvider>
    </>
  );
};

export default ChatBotSettings;
